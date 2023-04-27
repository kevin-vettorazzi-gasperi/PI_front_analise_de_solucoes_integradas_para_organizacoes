import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { ButtonCircular } from '../../components/buttons/buttonCircular';
import { InputStandard } from '../../components/inputs/inputstandard';
import { LoadComponent } from '../../components/loadComponent';
import { ItemComponent, ItemProps } from '../../components/itemComponent';
import { styles } from './styles';
import { baseURL } from '../../global/services/baseUrl';
import { useNavigation } from '@react-navigation/native';
import theme from '../../global/styles/theme';
import { HeaderStandard } from '../../components/header';

export function CategoriesScreen() {

  const [dataTask, setDataTask] = useState<ItemProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const refreshFunction = () => {
    setIsLoading(true),
      axios.get(baseURL + '/categories')
        .then(function (response) {
          setDataTask(response.data)
        })
        .catch(function (error) {
          console.log('error', error);
        })
        .finally(function () {
          setIsLoading(false)
        });
  }

  const sendDataTaskFunction = () => {
    setIsLoading(true),
      axios.post(baseURL + '/categories', {
        description: inputValue,
        completed: false
      })
        .then(function (response) {
          setInputValue('')
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          setIsLoading(false),
            refreshFunction();
        });
  }

  const deleteTaskFunction = (id: string) => {
    setIsLoading(true),
      axios.delete(baseURL + '/categories/' + id)
        .then(function (response) {
          setDataTask(response.data)
        })
        .catch(function (error) {
          console.log('error', error);
        })
        .finally(function () {
          setIsLoading(false),
            refreshFunction()
        });
  }

  useEffect(() => {
    refreshFunction()
  }, [])

  function sendData() {
    sendDataTaskFunction()
  }

  const navigation = useNavigation();

  function navigationFunction(id: string, description: string) {
    console.log('navigation', id, description)
    navigation.navigate('Home' as never, {
      categoryId: id,
      categoryDescription: description
    } as never);
  }
  return (
    <>
      <StatusBar backgroundColor={theme.colors.primary_red} />
      <HeaderStandard text='Minha lista de afazeres' />
      <View style={styles.textContainer}>
        {/* <Text style={styles.title}>Categorias</Text> */}
      </View>
      {isLoading ? <LoadComponent /> :
        <>
          <View style={styles.container}>
            <View style={styles.flatlistView}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={dataTask}
                renderItem={({ item }) => <ItemComponent
                  description={item.description} _id={item._id}
                  onPressOnLeftButton={() => { deleteTaskFunction(item._id) }}
                  onPressOnItem={() => navigationFunction(item._id, item.description)}
                />}
                keyExtractor={item => item._id}
              />
            </View>
            <View
              style={styles.viewInput}>
              <ButtonCircular onPress={() => sendData()} />
              <InputStandard
                placeholder='Digite aqui...'
                value={inputValue}
                onChange={setInputValue}
              />
            </View>
          </View>
        </>
      }
    </>
  )
}