import React from "react";
import { View, Text , Button,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Tabs({}) {
    const navigation = useNavigation();
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
                onPress={()=> navigation.navigate("Perfil") }/>
        <TouchableOpacity  >
        <Text > User</Text>
        </TouchableOpacity>
        <TouchableOpacity  >
        <Text >Search</Text>
        </TouchableOpacity>
      </View>
   
  );
};

