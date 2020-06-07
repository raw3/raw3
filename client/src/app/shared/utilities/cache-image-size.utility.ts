import { Image } from '@client/src/app/shared/interfaces';
import { ImageSize } from '@shared/enums';

export const cacheImageSizeUtility = <T extends { image?: Image }> (entity: T, size: ImageSize) => {
  if (!entity.image) {
    return entity;
  }

  const cachedSizes = [...entity.image.cachedSizes, size];
  return {...entity, image: {...entity.image, cachedSizes}};
};
