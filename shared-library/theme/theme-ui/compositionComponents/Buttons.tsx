/** @jsxImportSource theme-ui */
import { Button, Flex, Heading, Text, ThemeUIStyleObject } from 'theme-ui';

export type ButtonsProps = {
  keyValue: string;
  buttonList?: Record<string, ThemeUIStyleObject>;
};

export function Buttons({ keyValue, buttonList }: ButtonsProps) {
  return (
    <Flex sx={{ gap: 12, flexDirection: 'column' }}>
      <Heading variant="title4">Buttons</Heading>
      <Flex
        sx={{ gap: 12, flexDirection: 'column', justifyContent: 'flex-start' }}
      >
        {buttonList &&
          Object.entries(buttonList).map((typo, index) => {
            return (
              <Flex
                key={`${keyValue}-${typo[0]}-${index}`}
                sx={{
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  border: '1px solid',
                  borderColor: 'black',
                  p: 8,
                }}
              >
                <Button variant={typo[0]} sx={{ mb: 16 }}>
                  {typo[0] !== 'swiperDot' ? typo[0] : ''}
                </Button>
                {typo[0] === 'swiperDot' && (
                  <Text variant="body1">{typo[0]}</Text>
                )}
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
}
