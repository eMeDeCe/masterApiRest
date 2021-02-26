import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';

const characterListUrl = '/api/characters';

export const getCharacter = async (id: number): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${characterListUrl}/${id}`);

  return data;
};


export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await Axios.patch<Character>(`${characterListUrl}/${character.id}`, character);
  } else {
    await Axios.post<Character>(characterListUrl, character);
  }
  return true;
};
