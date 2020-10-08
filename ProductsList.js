
import React, {useContext, useLayoutEffect} from "react";
import {FlatList, Text, Image, View, Button} from "react-native";

import {dispatchContext} from "./contexts"
import data from "./data";
import HeaderCartButton from "./Header";


const ProductsItem = ({item, dispatch})=>{


    const photoUrl = item.photoUrl+`?a=${Math.random()}`;

    return (

        <View style={{ justifyContent:"center", alignItems: "center"}}>

            <View>
                <Text>{item.name}</Text>
            </View>
            <View style={{height: 300}}>
                <Image style={{width: 200, height: 300}} source={{uri:photoUrl}}/>
            </View>
            <View>
                <Text>{item.description}</Text>
            </View>
            <Button title="add" onPress={()=>dispatch({type:"plus", payload: item})}/>

            

        </View>



    )



}



const ProductsList = (props)=>{
    const dispatch = useContext(dispatchContext);


    const {navigation} = props;

    useLayoutEffect( () => {
        
        navigation.setOptions({
        
            headerCenter: (props)=><HeaderCartButton navigation={navigation} />,
            
            headerStyle: {
                backgroundColor: "lightyellow",
            },
        });
    }, [navigation]);

    const renderProductItem = ({item, index})=>{
        return (
            <ProductsItem item={item} index={index} dispatch={dispatch} />
        )
    };

    return (
        <>

            <FlatList
                // contentContainerStyle={{paddingTop: 12}}
                initialNumToRender={2}
                data={data}
                renderItem={ renderProductItem }
                keyExtractor={(item, index) => `${index}`}

            />


        </>



    )


}


export default ProductsList;