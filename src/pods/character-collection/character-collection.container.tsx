import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { FormFilter } from '../filterForm'

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection, loadCharacterCollectionFilterName } = useCharacterCollection();
  const history = useHistory();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [newSearch, setNewSearch] = React.useState("");

  React.useEffect(() => {
    loadCharacterCollection(currentPage);
  }, [currentPage]);

  React.useEffect(() => {
    if (newSearch !== "") {
      loadCharacterCollectionFilterName(newSearch);
    }
  }, [newSearch]);



  const handlePagination = (e: React.ChangeEvent<HTMLInputElement>, paginita: number) => {
    setCurrentPage(paginita);
  };

  const handleDetails = (id: number) => {  
    history.push(linkRoutes.detailsCharacter(id));
  };


  const handlerNewfinder = (newSearchName) => {
    setNewSearch(newSearchName);

  }
  return (
    <>
    <FormFilter handlerName={ handlerNewfinder } />
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onPagination={handlePagination}
      onDetailsA={handleDetails} />
    </>
  );
};
