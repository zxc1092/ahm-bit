/** @jsxImportSource theme-ui */
import { Flex, Heading, Text } from 'theme-ui';

export type MlpSpecsProps = {
  /**
   * a node to be rendered in the special component.
   */
  title?: string;
  stats?: {
    upperLabel: string;
    value: string;
    lowerLabel: string;
  }[];
};

export function MlpSpecs({ title, stats }: MlpSpecsProps) {
  return (
    <Flex
      sx={{
        flexDirection: ['column', 'row'],
        alignItems: ['stretch', 'center'],
        justifyContent: 'center',
        px: 20,
        py: 64,
        gap: 32,
        maxWidth: '2000px',
        m: '0 auto',
      }}
    >
      <Heading as="h1" variant="title2" sx={{ textAlign: ['center', 'left'] }}>
        {title}
      </Heading>
      <Flex sx={{ flexWrap: 'wrap', rowGap: [20, 0], columnGap: 24 }}>
        {stats?.map((stat, index) => (
          <Flex
            key={index}
            sx={{
              flexDirection: 'column',
              width: 'calc((100% - 32px) * .5)',
              borderTop: [0, '.0625rem solid black'],
              alignItems: 'center',
              textAlign: 'center',
              py: [0, 20],
            }}
          >
            <Text variant="body1">{stat.upperLabel}</Text>
            <Text variant="title3">{stat.value}</Text>
            <Text variant="body1">{stat.lowerLabel}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
