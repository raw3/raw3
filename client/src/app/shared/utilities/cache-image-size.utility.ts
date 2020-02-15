import { ImageSize } from '@shared/enums';
import { Image } from '@shared/interfaces';

export const cacheImageSizeUtility = <T extends { image?: Image }> (entity: T, size: ImageSize) => {
  if (!entity.image) {
    return entity;
  }

  const cachedSizes = [...entity.image.cachedSizes, size];
  return {...entity, image: {...entity.image, cachedSizes}};
};
