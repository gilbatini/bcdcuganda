import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Bufulu Community Development Center by email or post, in Uganda or the USA, or send us a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact us"
        lede="Send a message below and someone from BCDC will get back to you. You can also write to us in Uganda or the USA."
      />

      <section className="wrap grid gap-16 py-20 md:grid-cols-[minmax(0,1fr)_20rem] md:py-28">
        <div className="max-w-2xl">
          <ContactForm />
        </div>

        <aside className="flex flex-col gap-8">
          <div>
            <h2 className="font-semibold">Email</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 inline-block text-lg text-uniform-deep underline decoration-2 underline-offset-4 hover:text-ink"
            >
              {site.email}
            </a>
          </div>
          <div>
            <h2 className="font-semibold">Post, Uganda</h2>
            <address className="mt-1 not-italic text-ink-soft">
              {site.addresses.uganda.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <div>
            <h2 className="font-semibold">Post, USA</h2>
            <address className="mt-1 not-italic text-ink-soft">
              {site.addresses.usa.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <div className="rounded-3xl bg-sky p-6">
            <h2 className="font-semibold">Finding the centre</h2>
            <p className="mt-2 text-ink-soft">{site.location}</p>
          </div>
        </aside>
      </section>
    </>
  );
}
