import React from 'react';
import {
  View, StyleSheet, Image, Text
} from 'react-native';
import {
  List, InputItem, Switch
} from '@ant-design/react-native';
import {Button} from 'react-native-elements'
import {
  createForm
} from 'rc-form';
import {connect} from 'react-redux';
import {newTrim} from 'util/util.js';

const ListItem = List.Item;

class DeviceRegistPage extends React.Component {
  formatErrorTxt = (dataIndex) => {
    const {getFieldError} = this.props.form;
    const error = getFieldError(dataIndex);
    if (error) {
      return (
        <Text
          style={styles.errorTxt}
        >
          {error.join(',')}
        </Text>
      );
    }
    return undefined;
  };

  confirmRegist = () => {
    this.props.form.validateFields((err, value) => {
      if (!err) {
        const subData = this.constructSubData(value);
        console.log(subData);
      }
    });
  };

  constructSubData = (value) => {
    const {store} = this.props;
    const {
      md5Mac, deviceType, isDhcp, netPort, deviceMac, ip, netmask, apn, user, pwd
    } = store || {};
    const {
      name, ssl
    } = value;
    let obj = {
      sn: md5Mac,
      mac: deviceMac,
      deviceType,
      dhcp: !!isDhcp,
      name,
      ssl: !!ssl,
      port: netPort
    };
    if (!isDhcp) {
      obj = {
        ...obj,
        ip: newTrim(ip),
        netmask: newTrim(netmask),
        apn: newTrim(apn),
        user: newTrim(user),
        pwd: newTrim(pwd)
      };
    }
    return obj;
  };

  render() {
    const {
      form
    } = this.props;
    const {
      getFieldProps
    } = form;
    return (
      <View>
        <View
          style={styles.imageView}
        >
          <Image
            source={require('../../common/assets/images/device.png')}
            style={{
              width: 100,
              height: 100
            }}
          />
        </View>
        <List
          renderFooter={() => this.formatErrorTxt('name')}
        >
          <InputItem
            labelNumber={7}
            placeholder='输入设备名称'
            {...getFieldProps('name', {
              rules: [
                {
                  required: true,
                  whitespace: true,
                  message: '输入设备名称'
                }
              ]
            })}
          >
            设备名称
          </InputItem>
        </List>
        <List>
          <ListItem
            extra={(
              <Switch
                color='#0A6EFA'
                {...getFieldProps('ssl', {
                  valuePropName: 'checked',
                  initialValue: false
                })}
              />
            )}
          >
            开启双向认证
          </ListItem>
        </List>
        <View
          style={styles.bottomWrapper}
        >
          <View
            style={styles.bottomBtnView}
          >
            <Button
              title='取消'
              buttonStyle={[styles.bottomBtn, {
                borderColor: '#ffffff',
                backgroundColor: '#ffffff'
              }]}
              titleStyle={{
                color: '#000'
              }}
              type='outline'
              onPress={() => {
                console.log(props.navigation);
                props.navigation.navigate('deviceList');
              }}
            />
          </View>
          <View
            style={styles.bottomBtnView}
          >
            <Button
              title='注册'
              buttonStyle={styles.bottomBtn}
              onPress={this.confirmRegist}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageView: {
    alignItems: 'center',
    marginVertical: 20
  },
	bottomWrapper: {
		flexDirection: 'row',
    height: 45,
    marginTop: 60,
    marginHorizontal: 10
	},
	bottomBtnView: {
		flex: 1,
    height: '100%'
	},
  bottomBtn: {
    height: '100%',
    borderRadius: 15,
    marginHorizontal: 10
  },
  errorTxt: {
    color: 'red',
    padding: 5
  }
});

const mapStateToProps = (state) => ({
  store: state.deviceRegist || {}
});

export default connect(mapStateToProps)(createForm()(DeviceRegistPage));
