import { Entity, Image, Paragraph } from '@client/src/app/shared/interfaces';
import { KeywordData, PointOfInterestData } from '@shared/interfaces';

export interface Project extends Entity {
  type: 'project';
  url: string;
  client?: string;
  startDate?: number;
  description: string;
  git?: string;
  image: Image;
  paragraph: Paragraph;
  roles: KeywordData[];
  title: string;
  pointOfInterest: PointOfInterestData;
}
