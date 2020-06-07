import { KeywordData } from '@shared/interfaces/keyword-data.interface';
import { ParagraphData } from '@shared/interfaces/paragraph-data.interface';
import { PointOfInterestData } from '@shared/interfaces/point-of-interest-data.interface';

export interface BlogData {
  url: string;
  description: string;
  prologue: ParagraphData;
  paragraphs: ParagraphData[];
  title: string;
  keywords: KeywordData[];
  pointOfInterest: PointOfInterestData;
}
