import { badgeSchemaDefinition } from '@server/src/schemas/badge.schema';
import { paragraphSchemaDefinition } from '@server/src/schemas/paragraph.schema';
import { pointOfInterestSchemaDefinition } from '@server/src/schemas/point-of-interest.schema';
import * as mongoose from 'mongoose';

export const blogSchemaDefinition = {
  url: String,
  description: String,
  prologue: paragraphSchemaDefinition,
  paragraphs: [paragraphSchemaDefinition],
  title: String,
  keywords: [badgeSchemaDefinition],
  pointOfInterest: pointOfInterestSchemaDefinition,
};
export const blogSchema = new mongoose.Schema(blogSchemaDefinition);
// tslint:disable-next-line
export const BlogModel = mongoose.model('Blog', blogSchema);
