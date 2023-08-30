import React, { ReactNode } from 'react';
import { Theme, ThemeUIProvider } from 'theme-ui';
import { configDefault } from './configs/default';
import '@fontsource/noto-sans';
import '@fontsource/montserrat';

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
      <ThemeUIProvider theme={config || configDefault}>
        {children}
      </ThemeUIProvider>
    </>
  );
}
