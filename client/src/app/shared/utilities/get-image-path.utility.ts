import { ImageSize } from '@shared/enums';

const imageSizeMap = {
  [ImageSize.XS]: 'xs',
  [ImageSize.S]: 's',
  [ImageSize.M]: 'm',
  [ImageSize.XL]: 'xl'
};

export const getImagePathUtility = (size: ImageSize, filePath: string) => {
  return `/assets/images/photos/${imageSizeMap[size]}/${filePath}`;
};
