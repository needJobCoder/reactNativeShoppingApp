import { View, Text, Alert, FlatList, Touchable, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { baseUrl, shoppingBasePrefix, getPurchaseItemList } from '../Constants'
import { RenderPurchaseItem } from './ShopList'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../redux/slices/CartSlice'
import { cartObj } from '../redux/slices/CartSlice'

const RenderPurchaseItemList = ({data=[]}: any) => {
    const dispatch = useDispatch()
    const cartState = useSelector(state => state.cart_.cart)
    return <FlatList data={data} renderItem={({item}) => {
        return (
            <>
            <RenderPurchaseItem item={item}/>
            <View style={{flex: 1, alignItems:'flex-end'}}>
            <TouchableOpacity onPress={()=> {
                const carObj_ : cartObj = {
                    name: item.name,
                    image:item.image,
                    price:item.price,
                    category:item.category,
                    quantity:1
                }
                dispatch(addCart(carObj_))
                console.log(cartState);
                
            }} style={{margin:10, padding: 10, width:100,height:40, backgroundColor:'lightgrey', borderRadius:20 }}>
                <Text>Add</Text>
            </TouchableOpacity>
            </View>
            </>
        )
    }} />
}

const Cart = () => {
    const [purchaseItem, setPurchaseItems]= useState<any>(null);
    const fetchItems = () => {
        let getResponse = null
        
        axios.get(baseUrl + shoppingBasePrefix + getPurchaseItemList)
            .then(function (response) {
                console.log(response.data);

                try {
                    getResponse = response.data
                    
                    setPurchaseItems(getResponse['item'])
                   
                    

                }
                catch (error) {
                    console.log(error);
                    Alert.alert(`${error}`)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(()=> {
        fetchItems()
    },[])
  return (
    <View style={{flex: 1, margin: 10, padding: 10}}>
        {(purchaseItem === null) ? null : <RenderPurchaseItemList data={purchaseItem} /> }
        
        
    </View>
  )
}

export default Cart