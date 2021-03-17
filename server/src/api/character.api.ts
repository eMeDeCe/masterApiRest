import { Router } from 'express';
import {
  CharacterEdit,
  getCharacterList,
  getCharacter,
  updateCharacter,
  insertCharacter,
} from '../db';

export const characterApi = Router();
console.log("hoooola");
characterApi
  .get('/', async (req, res) => {
    const characters = await getCharacterList();
    res.send(characters);
  })
  .get('/:id', async (req, res) => {
    const id : any  = req.params.id;
    const character = await getCharacter(id);
    res.send(character);
  })
  .post('/', async (req, res) => {
    const characterEdit: CharacterEdit = req.body;
    const id = await insertCharacter(characterEdit);
    res.send(id);
  })
  .patch('/:id', async (req, res) => {
    const characterEdit: CharacterEdit = req.body;
    await updateCharacter(characterEdit);
    res.sendStatus(200);
  });
