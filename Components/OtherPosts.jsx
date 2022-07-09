import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, Text,StyleSheet, Button, Alert } from 'react-native';
import * as url from '../text'
import { useNavigation } from "@react-navigation/native";




export default  function OPosts({datos}) {
 
    const [posts, setPosts] = useState([]);
    const [flag,setFlag] = useState(4)
    
    const [flag2,setFlag2] = useState()
   
 

 const navigation= useNavigation();
   useEffect(()=> {
    

   })
   function cargar(){
    if (flag<=5 && flag2==true) {
        Posts(datos.username)
        setFlag2(false)
        return setFlag(flag+1)


    }
}


 


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

function del(id) {
const  url2=id
    try {
        fetch(url.url+"post/"+url2 ,{
  
                method: 'DELETE',
                headers: new Headers({
                    'authorization': localStorage.getItem("token"),
                })
  
            }).then(function (response) {
          
               
                return response.json()
                               }).then(data1=>{
                console.log("Ola")
                navigation.navigate("Perfil")
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

                <TouchableOpacity onPress={()=>{del(item.idpost)}}>
            <Text>Delete</Text>
            
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>{del(like(item.idpost))}}>
            <Text>Like</Text>
            
          </TouchableOpacity>
                </View>
                
            </View>
        
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={renderItem}
                key={item => item.idpost}
            />
            
        </View>
    );}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#34495e',
	},
	itemContainer: {
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
		color: '#FFF',
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

