import { PointOfInterestData } from '@shared/interfaces';

export interface Entity {
  url: string;
  update: (entity: this) => void;
  pointOfInterest: PointOfInterestData;
}
