import React from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import {
  Button, List, Picker, InputItem, ActivityIndicator
} from '@ant-design/react-native';
import {testIp, newTrim} from 'util/util.js';
import {
  fetchDefaultNetInfo, setNetInfo
} from 'src/slices/deviceRegistSlice.js';
import {
  connect
} from 'react-redux';
import {createForm} from 'rc-form';

const ListItem = List.Item;

class DeviceInitNetPage extends React.Component {
  componentDidMount() {
    console.log(2, this.props);
    const {route: {params: {deviceType}}, dispatch} = this.props;
    dispatch(fetchDefaultNetInfo(deviceType));
  }

  validateForm = (dataIndex, value, callback) => {
    const {route: {params: {isDhcp}}} = this.props;
    if (dataIndex === 'netPort') {
      if (!value || !value.length) {
        callback('选择网口');
      } else {
        callback();
      }
    }

    if (dataIndex === 'ip') {
      if (isDhcp) {
        callback();
      } else if (!value) {
        callback('输入IP地址');
      } else if (!testIp(value)) {
        callback('IP地址格式不正确');
      } else {
        callback();
      }
    }

    if (dataIndex === 'netmask') {
      if (isDhcp) {
        callback();
      } else if (!newTrim(value)) {
        callback('输入子网掩码');
      } else {
        callback();
      }
    }
  };

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

  confirmForm = () => {
    this.props.form.validateFields((err, value) => {
      if (!err) {
        const {
          netPort, ip, netmask
        } = value || {};
        this.props.dispatch(setNetInfo({
          netPort: netPort[0],
          ip,
          netmask
        }));
        this.props.navigation.goBack();
      }
    });
  };

  changeNetPort = (val) => {
    const {netPortObj} = this.props;
    if (val?.length) {
      const {
        address, netmask
      } = netPortObj[val[0]] || {};
      this.props.form.setFieldsValue({
        ip: address,
        netmask
      });
    }
  };

  render() {
    const {
      netPortArr = [], form, loading
    } = this.props;
    const {getFieldProps} = form;
    return (
      <View
        style={styles.mainWrapper}
      >
        <ActivityIndicator
          toast
          text='加载中...'
          animating={loading}
        />
        <List
          renderFooter={() => this.formatErrorTxt('netPort')}
        >
          <Picker
            extra='选择网口'
            cols={1}
            data={netPortArr || []}
            {...getFieldProps('netPort', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    this.validateForm('netPort', value, callback);
                  }
                }
              ],
              onChange: this.changeNetPort
            })}
          >
            <ListItem
              arrow='horizontal'
            >
              网口
            </ListItem>
          </Picker>
        </List>
        <List
          renderFooter={() => this.formatErrorTxt('ip')}
        >
          <InputItem
            placeholder='输入IP地址'
            labelNumber={7}
            {...getFieldProps('ip', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    this.validateForm('ip', value, callback);
                  }
                }
              ]
            })}
          >
            IP
          </InputItem>
        </List>
        <List
          renderFooter={() => this.formatErrorTxt('netmask')}
        >
          <InputItem
            placeholder='输入子网掩码'
            labelNumber={7}
            {...getFieldProps('netmask', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    this.validateForm('netmask', value, callback);
                  }
                }
              ]
            })}
          >
            子网掩码
          </InputItem>
        </List>
        <View
          style={styles.bottomBtn}
        >
          <Button
            type='primary'
            style={styles.button}
            onPress={this.confirmForm}
          >
            确定
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    paddingTop: 45,
    height: '100%'
  },
  bottomBtn: {
    marginTop: 60,
    height: 45
  },
  button: {
    borderRadius: 15,
    height: '100%',
    marginHorizontal: 20
  },
  errorTxt: {
    color: 'red',
    padding: 5
  }
});

const mapStateToProps = (state) => ({
  netPortArr: state.deviceRegist.netPortArr || [],
  netPortObj: state.deviceRegist.netPortObj || [],
  loading: state.deviceRegist.loading || false
});

export default connect(mapStateToProps)(createForm()(DeviceInitNetPage));
