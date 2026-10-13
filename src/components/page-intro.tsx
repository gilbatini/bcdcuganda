import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function PageIntro({
  title,
  lede,
  image,
  imageAlt,
}: {
  title: string;
  lede: ReactNode;
  image?: StaticImageData;
  imageAlt?: string;
}) {
  return (
    <section className="bg-sky">
      <div
        className={`wrap grid items-center gap-10 py-14 md:py-20 ${image ? "md:grid-cols-[1.1fr_0.9fr]" : ""}`}
      >
        <div>
          <h1 className="text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.05] font-bold">{title}</h1>
          <div className="measure mt-6 text-xl leading-relaxed text-ink-soft">{lede}</div>
        </div>
        {image ? (
          <Image
            src={image}
            alt={imageAlt ?? ""}
            placeholder="blur"
            preload
            sizes="(min-width: 768px) 40vw, 100vw"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover"
          />
        ) : null}
      </div>
    </section>
  );
}

export function SupportBand() {
  return (
    <section className="bg-uniform text-white">
      <div className="wrap flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-center">
        <div className="measure">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] leading-tight font-bold">
            Help a child in Bufulu start school ready to learn.
          </h2>
          <p className="mt-3 text-lg text-white/85">
            Fees at BCDC are kept very low on purpose. Your support covers the rest.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/support" className="btn btn-star">
            Support BCDC
          </Link>
          <Link href="/contact" className="btn btn-line text-white">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
