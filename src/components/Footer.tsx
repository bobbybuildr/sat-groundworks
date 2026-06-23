import Image from "next/image";
import Link from "next/link";

const accreditationImages = [
  {
    src: "/accreditations/cscs.jpg",
    alt: "CSCS accreditation",
  },
  {
    src: "/accreditations/mcnicholas.jpg",
    alt: "McNicholas accreditation",
  },
  {
    src: "/accreditations/warwickshire_council.jpg",
    alt: "Warwickshire Council accreditation",
  },
  {
    src: "/accreditations/worcestershire_council.jpg",
    alt: "Worcestershire Council accreditation",
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-gray-300 text-slate-600">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.1em]">
            SAT Groundworks &amp; Tarmac Services
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
            Established family-run surfacing and groundwork specialists serving Redditch and
            surrounding areas for domestic and commercial clients.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-600">
            <p>
              <span className="font-semibold text-black">Shane Taylor</span>
            </p>
            <p>
              <span className="font-semibold text-black">Tel:</span>{" "}
              <Link href="tel:01527458989" className="transition hover:text-brand">
                01527 458 989
              </Link>{" "}/ {" "}
              <span>
                07976 73 199
              </span>
            </p>
            <p>
              <span className="font-semibold text-black">Email:</span>{" "}
              <Link
                href="mailto:satgroundworks1@hotmail.co.uk"
                className="transition hover:text-brand"
              >
                satgroundworks1@hotmail.co.uk
              </Link>
            </p>
            <p>
              <span className="font-semibold text-black">Address:</span> 73 Throckmorton Road,
              Redditch, Worcestershire, B98 7RL
            </p>
          </div>
        </div>

        <div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {accreditationImages.map((image) => (
              <div key={image.src} className="rounded-md border border-white/10 bg-white p-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={220}
                  height={140}
                  className="h-20 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-600 px-4 py-4 text-center text-xs uppercase tracking-[0.08em] bg-slate-900 text-white">
        &copy; {new Date().getFullYear()} SAT Groundworks and Tarmac Services
      </div>
    </footer>
  );
}
