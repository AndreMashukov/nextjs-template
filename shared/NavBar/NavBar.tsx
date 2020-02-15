import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { CATEGORIES } from '../../global-definitions';
import './NavBar.scss';

export const NavBar = class extends React.Component {
  // tslint:disable-next-line: no-any
  constructor(props: any) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount = async () => {
    const cats = CATEGORIES;
    this.setState({ categories: cats });
  };
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <div className="navbar-layout">
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
              <Grid item>
                <Typography variant="h6">Home</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Cart</Typography>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
};
