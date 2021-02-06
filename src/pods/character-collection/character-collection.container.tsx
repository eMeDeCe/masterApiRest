import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { getCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateCharacter = () => {
    history.push(linkRoutes.createCharacter);
  };

  const handleDetails = (id: number) => {
    
    history.push(linkRoutes.detailsCharacter(id));
  };

  const handleDelete = async (id: number) => {
    /*await getCharacter(id);
    loadCharacterCollection();*/
    console.log("aqui");
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      oncreateCharacter={handleCreateCharacter}
      onDetails={handleDetails}
      onDelete={handleDelete}
    />
  );
};
