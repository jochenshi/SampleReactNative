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

class DeviceDeleteFailPage extends React.Component {
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
            设备删除失败
          </Text>
        </View>
        <View
          style={styles.detailTextWrapper}
        >
          <Text
            style={styles.detailText}
          >
            该网关设备下可能已挂载子设备，具体详细原因请咨询相关工作人员。
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

export default DeviceDeleteFailPage;
