import React, { Component } from 'react';
import { View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import {ToastContainer as Toast} from './ToastContainer';
import {ActionSheetContainer as ActionSheet} from './Actionsheet';
import {Text} from './Text';
import variable from '../theme/variables/platform';

class Container extends Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  }

  render() {
    const variables = (this.context.theme) ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;
    const platformStyle = variables.platformStyle;
    const platform = variables.platform;

    return (
      <View ref={c => this._root = c} {...this.props}>
        {this.props.children}
        {(platform !== 'web') && <Toast ref={ (c) => {Toast.toastInstance = c;}} />}
        {(platform !== 'web') && <ActionSheet ref={ (c) => {ActionSheet.actionsheetInstance = c;}} />}
      </View>
    );
  }
}

Container.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object
};

const StyledContainer = connectStyle('NativeBase.Container', {}, mapPropsToStyleNames)(Container);

export {
  StyledContainer as Container,
};
