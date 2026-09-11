import type { Metadata } from "next";
import local_font from "next/font/local";
import { profile } from "./data/profile";
import "./assets/globals.css";
import Link from "next/link";

const go_mono = local_font({
  src: "./assets/Go-Mono.ttf",
  variable: "--font-go-mono",
});

export const metadata: Metadata = {
  title: profile.name,
  description: profile.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${go_mono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col overflow-hidden">
        <header className="bg-background-2 min-w-full items-center px-2 border-background-3 border-b-4 py-2 flex min-h-16 shrink-0">
          <Link href="#home">
            <h1 className="tracking-tighter">{profile.name}</h1>
          </Link>
        </header>

        <main className="flex-1 flex flex-col items-center  px-8 py-8 overflow-auto gap-8">
          {children}
        </main>

        <footer className="bg-background-2 min-w-full items-center px-2 border-background-3 border-t-4 py-2 flex min-h-16 shrink-0">
          <small>
            &copy;{" "}
            <time dateTime={new Date().toISOString()}>
              {new Date().getFullYear()}
            </time>{" "}
            {profile.name}
          </small>
        </footer>
      </body>
    </html>
  );
}
