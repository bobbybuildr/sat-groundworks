import type { Service } from "@/data/services";
import Image from "next/image";

type ServiceCardProps = {
  service: Service;
  image?: string;
};

export function ServiceCard({ service, image }: ServiceCardProps) {
  return (
    <article className="group h-full rounded-xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-brand/50">
      {image && (
        <div className="relative h-48 w-full">
          <Image 
            src={image}
            alt={service.title}
            fill
            className="rounded-xl object-cover" />
        </div>
      )}
      <h3 className="font-heading text-xl font-bold uppercase tracking-[0.08em] text-white mt-4">
        {service.title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{service.description}</p>
    </article>
  );
}
