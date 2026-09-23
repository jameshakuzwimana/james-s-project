import type { Metadata } from "next";
import EventsPage from "@/components/events/events-page";

export const metadata: Metadata = {
  title: "Events",
  description:
    "View upcoming events and school celebrations at Wisdom Instruction School in Rwanda.",
};

export default function Events() {
  return <EventsPage />;
}
