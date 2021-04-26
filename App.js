import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './src/pages/login';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name='login'
          component={LoginPage}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
