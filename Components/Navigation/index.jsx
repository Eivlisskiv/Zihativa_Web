import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet } from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';

import Home from "../Home/home.jsx"
import Login from "../Login/login"
import AreaDetail from "../AreaDetails";
import ItemDetail from "../ItemDetails";
import CreatureDetail from "../CreatureDetails";

const Stack = createStackNavigator();
const _navigator = React.createRef();

export function navigate(name, props) {
    _navigator.current.dispatch(StackActions.push(name, props));
}

export function back(){
    _navigator.current.goBack();
}

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
        <NavigationContainer ref={_navigator}>
            <Stack.Navigator initialRouteName="Map"
                headerMode={"none"}>

                <Stack.Screen name="Map" component={Home} />
                <Stack.Screen name="Login" component={Login} />

                <Stack.Screen name="Area" component={AreaDetail} />
                <Stack.Screen name="Item" component={ItemDetail} />
                <Stack.Screen name="Creature" component={CreatureDetail} />
            </Stack.Navigator>
        </NavigationContainer>
        )
    }
}