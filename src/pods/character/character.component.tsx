import React from 'react';
import { Character } from './character.vm';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character} = props;
  const classes = useStyles();

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
            {character.origin.name}  <br />
            {character.status}  <br />
            {character.species}  <br />
            {character.gender}  <br />
            <br />
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card></>
  );
};
