import React from 'react';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
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
            <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={2}>
              <Grid item>
                <IconButton aria-label="home" color="inherit">
                  <HomeIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="home" color="inherit">
                  <ShoppingCartIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
};
