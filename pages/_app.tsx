import React from 'react';
import App, { Container } from 'next/app';
import AppComponentProps from 'next/app';
import withMaterial, { MaterialAppComponentProps } from '../lib/withMaterial';

interface Props extends AppComponentProps, MaterialAppComponentProps {}

class MyApp extends App<Props> {
  render() {
    // pageContext is from withMaterial
    const { Component, pageProps, pageContext } = this.props;
    return (
      <Container>
        <Component pageContext={pageContext} {...pageProps} />
      </Container>
    );
  }
}

export default withMaterial(MyApp);