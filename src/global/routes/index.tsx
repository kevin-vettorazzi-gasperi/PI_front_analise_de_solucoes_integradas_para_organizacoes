import React, { useEffect, useState } from 'react';
import { LoggedRoutes } from './logged.routes';
import { NoLoggedRoutes } from './nologged.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../context/authContext';

export function AppRoutes() {

  const { token, setToken } = useAuth();

  return token ? <LoggedRoutes /> : <NoLoggedRoutes />;
}

  // async function getItem(key:string) {
  //   try {
  //     const value = await AsyncStorage.getItem(key);
  //     console.log('Valor recuperado:', value);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

