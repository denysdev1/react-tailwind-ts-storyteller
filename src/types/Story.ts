import { Image } from "./Image";

export type Story = {
  id: number;
  title: string;
  lastModified: string;
  status: string;
  liveFrom?: string;
  ends?: string;
  images: Image[];
};
