/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import {
  ThemeUi,
  configAcura,
  configDefault,
  configHonda,
} from '@ahm-bit/shared-library.theme.theme-ui';
import { MlpSpecs } from './mlp-specs';

const data = [
  {
    upperLabel: 'Over',
    value: '300',
    lowerLabel: 'miles per charge',
  },
  {
    upperLabel: 'Over',
    value: '500',
    lowerLabel: 'horsepower on Type-S',
  },
  {
    upperLabel: 'Up to',
    value: '79',
    lowerLabel: 'miles per chrage in 10 minutes',
  },
  {
    upperLabel: 'Up to',
    value: '10',
    lowerLabel: 'year battery warranty',
  },
];

export const DefaultMlpSpecs = () => {
  return (
    <Box sx={{ maxWidth: '2000px', margin: '0 auto' }}>
      <ThemeUi config={configDefault}>
        <MlpSpecs
          title="Exceptionally designed. elegantly electric."
          stats={data}
        />
      </ThemeUi>
    </Box>
  );
};
export const AcuraMlpSpecs = () => {
  return (
    <Box sx={{ maxWidth: '2000px', margin: '0 auto' }}>
      <ThemeUi config={configAcura}>
        <MlpSpecs
          title="Exceptionally designed. elegantly electric."
          stats={data}
        />
      </ThemeUi>
    </Box>
  );
};
export const HondaMlpSpecs = () => {
  return (
    <Box sx={{ maxWidth: '2000px', margin: '0 auto' }}>
      <ThemeUi config={configHonda}>
        <MlpSpecs
          title="Exceptionally designed. elegantly electric."
          stats={data}
        />
      </ThemeUi>
    </Box>
  );
};
