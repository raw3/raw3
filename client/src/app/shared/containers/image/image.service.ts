import { Injectable } from '@angular/core';
import { ImageSize } from '../../../../../../shared/enums';
import { getImagePathUtility } from '../../utilities';

@Injectable({providedIn: 'root'})
export class ImageService {
  private parseBackgroundImageURL (size: ImageSize, path: string) {
    return `url("${getImagePathUtility(size, path)}")`;
  }

  getHighestCachedSize (cachedSizes: ImageSize[]) {
    if (cachedSizes.length === 0) {
      return 0;
    }

    return Math.max(...cachedSizes.map(size => size, 0));
  }

  setCachedSize (size: ImageSize, path: string) {
    if (!size) {
      return 'none';
    }

    return this.parseBackgroundImageURL(size, path);
  }

  setLoadingSizePath (size: ImageSize, path: string, maxImageSize: ImageSize) {
    if (!size) {
      return getImagePathUtility(ImageSize.XS, path);
    }

    if (size >= maxImageSize) {
      return getImagePathUtility(maxImageSize, path);
    }

    return getImagePathUtility(size, path);
  }
}
