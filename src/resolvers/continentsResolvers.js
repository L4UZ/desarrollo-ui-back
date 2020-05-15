import { ContinentModel, RegionModel } from '../data';

export const continentsResolvers = {
  Query: {
    continents: () => ContinentModel.find(),
  },

  Continent: {
    regions: ({ regionIds }) => RegionModel.find({ _id: { $in: regionIds } }),
  },
};
