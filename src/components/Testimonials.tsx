export function Testimonials() {
  return (
    <section className="border-y border-white/10 bg-slate-900/50">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-[0.08em] text-white sm:text-4xl">
          Testimonials
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          Customer testimonial content can be added here when approved statements are available.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <article
              key={index}
              className="rounded-lg border border-dashed border-white/25 bg-slate-950/40 p-5"
            >
              <p className="text-sm text-slate-400">Placeholder testimonial card</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
