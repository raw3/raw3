import { PointOfInterest } from './point-of-interest.model';
import { Badge, Paragraph } from '@shared/interfaces';

export class Blog extends PointOfInterest {
  description: string;
  prologue: Paragraph;
  paragraphs: Paragraph[];
  title: string;
  keywords: Badge[];

  constructor (data: Blog) {
    super();
    Object.assign(this, data);
  }
}
