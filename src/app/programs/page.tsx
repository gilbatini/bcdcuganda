import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro, SupportBand } from "@/components/page-intro";
import { programs, site } from "@/lib/site";
import classOutdoors from "@/images/class-outdoors.jpg";
import readingUnderTrees from "@/images/reading-under-trees.jpg";
import chickens from "@/images/chickens.jpg";
import childrenThumbsUp from "@/images/children-thumbs-up.jpg";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Head Start pre-school for ages 3 to 5, weekly lessons and a wellness clinic for adults, and family well-being support at BCDC in Nkumba Bufulu, Uganda.",
  alternates: { canonical: "/programs" },
};

const images = [
  { src: classOutdoors, alt: "Head Start pupils outside with their teacher" },
  { src: readingUnderTrees, alt: "A teacher with a group of children under the trees" },
  { src: childrenThumbsUp, alt: "Children from Bufulu village smiling and giving a thumbs up" },
];

export default function ProgramsPage() {
  return (
    <>
      <PageIntro
        title="Our programs"
        lede="Three programs, one building: a morning pre-school for young children, lessons for the adults around them, and time for parents to work."
        image={chickens}
        imageAlt="Children learning to care for chickens at the centre"
      />

      <section className="wrap py-20 md:py-28">
        <ul className="flex flex-col gap-20">
          {programs.map((p, i) => (
            <li
              key={p.slug}
              id={p.slug}
              className="grid scroll-mt-24 items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              <Image
                src={images[i].src}
                alt={images[i].alt}
                placeholder="blur"
                sizes="(min-width: 768px) 45vw, 100vw"
                className={`aspect-[4/3] w-full rounded-[2rem] object-cover ${i % 2 === 1 ? "md:order-last" : ""}`}
              />
              <div className="measure">
                <h2 className="text-[clamp(1.75rem,3.2vw,2.4rem)] leading-tight font-bold">
                  {p.title}
                </h2>
                <p className="mt-3 inline-block rounded-full bg-sky px-3.5 py-1 text-sm font-medium text-uniform-deep">
                  {p.when}
                </p>
                <p className="mt-5 text-lg text-ink-soft">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sky py-20 md:py-24">
        <div className="wrap grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="measure">
            <h2 className="text-[clamp(1.75rem,3.2vw,2.4rem)] leading-tight font-bold">
              See a day at the centre
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              A short video from BCDC showing the children and their teachers.
            </p>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-[2rem] bg-ink">
            <iframe
              src={site.programsVideo}
              title="BCDC video on YouTube"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      <SupportBand />
    </>
  );
}
