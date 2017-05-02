import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const badgeTheme = {
      '.primary': {
        backgroundColor: variables.btnPrimaryBg,
      },
      '.warning': {
        backgroundColor: variables.btnWarningBg,
      },
      '.info': {
        backgroundColor: variables.btnInfoBg,
      },
      '.success': {
        backgroundColor: variables.btnSuccessBg,
      },
      '.danger': {
        backgroundColor: variables.btnDangerBg,
      },
      'NativeBase.Text': {
        color: variables.badgeColor,
        fontSize: variables.fontSizeBase,
        lineHeight: (platform === 'web') ? 28 : variables.lineHeight - 1,
        textAlign: 'center',
        paddingHorizontal: 3,
      },
      'NativeBase.Icon': {
        color: variables.badgeColor,
        fontSize: variables.fontSizeBase + 4,
        lineHeight: (platform === 'web') ? 28 : variables.lineHeight - 1,
        paddingHorizontal: 0,
      },
      backgroundColor: variables.badgeBg,
      padding: variables.badgePadding,
      paddingHorizontal: 6,
      alignSelf: 'flex-start',
      borderRadius: 13.5,
      height: 27,
  };
  return badgeTheme;
};
