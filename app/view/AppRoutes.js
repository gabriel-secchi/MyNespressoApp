
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack'

import Home from './Home'
import DetailOld from './DetailOld'
import Detail from './Detail'

const Stack = createStackNavigator();

//TODO: Depois dá pra configurar um componente como header
// https://reactnavigation.org/docs/headers
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          gestureEnabled: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Detail" component={Detail} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
