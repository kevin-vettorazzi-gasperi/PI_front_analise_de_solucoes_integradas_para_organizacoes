import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/global/routes';
import { AuthProvider } from './src/global/context/authContext';

function App() {

  return (
    <AuthProvider>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App;