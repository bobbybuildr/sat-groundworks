import type { Metadata } from "next";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { GalleryLightbox } from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "View SAT Groundworks and Tarmac Services gallery images from surfacing and groundwork projects.",
  alternates: {
    canonical: "https://satgroundworks.com/gallery",
  },
};

const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

async function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const files = await readdir(galleryDir);

  return files
    .filter((fileName) => allowedExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))
    .map((fileName) => {
      const encoded = encodeURIComponent(fileName).replace(/%2F/g, "/");
      return {
        src: `/gallery/${encoded}`,
        alt: "SAT Groundworks project gallery image",
      };
    });
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Gallery</p>
      <h1 className="font-heading mt-2 text-4xl font-bold uppercase tracking-[0.08em] text-white sm:text-5xl">
        Recent Surfacing and Groundwork Projects
      </h1>
      <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate-300">
        A selection of SAT Groundworks and Tarmac Services project imagery.
      </p>

      {images.length === 0 ? (
        <p className="mt-10 rounded-md border border-white/10 bg-slate-900/60 p-5 text-slate-300">
          Gallery images will appear here once converted web-ready files are available in
          /public/gallery.
        </p>
      ) : (
        <GalleryLightbox images={images} />
      )}
    </section>
  );
}
