import React, {useState, useEffect} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button} from 'react-native'; 
import * as utilsUser from '../utils/utilsUser'

const Register =()=>{

const [state,setState]= useState({
             Username:'',
             Name:'',
             Lastname:'',
             Email:'',
             Password:'' 

         })  
         const ChangeText=(name: string, value: string)=>{
            setState({...state, [name]: value})
         }

    const data ={
        "Username":state.Username, 
            "Name":state.Name,
            "Lastname":state.Lastname,
            "Password":state.Password
    }
 
    
         
         return(
        

<ScrollView style={styles.container}>
      
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Username"
           onChangeText={(value) => ChangeText("Username", value) }
         
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
          placeholder="Password"
          onChangeText={(value) => ChangeText('Password',value) }
          secureTextEntry={true}
        />
      </View>

      <View >
        <Button title="SIGN UP" onPress={()=> utilsUser.reg(data)} />
      </View>
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
 export default Register;