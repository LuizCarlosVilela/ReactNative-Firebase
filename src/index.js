import React, { useState } from 'react';
import {View, Text, FlatList} from 'react-native';

import * as firebase from 'firebase';
import "@firebase/database";


var firebaseConfig = {
    apiKey: "AIzaSyC4hYqh7ucL-Ts-JK1JQm-K5GGi-Igs99o",
    authDomain: "primeiro-24ff9.firebaseapp.com",
    databaseURL: "https://primeiro-24ff9.firebaseio.com",
    projectId: "primeiro-24ff9",
    storageBucket: "primeiro-24ff9.appspot.com",
    messagingSenderId: "177700479824",
    appId: "1:177700479824:web:b44d09b6c442b07fd24255",
    measurementId: "G-57BG6SV3YR"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function Index(){
    const [ result, setResult ] = useState([]);

    function getMessages(){
        firebase.database().ref('messages').on('value', e =>{
            var n = e.val();
            var array = Object.values(n);

            setResult(array);
        });
    }
    return (
        <View>
            {getMessages()}
          <FlatList
            data={result}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        </View>
    );
}