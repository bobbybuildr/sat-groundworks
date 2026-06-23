import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Driveway, Tarmac and Groundworks Services",
  description:
    "Explore SAT Groundworks services including driveway surfacing, tarmac, block paving, resin bonded gravel, car park surfacing, pathways, drop kerbs and artificial grass.",
  alternates: {
    canonical: "https://satgroundworks.com/services",
  },
};

export default function ServicesPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Services</p>
      <h1 className="font-heading mt-2 text-4xl font-bold uppercase tracking-[0.08em] text-white sm:text-5xl">
        Groundworks and Tarmac Services
      </h1>
      <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate-300">
        SAT provides domestic and commercial surfacing and groundwork solutions across
        Redditch and surrounding areas.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} image={service.image} />
        ))}
      </div>
    </section>
  );
}
