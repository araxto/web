import Link from "next/link";
import { profile } from "./data/profile";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-8 max-w-prose">
        <h2 className="text-xl text-center text-balance">
          Bikin{" "}
          <b>
            <i>Brand</i> Kamu
          </b>{" "}
          Tampil Beda Lewat Website & Video <b>Profesional</b>.
        </h2>

        <p className="max-w-md text-balance border-l-muted border-l-4 pl-4">
          Kami bantu UMKM dan kreator ngembangin kehadiran digital lewat desain
          web modern dan editing video yang memikat.
        </p>
      </section>

      <section>
        <h2></h2>
        <ul className="flex gap-2 flex-wrap">
          {profile.links.map((link) => (
            <li
              key={link.label}
              className="bg-primary font-bold border-4 border-primary p-2 rounded-lg"
            >
              <Link
                href={link.to}
                className="flex items-center gap-4 min-w-32 text-text-rpd"
              >
                <Icon icon={link.icon} />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
