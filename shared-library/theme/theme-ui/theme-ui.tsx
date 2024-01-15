import React, { ReactNode } from 'react';
import { Theme, ThemeUIProvider } from 'theme-ui';
import { configDefault } from './configs/default';

export type ThemeUiProps = {
  /**
   * a node to be rendered in the special component.
   */
  config?: Theme;
  children?: ReactNode;
};

export function ThemeUi({ children, config }: ThemeUiProps) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <ThemeUIProvider theme={config || configDefault}>
        {children}
      </ThemeUIProvider>
    </>
  );
}
