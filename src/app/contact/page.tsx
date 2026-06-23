import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact SAT Groundworks",
  description:
    "Contact SAT Groundworks and Tarmac Services in Redditch for a free no-obligation quotation for driveways, tarmac and groundwork services.",
  alternates: {
    canonical: "https://satgroundworks.com/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Contact</p>
      <h1 className="font-heading mt-2 text-4xl font-bold uppercase tracking-[0.08em] text-white sm:text-5xl">
        Contact SAT Groundworks
      </h1>
      <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate-300">
        For all enquiries, do not hesitate to contact us by phone or email.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <aside className="rounded-xl border border-white/10 bg-slate-900/70 p-6">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.08em] text-white">
            Contact Details
          </h2>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p>
              <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Name
              </span>
              Shane Taylor
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Phone
              </span>
              <Link href="tel:07976763199" className="transition hover:text-brand">
                07976 763 199
              </Link>
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Email
              </span>
              <Link
                href="mailto:satgroundworks1@hotmail.co.uk"
                className="transition hover:text-brand"
              >
                satgroundworks1@hotmail.co.uk
              </Link>
            </p>
            <p>
              <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Address
              </span>
              73 Throckmorton Road
              <br />
              Redditch
              <br />
              Worcestershire
              <br />
              B98 7RL
            </p>
          </div>
        </aside>

        <div className="flex justify-center rounded-xl px-2 sm:px-6 lg:px-8 lg:block lg:content-center">
          <Image
            src="/sat_logo_master.png"
            alt="SAT Groundworks Logo"
            width={600}
            height={400}
            className="object-center"
          />
        </div>
      </div>
    </section>
  );
}
