import * as React from 'react';
import { HotelEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useHotelCollection = () => {
  const [characterCollection, setHotelCollection] = React.useState<HotelEntityVm[]>(
    []
  );

  const loadHotelCollection = () => {
    getCharacterCollection().then((result) =>
      setHotelCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  return { characterCollection, loadHotelCollection };
};
