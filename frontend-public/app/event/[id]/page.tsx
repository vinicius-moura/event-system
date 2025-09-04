import { fetchEvent } from "../../../lib/api";
import { Event } from "../../../types";

interface Props {
  params: { id: string };
}

export default async function EventPage({ params }: Props) {
   const event: Event = await fetchEvent(params.id);

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.date} - {event.location}</p>
      <p>{event.description}</p>
    </div>
  );
}
