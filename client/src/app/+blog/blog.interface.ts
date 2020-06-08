import { Entity, Paragraph } from '@client/src/app/shared/interfaces';
import { KeywordData, PointOfInterestData } from '@shared/interfaces';

export class Blog implements Entity {
  type: 'blog';
  url: string;
  description: string;
  prologue: Paragraph;
  paragraphs: Paragraph[];
  title: string;
  keywords: KeywordData[];
  pointOfInterest: PointOfInterestData;
}
