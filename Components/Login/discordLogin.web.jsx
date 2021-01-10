import BaseComponent from "../baseComponent"
import React from "react"
import Button from "../button"

import { StyleSheet, View, Linking, Platform } from "react-native"
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
        this.checkForDiscordParams();
        this.state = {

        }
    }

    async checkForDiscordParams(){
        if(Platform.OS !== "web") return;

        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");
        if(!code) return;
        try{
            const token = await DiscordAuth.post(code);
            const user = await DiscordAuth.user(token)
            //logged in
        }catch(e){
            console.log(e)
        }
    }

    render(){
        return (
        <>
            <Button icon={require("../../assets/icons/discord.png")} 
                    title="Login with Discord" fontSize={12}
                    onPress={() => Linking.openURL( DiscordAuth.auth() ) }
                    />
        </>
        )
    }
}