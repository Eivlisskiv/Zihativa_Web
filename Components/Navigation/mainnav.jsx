import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet } from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../Home/home.jsx"
import Login from "../Login/login"

const Stack = createStackNavigator();
export default class MainNavigation extends BaseComponent {

    style = StyleSheet.create({
        container:{
            backgroundColor: this.getColor("background")
        }
    })

    

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                headerMode={"none"}>

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
        )
    }
}