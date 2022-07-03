import 'react-native-gesture-handler';
import React from 'react';
import {Text,Button,StyleSheet} from 'react-native'; 

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 

import Register from './views/registerScreen';
import Login from './views/loginScreen';


const Stack = createStackNavigator();

function MyStack() { 
  
  return(

    <Stack.Navigator  
    
    initialRouteName="Login"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#621FF7",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}>
      
      <Stack.Screen name="Login"
        component={Login}
        options={{ title: "Login" }}
        />  
        <Stack.Screen name="Register"
        component={Register}
        options={{ title: "Register" }}
        />
       
    </Stack.Navigator>
  );
}
const App =() =>{

  return(   <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );

}; 
const styles= StyleSheet.create ({
  container: {flex:1, justifyContent:"center", alignContent:"center", backgroundColor:"#292929" ,},
  tittle: {fontSize: 30}
})
export default App;