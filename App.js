import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import LoginPage from 'src/pages/login';
import DeviceListPage from 'src/pages/deviceList';
import CodeScanPage from 'src/pages/codeScan';
import DeviceManualInputPage from 'src/pages/deviceManualInput';
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
            initialRouteName='deviceList'
          >
            <RootScreen
              name='login'
              component={LoginPage}
              options={{
                headerShown: false
              }}
            />
            <RootScreen
              name='deviceList'
              options={{
                title: '设备列表'
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
