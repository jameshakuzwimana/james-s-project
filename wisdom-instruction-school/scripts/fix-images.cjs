const fs = require("fs");
const path = require("path");

const mappings = {
  "/images/school/hero.jpg": "/images/school/hero.svg",
  "/images/school/students.jpg": "/images/school/students.svg",
  "/images/school/classroom.jpg": "/images/school/classroom.svg",
  "/images/school/nursery.jpg": "/images/school/nursery.svg",
  "/images/school/activities.jpg": "/images/school/activities.svg",
  "/images/school/school-building.jpg": "/images/school/school-building.svg",
  "/images/school/computer-lab.jpg": "/images/school/computer-lab.svg",
  "/images/school/playground.jpg": "/images/school/playground.svg",
  "/images/school/library.jpg": "/images/school/library.svg",
  "/images/school/teacher-1.jpg": "/images/school/teacher-1.svg",
  "/images/school/teacher-2.jpg": "/images/school/teacher-2.svg",
  "/images/school/teacher-3.jpg": "/images/school/teacher-3.svg",
  "/images/school/teacher-4.jpg": "/images/school/teacher-4.svg",
};

const files = [
  "src/components/home/home-page.tsx",
  "src/components/landing/landing-page.tsx",
  "src/components/shared/school-logo.tsx",
];

for (const file of files) {
  const p = path.join(process.cwd(), file);
  if (!fs.existsSync(p)) continue;
  let content = fs.readFileSync(p, "utf8");
  for (const [from, to] of Object.entries(mappings)) {
    content = content.split(from).join(to);
  }
  fs.writeFileSync(p, content);
  console.log("Updated", file);
}
