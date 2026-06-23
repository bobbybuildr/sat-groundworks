import type { Metadata } from "next";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About SAT Groundworks in Redditch",
  description:
    "Learn about SAT Groundworks and Tarmac Services, a family-run business with over fifteen years of surfacing experience for domestic and commercial work in Redditch and Worcestershire.",
  alternates: {
    canonical: "https://satgroundworks.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">About</p>
        <h1 className="font-heading mt-2 text-4xl font-bold uppercase tracking-[0.08em] text-white sm:text-5xl">
          Built on Experience and Customer Satisfaction
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-300">
          <p>
            SAT Groundworks and Tarmac Services is an established family-run business with over
            thirty years of experience in the surfacing industry.
          </p>
          <p>
            The company&apos;s reputation has grown through a simple approach: customer satisfaction
            is the first and foremost concern, whether the contract is private or public.
          </p>
          <p>
            SAT provides quality results at competitive prices through an experienced team of
            surfacing operatives equipped and trained to deliver reliable outcomes.
          </p>
          <p>
            Experience ranges from smaller domestic projects, such as footpaths and driveways,
            through to commercial work and involvement in improving public highways.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto grid w-full max-w-6xl gap-5 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <article className="rounded-lg border border-white/10 bg-slate-950/50 p-5">
            <p className="font-heading text-3xl font-bold text-brand">30+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.1em] text-slate-300">Years experience</p>
          </article>
          <article className="rounded-lg border border-white/10 bg-slate-950/50 p-5">
            <p className="font-heading text-3xl font-bold text-brand">Family</p>
            <p className="mt-2 text-sm uppercase tracking-[0.1em] text-slate-300">Run business</p>
          </article>
          <article className="rounded-lg border border-white/10 bg-slate-950/50 p-5">
            <p className="font-heading text-3xl font-bold text-brand">Domestic</p>
            <p className="mt-2 text-sm uppercase tracking-[0.1em] text-slate-300">Client projects</p>
          </article>
          <article className="rounded-lg border border-white/10 bg-slate-950/50 p-5">
            <p className="font-heading text-3xl font-bold text-brand">Commercial</p>
            <p className="mt-2 text-sm uppercase tracking-[0.1em] text-slate-300">Contract work</p>
          </article>
        </div>
      </section>

      <CTA />
    </>
  );
}
