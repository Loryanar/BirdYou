import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from './Screens/registerScreen';
import Login from './Screens/loginScreen';
import Perfil from './Screens/profileUser';

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
        <Stack.Screen name="Perfil"
        component={Perfil}
        options={{ title: "Perfil" }}
      />
        <Stack.Screen name="Register"
        component={Register}
        
        />
       
    </Stack.Navigator>
)
}