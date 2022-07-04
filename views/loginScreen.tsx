import React ,{useState} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button,TouchableOpacity} from 'react-native'; 
import { useNavigation } from "@react-navigation/native";
import * as login from '../utils/utilsUser'
import { StackNavigationProp } from '@react-navigation/stack';
import { List } from '../App';
 const Login =()=>{
    const [state,setState]= useState({
        Username:'',
        
        Password:'' 

    })  
    const ChangeText=(name: string, value: string)=>{
       setState({...state, [name]: value})
    }
    const data ={
        "Username":state.Username, 
            "Password":state.Password
    }
    
         
        
  type nav= StackNavigationProp<List,'Register'>        
    const navigation = useNavigation<nav>();
    return(
         
        <ScrollView style={styles.container}>
            
              <View style={styles.inputGroup}>
                <TextInput
                  placeholder="Username"
                  onChangeText={(value) => ChangeText("Username", value)}
                 
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
                <Button title="Login"  onPress={()=> login.log(data)}/>
              </View>

<View style={styles.cv}> 
              <TouchableOpacity
       
          onPress={() =>
          navigation.navigate('Register')
        }
        >
            <Text style={styles.buton}>
                Sing up here
            </Text>
        </TouchableOpacity>
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
            buton: {
               color: 'blue',
                
            },
            cv:{
                alignItems: 'center',
                padding: 18,
            }
          });
 export default Login