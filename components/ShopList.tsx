import { View, Text, Alert, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { baseUrl, shoppingBasePrefix, getAllShoppingItem } from '../Constants'
import axios from 'axios'
import { useSelector } from 'react-redux'

export const RenderPurchaseItem = ({ item }: any) => {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between', flex:1, margin:10, backgroundColor:'lightgrey', borderRadius:20, padding:10}}>
            <View style={{alignContent:'space-between', flex: 1, }}>
            <Text>{item.name}</Text>
            <Text>{item.category}</Text>
            <Text>{item.price} Rupees</Text>
            </View>
            <Image source={{uri:item.image}} width={100} height={100} borderRadius={20} />
        </View>
    )
}

const RenderPurchaseList = ({data=[]}: any) => {
    return (<FlatList data={data} renderItem={RenderPurchaseItem} />)
}

const ShopList = () => {
    const loginState = useSelector(state => state.login.value)
    const user_id = useSelector(state => state.userData_.id)
    const user_name = useSelector(state => state.userData_.username)
    const [purchaseData, setPurchaseData] = useState<Array<any>>([]);
    const fetchPurchases = () => {
        let getResponse = null

        if(loginState === true)
        {
            axios.get(baseUrl + shoppingBasePrefix + getAllShoppingItem +  `${user_id}/`)
            .then(function (response) {
                console.log(response.data);

                try {
                    getResponse = response.data
                    console.log(getResponse);
                    setPurchaseData(response.data['item'])

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
        
    }

    useEffect(() => {
        fetchPurchases()
    }, [loginState])


    return (
        <View>
            <RenderPurchaseList data={purchaseData} />
        </View>
    )
}

export default ShopList