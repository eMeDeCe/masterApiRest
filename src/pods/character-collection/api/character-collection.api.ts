import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
//const url = 'https://rickandmortyapi.com/api/character'
const url = '/api/characters'

export const getCharacterCollection = async () => {
   const response = await fetch(url);
  if (response.ok) { 
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const getCharacter = async (id: number): Promise<boolean> => {
 
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
