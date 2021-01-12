import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, TouchableOpacity, Image } from "react-native"

import icon from "../../assets/marker.png"

export default class Marker extends BaseComponent {

    style = StyleSheet.create({
        container:{
            width:30,
            height:30,

            justifyContent: 'center',
            alignItems: 'center',

            position: "absolute",

            left: this.props.x,
            top: this.props.y,
        },
    })

    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={this.style.container}
                pointerEvents={"auto"}
            >
                <TouchableOpacity onPress={() => this.props.onPress(this.props.area)}>
                    <Image style={this.imageStyle(30)} source={icon}/>
                </TouchableOpacity>
            </View>
        )
    }
}