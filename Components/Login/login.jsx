import BaseComponent from "../baseComponent"
import React from "react"
import Form from "../Form/form"
import Button from "../button"

import { StyleSheet, View, Linking } from "react-native"
import { WebView } from 'react-native-webview';

import DiscordAuth from "../../Auth/discordAuth"
import DiscordLogin from "./discordlogin"


export default class Login extends BaseComponent {

    style = StyleSheet.create({
        background:{
            backgroundColor:this.getColor("background"),
            height:"100%"
        }
    })

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <View style={this.style.background}>
                <View>
                    <DiscordLogin />
                </View>
                <Form title="login" 
                    ref={c => this.loginForm = c}
                    content={["email", "password"]}
                    submit={this.login}
                />
            </ View>
        )
    }
}