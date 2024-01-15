/** @jsxImportSource theme-ui */
import { Divider, Flex } from 'theme-ui';

import { configDefault, configAcura, configHonda } from './configs/index';
import { ThemeUi } from './theme-ui';
import { Colors } from './compositionComponents/Colors';
import { Spaces } from './compositionComponents/Spaces';
import { Sizes } from './compositionComponents/Sizes';
import { FontScale } from './compositionComponents/FontScale';
import { Typography } from './compositionComponents/Typography';
import { Buttons } from './compositionComponents/Buttons';

export const DefaultThemeUi = () => {
  return (
    <ThemeUi>
      <Flex sx={{ flexDirection: 'column', mb: 64, px: 24 }}>
        <Colors keyValue="default" colorList={configDefault.colors} />
        <Divider marginY="24" />
        <Spaces keyValue="default" spaceList={configDefault.space} />
        <Divider marginY="24" />
        <Sizes keyValue="default" spaceList={configDefault.sizes} />
        <Divider marginY="24" />
        <FontScale keyValue="default" scaleList={configDefault.fontSizes} />
        <Divider marginY="24" />
        <Typography
          keyValue="default"
          typoList={configDefault.text}
          fontFamilyList={configDefault.fonts}
          fontWeightList={configDefault.fontWeights}
          lineHeightList={configDefault.lineHeights}
        />
        <Divider marginY="24" />
        <Buttons keyValue="default" buttonList={configDefault.buttons} />
      </Flex>
    </ThemeUi>
  );
};

export const AcuraThemeUi = () => {
  return (
    <ThemeUi config={configAcura}>
      <Flex sx={{ flexDirection: 'column', mb: 64, px: 24 }}>
        <Colors keyValue="acura" colorList={configAcura.colors} />
        <Divider marginY="24" />
        <Spaces keyValue="acura" spaceList={configAcura.space} />
        <Divider marginY="24" />
        <Sizes keyValue="acura" spaceList={configAcura.sizes} />
        <Divider marginY="24" />
        <FontScale keyValue="acura" scaleList={configAcura.fontSizes} />
        <Divider marginY="24" />
        <Typography
          keyValue="default"
          typoList={configAcura.text}
          fontFamilyList={configAcura.fonts}
          fontWeightList={configAcura.fontWeights}
          lineHeightList={configAcura.lineHeights}
        />
        <Divider marginY="24" />
        <Buttons keyValue="default" buttonList={configDefault.buttons} />
      </Flex>
    </ThemeUi>
  );
};

export const HondaThemeUi = () => {
  return (
    <ThemeUi config={configHonda}>
      <Flex sx={{ flexDirection: 'column', mb: 64, px: 24 }}>
        <Colors keyValue="honda" colorList={configHonda.colors} />
        <Divider marginY="24" />
        <Spaces keyValue="honda" spaceList={configHonda.space} />
        <Divider marginY="24" />
        <Sizes keyValue="honda" spaceList={configHonda.sizes} />
        <Divider marginY="24" />
        <FontScale keyValue="honda" scaleList={configHonda.fontSizes} />
        <Divider marginY="24" />
        <Typography
          keyValue="default"
          typoList={configHonda.text}
          fontFamilyList={configHonda.fonts}
          fontWeightList={configHonda.fontWeights}
          lineHeightList={configHonda.lineHeights}
        />
        <Divider marginY="24" />
        <Buttons keyValue="default" buttonList={configDefault.buttons} />
      </Flex>
    </ThemeUi>
  );
};
