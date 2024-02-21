import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View } from "react-native"
import Button from "../button"

export default class Template extends BaseComponent {

    style = StyleSheet.create({
        container : {
            position: "absolute",
            display:"flex",
            flexDirection: "row",
            justifyContent:"space-between",
            alignItems: "center",

            top: "4%",
            height:"96%",
            width:"25%",

            transition: "left 0.26s ease",
        },
        buttonContainer: {
            flex: 1,
            transition: "all 0.26s ease",
        },
        inner:{
            display: "flex",
            flex: 9,
            flexDirection: "column",
            justifyContent: "center",
            height:"100%",
            padding:10,
            transformOrigin:"left",
            backgroundColor: "#ddf",
        }
    })

    constructor(props){
        super(props)

        this.state = {
            open: false,
        }
    }

    toggle(value){

    }

    getContainerStyle(open){
        return {
            left: open ? 0 : "-25%",
        }
    }

    render(){
        const open = this.state.open;
        return (
            <View style={[this.style.container, this.getContainerStyle(open)]}>
                <View style={this.style.inner} >
                    {this.props.children}
                </View>
            </View>
        )
    }
}