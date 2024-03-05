import { View, Text, Alert, TouchableOpacity } from 'react-native'
import React, {useState}from 'react'
import { change } from '../redux/slices/LoginSlice'
import { CustomTextInputTag } from './Login'

const SignUp = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
  return (
    <View>
      <View style={{flex: 1, margin:10, padding: 10, backgroundColor:"lightgrey", borderRadius:20, justifyContent:'center', alignContent:'center', }}>
            <CustomTextInputTag credential={username} setCredential={setUsername} placeholderName={"username"} />
            <CustomTextInputTag credential={password} setCredential={setPassword} placeholderName={"password"} />
            <View style={{flex: 0.5, alignContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={()=> {
                
                
                
            }} style={{backgroundColor:'black', width:120, height:40, borderRadius:20, marginVertical:10, padding:2, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white'}}>Submit</Text> 
            </TouchableOpacity>
            </View>
        </View>
    )
    </View>
  )
}

export default SignUp