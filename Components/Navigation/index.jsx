import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet } from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../Home/home.jsx"
import Login from "../Login/login"
import AreaDetail from "../AreaDetails";

const Stack = createStackNavigator();
const _navigator = React.createRef();

export function navigate(name, props) {
    _navigator.current.navigate(name, props);
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
                <Stack.Screen name="Area" component={AreaDetail} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
        )
    }
}