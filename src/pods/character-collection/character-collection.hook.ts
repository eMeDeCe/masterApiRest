import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection, getCharacterCollectionFilterName } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );
  const loadCharacterCollection = (currentPage) => {
    getCharacterCollection(currentPage).then((result) =>
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    );
  };
 

  const loadCharacterCollectionFilterName = function (newSearch) {
    getCharacterCollectionFilterName(newSearch)
    .then((result) =>
    setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    );
  }


  return { characterCollection, loadCharacterCollection, loadCharacterCollectionFilterName};
};
