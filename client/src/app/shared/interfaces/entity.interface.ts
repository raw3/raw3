import { PointOfInterestData } from '@shared/interfaces';

export interface Entity {
  type: 'blog' | 'photo' | 'project';
  url: string;
  pointOfInterest: PointOfInterestData;
}
