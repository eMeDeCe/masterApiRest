import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Character {
    id: ID!
    type: String!
    name: String!
    address1: String!
    city: String!
    characterRating: Float!
    shortDescription: String!
    thumbNailUrl: String!
    tripAdvisorRating: Float!
    tripAdvisorRatingUrl: String!
  }

  type Query {
    characters: [Character!]!
  }
`
