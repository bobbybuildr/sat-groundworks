import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      {/* Background image */}
      <Image
        src="/gallery/IMG_20260617_121444 (30).jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-slate-950/70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,105,0,0.24),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_28%)]"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <p className="inline-flex w-fit items-center rounded-full border border-brand/40 bg-brand/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
          Redditch and surrounding areas
        </p>

        <div className="max-w-4xl space-y-6">
          <h1 className="font-heading text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            SAT Groundworks &amp; Tarmac Services
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Specialists in all aspects of groundwork including road surfacing, car parks,
            footpaths, driveways and drop kerbs for commercial and domestic clients.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-brand-soft"
          >
            Get a Free Quote
          </Link>
          <Link
            href="tel:07976763199"
            className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-brand hover:text-brand"
          >
            Call Now
          </Link>
        </div>
      </div>
    </section>
  );
}
