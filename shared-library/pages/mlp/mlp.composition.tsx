import React from 'react';
import { Box } from 'theme-ui';
import {
  ThemeUi,
  configDefault,
  configAcura,
  configHonda,
} from '@ahm-bit/shared-library.theme.theme-ui';
import { Mlp } from './mlp';

export const DefaultMlp = () => {
  return (
    <Box sx={{ maxWidth: '2000px', margin: '0 auto' }}>
      <ThemeUi config={configDefault}>
        <Mlp />
      </ThemeUi>
    </Box>
  );
};
export const AcuraMlp = () => {
  return (
    <Box sx={{ maxWidth: '2000px', margin: '0 auto' }}>
      <ThemeUi config={configAcura}>
        <Mlp />
      </ThemeUi>
    </Box>
  );
};
export const HondaMlp = () => {
  return (
    <Box sx={{ maxWidth: '2000px', margin: '0 auto' }}>
      <ThemeUi config={configHonda}>
        <Mlp />
      </ThemeUi>
    </Box>
  );
};
