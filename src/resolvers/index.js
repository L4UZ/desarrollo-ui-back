import { usersResolvers } from './usersResolvers';
import { continentsResolvers } from './continentsResolvers';
import { regionsResolvers } from './regionsResolvers';
import { placesResolvers } from './placesResolvers';
import { reviewsResolvers } from './reviewsResolvers';
import { tripsResolvers } from './tripsResolvers';

export const resolvers = [
  usersResolvers,
  continentsResolvers,
  regionsResolvers,
  placesResolvers,
  reviewsResolvers,
  tripsResolvers,
];
