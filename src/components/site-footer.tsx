import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Image src={logo} alt="BCDC logo" width={88} height={90} className="size-22 rounded-full bg-white p-1" />
          <p className="max-w-xs text-white/75">
            A community centre for early learning and family support in Bufulu village, Uganda.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-base font-semibold text-star">Visit</h2>
          <p className="text-white/80">{site.location}</p>
        </div>

        <div>
          <h2 className="mb-4 text-base font-semibold text-star">Write to us</h2>
          <address className="flex flex-col gap-4 not-italic text-white/80">
            <a href={`mailto:${site.email}`} className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
              {site.email}
            </a>
            <span>
              In Uganda
              <br />
              {site.addresses.uganda.join(", ")}
            </span>
            <span>
              In the USA
              <br />
              {site.addresses.usa.slice(0, 2).join(", ")}
            </span>
          </address>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 text-base font-semibold text-star">Pages</h2>
          <ul className="flex flex-col gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/support" className="text-white/80 hover:text-white">
                Support BCDC
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="wrap py-6 text-sm text-white/60">
          {site.name} is a non-profit organisation.
        </p>
      </div>
    </footer>
  );
}
