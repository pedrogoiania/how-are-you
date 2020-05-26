import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feelings from '../screens/Feelings';
import MyFeeling from '../screens/MyFeeling';

import strings from '../strings';

import { darkPurple, white } from '../components/Colors';

const Stack = createStackNavigator();

const defaultOptions = {
  headerStyle: {
    backgroundColor: darkPurple,
  },
  headerTintColor: white,
};

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Feelings"
        component={Feelings}
        options={{ title: strings.feelings, ...defaultOptions }}
      />
      <Stack.Screen
        name="MyFeeling"
        component={MyFeeling}
        options={{
          title: strings.my_feeling,
          ...defaultOptions,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
