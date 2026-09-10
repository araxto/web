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
    <html lang="id" className={`${go_mono.variable} h-full antialiased`}>
      <body className="min-h-full min-w-full flex flex-col">
        <header className="bg-background-2 items-center border-background-3 border-b-4 p-2 flex min-h-20">
          <Link href="#home">
            <h1 className="text-3xl p-2 tracking-tighter ">{profile.name}</h1>
          </Link>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-background-2 items-center border-background-3 border-t-4 p-2 flex min-h-20">
          <small className="text-[1rem]">
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
