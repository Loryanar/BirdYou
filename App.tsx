import 'react-native-gesture-handler';
import React from 'react';
import {Text,Button,StyleSheet} from 'react-native'; 

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 

import Register from './views/registerScreen';
import Login from './views/loginScreen';

export type List = {
  Register: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<List>();

function MyStack() { 
  
  return(

    <Stack.Navigator  
    
    initialRouteName="Login"
   >
      
      
      <Stack.Screen 
        name="Login"
        component={Login}
       
        />  
      
        <Stack.Screen name="Register"
        component={Register}
        
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