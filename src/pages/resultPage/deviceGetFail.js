import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import {
  Icon
} from 'react-native-elements';
import {
  Button, Toast
} from '@ant-design/react-native';
import axios from 'axios';
import urls from 'util/url.js';

class DeviceGetFailPage extends React.Component {
  constructor() {
    super();
    this.state = {
      deleting: false
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  clickConfirm = async() => {
    try {
      this.setState({
        deleting: true
      });
      const {route: {params}} = this.props;
      if (!params?.sn) {
        Toast.fail('页面参数sn获取失败');
      } else {
        await axios({
          method: 'GET',
          url: urls.deleteDevice()
        });
        this.props.navigation.push('deviceDeleteSuccess');
      }
    } catch {
      this.props.navigation.push('deviceDeleteFail');
    } finally {
      this.setState({
        deleting: false
      });
    }
  };

  render() {
    const {deleting} = this.state;
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
            设备获取失败
          </Text>
        </View>
        <View
          style={styles.detailTextWrapper}
        >
          <Text
            style={styles.detailText}
          >
            该设备已被注册在其他环境或者组织中，若需要继续在该组织中添加该设备，需要对已注册设备进行删除。请确认是否进行设备删除？
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
              onPress={this.goBack}
            >
              取消
            </Button>
            <Button
              type='primary'
              style={styles.button}
              onPress={this.clickConfirm}
              loading={deleting}
              disabled={deleting}
            >
              确定
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

export default DeviceGetFailPage;
