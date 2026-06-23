"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryLightboxProps = {
  images: GalleryImage[];
};

export function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isModalImageLoading, setIsModalImageLoading] = useState(false);

  useEffect(() => {
    setIsModalImageLoading(activeIndex !== null);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <article
            key={image.src}
            className="group overflow-hidden rounded-lg border border-white/10 bg-slate-900"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="relative aspect-square w-full cursor-pointer overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label="Open gallery image"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </button>
          </article>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-6xl rounded-xl border border-white/20 bg-slate-950/95 p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 z-10 cursor-pointer rounded-md border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-black/70"
            >
              Close
            </button>

            <div className="relative h-[78vh] w-full">
              {isModalImageLoading ? (
                <div className="absolute inset-0 z-[1] flex items-center justify-center bg-slate-950/40">
                  <span
                    className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-white"
                    aria-label="Loading image"
                  />
                </div>
              ) : null}

              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
                onLoad={() => setIsModalImageLoading(false)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}