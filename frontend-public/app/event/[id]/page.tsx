import { fetchEvent } from "../../../lib/api";
import { Event } from "../../../types";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EventPage({ params }: Props) {
  const { id } = await params;
  const event: Event = await fetchEvent(id);

  return (
    <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.15)", maxWidth: "600px", margin: "0 auto" }}>
      <h1>{event.title}</h1>
      <p style={{ color: "#555" }}>{event.date} - {event.location}</p>
      <p>{event.description}</p>

      <Link href="/" style={{ display: "inline-block", marginTop: "1rem", color: "#1e90ff", fontWeight: "bold" }}>
        ← Back to Event List
      </Link>
    </div>
  );
}
