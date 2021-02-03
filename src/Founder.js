import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Founder({name,src,rank,skill,exper,portfolio,githubl}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      
      <CardMedia
        className={classes.media}
        image={src}
        title="Paella dish"
      />
      <CardContent>
<h3>{name}</h3>
<h6>{rank}</h6>
<h6>Skills:{skill}</h6>
<h6>Experience:{exper}</h6>
<h6>GitHub:{githubl}</h6>
<h6>Portfolio:{portfolio}</h6>


      </CardContent>
      
      
    </Card>
  );
}
