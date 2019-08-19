import { Endpoint } from '../../../../../shared/enums';

export const getEndpointUtility = (endpoint: Endpoint) => {
  return `api/${endpoint}`;
};
