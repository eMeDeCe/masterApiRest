import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCharacterCollection } from './character.mock-data';

//const url = 'https://rickandmortyapi.com/api/character'
const url = 'api/characters';
const characterListUrl = 'api/comments';


export const getCharacter = async (id: number): Promise<Character> => {
   const response = await fetch(url+"/"+id);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const getComment = async (idCharacter: number) => {
  
  try {
   const response = await fetch(characterListUrl+"/"+idCharacter);
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(response.statusText);
    }
  } catch(e) {
    console.log("ERROR", e);
  }
  
 
 
};

export const saveComment = async (comment): Promise<boolean> => {
  console.log("dentro del saveComment");
  console.log("exist ", comment.exist);
  if (!comment.exist) {
    await fetch(characterListUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment)
    })
  } else {
    await fetch(`${characterListUrl}/${comment.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment)
    })
  }

   return true;
 };