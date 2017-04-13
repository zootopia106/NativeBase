import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connectStyle } from '@shoutem/theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';

class Content extends Component {
  static contextTypes = {
    theme: React.PropTypes.object,
  }

  render() {
    const variables = (this.context.theme) ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;
    const platformStyle = variables.platformStyle;
    const platform = variables.platform;
    if (platform !== 'web') {
      return (
        <KeyboardAwareScrollView
          automaticallyAdjustContentInsets={false}
          resetScrollToCoords={(this.props.disableKBDismissScroll) ? null : { x: 0, y: 0 }}
          ref={(c) => { this._scrollview = c; this._root = c; }}
          {...this.props}
          >
          {this.props.children}
        </KeyboardAwareScrollView>
      );
    }
    else {
      return (
        <ScrollView
          ref={(c) => { this._scrollview = c; this._root = c; }}
          {...this.props}
          >
          {this.props.children}
        </ScrollView>
      )
    }
  }
}

Content.propTypes = {
  ...KeyboardAwareScrollView.propTypes,
  style: React.PropTypes.object,
  contentContainerStyle: React.PropTypes.object,
  padder: React.PropTypes.bool,
  disableKBDismissScroll: React.PropTypes.bool,
  enableResetScrollToCoords: React.PropTypes.bool
};

const StyledContent = connectStyle('NativeBase.Content', {}, mapPropsToStyleNames)(Content);

export {
  StyledContent as Content,
};
