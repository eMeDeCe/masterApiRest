import React from 'react';
import { graphQLClient } from 'core/api';
import { CharacterEntityApi } from './character-collection.api-model';


interface GetCharacterCollectionResponse {
  characters: CharacterEntityApi[];


}

export const getCharacterCollection = async (pageNumber): Promise<CharacterEntityApi[]> => { 
  const query = `
  query {
    characters (page: ${pageNumber}){
      results {
        id
        name
        status
        gender
          origin {
          name
        }
        image
        episode {
          name
        }
       
         location {
            name
        }
        created
      }
    }
  }
  `;
  const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(
    query
  );
  return characters.results;
};



export const getCharacterCollectionFilterName = async (pageNumber): Promise<CharacterEntityApi[]> => { 
  const queryName = `
  query {
    characters (filter: {name: "rick"} )  {
      results {
        id
        name
        status
        gender
          origin {
          name
          
        }
        image
        episode {
          name
        }
       
         location {
            name
        }
        created
      }
    }
  }
  `;
  const { charactersName } = await graphQLClient.request(
    queryName
  );

  console.log (charactersName);
  return charactersName.results;
};

