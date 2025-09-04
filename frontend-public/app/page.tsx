import { fetchEvents } from "../lib/api";
import { Event } from "../types";
import Link from "next/link";

export default async function Home() {
  const events: Event[] = await fetchEvents();

  return (
    <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
      {events.map((event) => (
        <div key={event.id} style={{ backgroundColor: "white", padding: "1rem", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.15)" }}>
          <Link href={`/event/${event.id}`} style={{ textDecoration: "none", color: "black" }}>
            <h2>{event.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
