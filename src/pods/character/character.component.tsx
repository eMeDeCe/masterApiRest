import React, { useState } from 'react';
import { Character } from './character.vm';
import { Comment, createEmptyComment } from './comment.vm';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  TextFieldComponent } from 'common/components';

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
  comment: Comment;
  newComment: Comment;
  onSave: () => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave, comment, newComment } = props;
  const classes = useStyles();
  const [showFormComment, setShowFormComment] = React.useState(false);
  //const [newComment, setNewComment] = React.useState(createEmptyComment);
  const [initialValue, setInitialValue] =  React.useState("");


  function saveComment (event) {
    newComment.id = character.id;
    newComment.text = event.target.value;
    if (comment === undefined) {
      newComment.exist = false;
      console.log("dentro de uno vacio");
    } else {
      newComment.exist = true;
      console.log("dentro de uno lleno");
    }
  }

  function valuesForm () {

  }

  function comments () {
    if (comment !== undefined) {
      return (<Typography key={comment.id} variant="body2" color="textSecondary" component="p">
      {comment.text}
      </Typography>)
    }
    
  }


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
          {comments()}
        </CardContent>
      </CardActionArea>
      <Button variant="contained" onClick={() => showFormComment ? setShowFormComment(false) : setShowFormComment(true)}> Comentario</Button>
      </Card>
    <div className={showFormComment ? classes.showForm : classes.hideForm}>
      <Formik
        onSubmit={onSave}
        initialValues={newComment}
        enableReinitialize={true}
      >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="nuevoComentario" label="Comentario" onChange={saveComment}  value={initialValue}/>
          <Button type="submit" variant="contained" color="primary" >
            Save
          </Button>
        </Form>
      )}
      </Formik>
    </div>
      
      </>
  );
};

