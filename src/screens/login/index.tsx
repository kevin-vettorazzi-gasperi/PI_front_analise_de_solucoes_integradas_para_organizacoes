import { styles } from './styles';
import React, { useEffect, useState } from "react";
import { Alert, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { HeaderStandard } from '../../components/header';
import { InputStandard } from './../../components/inputs/inputstandard'
import { ButtonStandard } from '../../components/buttons/buttonStandard';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../global/context/authContext';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseURL } from '../../global/services/baseUrl';
import Toast from 'react-native-toast-message';
import { ToastAndroid } from 'react-native';

export function Login() {

  const [loginValue, setLoginValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  // async function setItem(key: string, value: string) {
  //   try {
  //     await AsyncStorage.setItem(key, value);
  //     console.log('Item definido com sucesso');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const { setToken } = useAuth();

  const navigation = useNavigation()

  function loginFunction() {
    axios.post(baseURL + '/login', {
      email: loginValue,
      password: passwordValue
    })
      .then(function (response) {
        console.log('Success', response.data)
        setToken(response.data._id);
      })
      .catch(function (error) {
        console.log(error);
        ToastAndroid.show('Email ou senha incorretos', ToastAndroid.LONG);
      })
  }

  function goToRegister() {
    navigation.navigate('Register')
  }

  return (
    <ScrollView >
      <StatusBar backgroundColor={'#c20c18'} />
      < HeaderStandard text='' />
      <Text style={styles.title}>Minha lista de afazeres</Text>
      <View style={styles.inputsToLogin}>
        <InputStandard placeholder='Email' onChange={setLoginValue} value={loginValue} />
        <InputStandard placeholder='Senha' onChange={setPasswordValue} value={passwordValue} />
        <View style={{ height: 25 }}></View>
        <ButtonStandard onPress={loginFunction} title={'Entrar'} isRedButton={true} />
        <TouchableOpacity style={{ paddingTop:20 }} onPress={goToRegister}>
          <Text style={styles.textRegister}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
} 