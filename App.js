import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {
  menuArr
} from 'util/menu';
import store from 'src/stores';
// import 'src/mock/server.js';
import {initalizeRequest} from 'util/request';
import {Provider as AntdWrapper} from '@ant-design/react-native';

const RootStack = createStackNavigator();
const RootScreen = RootStack.Screen;

initalizeRequest();

class App extends React.Component {
  generateScreen = () => (menuArr || []).map(item => (
    <RootScreen
      name={item.path}
      component={item.component}
      options={item.options || {}}
      key={item.path}
    />
  ));

  render() {
    return (
      <AntdWrapper>
        <Provider
          store={store}
        >
          <SafeAreaProvider>
            <NavigationContainer>
              <RootStack.Navigator
                initialRouteName='deviceList'
              >
                {this.generateScreen()}
              </RootStack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </Provider>
      </AntdWrapper>
    );
  }
}

export default App;
