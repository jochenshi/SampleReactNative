import React from 'react';
import {
  RNCamera
} from 'react-native-camera';
import {
  View
} from 'react-native';

class CodeScanPage extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <RNCamera />
      </View>
    );
  }
}

export default CodeScanPage;
