import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tab1 = () => {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    >
      <Text>
        tab1
      </Text>
    </View>
  );
};

const Tab2 = () => {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    >
      <Text>
        tab2
      </Text>
    </View>
  );
};

class HomeComponent extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            if (route.name === 'tab1') {
              iconName = focused ? 'ios-information-circle': 'ios-information-circle-outline';
            } else {
              iconName = focused ? 'ios-list-circle' : 'ios-list';
            }
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}
      >
        <Tab.Screen
          name='tab1'
          component={Tab1}
          options={{
            tabBarBadge: 3
          }}
        />
        <Tab.Screen
          name='tab2'
          component={Tab2}
        />
      </Tab.Navigator>
    );
  }
}

export default HomeComponent;
