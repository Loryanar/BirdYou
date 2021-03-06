import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from './Screens/registerScreen';
import Login from './Screens/loginScreen';
import Perfil from './Screens/profileUser';
import UpPerfil from "./Screens/Edit/editUserScreen";
import Search from './Screens/searchScreen';
import Post from './Screens/Postear';

const Stack= createStackNavigator()

export default function Navigator(){
return(
<Stack.Navigator  
    
    initialRouteName="Login"
   >
      
      
      <Stack.Screen 
        name="Login"
        component={Login}
       
        />  
         <Stack.Screen 
        name="Post"
        component={Post}
       
        />  
        
      <Stack.Screen 
        name="Search"
        component={Search}
       
        /> 
        <Stack.Screen name="Perfil"
        component={Perfil}
       
      />
        <Stack.Screen name="UpPerfil"
        component={UpPerfil}
       
      />
        <Stack.Screen name="Register"
        component={Register}
        
        />

       
    </Stack.Navigator>
    
)
}
