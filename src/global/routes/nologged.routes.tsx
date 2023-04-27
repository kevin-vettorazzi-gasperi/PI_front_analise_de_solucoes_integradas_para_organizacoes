import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import { Login } from '../../screens/login';
import { Register } from '../../screens/register';



const {Navigator, Screen} = createNativeStackNavigator();

export function NoLoggedRoutes() {

  return (
    <>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
      </Navigator>
    </>
  );
}
