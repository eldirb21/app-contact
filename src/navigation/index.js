import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import dataStack from './data-nav';

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {dataStack.map((x, i) => (
        <Stack.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigation;
