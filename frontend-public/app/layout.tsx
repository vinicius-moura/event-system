import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Layout.module.scss";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>Event App</title>
      </head>
      <body className={styles.body}>
        <header className={styles.header}>
          <nav>
            <Link href="/" className={styles.navLink}>
              Event App
            </Link>
          </nav>
        </header>

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <p>Event App © 2025</p>
        </footer>
      </body>
    </html>
  );
}
