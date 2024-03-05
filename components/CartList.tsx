import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RenderPurchaseItem } from './ShopList'
import { cartObj } from '../redux/slices/CartSlice'

const RenderCart = () => {
    const cartState = useSelector(state => state.cart_.cart)
    return <FlatList data={cartState} renderItem={({ item }) => {
        return (
            <>
                <RenderPurchaseItem item={item} />
                <View style={{alignItems:'flex-end'}}>
                <TouchableOpacity style={{margin: 10, padding: 10, backgroundColor:'lightgrey', borderRadius:20, width:100}}>
                    <Text style={{textAlign:'center'}}>{item.quantity}</Text>
                </TouchableOpacity>
                </View>
            </>
        )
    }} />
}


const CartList = () => {
    return (
        <View style={{ margin: 10, padding: 10, flex: 1 }}>
            <RenderCart />
        </View>
    )
}

export default CartList