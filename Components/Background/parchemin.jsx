import React from "react"
import { ImageBackground, StyleSheet } from "react-native"
import theme from "../../Utilities/theme"
const bk = require("../../assets/parchemin.png")

export default class Parchemin extends React.Component {

    style = StyleSheet.create({
        container: {
            flex:1,
            height:"100%",
            width:"100%",
            borderColor: theme.other,
            borderWidth: 5,
            borderRadius: 5,
            alignSelf:"center",
        },
    })

    render(){
        return (
            <ImageBackground
                style={this.style.container}
                source={bk}
            >
            {this.props.children}
            </ImageBackground>
        )
    }
}