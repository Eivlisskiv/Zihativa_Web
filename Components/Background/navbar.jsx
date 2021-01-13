import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View } from "react-native"
import Button from "../button";
import { navigate } from "../Navigation"

export default class Navbar extends BaseComponent {

    style = StyleSheet.create({
        container:{
            width:"100%",
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
        }
    })

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        console.log("nav")
        return (
            <View style={[this.style.container, {backgroundColor: this.getColor("navbar")}]}>
                <Button title="Map" 
                    onPress={() => navigate("Map")}
                />
            </View>
        )
    }
}