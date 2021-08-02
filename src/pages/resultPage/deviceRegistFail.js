import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
import {
  Button
} from '@ant-design/react-native';

class DeviceRegistFailPage extends React.Component {
  navigateHome = () => {
    this.props.navigation.push('deviceList');
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View
        style={styles.wrapper}
      >
        <View
          style={styles.iconWrapper}
        >
          <Icon
            type='antdesign'
            name='closecircle'
            color='red'
            size={50}
          />
        </View>
        <View
          style={styles.titleWrapper}
        >
          <Text
            style={styles.title}
          >
            注册失败
          </Text>
        </View>
        <View
          style={styles.detailTextWrapper}
        >
          <Text
            style={styles.detailText}
          >
            asdasdasdasdasdas
          </Text>
        </View>
        <View
          style={{
            flex: 1
          }}
        >
          <View
            style={styles.buttonWrapper}
          >
            <Button
              style={styles.button}
              onPress={this.navigateHome}
            >
              返回主页
            </Button>
            <Button
              type='primary'
              style={styles.button}
              onPress={this.goBack}
            >
              返回上一页
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#ffffff'
  },
  iconWrapper: {
    marginTop: 45
  },
  titleWrapper: {
    alignItems: 'center',
    paddingVertical: 20
  },
  title: {
    fontSize: 20
  },
  detailTextWrapper: {
    alignItems: 'center'
  },
  detailText: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 21
  },
  buttonWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '20%'
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 30
  }
});

export default DeviceRegistFailPage;
