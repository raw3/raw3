export const arrayToObjectByKeyUtility = <T, K extends keyof T>(array: T[], key: K): {[key: string]: T} => {
  if (array.length <= 0) {
    return {};
  }

  return array.reduce((total, item) => ({...total, [item[key as string]]: item}), {});
};
