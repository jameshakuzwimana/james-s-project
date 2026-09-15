import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const applicationNumber = decodeURIComponent(id).toUpperCase().trim();

    const application = await prisma.application.findUnique({
      where: { applicationNo: applicationNumber },
      select: {
        applicationNo: true,
        status: true,
        gradeLevel: true,
        childFirstName: true,
        childLastName: true,
        childGender: true,
        childDob: true,
        parentFirstName: true,
        parentLastName: true,
        parentEmail: true,
        parentPhone: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!application) {
      return NextResponse.json(
        { error: "Application not found. Please check your application number." },
        { status: 404 }
      );
    }

    return NextResponse.json({ application });
  } catch (error) {
    console.error("Error fetching application:", error);
    return NextResponse.json(
      { error: "Failed to retrieve application. Please try again later." },
      { status: 500 }
    );
  }
}