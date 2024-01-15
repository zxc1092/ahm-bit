import React from 'react';
import { render } from '@testing-library/react';
import { DefaultThemeUi } from './theme-ui.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<DefaultThemeUi />);
  const rendered = getByText('Colors');
  expect(rendered).toBeTruthy();
});
