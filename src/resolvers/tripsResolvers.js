import { TripModel, UserModel, PlaceModel } from '../data';
import { authFilter } from '../logic/session';

export const tripsResolvers = {
  Trip: {
    user: ({ userId }) => UserModel.findById(userId),
    places: async ({ placeIds }) => {
      const queries = placeIds.map(placeId => PlaceModel.findById(placeId));
      const places = await Promise.all(queries);
      return places;
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
    addPlaceToTrip: async (_, { tripPlace: { token, placeId, tripId } }) => {
      try {
        await authFilter(token);
        const updatedTrip = await TripModel.findOneAndUpdate(
          { _id: tripId },
          { $push: { placeIds: placeId } },
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
