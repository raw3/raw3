import { Endpoint } from '../../../../../shared/enums';
import { environment } from '../../../environments/environment';

export const getEndpointUtility = (endpoint: Endpoint) => {
  return `api/${endpoint}`;
};
