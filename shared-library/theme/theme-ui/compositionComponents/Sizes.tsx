/** @jsxImportSource theme-ui */
import { Flex, Heading, Text } from 'theme-ui';

export type ColorsProps = {
  keyValue: string;
  spaceList?: { [key: string]: any };
};

export function Sizes({ keyValue, spaceList }: ColorsProps) {
  return (
    <Flex sx={{ gap: 12, flexDirection: 'column' }}>
      <Heading variant="title4">Sizes</Heading>
      <Heading variant="title6">Example: Width</Heading>
      <Text variant="body1">
        Can be used for widths, heights, max-widths, max-heights
      </Text>
      <Flex
        sx={{ gap: 12, flexDirection: 'column', justifyContent: 'flex-start' }}
      >
        {spaceList &&
          (Object.entries(spaceList) as [string, string][]).map(
            (space, index) => (
              <Flex
                bg="black"
                key={`${keyValue}-${space}-${index}`}
                sx={{ gap: 16, alignItems: 'center' }}
              >
                <Flex
                  bg="primary"
                  sx={{
                    height: '5rem',
                    width: '100%',
                    maxWidth: space[0],
                    alignItems: 'center',
                  }}
                >
                  {parseInt(space[0], 10) > 400 && (
                    <Text variant="title4" color="white">
                      {space[0]}: {space[1]}: {space[0]}px
                    </Text>
                  )}
                </Flex>
                {parseInt(space[0], 10) <= 400 && (
                  <Text variant="title4" color="white">
                    {space[0]}: {space[1]}: {space[0]}px
                  </Text>
                )}
              </Flex>
            )
          )}
      </Flex>
    </Flex>
  );
}
