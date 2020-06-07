import { Entity, Paragraph } from '@client/src/app/shared/interfaces';
import { BlogData, KeywordData, PointOfInterestData } from '@shared/interfaces';

export class Blog implements Entity {
  url: string;
  description: string;
  prologue: Paragraph;
  paragraphs: Paragraph[];
  title: string;
  keywords: KeywordData[];
  pointOfInterest: PointOfInterestData;

  constructor (data: BlogData) {
    Object.assign(this, data);

    if (this.prologue.image) {
      this.prologue.image.cachedSizes = [];
    }

    this.paragraphs = this.paragraphs.map(paragraph => {
      if (paragraph.image) {
        return {...paragraph, image: {...paragraph.image, cachedSizes: []}};
      }

      return paragraph;
    });
  }

  update (data: Blog) {
    Object.assign(this, {...this, ...data});
  }
}
