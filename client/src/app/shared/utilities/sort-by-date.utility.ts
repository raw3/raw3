import { Entity } from '@client/src/app/shared/interfaces';

export const sortByDateUtility = <T extends Entity> (array: T[]) => {
  if (array.length <= 1) {
    return array;
  }

  return array.sort((a, b) => b.pointOfInterest.date - a.pointOfInterest.date);
};
