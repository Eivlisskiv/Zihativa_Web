import React from "react"
import { ImageBackground } from "react-native"
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
                style={{width:"100%", height:"100%", 
                justifyContent: 'center',
                alignItems: 'center',}}
                source={bk}
            >
                {this.state.navbar ? <Navbar /> : null}
                {this.props.children}
            </ImageBackground>
        )
    }
}