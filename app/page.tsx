import Link from "next/link";
import { profile } from "./data/profile";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
  <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight text-balance mb-6">
    Bikin <span className="italic font-serif text-primary">Brand</span> Kamu Tampil Beda Lewat Website & Video Profesional.
  </h1>
  <p className="text-lg md:text-xl text-slate-600 text-balance max-w-2xl mb-8 leading-relaxed">
    Kami bantu UMKM dan kreator meningkatkan kehadiran digital lewat desain web modern dan editing video yang memikat.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
    <a 
      href="https://wa.me/..." 
      className="bg-primary text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
    >
      Mulai Konsultasi
    </a>
  </div>
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
