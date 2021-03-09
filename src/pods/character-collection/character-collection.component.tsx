import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterList } from '../character/components/character-list.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  oncreateCharacter: () => void;
  onDetails: (id: number) => void;
  onDelete: (id: number) => void
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, oncreateCharacter, onDetails, onDelete } = props;

  return (
    <div className={classes.root}>


      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterList character={character} onDetails={onDetails} />
          </li>
        ))}
      </ul>
    </div>
  );
};
