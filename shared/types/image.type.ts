import { ImageSize } from '../enums';

export class Image {
  alt: string;
  cachedSizes: ImageSize[];
  caption?: string;
  path: string;
  title: string;
}
