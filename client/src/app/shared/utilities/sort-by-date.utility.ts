import { PointOfInterest } from '@shared/models';

export const sortByDateUtility = <T extends PointOfInterest>(array: T[]) => {
  if (array.length <= 1) {
    return array;
  }

  return array.sort((a, b) => b.date - a.date);
};
