/** @jsxImportSource theme-ui */
import { Box, Flex, Heading, Text } from 'theme-ui';

export type HeroVehicleProps = {
  title: string;
  subtitle: string;
  video: {
    aspectRatio: number;
    src: string;
    poster: string;
  };
  disclaimer: string;
};

export function HeroVehicle({
  title,
  subtitle,
  video,
  disclaimer,
}: HeroVehicleProps) {
  return (
    <Flex sx={{ flexDirection: 'column', position: 'relative' }}>
      <Box sx={{ position: 'relative', aspectRatio: video.aspectRatio }}>
        <video
          src={video.src}
          poster={video.poster}
          autoPlay
          width="100%"
          height="100%"
          muted
          sx={{ objectFit: 'cover' }}
        >
          <p>Html5 videos not supported</p>
        </video>
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: ['center', 'flex-start'],
            justifyContent: ['flex-end', 'center'],
            position: 'absolute',
            bottom: 0,
            top: 0,
            width: '100%',
            height: '100%',
            px: 48,
            pb: [32, 0],
          }}
        >
          <Heading as="h1" variant="title1" color="white">
            {title}
          </Heading>
          <Text as="span" variant="subtitle1" color="white">
            {subtitle}
          </Text>
        </Flex>
      </Box>
      <Text
        variant="disclaimer1"
        sx={{
          px: 48,
          pt: 32,
          pb: [32, 0],
          backgroundColor: ['black', 'transparent'],
          color: 'white',
          textAlign: 'center',
          position: ['relative', 'absolute'],
          bottom: ['auto', 48],
          width: '100%',
        }}
      >
        {disclaimer}
      </Text>
    </Flex>
  );
}
