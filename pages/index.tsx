import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    // height: '100vh',
    width: '100vw',
    justifyContent: 'center',
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

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    </div>
  );
};