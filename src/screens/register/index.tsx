import { styles } from './styles';
import React, { useEffect, useState } from "react";
import { StatusBar, Text, ToastAndroid, View } from "react-native";
import { HeaderStandard } from '../../components/header';
import { InputStandard } from './../../components/inputs/inputstandard'
import { ButtonStandard } from '../../components/buttons/buttonStandard';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../global/context/authContext';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseURL } from '../../global/services/baseUrl';

export function Register() {

  const [loginValue, setLoginValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  function loginFunction() {
    if(loginValue && passwordValue.length >= 6){
    axios.post(baseURL + '/login/create', {
      email: loginValue,
      password: passwordValue
    })
      .then(function (response) {
        console.log('Success', response.data)
        ToastAndroid.show('Cadastro criado, agora você pode fazer seu login', ToastAndroid.LONG);

      })
      .catch(function (error) {
        console.log(error);
        ToastAndroid.show('Erro na criação do cadastro', ToastAndroid.LONG);
      })} else {
        ToastAndroid.show('O email deve ser válido e a senha deve conter mais do que 6 caracters', ToastAndroid.LONG);

      }
  }

  return (
    <ScrollView >
      <StatusBar backgroundColor={'#c20c18'} />
      < HeaderStandard text='' />
      <Text style={styles.title}>Criar minha conta</Text>
      <Text style={styles.description}>Digite seu email e senha para criar sua conta</Text>
      <View style={styles.inputsToLogin}>
        <InputStandard placeholder='Email' onChange={setLoginValue} value={loginValue} />
        <InputStandard placeholder='Senha' onChange={setPasswordValue} value={passwordValue} />
        <View style={{ height: 25 }}></View>
        <ButtonStandard onPress={loginFunction} title={'Criar conta'} isRedButton={true} />
      </View>
    </ScrollView>
  )
} 