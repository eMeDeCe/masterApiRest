import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterList } from '../character/components/character-list.component';
import * as classesList from './character-collection.styles';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStylesPagination = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

interface Props {
  characterCollection: CharacterEntityVm[];
  onPagination: (e: React.ChangeEvent<HTMLInputElement>, page: number) => void;
  onDetailsA: (id: number) => void;
}
 
export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
  ) => {
    const classesPag = useStylesPagination();
    const { characterCollection, onDetailsA, onPagination } = props;
    
  return (
    <>
   
    <div className={classesList.root}>
      <ul className={classesList.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterList character={character} onDetails={onDetailsA} />
          </li>
        ))}
      </ul>
    </div>
    <div className={classesPag.root}>
      <Pagination count={34} onChange={onPagination} />
    </div>
    </>
  );
};
