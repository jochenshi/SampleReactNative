import React from 'react';
import {
  View, ImageBackground, StyleSheet, Image
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      passwordVisible: false,
      user: '',
      pwd: '',
      loading: false
    };
  }

  switchPasswordVisible = () => {
    this.setState((prev) => ({
      passwordVisible: !prev.passwordVisible
    }));
  };

  confirmLogin = () => {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3 * 1000);
  };

  render() {
    const {
      passwordVisible, user, pwd, loading
    } = this.state;
    return (
      <View
        style={styles.container}
      >
        <ImageBackground
          source={require('../../common/assets/images/loginbg.png')}
          style={{
            flex: 1,
            width: '100%'
          }}
        >
          <SafeAreaView
            style={{
              flex: 1,
              width: '100%',
              paddingLeft: 30,
              paddingRight: 30
            }}
          >
            <Image
              source={require('../../common/assets/images/logo.png')}
              style={{
                width: 160,
                height: 160,
                marginBottom: 30
              }}
            />
            <Input
              allowClear
              placeholder='请输入用户名'
              inputStyle={styles.input}
              leftIcon={{
                type: 'font-awesome',
                name: 'user',
                color: '#fff',
                size: 20
              }}
              clearButtonMode='while-editing'
              onChangeText={val => {
                this.setState({
                  user: val
                });
              }}
              placeholderTextColor='#e0dddd'
              style={{
                color: '#fff'
              }}
            />
            <Input
              inputStyle={styles.input}
              allowClear
              placeholder='请输入密码'
              leftIcon={{
                type: 'font-awesome',
                name: 'lock',
                color: '#fff',
                size: 20
              }}
              style={{
                color: '#fff'
              }}
              rightIcon={{
                type: 'font-awesome',
                name: passwordVisible ? 'eye' : 'eye-slash',
                onPress: this.switchPasswordVisible,
                color: '#fff'
              }}
              placeholderTextColor='#e0dddd'
              secureTextEntry={!passwordVisible}
              clearButtonMode='while-editing'
              onChangeText={val => {
                this.setState({
                  pwd: val
                });
              }}
            />
            <Button
              title='立即登录'
              loading={loading}
              containerStyle={styles.button}
              onPress={this.confirmLogin}
              buttonStyle={{
                paddingTop: 12,
                paddingBottom: 12,
                backgroundColor: '#fff'
              }}
              titleStyle={{
                color: '#000'
              }}
              loadingProps={{
                color: '#000'
              }}
            />
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  button: {
    width: '100%',
    borderRadius: 15,
    marginTop: 40,
    backgroundColor: '#fff'
  },
  input: {
    marginLeft: 8
  }
});

export default LoginPage;