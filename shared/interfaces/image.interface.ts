import { ImageSize } from '@shared/enums';

export interface Image {
  alt: string;
  cachedSizes: ImageSize[];
  caption?: string;
  path: string;
  title: string;
}
