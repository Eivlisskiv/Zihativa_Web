import React from "react"
import { StyleSheet, TextInput, Text, View } from "react-native"

import BaseContent from "./baseContent"

export default class EmailInput extends BaseContent {

    style = StyleSheet.create({

    })

    constructor(props){
        super(props)

        this.state = {
            title: "Email"
        }
    }

    verify(){
        super.verifyInput();
    }

    render(){
        return (
            <>
            {super.render()}
            <TextInput 
                style={this.inputStyle()}
                onChangeText={(text) => this.onChangeText(text)}
            />
            </>
        )
    }
}