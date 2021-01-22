import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View } from "react-native"
import Button from "../button";
import { navigate, back } from "../Navigation"
import redirect from "../Redirect"

export default class Navbar extends BaseComponent {

    style = StyleSheet.create({
        container:{
            flexDirection:"row",
            width:"100%",
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            alignSelf:"center"
        },
        center:{
            flexDirection:"row",
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
                    <View style={{width:"12%"}}>
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
                    <View style={this.style.center}>
                        <Button
                            title="Discord Bot" 
                            onPress={() => redirect("https://discord.com/oauth2/authorize?client_id=465565429645967398&scope=bot&permissions=379968")}
                        />
                        <Button
                            title="Discord Server" 
                            onPress={() => redirect("https://discord.gg/UThAc552xE")}
                        />
                    </View>
                </View>
            </View>
        )
    }
}