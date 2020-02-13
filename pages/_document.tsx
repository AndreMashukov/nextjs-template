import { MaterialPageContext } from '../lib/initPageContext';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document<{
  pageContext: MaterialPageContext;
}> {

  // tslint:disable-next-line: no-any
  static async getInitialProps(ctx: any) {
    // Render app and page and get the context of the page with collected side effects.
    // tslint:disable-next-line: no-any
    let pageContext: MaterialPageContext = null as any;
    // tslint:disable-next-line: no-any
    const page = ctx.renderPage((Component: any) => {
      // tslint:disable-next-line: no-any
      const WrappedComponent = (props: any) => {
        pageContext = props.pageContext;
        // pageContext may be undefined in case of error
        return pageContext ? (
          // tslint:disable-next-line: no-any
          (pageContext.sheets.collect(<Component {...props} />) as any)
        ) : (
          <Component {...props} />
        );
      };

      return WrappedComponent;
    });

    return {
      ...page,
      pageContext,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: pageContext.sheets.getStyleElement()
    };
  }

  render() {
    const { pageContext } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta
            name="theme-color"
            content={
              pageContext ? pageContext.theme.palette.primary.main : null
            }
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
