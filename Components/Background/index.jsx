import React from "react"
import { ImageBackground, View } from "react-native"
import Navbar from "./navbar"

const bk = require("../../assets/background.jpg")

export default class Background extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            navbar: this.props.navbar !== false,
        }
    }

    render(){
        return (
            <ImageBackground
                style={{
                    width:"100%", height:"100%", 
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection:"column"    
                }}
                source={bk}
            >
                {this.state.navbar ? <Navbar style={{flex:1.5}} /> : null}
                <View style={{flex:8.5}}>{this.props.children}</View>
            </ImageBackground>
        )
    }
}