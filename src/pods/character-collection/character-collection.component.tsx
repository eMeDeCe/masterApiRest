import * as React from 'react';
import Button from '@material-ui/core/Button';
import { HotelEntityVm } from './character-collection.vm';
import { HotelCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: HotelEntityVm[];
  onCreateHotel: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const HotelCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateHotel, onEdit, onDelete } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateHotel}>
        Add character
      </Button>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <HotelCard character={character} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};
