import BaseComponent from "../baseComponent"
import React from "react"
import Button from "../button"

import { StyleSheet, View, Platform } from "react-native"
import { WebView } from 'react-native-webview';

import DiscordAuth from "../../Auth/discordAuth"

export default class DiscordLogin extends BaseComponent {
    style = StyleSheet.create({
        background:{
            backgroundColor:this.getColor("background"),
            height:"100%"
        }
    })

    constructor(props){
        super(props)
        
        this.state = {
            logging: false,
        }
    }

    render(){
        return (
        <>
        {
            this.state.logging ?
            <Button icon={require("../../assets/icons/discord.png")} 
                    title="Login with Discord" fontSize={12}
                    onPress={() => this.setState({logging: true}) }
                    />
            : <WebView source={DiscordAuth.auth()} />
        }
        </>
        )
    }
}