import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-28">
      <h1 className="text-[clamp(2.4rem,5.5vw,4rem)] leading-tight font-bold">
        This page isn&rsquo;t here
      </h1>
      <p className="measure mt-5 text-xl text-ink-soft">
        The link may be from our old website. Try the home page, or get in touch if you were
        looking for something specific.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-star">
          Go to the home page
        </Link>
        <Link href="/contact" className="btn btn-line text-ink">
          Contact us
        </Link>
      </div>
    </section>
  );
}
