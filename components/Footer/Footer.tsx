import { BottomNavigation } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    marginTop: '-200px'
  }
});

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.stickToBottom}>
      <BottomNavigation>
        <p>Copyright &copy; 2020</p>
      </BottomNavigation>
    </div>
  );
};
