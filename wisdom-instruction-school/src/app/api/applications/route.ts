import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function generateApplicationNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `WIS-${year}-${random}`;
}

async function uniqueApplicationNumber(): Promise<string> {
  for (let i = 0; i < 5; i++) {
    const candidate = generateApplicationNumber();
    const existing = await prisma.application.findUnique({
      where: { applicationNo: candidate },
    });
    if (!existing) return candidate;
  }
  const fallback = `WIS-${Date.now()}`;
  return fallback;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const required = [
      "childFirstName",
      "childLastName",
      "childGender",
      "childDob",
      "gradeLevel",
      "parentFirstName",
      "parentLastName",
      "parentRelation",
      "parentEmail",
      "parentPhone",
      "parentAddress",
    ];

    for (const field of required) {
      if (!body[field] || (typeof body[field] === "string" && body[field].trim() === "")) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const dob = new Date(body.childDob);
    if (Number.isNaN(dob.getTime())) {
      return NextResponse.json({ error: "Invalid date of birth" }, { status: 400 });
    }

    const appNumber = await uniqueApplicationNumber();

    const application = await prisma.application.create({
      data: {
        applicationNo: appNumber,
        gradeLevel: body.gradeLevel,
        childFirstName: body.childFirstName.trim(),
        childLastName: body.childLastName.trim(),
        childGender: body.childGender,
        childDob: dob,
        previousSchool: body.previousSchool?.trim() || null,
        medicalNotes: body.medicalNotes?.trim() || null,
        parentFirstName: body.parentFirstName.trim(),
        parentLastName: body.parentLastName.trim(),
        parentRelation: body.parentRelation,
        parentEmail: body.parentEmail.trim().toLowerCase(),
        parentPhone: body.parentPhone.trim(),
        parentAddress: body.parentAddress.trim(),
        occupation: body.occupation?.trim() || null,
      },
    });

    return NextResponse.json(
      { message: "Application submitted successfully", application },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again later." },
      { status: 500 }
    );
  }
}