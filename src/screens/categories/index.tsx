import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, StatusBar, Text, View, Modal, Pressable} from 'react-native';
import {ButtonCircular} from '../../components/buttons/buttonCircular';
import {InputStandard} from '../../components/inputs/inputstandard';
import {LoadComponent} from '../../components/loadComponent';
import {ItemComponent, ItemProps} from '../../components/itemComponent';
import {styles} from './styles';
import {baseURL} from '../../global/services/baseUrl';
import theme from '../../global/styles/theme';
import {HeaderStandard} from '../../components/header';

export function CategoriesScreen() {
  const [dataTask, setDataTask] = useState<ItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<string>('');
  const [idToEdit, setIdToEdit] = useState<string>('');

  const refreshFunction = () => {
    setIsLoading(true),
      axios
        .get(baseURL + '/categories')
        .then(function (response) {
          setDataTask(response.data);
        })
        .catch(function (error) {
          console.log('error', error);
        })
        .finally(function () {
          setIsLoading(false);
        });
  };

  const sendDataTaskFunction = () => {
    setIsLoading(true),
      axios
        .post(baseURL + '/categories', {
          description: inputValue,
          completed: false,
        })
        .then(function (response) {
          setInputValue('');
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          setIsLoading(false), refreshFunction();
        });
  };

  const deleteTaskFunction = (id: string) => {
    setIsLoading(true),
      axios
        .delete(baseURL + '/categories/' + id)
        .then(function (response) {
          setDataTask(response.data);
        })
        .catch(function (error) {
          console.log('error', error);
        })
        .finally(function () {
          setIsLoading(false), refreshFunction();
        });
  };

  const updateDataTaskFunction = () => {
    setIsLoading(true),
      axios
        .put(baseURL + '/categories/' + idToEdit, {
          description: dataToEdit,
          completed: false,
        })
        .then(function (response) {
          setInputValue('');
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          setIsLoading(false), setModalVisible(!modalVisible);
          refreshFunction();
        });
  };

  useEffect(() => {
    refreshFunction();
  }, []);

  function sendData() {
    sendDataTaskFunction();
  }

  function showModalFunction(id: string, description: string) {
    setDataToEdit(description);
    setIdToEdit(id);
    setModalVisible(true);
  }

  return (
    <>
      <StatusBar backgroundColor={theme.colors.primary_red} />
      <HeaderStandard text="Minha lista de afazeres" />
      <View style={styles.textContainer}></View>
      {isLoading ? (
        <LoadComponent />
      ) : (
        <>
          <View style={styles.container}>
            <View style={styles.flatlistView}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={dataTask}
                renderItem={({item}) => (
                  <ItemComponent
                    description={item.description}
                    _id={item._id}
                    onPressOnLeftButton={() => {
                      deleteTaskFunction(item._id);
                    }}
                    onPressOnItem={() =>
                      showModalFunction(item._id, item.description)
                    }
                  />
                )}
                keyExtractor={item => item._id}
              />
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>
                        Edite aqui sua tarefa
                      </Text>
                      <InputStandard
                        placeholder=""
                        onChange={setDataToEdit}
                        value={dataToEdit}></InputStandard>
                      <View style={styles.viewButtonsModal}>
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={styles.textStyle}>Fechar</Text>
                        </Pressable>
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => updateDataTaskFunction()}>
                          <Text style={styles.textStyle}>Enviar</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
            <View style={styles.viewInput}>
              <ButtonCircular onPress={() => sendData()} />
              <InputStandard
                placeholder="Digite aqui..."
                value={inputValue}
                onChange={setInputValue}
              />
            </View>
          </View>
        </>
      )}
    </>
  );
}
