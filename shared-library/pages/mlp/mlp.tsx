/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui';
import { HeroVehicle } from '@ahm-bit/shared-library.modules.hero-vehicle';
import { MlpSpecs } from '@ahm-bit/shared-library.modules.mlp-specs';
import { PackagesSlider } from '@ahm-bit/shared-library.modules.packages-slider';

import { sliderTestData } from './data';

export function Mlp() {
  return (
    <Flex sx={{ flexDirection: 'column', pb: 64 }}>
      <HeroVehicle
        title="2024 ZDX"
        subtitle="Starting at $64,395"
        video={{
          aspectRatio: 697 / 397,
          src: 'https://www.acura.com/-/media/Acura-Platform/Related-Vehicles-Pages/Type-S/Overview/Hero/Rocky-Reveal/Type-S-Reveal/Type_S_hero.mp4',
          poster:
            'https://www.acura.com/-/media/Acura-Platform/Related-Vehicles-Pages/Type-S/Overview/Hero/Rocky-Reveal/Type-S-Reveal/Acura-Integra-Type-S-hero-xl.jpg',
        }}
        disclaimer="Shown: ZDX Type S in Tiger Eye Pearl* with Acura Genuine Accessories. Starting at $52,590*"
      />
      <MlpSpecs
        title="Exceptionally designed. elegantly electric."
        stats={[
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
        ]}
      />
      <PackagesSlider
        title="A ZDX For Everyone"
        subtitle="6 UNique Trims to Choose From"
        data={sliderTestData}
      />
    </Flex>
  );
}
