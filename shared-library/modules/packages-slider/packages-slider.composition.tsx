import React from 'react';
import { Box } from 'theme-ui';
import {
  ThemeUi,
  configAcura,
  configDefault,
  configHonda,
} from '@ahm-bit/shared-library.theme.theme-ui';
import { PackagesSlider } from './packages-slider';
import { sliderTestData } from './data';

export const DefaultPackagesSlider = () => {
  return (
    <Box sx={{ maxWidth: '2000px', margin: '0 auto' }}>
      <ThemeUi config={configDefault}>
        <PackagesSlider
          title="ZDX"
          subtitle="6 UNique Trims to Choose From"
          data={sliderTestData}
        />
      </ThemeUi>
    </Box>
  );
};
export const AcuraPackagesSlider = () => {
  return (
    <Box sx={{ maxWidth: '2000px', margin: '0 auto' }}>
      <ThemeUi config={configAcura}>
        <PackagesSlider
          title="ZDX"
          subtitle="6 UNique Trims to Choose From"
          data={sliderTestData}
        />
      </ThemeUi>
    </Box>
  );
};
export const HondaPackagesSlider = () => {
  return (
    <Box sx={{ maxWidth: '2000px', margin: '0 auto' }}>
      <ThemeUi config={configHonda}>
        <PackagesSlider
          title="ZDX"
          subtitle="6 UNique Trims to Choose From"
          data={sliderTestData}
        />
      </ThemeUi>
    </Box>
  );
};
