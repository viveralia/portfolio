import type { ImageMetadata } from "astro";

export type Company = {
  name: string;
  logo: ImageMetadata;
  url: string;
};
