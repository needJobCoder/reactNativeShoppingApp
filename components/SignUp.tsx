import { View, Text, Alert, TouchableOpacity } from 'react-native'
import React, {useState}from 'react'
import { change } from '../redux/slices/LoginSlice'
import { CustomTextInputTag } from './Login'
import { baseUrl, createUserPrefix, shoppingBasePrefix,  } from '../Constants'
import axios from 'axios'

const SignUp = () => {
    const signUp = () => {
        
            
            const user_data = {"username": username, "password": password}
            axios.post(baseUrl + shoppingBasePrefix + createUserPrefix, user_data)
                .then(function (response) {
                    console.log(response.data);
    
                    try {
                       const status = response.data['createUserStatus'] 

                       if(status === 'Success')
                       {
                        Alert.alert("User created sucessfully")
                       }
                       else if(status === 'Failed')
                       {
                        Alert.alert("User creation Failed")
                       }
                    
    
                    }
                    catch (error) {
                        console.log(error);
                        Alert.alert("Fetch Failed")
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        
    }
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, margin:10, padding: 10, backgroundColor:"lightgrey", borderRadius:20, justifyContent:'center', alignContent:'center', }}>
            <CustomTextInputTag credential={username} setCredential={setUsername} placeholderName={"username"} />
            <CustomTextInputTag credential={password} setCredential={setPassword} placeholderName={"password"} />
            <View style={{flex: 0.5, alignContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={()=> {
                
                signUp()
                
            }} style={{backgroundColor:'black', width:120, height:40, borderRadius:20, marginVertical:10, padding:2, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white'}}>Submit</Text> 
            </TouchableOpacity>
            </View>
        </View>
    </View>
    )
  
}

export default SignUp