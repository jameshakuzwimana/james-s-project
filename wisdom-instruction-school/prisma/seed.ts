import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = (process.env.SEED_ADMIN_EMAIL ?? "admin@wisdominstruction.rw").toLowerCase();
  const password = process.env.SEED_ADMIN_PASSWORD ?? "Admin@12345";

  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    await prisma.user.update({
      where: { email },
      data: {
        name: "School Admin",
        password: await hash(password, 12),
        role: "ADMIN",
      },
    });
  } else {
    await prisma.user.create({
      data: {
        name: "School Admin",
        email,
        password: await hash(password, 12),
        role: "ADMIN",
      },
    });
  }

  console.log(`Seeded admin user: ${email}`);
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());