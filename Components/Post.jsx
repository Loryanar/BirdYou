import React, {useState, useEffect, Component} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button,TouchableOpacity} from 'react-native'; 
 
 import DocumentPicker from 'react-native-document-picker';

 export default function Post(){
const Post=()=>{
    const [singleFile, setSingleFile] = useState(null);
const [state,setState]= useState({
            Username:'',
             Name:'',
             Lastname:'',
             Email:'',
             Password:'' 

         })  
}
 
        
    
 
    
         
         return(
         <>
         
         < ScrollView>

         <View>
             <Text>hOLO</Text>
          
         </View>
            </ScrollView>
        
</>
  
        
     );
 }
 const styles = StyleSheet.create({
    mainBody: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    buttonStyle: {
      backgroundColor: '#307ecc',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#307ecc',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 15,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    textStyle: {
      backgroundColor: '#fff',
      fontSize: 15,
      marginTop: 16,
      marginLeft: 35,
      marginRight: 35,
      textAlign: 'center',
    },
  });
