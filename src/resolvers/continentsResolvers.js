import { ContinentModel } from '../data';

export const continentsResolvers = {
  Query: {
    continents: () => ContinentModel.find(),
  },
};
