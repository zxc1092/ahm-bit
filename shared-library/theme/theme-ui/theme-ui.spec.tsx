import React from 'react';
import { render } from '@testing-library/react';
import { BasicThemeUi } from './theme-ui.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicThemeUi />);
  const rendered = getByText('Colors');
  expect(rendered).toBeTruthy();
});
