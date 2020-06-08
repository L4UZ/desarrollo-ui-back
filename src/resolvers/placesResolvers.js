import { isEmpty } from 'lodash';

import { PlaceModel, ActivityModel, ReviewModel } from '../data';

export const placesResolvers = {
  Query: {
    place: (_, { id }) => PlaceModel.findById(id),
    placesByDistance: async (_, { coords: { latitude, longitude } }) =>
      (
        await PlaceModel.aggregate([
          {
            $geoNear: {
              near: {
                type: 'Point',
                coordinates: [longitude, latitude],
              },
              distanceField: 'distance',
            },
          },
        ])
      ).map(place => ({
        ...place,
        distance: `${Math.round(place.distance / 1000).toLocaleString('en')} km`,
        id: place._id,
      })),
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
