import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View } from "react-native"
import Button from "../button";
import { navigate, back } from "../Navigation"
import redirect from "../Redirect"

const zihativa = require("../../assets/pfp/zihativa.png")
const serverIcon = require("../../assets/pfp/server.png")

export default class Navbar extends BaseComponent {

    style = StyleSheet.create({
        container:{
            display:"flex",
            flexDirection:"row",
            width:"100%",
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,

            flexWrap:"wrap",
            justifyContent: "space-evenly",
        },
        center:{
            justifyContent: "center",
            display:"flex",
            flex:2,
            flexDirection:"row",
            flexWrap:"wrap",
        },
        right:{
            display:"flex",
            flex:1,
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"flex-end",
        },
        left:{
            display:"flex",
            flex:1,
            flexWrap:"wrap",
            alignItems: "flex-start",
        }
    })

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <View style={[this.style.container, {backgroundColor: this.getColor("navbar")}]}>
                <View style={this.style.container}>
                    <View style={this.style.left}>
                        <Button
                        title="Back" 
                        onPress={() => back()}
                    />
                    </View>
                    <View style={this.style.center}>
                        <Button title="Map" 
                            onPress={() => navigate("Map")}
                        />
                        <Button title="Search" 
                            onPress={() => navigate("Search")}
                        />
                    </View>
                    <View style={this.style.right}>
                        <Button
                            icon={zihativa} 
                            pad={"0 0 0 0"}
                            onPress={() => redirect("https://discord.com/oauth2/authorize?client_id=465565429645967398&scope=bot&permissions=379968")}
                        />
                        <Button
                            icon={serverIcon}
                            pad={"0 0 0 0"}
                            onPress={() => redirect("https://discord.gg/UThAc552xE")}
                        />
                    </View>
                </View>
            </View>
        )
    }
}