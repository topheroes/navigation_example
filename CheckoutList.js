import React, {useContext} from "react";
import {FlatList, View, Text, Button} from "react-native";

import {Badge} from "native-base";

import {stateContext, dispatchContext} from "./contexts"
import styles from "./styles.js";



const ItemsBlockFunc = ({item, dispatch})=>{
    
    return (
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <View style={{width: 50}}>
                <Text>{item.name}</Text>
            </View>
            
            <View  style={{width: 20}}>
                <Text>{item.total}</Text>
            </View>
            <Button title="plus" onPress={()=>dispatch({type:"plus", payload:item})}/>
            

        </View>


    )

}


const CheckoutList = (props)=>{

    const dispatch = useContext(dispatchContext);
    
    const state = useContext(stateContext);

    const ItemsBlock = ({item})=>{
        return <ItemsBlockFunc item={item} dispatch={dispatch}/>
    }


    return (
        <>
        <FlatList
                        
                        data={Array.from(state.cartItems.values())}
                        renderItem={ItemsBlock}
                        keyExtractor={(item, index) => `${index}`}/>
        </>



    )


}


export default CheckoutList;