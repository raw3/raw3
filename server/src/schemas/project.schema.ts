import { badgeSchemaDefinition } from '@server/src/schemas/badge.schema';
import { imageSchemaDefinition } from '@server/src/schemas/image.schema';
import { paragraphSchemaDefinition } from '@server/src/schemas/paragraph.schema';
import { pointOfInterestSchemaDefinition } from '@server/src/schemas/point-of-interest.schema';
import * as mongoose from 'mongoose';

export const projectSchemaDefinition = {
  url: String,
  description: String,
  image: imageSchemaDefinition,
  paragraph: paragraphSchemaDefinition,
  title: String,
  roles: [badgeSchemaDefinition],
  pointOfInterest: pointOfInterestSchemaDefinition,
  client: {
    type: String,
    optional: true
  },
  startDate: {
    type: Number,
    optional: true
  },
  git: {
    type: String,
    optional: true
  },
};
export const projectSchema = new mongoose.Schema(projectSchemaDefinition);
// tslint:disable-next-line
export const ProjectModel = mongoose.model('Project', projectSchema);
