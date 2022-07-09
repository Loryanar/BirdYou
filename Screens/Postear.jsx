import React ,{useState, useEffect} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button,TouchableOpacity} from 'react-native'; 
import * as url from '../text'
import { useNavigation } from "@react-navigation/native";
import { Card, Avatar, Image } from "react-native-elements";
import Post from '../Components/Post';

import Tabs from '../Components/Tabs';


const Posteo = () => {
    
    return(       
        <ScrollView style={styles.container}>

         <View><Tabs/></View>
         <Post/>
                 
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    button: {
        color: 'blue',
        marginHorizontal: 5,
        marginVertical: 1
    },
    contentButton: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: "wrap",
        marginHorizontal: 5
    },
    button1: {
        color: 'blue',
        marginRight: 3,
        marginVertical: 1,
        width: "30%"
    },
    button2: {
        color: 'blue',
        marginLeft: 2,
        marginVertical: 1,
        width: "49%"
    },
   
    titulo:{
        fontSize: 20,
        fontWeight:'bold',
        padding: 5
    },
    infoPerfil:{
        paddingVertical:2,
        paddingHorizontal: 5
    },
    contentPerfil: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'blue'
    },
    infoPerfilbio: {
        borderWidth: 1,
        marginHorizontal: 5,
        marginVertical: 1
    },
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    }
});

export default Posteo