import axios from "axios";
var url = 'https://tcrestapi.herokuapp.com/'
export  function reg(data: { Username: string; Name: string; Lastname: string;  Password: string; }){
       
    var url = 'https://tcrestapi.herokuapp.com/';

    axios.post(url+'registro', data)
            .then(async (response) => {
                console.log(response.data);
                console.log('wiiu');
            })
            .catch(error => {
                
                console.log("-------- error ------- "+error);
                alert("result:"+error)
            });
    }
   
   
        export  function log(data: { Username: string;  Password: string; }){
        
    axios.post(url+'log', data)
    .then(async (response) => {
        console.log(response.data);
        console.log('wiiu');
        localStorage.setItem('token',response.data.token)
        alert("User regissultter successfully ");
        console.log('wii');
    })
    .catch(error => {
        
        console.log("-------- error ------- "+error);
        alert("result:"+error);
       
    });


    }



