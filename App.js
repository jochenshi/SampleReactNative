import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import LoginPage from 'src/pages/login';
import DeviceListPage from 'src/pages/deviceList';
import CodeScanPage from 'src/pages/codeScan';
import DeviceManualInputPage from 'src/pages/deviceManualInput';
import DeviceInitPage from 'src/pages/deviceInit';
import DeviceInitNetPage from 'src/pages/deviceInitNet';
import DeviceInitApnPage from 'src/pages/deviceInitApn';
import DeviceRegistPage from 'src/pages/deviceRegist';
import store from 'src/stores';

const RootStack = createStackNavigator();
const RootScreen = RootStack.Screen;

const App = () => {
  return (
    <Provider
      store={store}
    >
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName='deviceInit'
          >
            <RootScreen
              name='login'
              component={LoginPage}
              options={{
                headerShown: false,
                gestureEnabled: false
              }}
            />
            <RootScreen
              name='deviceList'
              options={{
                title: '设备列表',
                headerLeft: () => null,
                gestureEnabled: false
              }}
              component={DeviceListPage}
            />
            <RootScreen
              name='deviceManualInput'
              options={{
                title: '手动输入'
              }}
              component={DeviceManualInputPage}
            />
            <RootScreen
              name='deviceInit'
              options={{
                title: '设备初始配置'
              }}
              component={DeviceInitPage}
            />
            <RootScreen
              name='deviceInitNet'
              options={{
                title: '设备初始配置'
              }}
              component={DeviceInitNetPage}
            />
            <RootScreen
              name='deviceInitApn'
              options={{
                title: '设备初始配置'
              }}
              component={DeviceInitApnPage}
            />
            <RootScreen
              name='deviceRegist'
              options={{
                title: '设备注册'
              }}
              component={DeviceRegistPage}
            />
            <RootScreen
              name='codeScan'
              component={CodeScanPage}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
