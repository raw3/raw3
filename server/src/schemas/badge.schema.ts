import { VennCategory } from '@shared/enums';

export const badgeSchemaDefinition = {
  text: String,
  venn: {
    type: String,
    enum: [
      VennCategory.BLUE,
      VennCategory.RED,
      VennCategory.YELLOW,
      VennCategory.GREEN,
      VennCategory.ORANGE,
      VennCategory.PURPLE,
      VennCategory.WHITE
    ]
  }
};
