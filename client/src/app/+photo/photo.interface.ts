import { Entity, Image } from '@client/src/app/shared/interfaces';
import { PhotoData, PointOfInterestData } from '@shared/interfaces';

export class Photo implements Entity {
  url: string;
  image: Image;
  pointOfInterest: PointOfInterestData;

  constructor (data: PhotoData) {
    Object.assign(this, data);
    this.image.cachedSizes = [];
  }

  update (data: Photo) {
    Object.assign(this, {...this, ...data});
  }
}
