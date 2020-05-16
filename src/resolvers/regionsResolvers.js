import { RegionModel, PlaceModel } from '../data';

export const regionsResolvers = {
  Query: {
    region: (_, { id }) => RegionModel.findById(id),
  },

  Region: {
    places: ({ id }) => PlaceModel.find({ regionId: id }),
  },
};
