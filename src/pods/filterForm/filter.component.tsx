import React from 'react';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useCharacterCollection } from '../character-collection/character-collection.hook';

interface Props {
  handlerName: (characterName: string)  => void;
}
export const FormFilter: React.FunctionComponent<Props> = (
  props
  ) => {
 
 
  const formik = useFormik({
    initialValues: {
      characterName: ''
    },
  
    onSubmit: () => {},
  });

  return (
    <div >
      <form >
        <TextField
          fullWidth
          id="characterName"
          name="characterName"
          label="Search Character"
          value={formik.values.characterName}
          onChange={formik.handleChange}
        />
       
        <Button color="primary" variant="contained" fullWidth  onClick={function () {  props.handlerName (formik.values.characterName) }} >
          Submit
        </Button>
      </form>
    </div>
  );
};