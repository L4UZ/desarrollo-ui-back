import { isEmpty } from 'lodash';

import { PlaceModel, ActivityModel, ReviewModel } from '../data';

export const placesResolvers = {
  Query: {
    place: (_, { id }) => PlaceModel.findById(id),
  },

  Place: {
    activities: ({ id }) => ActivityModel.find({ placeId: id }),
    reviews: ({ id }) => ReviewModel.find({ placeId: id }),
    overallScore: async ({ id }) => {
      const reviews = await ReviewModel.find({ placeId: id });

      if (isEmpty(reviews)) return null;

      const result = reviews.reduce((acc, { score }) => acc + score, 0) / reviews.length;
      return result;
    },
  },
};
