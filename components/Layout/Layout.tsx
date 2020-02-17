import React from 'react';
import { Theme } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import './Layout.scss';

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

export const PageLayout = class extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.classes.root}>
        {this.props.children}
      </div>
    );
  }
};

export const Layout = withStyles(styles) (PageLayout);
