import React from 'react';
import {
  View
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import JInput from '../../components/Input';

const LoginPage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Input
        allowClear
        placeholder='请输入用户名'
        leftIcon={{
          type: 'font-awesome',
          name: 'user'
        }}
        clearButtonMode='while-editing'
      />
      <JInput
        allowClear
        placeholder='请输入密码'
        leftIcon={{
          type: 'font-awesome',
          name: 'lock'
        }}
        autoCompleteType='password'
      />
    </View>
  );
};

export default LoginPage;