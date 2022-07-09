import React, {useState, useEffect} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button} from 'react-native'; 
import * as url from '../../text'
import { useNavigation } from "@react-navigation/native";
import Tabs from '../../Components/Tabs';

const logout = () => {

    try {
       fetch(url.url+"log" ,{
  
                method: 'GET',
                headers: new Headers({
                    'authorization': localStorage.getItem("token"),
                })
  
            }).then(function (response) {
  
                console.log(response);
                if (response.status == 200) {
                 localStorage.removeItem("token")
                 console.log(response.json());
                   
                }

                return null
  
            })
    } catch (error) {
  
        console.error(error);    
  
    }
    
}

const perfilUpdate = ( )=>{
    const navigation= useNavigation()
    const [state,setState]= useState({
        Username:'',
        Name:'',
        Lastname:'',
        Email:'',
        Password:'' 

    })  
    const ChangeText=(name, value)=>{
       setState({...state, [name]: value})
    }

const data ={
       "Username":state.Username, 
       "Name":state.Name,
       "Lastname":state.Lastname,
       "oldPassword":state.PasswordO,
       "newPassword":state.PasswordN
}

const update = () =>{
      try{
  
        fetch(url.url+"perfil",{
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem("token")
               }),
            body: JSON.stringify(
              data)
            }).then(function (response) {
                let data1=response.json()
                     console.log(data1)
                     return data1
                                    }).then(data1=>{
                     let data =data1.msg;
                     console.log(data)
                    
                     return data
                 })
         } catch (error) {
       
             console.error(error);    
       
         }

    
} 


   
    
         
    return(<ScrollView style={styles.container}>
      
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Username"
          
          onChangeText={(value) => ChangeText('Userame',value) }
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name"
          
          onChangeText={(value) => ChangeText('Name',value) }
        />
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Lastname"
          
          onChangeText={(value) => ChangeText('Lastname',value) }
        />
      </View>
      
     

      <View style={styles.inputGroup}>
                <TextInput
                  placeholder="OldPassword"  onChangeText={(value) => ChangeText('PasswordO',value) } secureTextEntry={true}
                />
              </View>
        
              <View style={styles.inputGroup}>
                <TextInput
                  placeholder="NewPassword"  onChangeText={(value) => ChangeText('PasswordN',value) } secureTextEntry={true}
                />
              </View>

      <View style={styles.button}>
        <Button title="Saving" onPress={()=> update()} />
      </View>
      <View>
                <View style={styles.button}>
                    <Button title="Log out"  onPress={() => logout()}/>
                </View>
            </View>
            <View><Tabs/></View>
            
    </ScrollView>
    );
 }
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
  });
 export default perfilUpdate;