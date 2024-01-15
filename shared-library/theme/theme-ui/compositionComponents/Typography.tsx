/** @jsxImportSource theme-ui */
import { Flex, Heading, Text, ThemeUIStyleObject } from 'theme-ui';

interface TypoProps {
  fontFamily: string;
  fontWeight: string;
  fontSize: number[];
  lineHeight: string;
}

export type TypographyProps = {
  keyValue: string;
  typoList?: Record<string, ThemeUIStyleObject>;
  fontFamilyList?: { [key: string]: any };
  fontWeightList?: { [key: string]: any };
  lineHeightList?: { [key: string]: any };
};

export function Typography({
  keyValue,
  typoList,
  fontFamilyList,
  fontWeightList,
  lineHeightList,
}: TypographyProps) {
  return (
    <Flex sx={{ gap: 12, flexDirection: 'column' }}>
      <Heading variant="title4">Typographies</Heading>
      <Flex
        sx={{ gap: 12, flexDirection: 'column', justifyContent: 'flex-start' }}
      >
        {typoList &&
          Object.entries(typoList).map((typo, index) => {
            const typoValue = typo[1] as TypoProps;
            const fontSizes = typoValue.fontSize.map((size) => `${size}px`);
            return (
              <Flex
                key={`${keyValue}-${typo[0]}-${index}`}
                sx={{
                  flexDirection: 'column',
                  border: '1px solid',
                  borderColor: 'black',
                  p: 8,
                }}
              >
                <Text variant={typo[0]} color="primary" sx={{ mb: 16 }}>
                  {typo[0]}
                </Text>
                <Text variant="body1">Font Size: {fontSizes.join(' | ')}</Text>
                {fontFamilyList && (
                  <Text variant="body1">
                    Font Family: {fontFamilyList[typoValue.fontFamily]}
                  </Text>
                )}
                {fontWeightList && (
                  <Text variant="body1">
                    Font Weight: {fontWeightList[typoValue.fontWeight]}
                  </Text>
                )}
                {lineHeightList && (
                  <Text variant="body1">
                    Font Weight: {lineHeightList[typoValue.lineHeight]}
                  </Text>
                )}
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
}
