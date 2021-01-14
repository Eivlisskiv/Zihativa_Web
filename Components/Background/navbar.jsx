import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View } from "react-native"
import Button from "../button";
import { navigate, back } from "../Navigation"

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
            flexDirection:"row"
            
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
                <Button
                    title="Back" 
                    onPress={() => back()}
                />
                <View style={this.style.center}>
                    <Button title="Map" 
                        onPress={() => navigate("Map")}
                    />
                </View>
                <View/>
                {/*<Button style={{hidden}}
                    title="-" 
                    //onPress={() => navigate("Login")}
                />*/}
            </View>
        )
    }
}