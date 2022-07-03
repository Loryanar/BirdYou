import axios from "axios";
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






