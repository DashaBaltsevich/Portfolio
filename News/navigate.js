import React from 'react';
import Main from './components/main';
import FullInfo from './components/FullInfo';

import { createStackNavigator } from '@react-navigation/stack';
//создаем родительский объект, который будет содержать описания всех наших страниц
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer> 
    <Stack.Navigator>
    <Stack.Screen
    name="Main"
    component={Main}
    options={
        {title:'Главная',
        headerStyle: {backgroundColor: '#eb5d3d', height: 60},
        headerTitleStyle: {fontWeight: '400', textAlign: 'center' }}
        }
    />

    <Stack.Screen
    name="FullInfo"
    component={FullInfo}
    options={{title:'Статья', headerTitleStyle: {fontWeight: '400', marginLeft: 80 }}}
    />
    </Stack.Navigator>
    </NavigationContainer>
}