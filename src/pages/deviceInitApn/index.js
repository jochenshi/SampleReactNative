import React from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import {
  Button, List, InputItem
} from '@ant-design/react-native';
import {newTrim} from 'util/util.js';
import {connect} from 'react-redux';
import {createForm} from 'rc-form';
import {
  setApnInfo
} from 'src/slices/deviceRegistSlice.js';

const ListItem = List.Item;

class DeviceInitApnPage extends React.Component {
  confirmForm = () => {
    this.props.form.validateFields((err, value) => {
      if (!err) {
        console.log(value);
        this.props.dispatch(setApnInfo(value));
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

  validateForm = (dataIndex, value, callback) => {
    const data = this.props.form.getFieldsValue(['apn', 'username', 'password']);
    const apn = newTrim(data?.apn);
    const user = newTrim(data?.username);
    const password = newTrim(data?.password); 
    if (dataIndex === 'apn') {
      if ((user || password) && !apn) {
        callback('请输入APN');
      } else {
        callback();
      }
    }

    if (dataIndex === 'username') {
      if ((apn || password) && !user) {
        callback('请输入用户名');
      } else {
        callback();
      }
    }

    if (dataIndex === 'password') {
      if ((apn || user) && !password) {
        callback('请输入密码');
      } else {
        callback();
      }
    }
  };

  render() {
    const {form} = this.props;
    const {getFieldProps} = form;
    return (
      <View>
        <List
          style={styles.mainWrapper}
          renderFooter={() => this.formatErrorTxt('apn')}
        >
          <InputItem
            labelNumber={7}
            placeholder='输入APN'
            {...getFieldProps('apn', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    this.validateForm('apn', value, callback);
                  }
                }
              ]
            })}
          >
            <ListItem>
              APN
            </ListItem>
          </InputItem>
        </List>
        <List
          renderFooter={() => this.formatErrorTxt('username')}
        >
          <InputItem
            labelNumber={7}
            placeholder='输入用户名'
            {...getFieldProps('username', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    this.validateForm('username', value, callback);
                  }
                }
              ]
            })}
          >
            <ListItem>
              用户名
            </ListItem>
          </InputItem>
        </List>
        <List
          renderFooter={() => this.formatErrorTxt('password')}
        >
          <InputItem
            labelNumber={7}
            placeholder='输入密码'
            {...getFieldProps('password', {
              rules: [
                {
                  validator: (rule, value, callback) => {
                    this.validateForm('password', value, callback);
                  }
                }
              ]
            })}
          >
            <ListItem>
              密码
            </ListItem>
          </InputItem>
        </List>
        <View
          style={styles.bottomBtn}
        >
          <Button
            style={styles.button}
            onPress={this.confirmForm}
            type='primary'
          >
            下一步
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
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

export default connect()(createForm()(DeviceInitApnPage));
