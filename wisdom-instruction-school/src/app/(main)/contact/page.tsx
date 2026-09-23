import type { Metadata } from "next";
import ContactPage from "@/components/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Wisdom Instruction School in Rwanda for questions about admissions, academics, or to schedule a visit.",
};

export default function Contact() {
  return <ContactPage />;
}
