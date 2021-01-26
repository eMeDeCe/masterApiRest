import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { getCharacter } from './api';
import { useHotelCollection } from './character-collection.hook';
import { HotelCollectionComponent } from './character-collection.component';

export const HotelCollectionContainer = () => {
  const { characterCollection, loadHotelCollection } = useHotelCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadHotelCollection();
  }, []);

  const handleCreateHotel = () => {
    history.push(linkRoutes.createHotel);
  };

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editHotel(id));
  };

  const handleDelete = async (id: string) => {
    await getCharacter(id);
    loadHotelCollection();
  };

  return (
    <HotelCollectionComponent
      characterCollection={characterCollection}
      onCreateHotel={handleCreateHotel}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
