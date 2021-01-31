import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
    id: character.id,
    name: character.name,
    species: character.species,
    gender: character.gender,
    created: character.created,
});
