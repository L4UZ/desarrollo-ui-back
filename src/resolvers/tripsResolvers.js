/* eslint-disable no-underscore-dangle */
import { TripModel, UserModel, PlaceModel } from '../data';
import { authFilter } from '../logic/session';

export const tripsResolvers = {
  Trip: {
    user: ({ userId }) => UserModel.findById(userId),
    places: async ({ places }) => {
      const queries = places.map(({ placeId }) => PlaceModel.findById(placeId));
      return (await Promise.all(queries)).map(({ _doc: place }, index) => ({
        ...place,
        regionId: places[index].regionId,
        id: place._id,
      }));
    },
  },

  Query: {
    trips: async (_, { token }) => {
      try {
        const { user } = await authFilter(token);
        const trips = await TripModel.find({ userId: user.id });
        return trips;
      } catch (err) {
        return err;
      }
    },
    trip: async (_, { id }) => TripModel.findById(id),
  },

  Mutation: {
    addTrip: async (_, { trip: { token, name } }) => {
      try {
        const { user } = await authFilter(token);
        const [addedTrip] = await TripModel.insertMany([{ name, userId: user.id }]);
        return addedTrip;
      } catch (err) {
        return err;
      }
    },
    addPlaceToTrip: async (_, { tripPlace: { token, regionId, placeId, tripId } }) => {
      try {
        await authFilter(token);
        const updatedTrip = await TripModel.findOneAndUpdate(
          { _id: tripId },
          { $push: { places: { regionId, placeId } } },
          {
            returnOriginal: false,
          },
        );
        return updatedTrip;
      } catch (err) {
        return err;
      }
    },
  },
};
