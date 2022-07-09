import React ,{useState, useEffect} from 'react';
import {Text,View,StyleSheet, TextInput,FlatList, ScrollView,Button,TouchableOpacity} from 'react-native'; 
import * as url from '../text'
import { useNavigation } from "@react-navigation/native";
import { Card, Avatar, Image } from "react-native-elements";
import Tabs from '../Components/Tabs'






const Search = () => {
    const [state,setState]= useState({
        data:''

    })  
    const ChangeText=(name, value)=>{
        setState({...state, [name]: value})
     }
const [username,setUsername] = useState()
const [flag2,setFlag2] = useState(false)  
const [posts, setPosts] = useState([]);
const [flag,setFlag] = useState(4)

const navigation= useNavigation();
   


function Posts(username){
      try {
        

     fetch(url.url+"posts/"+username,{
         method: 'GET',
         headers: new Headers({
             'authorization': localStorage.getItem("token"),
           
            }),
         
         }).then(function (response) {
             let data1=response.json()
                  
                 
                  
                
                 return data1
                  
                  
                                 }).then(function (data1) {
                                      
                                        var  slic= data1
                                        console.log(slic)
                                        
                                       setPosts(slic)
                                          
                                         console.log(slic)
                                         return slic
                                          
                                          
                                                         })
      } catch (error) {
    
          console.error(error);    
    
      }
}

function like(id) {

 try {
    fetch(url.url+"like/"+id,{

             method: 'GET',
             headers: new Headers({
                 'authorization': localStorage.getItem("token"),
             })

         }).then(function (response) {
        let data1=response.json()
             console.log(data1)
             return data1
                            }).then(data1=>{
             
             return data1
         })
 } catch (error) {

     console.error(error);    

 }
 
}


function follow(username) {

    try {
       fetch(url.url+"follow/"+username,{
   
                method: 'PUT',
                headers: new Headers({
                    'authorization': localStorage.getItem("token"),
                })
   
            }).then(function (response) {
           let data1=response.json()
                console.log(data1)
                return data1
                               }).then(data1=>{
                
                return data1
            })
    } catch (error) {
   
        console.error(error);    
   
    }
    
   }
    
   
const renderItem = ({item, index}) => (
    <TouchableOpacity
      
    >
        <Image source={{ uri: item.img }} style={styles.itemImage} />

        <View style={styles.textContainerRow}>
            <Text style={styles.itemTitle}>{item.texto}</Text>
            <View>

            
      
      <TouchableOpacity onPress={()=>{del(like(item.idpost))}}>
        <Text>Like</Text>
        
      </TouchableOpacity>
            </View>
            
        </View>
    
    </TouchableOpacity>
);



    function bucarPerfil() {

        try {
            fetch(url.url+"perfil/"+username ,{
      
                    method: 'GET',
                    headers: new Headers({
                        'authorization': localStorage.getItem("token"),
                    })
      
                }).then(function (response) {
               let data1=response.json()
                   console.log(data1)
                   
                    return data1
                                   }).then(data1=>{
                                    let data =data1.usuario;
                                   ChangeText('data',data)
                                    console.log(data)
                                   
                                    if(data.username!=null){
                                        Posts(data.username)

                                    }
                                    console.log(data.username)
                   
                })
        } catch (error) {
      
            console.error(error);    
      
        }
        
    }

    return(       
        <ScrollView style={styles.container}>
               <View><Tabs/></View>
 <View >
        <TextInput
          placeholder="Username"
           onChangeText={(value) => setUsername(value) }
        />
      </View>

      
      <View style={styles.button1}>              
    <Button title="Buscar" onPress={()=>bucarPerfil()} />
    </View>
    <View style={styles.textContainerRow}>
            <Text style={styles.itemTitle}>{state.data.username}</Text>
            <View>
      <TouchableOpacity onPress={()=>{follow(state.data.username)}}>
        <Text>Follow</Text>
        
      </TouchableOpacity>
            </View>
            
        </View>
    <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={renderItem}
                key={item => item.idpost}
            />
            
        </View>
    
               
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
     
    },
    button: {
        color: 'blue',
        marginHorizontal: 5,
        marginVertical: 1
    },
    contentButton: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: "wrap",
        marginHorizontal: 5
    },
    button1: {
        color: 'blue',
        marginRight: 3,
        marginVertical: 1,
        width: "30%"
    },
    button2: {
        color: 'blue',
        marginLeft: 2,
        marginVertical: 1,
        width: "49%"
    },
   
    titulo:{
        fontSize: 20,
        fontWeight:'bold',
        padding: 5
    },
    infoPerfil:{
        paddingVertical:2,
        paddingHorizontal: 5
    },
    contentPerfil: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'blue'
    },
    infoPerfilbio: {
        borderWidth: 1,
        marginHorizontal: 5,
        marginVertical: 1
    },
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },itemContainer: {
		width: '100%',
		height: 200,
		borderBottomColor: '#FFF',
		borderBottomWidth: 1,
	},
	itemImage: {
		width: '100%',
		height: 100,
	},
	itemTitle: {
		color: 'black',
		fontSize: 25,
		fontWeight: 'bold',
		marginLeft: 10,
	},
	itemContent: {
		color: '#FFF',
		fontSize: 10,
		marginLeft: 10,
		marginTop: 5,
	},
});

export default Search