
import React, {useContext} from "react";
import {View, Text, TouchableOpacity} from "react-native";


import { Badge } from 'native-base';

import {stateContext} from "./contexts";
import styles from "./styles.js";

const OurIconButton = ({onPress, children})=>{
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={{backgroundColor: "#f004", height: 60, width: 60, position: "relative"}}>
            {children}
            </View>
        </TouchableOpacity>
    );
}



let HeaderCartButton = (props) => {
    const { navigation } =  props;
    const state = useContext(stateContext);


    console.log(`rendering HeaderCartButton and state.cartItemsSize is ${state.cartItems.size}`)

    const goToCart = (e) => {
        navigation.navigate("CheckoutList");
    };

    return (
        <View style={styles.container}>
            <View style={styles.cartContainer}>
                <View style={styles.iconCart}>
                    <OurIconButton size={50} onPress={goToCart}>
                        {
                            state?.cartItems?.size ?                                
                                <Badge success style={styles.badge}>
                                     <Text style={styles.badgeText}>
                                        {
                                            state?.cartItems?.size ?
                                                (() => {
                                                    if ( state.cartItems.size < 10 )
                                                        return state.cartItems.size;
                                                    else
                                                        return "9+";
                                                })()
                                                : <></>
                                        }
                                    </Text>
                                </Badge> 
                                : <></>
                        }
                    </OurIconButton>
                    <Text style={styles.priceText}>
                        {state.cartTotalPrice}$
                    </Text>
                </View>
            </View>
        </View>
    );
};


export default HeaderCartButton;