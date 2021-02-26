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
        id
        name
        shortDescription
        characterRating
        address1
        thumbNailUrl
      }
    }
  `;
  const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(
    query
  );
  return characters;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  await Axios.delete(`${url}/${id}`);
  return true;
};
