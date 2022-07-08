import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, Text,StyleSheet, Button, Alert } from 'react-native';
import * as url from '../text'




export default  function MyPosts({ navigation }) {
    const [posts, setPosts] = useState([]);
    
 
 
   useEffect(()=> {
  
   })
   


    const po =  async ()=>{
         try {
           

        fetch(url.url+"posts/0",{
            method: 'GET',
            headers: new Headers({
                'authorization': localStorage.getItem("token"),
              
               }),
            
            }).then(function (response) {
                let data1=response.json()
                     
                    
                     console.log(posts)
                    console.log(data1)
                    return data1
                     
                     
                                    }).then(function (data1) {
                                        const data=data1
                                             const slice= data.slice();
                                            setPosts(slice)
                                             
                                            console.log(posts)
                                            return data
                                             
                                             
                                                            })
         } catch (error) {
       
             console.error(error);    
       
         }
              
            
          
         
      
   


    
}
po()
    const renderItem = ({item, index}) => (
        <TouchableOpacity
          
        >
            <Image source={{ uri: item.img }} style={styles.itemImage} />

            <View style={styles.textContainerRow}>
                <Text style={styles.itemTitle}>{item.texto}</Text>
                
                
            </View>
        
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item.idpost}
            />
            
        </View>
    );
}
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

