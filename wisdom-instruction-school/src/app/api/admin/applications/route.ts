import { NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const VALID_STATUSES = ["PENDING", "UNDER_REVIEW", "SHORTLISTED", "ACCEPTED", "REJECTED", "WAITLISTED"];
const VALID_GRADES = ["NURSERY_1", "NURSERY_2", "NURSERY_3", "P1", "P2", "P3", "P4", "P5", "P6"];

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const status = url.searchParams.get("status") ?? "";
  const grade = url.searchParams.get("grade") ?? "";
  const search = url.searchParams.get("search")?.trim() ?? "";
  const page = Math.max(1, Number(url.searchParams.get("page")) || 1);
  const pageSize = Math.min(50, Math.max(1, Number(url.searchParams.get("pageSize")) || 10));

  const where: Prisma.ApplicationWhereInput = {};
  if (VALID_STATUSES.includes(status)) {
    where.status = status as Prisma.ApplicationWhereInput["status"];
  }
  if (VALID_GRADES.includes(grade)) {
    where.gradeLevel = grade as Prisma.ApplicationWhereInput["gradeLevel"];
  }
  if (search) {
    where.OR = [
      { applicationNo: { contains: search, mode: "insensitive" } },
      { childFirstName: { contains: search, mode: "insensitive" } },
      { childLastName: { contains: search, mode: "insensitive" } },
      { parentFirstName: { contains: search, mode: "insensitive" } },
      { parentLastName: { contains: search, mode: "insensitive" } },
      { parentEmail: { contains: search, mode: "insensitive" } },
      { parentPhone: { contains: search, mode: "insensitive" } },
    ];
  }

  try {
    const [applications, total] = await Promise.all([
      prisma.application.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
        select: {
          id: true,
          applicationNo: true,
          status: true,
          gradeLevel: true,
          childFirstName: true,
          childLastName: true,
          parentFirstName: true,
          parentLastName: true,
          parentEmail: true,
          parentPhone: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.application.count({ where }),
    ]);

    return NextResponse.json({ applications, total, page, pageSize });
  } catch (error) {
    console.error("Error listing applications:", error);
    return NextResponse.json(
      { error: "Failed to load applications." },
      { status: 500 }
    );
  }
}