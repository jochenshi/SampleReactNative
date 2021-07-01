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
        <RNCamera
          rectOfInterest={{
            x: 0.5,
            y: 0.5,
            width: 100,
            height: 100
          }}
        />
      </View>
    );
  }
}

export default CodeScanPage;
