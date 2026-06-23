import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Groundworks, Driveways and Tarmac in Redditch",
  description:
    "SAT Groundworks and Tarmac Services provide driveways, road surfacing, car parks, footpaths and drop kerbs for domestic and commercial clients in Redditch and Worcestershire.",
  alternates: {
    canonical: "https://satgroundworks.com/",
  },
};

export default function Home() {
  const previewServices = services.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              What we do
            </p>
            <h2 className="font-heading mt-2 text-3xl font-bold uppercase tracking-[0.08em] text-white sm:text-4xl">
              Groundwork and Surfacing Services
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-bold uppercase tracking-[0.12em] text-brand transition hover:text-brand-soft"
          >
            View all services
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {previewServices.map((service) => (
            <ServiceCard key={service.title} service={service} image={service.image} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">About SAT</p>
          <h2 className="font-heading mt-2 text-3xl font-bold uppercase tracking-[0.08em] text-white sm:text-4xl">
            Family-Run, Experienced and Quality Focused
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-slate-300">
            SAT Groundworks and Tarmac Services is an established family-run business with
            over fifteen years of surfacing experience. Customer satisfaction remains the first
            and foremost concern across private and public contracts, with work spanning from
            domestic driveways and footpaths to commercial surfacing projects.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center justify-center rounded-md border border-brand/50 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-brand transition hover:bg-brand hover:text-slate-950"
          >
            More about us
          </Link>
        </div>
      </section>

      <CTA />
      {/* <Testimonials /> */}
    </>
  );
}