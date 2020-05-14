import { RegionModel } from '../data';

export const regionsResolvers = {
  Query: {
    regions: () => RegionModel.find(),
  },
};
