import { fetchEvents } from "../lib/api";
import { Event } from "../types";
import Link from "next/link";
import styles from "./Page.module.scss";

export default async function Home() {
  const events: Event[] = await fetchEvents();

return (
    <div className={styles.container}>
      {events.map((event) => (
        <Link key={event.id} href={`/event/${event.id}`} style={{ textDecoration: "none" }}>
          <div className={styles.card}>
            <h2 className={styles.title}>{event.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
