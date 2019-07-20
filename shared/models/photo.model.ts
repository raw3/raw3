import { Image } from '../types';
import { PointOfInterest } from './point-of-interest.model';

export class Photo extends PointOfInterest {
  image: Image;

  constructor (data: Photo) {
    super();
    Object.assign(this, data);
  }
}
