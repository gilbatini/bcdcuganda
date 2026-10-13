import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro, SupportBand } from "@/components/page-intro";
import { mission, site } from "@/lib/site";
import beachTrip from "@/images/beach-trip.jpg";
import fieldWalk from "@/images/field-walk.jpg";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Who we are: a non-profit community centre in Nkumba Bufulu, Uganda, started on land given by Charles Kisitu Ffulu to educate and support underprivileged families.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="About BCDC"
        lede="Bufulu Community Development Center is a non-profit that helps the children of Nkumba Bufulu village, and their families, get the education and support they need."
        image={fieldWalk}
        imageAlt="Pupils in blue uniforms walking across the field near the centre"
      />

      <div className="wrap grid gap-16 py-20 md:grid-cols-[minmax(0,1fr)_18rem] md:py-28">
        <article className="measure prose-bcdc text-lg text-ink-soft">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.4rem)] leading-tight font-bold text-ink">
            Who we are
          </h2>
          <p>
            BCDC works from a single building that serves the whole community. It hosts activities
            for public benefit, and its main work is educating, shaping and assisting the people of
            Bufulu.
          </p>
          <p>
            The centre as it is today owes much to Charles Kisitu Ffulu, the historical parish
            chief of Nkumba Bufulu and a co-founder of Nkumba University. He cared deeply about
            helping people in need and about giving back, and he donated part of his land to be
            used as a community centre, the village <i>kitawuluzi</i>.
          </p>
          <p>
            We continue that work by preparing a diverse community for a better life. We believe
            early education, practical programs and new experiences prepare people for lifelong
            learning and for their responsibilities as citizens.
          </p>
          <p>
            BCDC offers good, affordable education to children from poor families. We also help
            adults in the community find their ambitions and succeed in business, education and
            related fields.
          </p>
          <p>
            We aim to be a supportive place where community members learn to think critically,
            make discoveries, value their community and raise their children responsibly in a
            fast-changing world. A chance to learn at an early age opens countless opportunities.
          </p>

          <h2 className="pt-6 text-[clamp(1.75rem,3.2vw,2.4rem)] leading-tight font-bold text-ink">
            Our mission
          </h2>
          <p className="text-xl font-semibold text-ink">{mission}</p>
          <p>
            We take pride in promoting, educating, shaping and assisting the community&rsquo;s
            underprivileged families, so they can improve their education and lead productive
            lives.
          </p>

          <h2 className="pt-6 text-[clamp(1.75rem,3.2vw,2.4rem)] leading-tight font-bold text-ink">
            Our values
          </h2>
          <p>
            Support, and inspire change through teaching. Educate the underprivileged and improve
            their lives.
          </p>

          <h2 className="pt-6 text-[clamp(1.75rem,3.2vw,2.4rem)] leading-tight font-bold text-ink">
            What we believe
          </h2>
          <p>
            Early involvement in a child&rsquo;s education, together with strong social support
            that helps families meet their responsibilities, will inspire children and give them
            the tools and encouragement to pursue a better life.
          </p>
        </article>

        <aside className="flex flex-col gap-8 md:pt-2">
          <Image
            src={beachTrip}
            alt="Children on a school outing to the lake shore"
            placeholder="blur"
            sizes="(min-width: 768px) 18rem, 100vw"
            className="w-full rounded-3xl object-cover"
          />
          <div className="rounded-3xl bg-sky p-6">
            <h2 className="font-semibold">Where we are</h2>
            <p className="mt-2 text-ink-soft">{site.location}</p>
          </div>
        </aside>
      </div>

      <SupportBand />
    </>
  );
}
