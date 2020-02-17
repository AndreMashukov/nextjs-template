import React from 'react';
import { makeStyles } from '@material-ui/styles';
import './Home.scss';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  card: {
    width: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export const Home = () => {
  const classes = useStyles();

  return (
    <div className="home-layout">
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Categories
            </Typography>
            <Typography variant="h5" component="h2">
              Consumer Electronics
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">See More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
