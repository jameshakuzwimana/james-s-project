/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

function gen(label, id) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D5E2C"/>
      <stop offset="100%" stop-color="#073D1C"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg)"/>
  <circle cx="400" cy="270" r="130" fill="none" stroke="#D4A843" stroke-width="2" opacity="0.5"/>
  <circle cx="400" cy="270" r="85" fill="none" stroke="#D4A843" stroke-width="2" opacity="0.4"/>
  <rect x="350" y="245" width="100" height="60" rx="8" fill="#D4A843" opacity="0.9"/>
  <text x="400" y="460" text-anchor="middle" fill="#ffffff" font-family="Georgia,serif" font-size="36" font-weight="bold">Wisdom Instruction School</text>
  <text x="400" y="505" text-anchor="middle" fill="#D4A843" font-family="Georgia,serif" font-size="18" letter-spacing="3">NURSERY &amp; PRIMARY SCHOOL</text>
  <text x="400" y="545" text-anchor="middle" fill="#ffffff" opacity="0.8" font-family="sans-serif" font-size="18">${label}</text>
  <text x="400" y="575" text-anchor="middle" fill="#ffffff" opacity="0.5" font-family="sans-serif" font-size="13">Placeholder - replace with real school photo</text>
</svg>`;
  const p = path.join(process.cwd(), "public", "images", "school", id + ".svg");
  fs.writeFileSync(p, svg);
  console.log("Created", id);
}

gen("Hero image of the school campus", "hero");
gen("Students learning together", "students");
gen("Classroom with students at desks", "classroom");
gen("Nursery students playing indoors", "nursery");
gen("Student activities and learning", "activities");
gen("School building exterior", "school-building");
gen("Computer laboratory", "computer-lab");
gen("Outdoor playground", "playground");
gen("Library and reading area", "library");
gen("Dedicated teacher portrait", "teacher-1");
gen("Caring primary school teacher", "teacher-2");
gen("Skilled subject specialist", "teacher-3");
gen("Committed support staff", "teacher-4");
