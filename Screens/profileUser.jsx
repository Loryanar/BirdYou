import React ,{useState, useEffect} from 'react';
import {Text,View,StyleSheet, TextInput, ScrollView,Button,TouchableOpacity} from 'react-native'; 
import { useNavigation } from "@react-navigation/native";
import Post from '../components/Post'


const Perfil = (props) => {
    let {username, apellido, descripcion, email, nombre, resultPost} = props.route.params
    const [state, setState] = useState({
        Username: '',
        Name: '',
        Lastname: '',
        Email: '',
        Description: ''
    })
    const [posts, setPosts]= useState(null)

    useEffect( () => {
        if (!(state.Username == username &&
            state.Name == nombre &&
            state.Lastname == apellido &&
            state.Email == email &&
            state.Description == descripcion)) {

                setState({
                    Username: username,
                    Name: nombre,
                    Lastname: apellido,
                    Email: email,
                    Description: descripcion
                })
            
        }

        if (!(posts == resultPost)) {

            setPosts(resultPost)
            
        }
    
    })




    

    
    
    return(       
        <ScrollView style={styles.container}>
<Post/>
            <View style={styles.contentPerfil}>

                <Text style={styles.titulo}>
                    {state.Username}
                </Text>
                <Text style={styles.infoPerfil}>
                    {state.Name} {state.Lastname}
                </Text>
                <Text style={styles.infoPerfil}>
                    {state.Email}
                </Text>
                <View style={styles.infoPerfilbio}>

                    <Text style={styles.infoPerfil} >
                        {state.Description}
                    </Text>

                </View>

            
                <View style={styles.contentButton}>
                  
                    <View style={styles.button2}>
                        
                        <Button title="Editar Perfil"  onPress={() => {props.navigation.navigate('Update',{
                            apellido: apellido, 
                            descripcion: descripcion, 
                            email: email, 
                            nombre: nombre
                        })}}/>
                    </View>
                </View>

                <View style={styles.button}>
                    <Button title="Log out" />
                </View>
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
        width: "49%"
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
    }
});

export default Perfil