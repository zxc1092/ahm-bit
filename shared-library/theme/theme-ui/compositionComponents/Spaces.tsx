/** @jsxImportSource theme-ui */
import { Box, Flex, Heading, Text } from 'theme-ui';

export type ColorsProps = {
  keyValue: string;
  spaceList?: { [key: string]: any };
};

export function Spaces({ keyValue, spaceList }: ColorsProps) {
  return (
    <Flex sx={{ gap: 12, flexDirection: 'column' }}>
      <Heading variant="title4">Spaces</Heading>
      <Heading variant="title6">Example: Padding</Heading>
      <Text variant="body1">
        Can be used for margins, paddings, gap(space between elements in a flex
        container)
      </Text>
      <Flex
        sx={{ gap: 12, flexDirection: 'column', justifyContent: 'flex-start' }}
      >
        {spaceList &&
          (Object.entries(spaceList) as [string, string][]).map(
            (space, index) => (
              <Flex
                key={`${keyValue}-${space}-${index}`}
                sx={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  bg="primary"
                  sx={{
                    width: '100%',
                    border: '1px solid',
                    borderColor: 'black',
                    p: space[1],
                  }}
                >
                  <Flex
                    bg="black"
                    sx={{
                      height: '5rem',
                      width: '100%',
                      border: '3px solid',
                      borderColor: 'black',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text variant="title4" color="white">
                      {space[0]}px
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            )
          )}
      </Flex>
    </Flex>
  );
}
