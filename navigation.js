import React from "react";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import ProductsList from "./ProductsList";
import CheckoutList from "./CheckoutList";


const { Navigator, Screen } = createNativeStackNavigator();

const AppStackNavigator = () => {
    
    return (
        <Navigator
            initialRouteName="ProductsList"
            backBehavior="history"
            mode='modal'
            headerMode='screen'
            defaultNavigationOptions={{
                tabBarVisible: true,
                headerHideShadow: true,
            }}>
            <Screen 
                name="ProductsList"
                component={ProductsList}/>
            <Screen 
                name="CheckoutList"
                component={CheckoutList}/>
            
        </Navigator>
    );
};


export default AppStackNavigator;