import { imageSchemaDefinition } from '@server/src/schemas/image.schema';

export const paragraphSchemaDefinition = {
  body: [String],
  header: {
    type: String,
    optional: true
  },
  image: {
    type: imageSchemaDefinition,
    optional: true
  },
  introduction: {
    type: [String],
    optional: true
  }
};
