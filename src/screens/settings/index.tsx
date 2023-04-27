import React, { useEffect, useState } from 'react';
import { LoadComponent } from '../../components/loadComponent';
import { StatusBar, Text, View } from 'react-native';
import { ButtonStandard } from '../../components/buttons/buttonStandard';
import { ItemComponent } from '../../components/itemComponent';
import { styles } from './styles';
import { HeaderStandard } from '../../components/header';
import { useAuth } from '../../global/context/authContext';

export function SettingsScreen() {

  const [isLoading, setIsLoading] = useState(false)

  const { token, setToken } = useAuth();

  function loggoutFunction() {
    setToken('')
  }
  
  return (
    <>
      <StatusBar backgroundColor={'#c20c18'} />
      {isLoading ? <LoadComponent /> :
        <>
          <View >
            <HeaderStandard text='Minha lista de afazeres' />
            <Text style={styles.title}>Configurações</Text>
            <View style={styles.buttons}>
              <ButtonStandard onPress={loggoutFunction} title='Sair do aplicativo ' />

            </View>
          </View>
        </>
      }
    </>
  )
}



