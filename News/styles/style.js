//файл стили которого мы будем использовать на всех страницах
import React from 'react';
import { StyleSheet} from 'react-native';



export const gStyle = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        paddingTop: 60

    },
    title: {
        fontSize: 20,
        color: '#333',
        fontFamily: 'mt-light',
        textAlign: 'center'
    }
})