/** @jsxImportSource theme-ui */
import { Box, ColorModesScale, Flex, Heading, Text } from 'theme-ui';

export type ColorsProps = {
  keyValue: string;
  colorList?: ColorModesScale;
};

export function Colors({ keyValue, colorList }: ColorsProps) {
  return (
    <Flex sx={{ gap: 12, flexDirection: 'column' }}>
      <Heading variant="title4">Colors</Heading>
      <Flex sx={{ gap: 12, flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        {colorList &&
          (Object.entries(colorList) as any[]).map((color, index) => (
            <Flex
              key={`${keyValue}-${color}-${index}`}
              sx={{ flexDirection: 'column', gap: 12, alignItems: 'center' }}
            >
              <Flex
                bg={color[0]}
                sx={{
                  height: '5rem',
                  width: '8rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  border: '1px solid',
                }}
              >
                <Box
                  bg="background"
                  color="text"
                  padding={4}
                  sx={{ borderRadius: '1rem' }}
                >
                  {color[1]}
                </Box>
              </Flex>
              <Text variant="body4">{color[0]}</Text>
            </Flex>
          ))}
      </Flex>
    </Flex>
  );
}
