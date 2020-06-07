import { ImageData } from '@shared/interfaces/image-data.interface';
import { KeywordData } from '@shared/interfaces/keyword-data.interface';
import { ParagraphData } from '@shared/interfaces/paragraph-data.interface';
import { PointOfInterestData } from '@shared/interfaces/point-of-interest-data.interface';

export class ProjectData {
  url: string;
  client?: string;
  startDate?: number;
  description: string;
  git?: string;
  image: ImageData;
  paragraph: ParagraphData;
  roles: KeywordData[];
  title: string;
  pointOfInterest: PointOfInterestData;
}
