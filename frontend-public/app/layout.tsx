import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>Event App</title>
      </head>
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0, backgroundColor: "#f0f2f5" }}>
        <header style={{ padding: "1rem 2rem", backgroundColor: "#1e90ff", color: "white" }}>
          <nav>
            <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "1.2rem" }}>
              Event App
            </Link>
          </nav>
        </header>

        <main style={{ padding: "2rem" }}>
          {children}
        </main>

        <footer style={{ padding: "1rem 2rem", backgroundColor: "#1e90ff", color: "white", textAlign: "center" }}>
          <p>Event App © 2025</p>
        </footer>
      </body>
    </html>
  );
}
