import React from 'react';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

interface Props {
  handlerName: (characterName: string)  => void;
}
export const FormFilter: React.FunctionComponent<Props> = (
  props
  ) => {
 
 
  const formik = useFormik({
    initialValues: {
      characterName: ""
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
          label="Buscar Personaje"
          value={formik.values.characterName}
          onChange={formik.handleChange}
        />
       
        <Button color="primary" variant="contained" fullWidth  onClick={function () {  props.handlerName (formik.values.characterName) }} >
          Buscar
        </Button>
      </form>
    </div>
  );
};