import { RegionModel, PlaceModel, ContinentModel } from '../data';

export const regionsResolvers = {
  Query: {
    region: (_, { id }) => RegionModel.findById(id),
  },

  Region: {
    places: ({ id }) => PlaceModel.find({ regionIds: id }),
    continentName: async ({ continentId }) => (await ContinentModel.findById(continentId)).name,
  },
};
