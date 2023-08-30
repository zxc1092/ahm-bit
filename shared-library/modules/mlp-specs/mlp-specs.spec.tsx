import React from 'react';
import { render } from '@testing-library/react';
import { DefaultMlpSpecs } from './mlp-specs.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<DefaultMlpSpecs />);
  const rendered = getByText('Exceptionally designed. elegantly electric.');
  expect(rendered).toBeTruthy();
});
