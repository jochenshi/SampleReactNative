import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  Button
} from '@ant-design/react-native';

class DeviceDeleteSuccessPage extends React.Component {
  navigateHome = () => {
    this.props.navigation.navigate('deviceList');
  };

  render() {
    return (
      <View
        style={styles.mainWrapper}
      >
        <View
          style={styles.bodyWrapper}
        >
          <Icon
            type='antdesign'
            name='checkcircle'
            color='#0DD170'
            size={60}
          />
          <Text
            style={styles.inlineTxt}
          >
            设备删除成功
          </Text>
        </View>
        <View>
          <Button
            type='primary'
            style={styles.button}
            onPress={this.navigateHome}
          >
            返回主页
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  bodyWrapper: {
    flex: 1
  },
  inlineTxt: {
    fontSize: 21,
    textAlign: 'center',
    marginTop: 20
  },
  button: {
    borderRadius: 20
  }
});

export default DeviceDeleteSuccessPage;
