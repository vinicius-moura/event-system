import { fetchEvent } from "../../../lib/api";
import { Event } from "../../../types";
import Link from "next/link";
import styles from "./EventPage.module.scss";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EventPage({ params }: Props) {
  const { id } = await params;
  const event: Event = await fetchEvent(id);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{event.title}</h1>
      <p className={styles.info}>
        {event.date} - {event.location}
      </p>
      <p className={styles.description}>{event.description}</p>
      <Link href="/" className={styles.backLink}>
        ← Back to Event List
      </Link>
    </div>
  );
}
