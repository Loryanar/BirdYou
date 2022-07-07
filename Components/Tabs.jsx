import React from "react";
import { View, Text , Button,TouchableOpacity} from "react-native";

export default function Tabs({navigation}) {
  function Holo() {
        navigation.navigate("Login");
     }
  return (
    
    <View 
    screenOptions={{

        style:{
            position:'absolute',
            botton: 25,
            left:20,
            rigth: 20,
            elevation:0,
            backgrounfColor:"#ffff",

        }
    }}
     
 
  >
      
      <Button title="Login"  
                onPress={()=>Holo() }/>
        <TouchableOpacity  >
        <Text > User</Text>
        </TouchableOpacity>
        <TouchableOpacity  >
        <Text >Search</Text>
        </TouchableOpacity>
      </View>
   
  );
};

