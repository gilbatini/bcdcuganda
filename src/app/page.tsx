import Image from "next/image";
import Link from "next/link";
import { SupportBand } from "@/components/page-intro";
import { scallop } from "@/components/scallop";
import { mission, programs, site } from "@/lib/site";
import { staff } from "@/lib/staff";
import classOutdoors from "@/images/class-outdoors.jpg";
import readingUnderTrees from "@/images/reading-under-trees.jpg";
import childrenThumbsUp from "@/images/children-thumbs-up.jpg";
import childrenWaving from "@/images/children-waving.jpg";
import classAtCentre from "@/images/class-at-centre.jpg";
import graduation from "@/images/graduation-2019.jpg";

const programImages = [
  { src: classOutdoors, alt: "Head Start pupils in blue uniforms gathered outside with their teacher" },
  { src: readingUnderTrees, alt: "A teacher sitting with children under the trees at the centre" },
  { src: childrenThumbsUp, alt: "Children from the village giving a thumbs up" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  alternateName: "BCDC",
  url: site.url,
  email: site.email,
  logo: `${site.url}/icon.png`,
  description: site.description,
  address: [
    {
      "@type": "PostalAddress",
      postOfficeBoxNumber: "5637",
      addressLocality: "Kampala",
      addressCountry: "UG",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "15524 Peach Orchard Road",
      addressLocality: "Silver Spring",
      addressRegion: "MD",
      postalCode: "20905",
      addressCountry: "US",
    },
  ],
  areaServed: "Nkumba Bufulu, Wakiso District, Uganda",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero: the centre's own classroom footage */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero-poster.jpg"
          aria-hidden
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/hero-poster.jpg"
          alt=""
          className="absolute inset-0 -z-10 hidden h-full w-full object-cover motion-reduce:block"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,48,79,0.92)_0%,rgba(16,48,79,0.7)_45%,rgba(16,48,79,0.15)_100%)]" />

        <div className="wrap flex min-h-[min(84svh,46rem)] flex-col justify-end pt-24 pb-14 md:justify-center md:pb-24">
          <h1 className="max-w-[14ch] text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.98] font-bold">
            Early learning and family support in Bufulu village
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-white/90 md:text-xl">
            BCDC is a non-profit community centre in Nkumba, Uganda. We give children from
            low-income families a strong start in school and help their parents build better
            lives.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/support" className="btn btn-star">
              Support BCDC
            </Link>
            <Link href="/programs" className="btn btn-line text-white">
              See our programs
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="wrap grid items-center gap-12 py-20 md:grid-cols-[1fr_0.8fr] md:py-28">
        <div className="measure prose-bcdc text-lg">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] leading-tight font-bold">
            A centre built on land given to the community
          </h2>
          <p className="text-ink-soft">
            Charles Kisitu Ffulu, Nkumba Bufulu&rsquo;s former parish chief and a co-founder of
            Nkumba University, gave part of his land so the village could have a community
            centre, its <i>kitawuluzi</i>.
          </p>
          <p className="text-ink-soft">
            Today BCDC carries on his work. From one building on Fulu Road we run a morning
            pre-school, weekly lessons for adults and a wellness clinic, all at fees families can
            manage.
          </p>
          <p>
            <Link href="/about" className="font-semibold text-uniform-deep underline decoration-2 underline-offset-4 hover:text-ink">
              Read our story
            </Link>
          </p>
        </div>
        <Image
          src={childrenWaving}
          alt="Children at the centre waving at the camera"
          placeholder="blur"
          sizes="(min-width: 768px) 40vw, 90vw"
          className="mx-auto aspect-square w-full max-w-md object-cover"
          style={{ clipPath: scallop }}
        />
      </section>

      {/* Programs */}
      <section className="bg-sky py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-xl text-[clamp(1.9rem,3.6vw,2.75rem)] leading-tight font-bold">
              What happens at the centre
            </h2>
            <Link href="/programs" className="font-semibold text-uniform-deep underline decoration-2 underline-offset-4 hover:text-ink">
              All program details
            </Link>
          </div>
          <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {programs.map((p, i) => (
              <li key={p.slug} className="flex flex-col">
                <Image
                  src={programImages[i].src}
                  alt={programImages[i].alt}
                  placeholder="blur"
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="aspect-[4/3] w-full rounded-3xl object-cover"
                />
                <h3 className="mt-5 text-xl leading-snug font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm font-medium text-uniform-deep">{p.when}</p>
                <p className="mt-3 text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission */}
      <section className="wrap grid items-center gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <Image
          src={classAtCentre}
          alt="Pupils lined up outside the centre building with their teachers"
          placeholder="blur"
          sizes="(min-width: 768px) 45vw, 100vw"
          className="order-last aspect-[4/3] w-full rounded-[2rem] object-cover md:order-first"
        />
        <div>
          <h2 className="text-base font-semibold text-uniform-deep">Our mission</h2>
          <p className="mt-4 text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.1] font-bold tracking-tight">
            {mission}
          </p>
          <p className="measure mt-6 text-lg text-ink-soft">
            We believe that getting involved early in a child&rsquo;s education, and backing their
            family with strong social support, equips them to pursue a better life.
          </p>
        </div>
      </section>

      {/* People */}
      <section className="border-y border-ink/10 py-20 md:py-24">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-xl text-[clamp(1.9rem,3.6vw,2.75rem)] leading-tight font-bold">
              The people who run the centre
            </h2>
            <Link href="/staff" className="font-semibold text-uniform-deep underline decoration-2 underline-offset-4 hover:text-ink">
              Meet the whole team
            </Link>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {staff
              .filter((s) => s.photo)
              .map((s) => (
                <li key={s.name} className="text-center">
                  <Image
                    src={s.photo!}
                    alt={s.name}
                    sizes="(min-width: 768px) 20vw, 45vw"
                    className="mx-auto aspect-square w-full max-w-56 bg-sky object-cover"
                    style={{ clipPath: scallop }}
                  />
                  <p className="mt-4 font-semibold">{s.name}</p>
                  <p className="text-sm text-ink-soft">{s.role}</p>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* Graduation */}
      <section className="wrap grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <div className="measure">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] leading-tight font-bold">
            Every graduate moves on to a local school
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            We work with schools nearby so our children can continue their education at a low
            fee. Congratulations again to the BCDC class of 2019.
          </p>
          <p className="mt-6">
            <Link href="/achievements" className="font-semibold text-uniform-deep underline decoration-2 underline-offset-4 hover:text-ink">
              See our achievements
            </Link>
          </p>
        </div>
        <Image
          src={graduation}
          alt="BCDC graduates in caps and gowns, class of 2019"
          placeholder="blur"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="w-full rounded-[2rem]"
        />
      </section>

      <SupportBand />
    </>
  );
}
