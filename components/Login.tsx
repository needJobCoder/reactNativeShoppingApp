import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl, shoppingBasePrefix, login } from '../Constants'
import {  useDispatch, useSelector } from 'react-redux'
import { change } from '../redux/slices/LoginSlice'
import { setUser } from '../redux/slices/UserDetailsSlice'
import { userData } from '../redux/slices/UserDetailsSlice'

interface textInput {
    credential: string,
    setCredential: React.Dispatch<React.SetStateAction<string>>,
    placeholderName:string
}

export const CustomTextInputTag = ({ credential, setCredential, placeholderName}: textInput) => {
    return <TextInput placeholder={placeholderName} placeholderTextColor={"white"} style={{color:'white', borderWidth:2, borderColor: "black", borderRadius:20, padding:10, marginVertical:20, backgroundColor:'black'}}   onChangeText={(text) => { setCredential(text) }} />
}



const Login = () => {
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.login.value)
    const user_id = useSelector(state => state.userData_.id)
    const user_name = useSelector(state => state.userData_.username)
    const login_= () => {
        let getResponse = null
        const user_data = {"username": username, "password": password}
        axios.post(baseUrl + shoppingBasePrefix + login, user_data)
            .then(function (response) {
                // console.log(response.data);

                try {
                    getResponse = response.data
                    
                    setLoginResponse(getResponse)
                   
                    

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

   

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loginResponse, setLoginResponse] = useState<any>(null);



    return (
        <View style={{flex: 1, margin:10, padding: 10, backgroundColor:"lightgrey", borderRadius:20, justifyContent:'center', alignContent:'center', }}>
            <CustomTextInputTag credential={username} setCredential={setUsername} placeholderName={"username"} />
            <CustomTextInputTag credential={password} setCredential={setPassword} placeholderName={"password"} />
            <View style={{flex: 0.5, alignContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={()=> {
                login_()
                if(loginResponse === null)
                {
                    return;
                }else
                {
                    const status = loginResponse['loginStatus']
                    console.log(loginResponse);
                    
                    
                    if(status === 'Success')
                    {
                        const id__ = loginResponse.userDetails.id
                        const username__ = loginResponse.userDetails.username
                        Alert.alert("Success")
                        dispatch(change(true))
                        const user : userData =  {
                            id:id__,
                            username:username__
                        }
                        
                        dispatch(setUser(user))

                        console.log(user_name, user_id, loginState);
                        
                    }
                    else if(status === "Failed")
                    {
                        Alert.alert("Failed")
                    }
                }
                
            }} style={{backgroundColor:'black', width:120, height:40, borderRadius:20, marginVertical:10, padding:2, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white'}}>Submit</Text> 
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login