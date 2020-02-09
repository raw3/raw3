export const sortByDateUtility = (array: any[]) => {
  if (array.length <= 1) {
    return array;
  }

  return array.sort((a, b) => b.date - a.date);
};
