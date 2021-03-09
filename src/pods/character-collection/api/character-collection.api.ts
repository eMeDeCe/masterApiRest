import { graphQLClient } from 'core/api';
import { CharacterEntityApi } from './character-collection.api-model';


interface GetCharacterCollectionResponse {
  characters: CharacterEntityApi[];
}

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const query = `
  query {
    characters {
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