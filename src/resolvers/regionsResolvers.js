import { RegionModel, PlaceModel } from '../data';

export const regionsResolvers = {
  Query: {
    region: (_, { id }) => RegionModel.findById(id),
  },

  Region: {
    places: ({ placeIds }) => PlaceModel.find({ _id: { $in: placeIds } }),
  },
};
