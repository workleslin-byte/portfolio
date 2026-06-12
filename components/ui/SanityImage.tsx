import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import type { WorkItem } from "@/types";

interface Props {
  image: WorkItem["coverImage"];
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function SanityImage({
  image,
  alt = "",
  width = 1200,
  height = 675,
  className,
  priority = false,
}: Props) {
  if (!image?.asset) return null;

  const src = urlFor(image).width(width).height(height).auto("format").url();

  return (
    <Image
      src={src}
      alt={image.alt ?? alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
