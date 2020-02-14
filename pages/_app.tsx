import React from 'react';
import App from 'next/app';
import AppComponentProps from 'next/app';
import withMaterial, { MaterialAppComponentProps } from '../lib/withMaterial';

interface Props extends AppComponentProps, MaterialAppComponentProps {}

class MyApp extends App<Props> {
  render() {
    // pageContext is from withMaterial
    const { Component, pageProps, pageContext } = this.props;
    return (
      <Component pageContext={pageContext} {...pageProps} />
    );
  }
}

export default withMaterial(MyApp);