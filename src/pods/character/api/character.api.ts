import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCharacterCollection } from './character.mock-data';

const url = 'https://rickandmortyapi.com/api/character'

export const getCharacter = async (id: number): Promise<Character> => {
   const response = await fetch(url+"/"+id);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
