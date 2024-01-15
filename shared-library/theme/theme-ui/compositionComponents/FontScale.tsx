/** @jsxImportSource theme-ui */
import { Flex, Heading, Text } from 'theme-ui';

export type ColorsProps = {
  keyValue: string;
  scaleList?: { [key: string]: any };
};

export function FontScale({ keyValue, scaleList }: ColorsProps) {
  return (
    <Flex sx={{ gap: 12, flexDirection: 'column' }}>
      <Heading variant="title4">Font Sizes</Heading>
      <Flex
        sx={{ gap: 12, flexDirection: 'column', justifyContent: 'flex-start' }}
      >
        {scaleList &&
          (Object.entries(scaleList) as [string, string][])
            .reverse()
            .map((scale, index) => (
              <Text
                key={`${keyValue}-${scale[0]}-${index}`}
                color="black"
                sx={{ fontSize: scale[0], fontFamily: 'primary' }}
              >
                {scale[0]}: {scale[1]}: {scale[0]}px
              </Text>
            ))}
      </Flex>
    </Flex>
  );
}
