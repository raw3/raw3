import { locationSchemaDefinition } from '@server/src/schemas/location.schema';

export const pointOfInterestSchemaDefinition = {
  date: Number,
  location: locationSchemaDefinition
};
