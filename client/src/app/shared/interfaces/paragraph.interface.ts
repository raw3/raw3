import { Image } from '@client/src/app/shared/interfaces/image.interface';

export interface Paragraph {
  body: string[];
  header?: string;
  image?: Image;
  introduction?: string[];
}
