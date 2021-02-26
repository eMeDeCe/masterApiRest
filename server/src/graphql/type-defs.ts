import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Character {
    id: Number!
    name: String!
    status: String!
    species: String!
    type: String!
    gender: String!
    origin: { 
        name: String! 
        url: String! 
    }
    location: {
      name: String!
      url: String
    }
    image: String!
    episode:  [String]!
    url: String!
    created: String!
  }

  type Query {
    characters: [Character!]!
  }
`
