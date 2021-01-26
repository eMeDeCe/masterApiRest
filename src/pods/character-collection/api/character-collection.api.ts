import { HotelEntityApi } from './character-collection.api-model';
import { mockHotelCollection } from './character-collection.mock-data';

let characterCollection = [...mockHotelCollection];

export const getCharacterCollection = async (): Promise<HotelEntityApi[]> => {
  return characterCollection;
};

export const getCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
