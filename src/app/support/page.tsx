import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";
import childrenWaving from "@/images/children-waving.jpg";
import { ContactForm } from "../contact/contact-form";

export const metadata: Metadata = {
  title: "Support BCDC",
  description:
    "Help Bufulu Community Development Center keep early education affordable for children in Nkumba Bufulu, Uganda.",
  alternates: { canonical: "/support" },
};

const uses = [
  {
    title: "Keep fees low",
    body: "Families pay a small fee so they stay invested. Gifts cover the real cost of a child's place in Head Start.",
  },
  {
    title: "Pay and train teachers",
    body: "Two teachers and a helper run the morning program five days a week.",
  },
  {
    title: "Classroom materials",
    body: "Books, writing materials, charts and uniforms for the children.",
  },
  {
    title: "Adult lessons and the wellness clinic",
    body: "Weekly sessions that help parents strengthen their families and their health.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageIntro
        title="Support BCDC"
        lede="Your help keeps a place at BCDC affordable for families in Bufulu, and keeps the centre open for the whole community."
        image={childrenWaving}
        imageAlt="Children at the centre waving"
      />

      <section className="wrap py-20 md:py-28">
        <h2 className="text-[clamp(1.75rem,3.2vw,2.4rem)] leading-tight font-bold">
          Where your support goes
        </h2>
        <dl className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {uses.map((u) => (
            <div key={u.title} className="border-t-2 border-uniform pt-5">
              <dt className="text-xl font-semibold">{u.title}</dt>
              <dd className="mt-2 text-lg text-ink-soft">{u.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-sky py-20 md:py-28">
        <div className="wrap grid gap-16 md:grid-cols-[20rem_minmax(0,1fr)]">
          <div>
            <h2 className="text-[clamp(1.75rem,3.2vw,2.4rem)] leading-tight font-bold">
              Ways to give
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Tell us how you&rsquo;d like to help, whether that&rsquo;s a donation, school supplies
              or your time, and we&rsquo;ll reply with the details.
            </p>
            <p className="mt-6 text-ink-soft">
              You can also email{" "}
              <a
                href={`mailto:${site.email}?subject=Supporting%20BCDC`}
                className="text-uniform-deep underline decoration-2 underline-offset-4 hover:text-ink"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
          <div className="max-w-2xl rounded-[2rem] bg-paper p-6 md:p-10">
            <ContactForm defaultTopic="Supporting BCDC" />
          </div>
        </div>
      </section>
    </>
  );
}
