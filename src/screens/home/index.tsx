import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, StatusBar, Text, TextInput, View } from 'react-native';
import { ButtonCircular } from '../../components/buttons/buttonCircular';
import { InputStandard } from '../../components/inputs/inputstandard';
import { LoadComponent } from '../../components/loadComponent';
import { ItemComponent, ItemProps } from '../../components/itemComponent';
import { styles } from './styles';
import { baseURL } from '../../global/services/baseUrl';
import { HeaderStandard } from '../../components/header';

export function Home({ route }: any) {

  const { categoryId, categoryDescription } = route.params;
  console.log(categoryId, categoryDescription)

  const [dataTask, setDataTask] = useState<ItemProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  async function refreshFunction() {
    setDataTask([])
    setIsLoading(true)
    await axios.get(baseURL + '/tasks/' + categoryId )
      .then(function (response) {
        setDataTask(response.data)
      })
      .catch(function (error) {
        console.log('error refresh', error);
      })
      .finally(function () {
        setIsLoading(false)
      })

  }

  const sendDataTaskFunction = () => {

    axios.post(baseURL + '/tasks/' + categoryId  , {
      description: inputValue,
      completed: false
    })
      .then(function (response) {
        setInputValue('')
      })
      .catch(function (error) {
        console.log('error post', error);

      })
      .finally(function () {
        setIsLoading(false),
          refreshFunction();
      })
  }

  const deleteTaskFunction = (id: string) => {
    setIsLoading(true),
      axios.delete(baseURL + '/tasks/' + id)
        .then(function (response) {
          setDataTask(response.data)
        })
        .catch(function (error) {
          console.log('error delete', error);
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

  return (
    <>
      <StatusBar backgroundColor={'#c20c18'} />
      {isLoading ? <LoadComponent /> :
        <>
          <HeaderStandard text='Minha lista de afazeres' />
          <View style={styles.container}>
            <Text style={styles.title}>{categoryDescription}</Text>
            <View style={styles.flatlistView}>
              <FlatList

                showsVerticalScrollIndicator={false}
                data={dataTask}
                renderItem={({ item }) => <ItemComponent
                  description={item.description}
                  _id={item._id}
                  onPressOnLeftButton={() => { deleteTaskFunction(item._id) }}
                  onPressOnItem={() => { }}
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



