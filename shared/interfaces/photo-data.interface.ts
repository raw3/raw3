import { ImageData } from '@shared/interfaces/image-data.interface';
import { PointOfInterestData } from '@shared/interfaces/point-of-interest-data.interface';

export interface PhotoData {
  url: string;
  image: ImageData;
  pointOfInterest: PointOfInterestData;
}
