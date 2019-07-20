import { RoutePath } from '../enums';

export const getRouteTitleUtility = (path: RoutePath) => {
  switch (path) {
    case RoutePath.About:
      return 'About';
    case RoutePath.Blogs:
      return 'Blogs';
    case RoutePath.Home:
      return 'Home';
    case RoutePath.Photos:
      return 'Photography';
    case RoutePath.Projects:
      return 'Projects';
  }
};
