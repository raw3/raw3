import { ImageData } from './image-data.interface';

export class ParagraphData {
  body: string[];
  header?: string;
  image?: ImageData;
  introduction?: string[];
}
