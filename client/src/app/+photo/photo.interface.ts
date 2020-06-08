import { Entity, Image } from '@client/src/app/shared/interfaces';
import { PointOfInterestData } from '@shared/interfaces';

export class Photo implements Entity {
  type: 'photo';
  url: string;
  image: Image;
  pointOfInterest: PointOfInterestData;
}
