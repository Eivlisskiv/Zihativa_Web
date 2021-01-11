import BaseComponent from "../baseComponent"
import { StyleSheet, View } from "react-native"
import React from "react"

import Map from "../Map/map"

export default class Home extends BaseComponent {

    style = StyleSheet.create({
        background:{
            flex:1,
            backgroundColor: this.getColor("background"),
        },
    })

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <View style={this.style.background}>
                <Map preset="north_west_casdam"/>
            </View>
        )
    }
}