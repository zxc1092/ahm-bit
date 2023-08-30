/** @jsxImportSource theme-ui */
import { Box, Flex } from 'theme-ui';
import { configDefault } from './configs/index';
import { ThemeUi } from './theme-ui';

export const BasicThemeUi = () => {
  return (
    <ThemeUi>
      <Flex sx={{ gap: '10px' }}>
        <h1>Colors</h1>
        {configDefault?.colors &&
          Object.entries(configDefault.colors).map((color, index) => (
            <Flex
              key={index}
              bg={color[0]}
              sx={{
                height: '5rem',
                width: '5rem',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                border: '1px solid',
              }}
            >
              <Box
                bg="background"
                color="text"
                padding="1"
                sx={{ borderRadius: '1rem' }}
              >
                {color[1] as string}
              </Box>
            </Flex>
          ))}
      </Flex>
    </ThemeUi>
  );
};
