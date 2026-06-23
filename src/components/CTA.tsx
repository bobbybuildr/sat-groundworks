import Link from "next/link";

type CTAProps = {
  title?: string;
  description?: string;
};

export function CTA({
  title = "Request Your Free, No-Obligation Quotation",
  description = "For all enquiries, do not hesitate to contact SAT Groundworks and Tarmac Services by phone or email.",
}: CTAProps) {
  return (
    <section className="border-y border-white/10 bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8 lg:px-8">
        <div>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-[0.08em] text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-base text-slate-300">{description}</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-brand px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-brand-soft"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}
