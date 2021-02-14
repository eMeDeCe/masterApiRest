import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCharacterCollection } from './character.mock-data';

//const url = 'https://rickandmortyapi.com/api/character'
const url = 'api/characters'
const characterListUrl = 'api/comments'


export const getCharacter = async (id: number): Promise<Character> => {
   const response = await fetch(url+"/"+id);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  console.log(character.id);
  if (character.type !== "") {
    console.log("dentro de put");
   /* await fetch(`${characterListUrl}/${character.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });*/
  } else {
    console.log("dentro de post");
   /* await fetch(characterListUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });*/
  }
   return true;
 };