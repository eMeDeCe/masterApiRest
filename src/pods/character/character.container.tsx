import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { createEmptyComment } from './comment.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const [comment, setComment] = React.useState(createEmptyComment);
  const [newComment, setNewComment] = React.useState(createEmptyComment);
  const {id} : any = useParams(); // Impotante revisar *ma*
  const history = useHistory();


  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };
  const handleLoadComment = async () => {
    const apiComment = await api.getComment(id);
    //console.log(">>", apiComment);
    setComment(apiComment);
    //setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
      handleLoadComment();
    }
  }, []);

  const handleSave = async () => {
    console.log("handle Save >>", newComment);
    //const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveComment(newComment);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save comment');
    }
  };


  return <><CharacterComponent character={character} comment={comment} newComment={newComment} onSave={handleSave}/></>;
};
