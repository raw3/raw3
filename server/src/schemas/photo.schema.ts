import { imageSchemaDefinition } from '@server/src/schemas/image.schema';
import { pointOfInterestSchemaDefinition } from '@server/src/schemas/point-of-interest.schema';
import * as mongoose from 'mongoose';

export const photoSchemaDefinition = {
  url: String,
  pointOfInterest: pointOfInterestSchemaDefinition,
  image: imageSchemaDefinition
};
export const photoSchema = new mongoose.Schema(photoSchemaDefinition);
// tslint:disable-next-line
export const PhotoModel = mongoose.model('Photo', photoSchema);
