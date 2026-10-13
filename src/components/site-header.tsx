"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/images/logo.png";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on, so it closes itself after navigating.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="wrap flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full"
          aria-label="Bufulu Community Development Center, home"
        >
          <Image src={logo} alt="" width={48} height={49} className="size-12" preload />
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight">BCDC</span>
            <span className="hidden text-sm text-ink-soft sm:block">
              Bufulu Community Development Center
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="rounded-full px-3.5 py-2 font-medium text-ink-soft transition-colors hover:text-ink aria-[current=page]:bg-sky aria-[current=page]:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <Link href="/support" className="btn btn-star min-h-11 py-2">
                Support BCDC
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-sky lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="border-t border-ink/10 bg-paper lg:hidden"
      >
        <ul className="wrap flex flex-col py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="block rounded-xl px-3 py-3 text-lg font-medium aria-[current=page]:bg-sky"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 px-3 pb-2">
            <Link href="/support" className="btn btn-star w-full">
              Support BCDC
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
