import crypto from 'crypto';
import { createDefaultCharacter, mockCharacters } from './mock-data';
import { Character, CharacterEdit } from './models';

let characters = [...mockCharacters];

export const getCharacterList = async (): Promise<Character[]> => characters;

export const getCharacter = async (id: string): Promise<Character> =>
  characters.find((h) => h.id === id);

export const insertCharacter = async (characterEdit: CharacterEdit) => {
  const newId = crypto.randomBytes(16).toString('hex');
  characters = [
    ...characters,
    {
      ...createDefaultCharacter(),
      ...characterEdit,
      id: newId,
    },
  ];
  return newId;
};

export const updateCharacter = async (characterEdit: CharacterEdit): Promise<boolean> => {
  characters = characters.map((h) =>
    h.id === characterEdit.id
      ? {
          ...h,
          ...characterEdit,
        }
      : h
  );

  return true;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characters = characters.filter((h) => h.id !== id);
  return true;
};
