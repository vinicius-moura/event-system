export async function fetchEvents() {
  const res = await fetch("http://localhost:4000/events", { cache: "no-store" });
  return await res.json();
}

export async function fetchEvent(id: string) {
  const res = await fetch(`http://localhost:4000/events/${id}`, { cache: "no-store" });
  return await res.json();
}
