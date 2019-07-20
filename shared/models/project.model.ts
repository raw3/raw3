import { Badge, Image, Paragraph } from '../types';
import { PointOfInterest } from './point-of-interest.model';

export class Project extends PointOfInterest {
  client?: string;
  startDate?: number;
  description: string;
  git?: string;
  image: Image;
  paragraph: Paragraph;
  roles: Badge[];
  title: string;

  constructor (data: Project) {
    super();
    Object.assign(this, data);
  }
}
