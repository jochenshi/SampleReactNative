import React from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import {
  List, Picker, InputItem, Button, ActivityIndicator
} from '@ant-design/react-native';
import {
  createForm
} from 'rc-form';
import {
  connect
} from 'react-redux';
import {
  fetchDeviceTypes, setDeviceMacAndType, resetNetAndApn
} from 'src/slices/deviceRegistSlice.js';

const ListItem = List.Item;

class DeviceManualInputPage extends React.Component {
  componentDidMount() {
    console.log('1', this.props);
    const {
      dispatch
    } = this.props;
    dispatch(fetchDeviceTypes());
  }

  confirmForm = () => {
    this.props.form.validateFields((err, value) => {
      if (!err) {
        const {
          dispatch, navigation
        } = this.props;
        const {
          deviceMac, deviceType
        } = value;
        dispatch(setDeviceMacAndType({
          deviceMac,
          deviceType: deviceType[0]
        }));
        dispatch(resetNetAndApn());
        navigation.push('deviceInit', {
          deviceType
        });
      }
    });
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

  render() {
    const {store: {deviceTypeArr, loading}, form} = this.props;
    const {
      getFieldProps
    } = form;
    console.log({deviceTypeArr});
    return (
      <View
        style={{
          height: '100%'
        }}
      >
        <ActivityIndicator
          toast
          text='加载中...'
          animating={loading}
        />
        <View
          style={styles.wrapper}
        >
          <List
            renderFooter={() => this.formatErrorTxt('deviceMac')}
          >
            <InputItem
              placeholder='输入设备SN号'
              labelNumber="7"
              {...getFieldProps('deviceMac', {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: '输入设备SN号'
                  }
                ],
                normalize: (v) => (v || '').toLowerCase()
              })}
            >
              设备SN号
            </InputItem>
          </List>
          <List
            renderFooter={() => this.formatErrorTxt('deviceType')}
          >
            <Picker
              data={deviceTypeArr || []}
              cols={1}
              extra='选择设备型号'
              {...getFieldProps('deviceType', {
                rules: [
                  {
                    required: true,
                    message: '选择设备型号'
                  }
                ]
              })}
            >
              <ListItem
                arrow='horizontal'
              >
                设备型号
              </ListItem>
            </Picker>
          </List>
        </View>
        <View
          style={styles.bottomBtn}
        >
          <Button
            style={styles.button}
            type='primary'
            onPress={this.confirmForm}
          >
            下一步
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 45
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
  store: state.deviceRegist || {}
});

export default connect(mapStateToProps)(createForm()(DeviceManualInputPage));
