import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function Form({addHandler}) {
    //const которая будет хранить введенные данные пользователя
    const [text, setValue] = useState('');
    const onChange = (text) => {
        //функцияя, которая будет срабатывать каждый раз, когда мы будем вводить что-то в текстовое поле
        setValue(text);
    }
  return (
    <View>
        <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу'></TextInput>
        <Button color='green' onPress={()=> addHandler(text)} title='Добавить задачу'/>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    }

});
