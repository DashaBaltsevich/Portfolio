import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

export default function App() {

  const [listOfItems, setListOfItems] = useState([
    {text: 'Купить молоко', key: '1'},
    {text: 'Купить тачку', kay: '2'},
    {text: 'Заработать миллион', key: '3'},
    {text: 'Завести котика', key: '4'},
  ])


  const addHandler = (text) => {
    setListOfItems((list) => {
      //list - весь список который у нас есть
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    });
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    });
  } 

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <List el={item} deleteHandler={deleteHandler}/>
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
