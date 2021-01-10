import React from "react"
import { StyleSheet, TextInput } from "react-native"

import BaseContent from "./baseContent"

export default class PasswordInput extends BaseContent {

    style = StyleSheet.create({

    })

    constructor(props){
        super(props)

        this.state = {
            title: "Password"
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
                secureTextEntry={true}
            />
            </>
        )
    }
}