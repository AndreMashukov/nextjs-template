import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Theme } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import './Home.scss';

interface Props {
  classes: {
    root: string;
  };
}

const styles = ({ palette }: Theme) => createStyles({
  root: {
    backgroundColor: palette.background.default,
    color: palette.primary.main
  }
});

export const HomeMain = class extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.classes.root}>
        <div className="home-layout">
          <div className="card-root">
            <Card className="card">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
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
      </div>
    );
  }
};

export const Home = withStyles(styles) (HomeMain);
