import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro, SupportBand } from "@/components/page-intro";
import { scallop } from "@/components/scallop";
import { staff } from "@/lib/staff";

export const metadata: Metadata = {
  title: "Our staff",
  description:
    "Meet the teachers and program staff of Bufulu Community Development Center in Nkumba, Uganda.",
  alternates: { canonical: "/staff" },
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function StaffPage() {
  return (
    <>
      <PageIntro
        title="Our staff"
        lede="A small team of teachers and organisers from the community, working with the children every weekday morning."
      />

      <section className="wrap py-20 md:py-28">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-5">
          {staff.map((s) => (
            <li key={s.name} className="text-center">
              {s.photo ? (
                <Image
                  src={s.photo}
                  alt={s.name}
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                  className="mx-auto aspect-square w-full max-w-52 bg-sky object-cover"
                  style={{ clipPath: scallop }}
                />
              ) : (
                <div
                  aria-hidden
                  className="mx-auto flex aspect-square w-full max-w-52 items-center justify-center bg-sky text-4xl font-bold text-uniform"
                  style={{ clipPath: scallop }}
                >
                  {initials(s.name)}
                </div>
              )}
              <h2 className="mt-5 text-lg font-semibold">{s.name}</h2>
              <p className="text-ink-soft">{s.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <SupportBand />
    </>
  );
}
