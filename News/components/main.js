import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, StyleSheet, Button} from 'react-native';
import { gStyle } from '../styles/style';
import { AntDesign } from '@expo/vector-icons';
import { Modal } from 'react-native-modal';
import ModalTester from '../components/ModalTester';



export default function Main({navigation}) {
    // const loadScene = () => {
    //     //переход на другую страницу по имени
    //     navigation.navigate('Contacts');
    // }

//создаем список с новостями
    const [news, setNews] = useState([
        {name: 'Google', anons: 'Google!!!', full: 'Google is cool.', key: '1', img: 'https://3dnews.ru/assets/external/illustrations/2017/11/01/960868/google-logo-1200x630.jpg'},
        {name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool.', key: '2', img: 'https://s3-symbol-logo.tradingview.com/apple--600.png'},
        {name: 'Facebook', anons: 'Facebook!!!', full: 'Facebook is cool.', key: '3', img: 'https://s3-symbol-logo.tradingview.com/facebook--600.png'}
    ]);

    const [modalWindow, setModalWindow] = useState(false);

  

    return (
        <View style={gStyle.main}>

        {/* <Modal >
            <View style={gStyle.main}>
            <AntDesign name="close" size={34} color="red" style={styles.icon} onPress={() => setModalWindow(false)}/>
            <Text style={styles.title}>Форма добавления статей</Text>
            </View>

        </Modal> */}
        {/* <ModalTester /> */}





        <AntDesign name="pluscircle" size={34} color="black" style={styles.icon} onPress={() => setModalWindow(true)}/>
            <Text style={[gStyle.title, styles.header]}> Главная страница </Text>
            {/* <Button title='Открыть страницу' onPress={loadScene} /> */}
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                <Image style={styles.image} source={{uri: item.img}}/>
                <Text style={styles.title}>{ item.name } </Text>
                <Text style={styles.anons}>{ item.anons } </Text>
                </TouchableOpacity>

            )}/>
        </View>
    );
  
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 30
    },
    item: {
        width: '100%',
        marginBottom: 30,
    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747'
    },
    anons: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#474747'

    },
    image: {
        width: '100%',
        height: 200,
    },
    icon: {
        textAlign: 'center',
        marginBottom: 15
    }
});

