import React from 'react';
import App from 'next/app';
import AppComponentProps from 'next/app';
import withMaterial, { MaterialAppComponentProps } from '../theme/withMaterial';
import Store from '../store/Store';
import { NavBar } from '../shared';

interface Props extends AppComponentProps, MaterialAppComponentProps {}

class MyApp extends App<Props> {
  render() {
    // pageContext is from withMaterial
    const { Component, pageProps, pageContext } = this.props;
    return (
      <Store>
        <NavBar />
        <Component pageContext={pageContext} {...pageProps} />
      </Store>
    );
  }
}

export default withMaterial(MyApp);
