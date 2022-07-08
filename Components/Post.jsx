import React, {useState,  useCallback,useEffect, Component} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button,TouchableOpacity} from 'react-native'; 
import * as url from '../text'
import * as ImagePicker from 'expo-image-picker';

 export default function Post(){
    
let body= new FormData();




    const [singleFile, setSingleFile] = useState(null);
    const [state,setState]= useState({
                textPost:'' ,
                 archivo:'',
                 repostId:'',
                 repostEstado:''
    
             })  



             const data= {
             "textPost":state.text,
              "archivoUri": singleFile,
              "repostId" : "",
              "repostEstado":"",
    }
             const ChangeText=(name, value)=>{
                setState({...state, [name]: value})
             }

             const selectFiles = async () => {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });
        
                console.log(result);
        
                if (!result.cancelled) {
                    setSingleFile(result.uri);
                    
                }
            };
       
        
            function Post() {
              body.append('textPost', state.text);
              if(singleFile){
                body.append('archivoUri',singleFile)
              }
              try{
          console.log(data)
                fetch(url.url+"post",{
                    method: 'POST',
                    headers: new Headers({
                      
                        'authorization': localStorage.getItem("token")
                       }),
                    body: body
                    }).then(function (response) {
                      if(response.status==200){
                        console.log("wii")
                      }
                         })
                 } catch (error) {
               
                     console.error(error);    
               
                 }
        
            
        } 
        
             
             return(< ScrollView>
    
             <View>
                 <Text>TWEET</Text>
                 <View>
                     <TextInput placeholder='Write here'  onChangeText={(value) => ChangeText("text", value)}/>
                 </View>
                 <View>
                 <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={selectFiles}>
            <Text style={styles.buttonTextStyle}>Select File</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={Post}
            >
            <Text style={styles.buttonTextStyle} >TWEET</Text>
          </TouchableOpacity>
                 </View>
             </View>
                </ScrollView>
            
    
      
            
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
    