import Axios from 'axios';
import { graphQLClient } from 'core/api';
import { CharacterEntityApi } from './character-collection.api-model';

const url = '/api/characters';

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
  console.log("aqui graphql >>", characters);
  return characters.results;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`);
  return true;
};
