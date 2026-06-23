export type Service = {
  title: string;
  description: string;
  image?: string;
  icon?: string;
};

export const services: Service[] = [
  {
    title: "Driveway Surfacing",
    description:
      "A quality driveway improves access and parking while adding real value to your property. SAT delivers first-class finishes across block paving and paved styles, from contemporary to classic.",
    image: "/services/driveways.jpg",
    icon: "driveway",
  },
  {
    title: "Car Park Surfacing",
    description:
      "SAT delivers commercial surfacing with quality planning, workmanship and materials. Projects include drainage considerations, layout planning and line-marking requirements for lasting performance.",
    image: "/services/car-parks.jpg",
    icon: "carpark",
  },
  {
    title: "Footpaths and Drop Kerbs",
    description:
      "From footpath resurfacing to professionally constructed dropped kerbs, SAT provides neat and compliant access solutions for both domestic and commercial requirements.",
    image: "/services/drop-kerbs.jpg",
    icon: "kerb",
  },
  {
    title: "Tarmac Surfacing",
    description:
      "Tarmac remains a popular choice for longevity, flexibility and durability. SAT undertakes driveway, parking bay and other surfacing works with black or coloured tarmac at affordable prices.",
    image: "/services/tarmac.jpg",
    icon: "tarmac",
  },
  {
    title: "Block Paving",
    description:
      "Made to last and available in numerous styles, colours and sizes, block paving offers a highly individual finish. Traditional patterns such as herringbone and basket weave are available.",
    image: "/services/block-paving.jpg",
    icon: "block",
  },
  {
    title: "Resin Bonded Gravel Driveways",
    description:
      "Resin bonded gravel gives the appearance of loose gravel with a stronger, longer-lasting finish. Aggregate is bonded to hard standings using epoxy binders for a durable anti-skid surface.",
    image: "/services/resin-bonded-driveway.jpg",
    icon: "resin",
  },
  {
    title: "Pathways",
    description:
      "SAT works on new and existing pathways for varied client requirements, offering surfaces including asphalt, macadam, block paving, shingle and surface dressing to relevant highway standards.",
    image: "/services/pathways.jpg",
    icon: "pathway",
  },
  {
    title: "Artificial Grass Surfacing",
    description:
      "Durable astroturf artificial lawns offer a low-maintenance option for gardens. SAT installs surfaces over decking, paving and concrete while ensuring levels and drainage are correct.",
    image: "/services/artificial-grass.jpg",
    icon: "grass",
  },
];
