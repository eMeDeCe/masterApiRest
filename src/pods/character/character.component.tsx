import React from 'react';
import { Character } from './character.vm';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
    },
  },
  media: {
    height: 140,
  },
  hideForm: {
    display: 'none'
  },
  showForm: {
    display: 'block'
  }
}));



interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave} = props;
  const classes = useStyles();

  const [showFormComment, setShowFormComment] = React.useState(false);

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={character.name}
            src={character.image}
            title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {character.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               {character.location.name}
            </Typography>
            <Typography variant="body2" component="p">
            {character.origin.name}  <br/>
            {character.status}  <br/>
            {character.species}  <br/>
            {character.gender}  <br/>
            <br />
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Comentarios
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Aquí van a ir los comentarios
          </Typography>
        </CardContent>
        <Button variant="contained" onClick={() => showFormComment ? setShowFormComment(false) : setShowFormComment(true)}> Comentario</Button>
      </CardActionArea>
      </Card>

      <div className={showFormComment ? classes.showForm : classes.hideForm}>
        <Formik
        initialValues={character}
        onSubmit={onSave}>
        {() => (
          <Form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-multiline-flexible"
              label="Modifica la opinión"
              multiline
              rowsMax={4}
            />
            <Button type="submit" variant="contained">Guardar</Button>
          </Form>
        )}
        </Formik>
      </div>
      
      </>

  );
};

