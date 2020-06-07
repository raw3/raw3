import { ImageSize } from '@shared/enums';

export interface Image {
  alt: string;
  caption?: string;
  path: string;
  title: string;
  cachedSizes: ImageSize[];
}
