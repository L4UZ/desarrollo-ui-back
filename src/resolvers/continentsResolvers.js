import { ContinentModel, RegionModel } from '../data';

export const continentsResolvers = {
  Query: {
    continents: () => ContinentModel.find(),
  },

  Continent: {
    regions: ({ id }) => RegionModel.find({ continentId: id }),
  },
};
