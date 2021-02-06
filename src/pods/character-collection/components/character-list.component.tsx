import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { CharacterEntityVm } from '../character-collection.vm';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));


interface Props {
    character: CharacterEntityVm;
    onDetails: (id: number) => void;
    onComment: (id: number) => void;

}
  

export const CharacterList: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  const { character, onDetails, onComment } = props;
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start"  onClick={() => onDetails(character.id)}>
        <ListItemAvatar>
          <Avatar alt={character.name} src={character.image} />
        </ListItemAvatar>
        <ListItemText
          primary= {character.name}
          secondary={
            <React.Fragment>
              {character.gender}
            </React.Fragment>
          }
        />
       
      </ListItem>  
      <ListItemText 
          secondary="Comentarios"
          onClick={() => onComment(character.id)}
        />
      <Divider variant="inset" component="li" />
    </List>
  );
}
