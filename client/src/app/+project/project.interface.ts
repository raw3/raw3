import { Entity, Image, Paragraph } from '@client/src/app/shared/interfaces';
import { KeywordData, PointOfInterestData, ProjectData } from '@shared/interfaces';

export class Project implements Entity {
  url: string;
  client?: string;
  startDate?: number;
  description: string;
  git?: string;
  image: Image;
  paragraph: Paragraph;
  roles: KeywordData[];
  title: string;
  pointOfInterest: PointOfInterestData;

  constructor (data: ProjectData) {
    Object.assign(this, data);

    this.image.cachedSizes = [];

    if (this.paragraph.image) {
      this.paragraph.image.cachedSizes = [];
    }
  }

  update (data: Project) {
    Object.assign(this, {...this, ...data});
  }
}
