/** @jsxImportSource theme-ui */
import {
  ThemeUi,
  configAcura,
  configDefault,
  configHonda,
} from '@ahm-bit/shared-library.theme.theme-ui';
import { Box } from 'theme-ui';
import { HeroVehicle } from './hero-vehicle';

export const DefaultHeroVehicle = () => {
  return (
    <Box sx={{ maxWidth: '2000px', margin: '0 auto' }}>
      <ThemeUi config={configDefault}>
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
      </ThemeUi>
    </Box>
  );
};
export const AcuraHeroVehicle = () => {
  return (
    <Box sx={{ maxWidth: '2000px', margin: '0 auto' }}>
      <ThemeUi config={configAcura}>
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
      </ThemeUi>
    </Box>
  );
};
export const HondaHeroVehicle = () => {
  return (
    <Box sx={{ maxWidth: '2000px', margin: '0 auto' }}>
      <ThemeUi config={configHonda}>
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
      </ThemeUi>
    </Box>
  );
};
