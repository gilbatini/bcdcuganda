import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro, SupportBand } from "@/components/page-intro";
import graduation from "@/images/graduation-2019.jpg";
import beachTrip from "@/images/beach-trip.jpg";
import classAtCentre from "@/images/class-at-centre.jpg";
import embroidery from "@/images/bcdc-embroidery.jpg";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "BCDC graduates continue their education at local schools at a low fee. Congratulations to the BCDC class of 2019.",
  alternates: { canonical: "/achievements" },
};

const gallery = [
  { src: classAtCentre, alt: "Pupils and teachers outside the centre" },
  { src: beachTrip, alt: "A class outing to the lake shore" },
  { src: embroidery, alt: "The BCDC name embroidered on a school uniform" },
];

export default function AchievementsPage() {
  return (
    <>
      <PageIntro
        title="Achievements"
        lede="Our support and our values set us apart. Every child who leaves BCDC goes on to continue their education."
      />

      <section className="wrap grid items-center gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <Image
          src={graduation}
          alt="BCDC graduates in caps and gowns, class of 2019"
          placeholder="blur"
          preload
          sizes="(min-width: 768px) 55vw, 100vw"
          className="w-full rounded-[2rem]"
        />
        <div className="measure prose-bcdc text-lg text-ink-soft">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.4rem)] leading-tight font-bold text-ink">
            Congratulations, class of 2019
          </h2>
          <p>
            We are glad to keep children&rsquo;s learning going after they leave us. We work with
            local schools so every student can carry on with their education at a low school fee.
          </p>
          <p>As we lift each other up, our students will reach new heights.</p>
        </div>
      </section>

      <section className="bg-sky py-20">
        <div className="wrap">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.4rem)] leading-tight font-bold">
            Moments from the centre
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {gallery.map((g) => (
              <li key={g.alt}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  placeholder="blur"
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="aspect-[4/3] w-full rounded-3xl object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SupportBand />
    </>
  );
}
