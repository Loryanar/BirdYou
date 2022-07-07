import React ,{useState, useEffect} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button,TouchableOpacity} from 'react-native'; 
import Tabs from '../Components/Tabs'
import { useNavigation } from "@react-navigation/native";
import Post from '../components/Post'
import { Card, Avatar, Image } from "react-native-elements";

export default function Perfil({navigation}){
    




    

    
    
    return(       
        
       
       <ScrollView style={styles.container}>
<Card
  title='HELLO WORLD'>
 <View style={styles.button2}>
                        
    <Button title="Editar Perfil"  />
    </View>
  
</Card>
           <Tabs/>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    card:{
        
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
        width: "49%"
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

