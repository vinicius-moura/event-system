import { Event } from "../types";

export async function fetchEvents(): Promise<Event[]> {
  const res = await fetch("http://localhost:4000/events", { cache: "no-store" });
  const data = await res.json();
  return data;
}

export async function fetchEvent(id: string): Promise<Event> {
  const res = await fetch(`http://localhost:4000/events/${id}`, { cache: "no-store" });
  const data = await res.json();
  return data;
}
