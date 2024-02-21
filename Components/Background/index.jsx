import React from "react"
import { ImageBackground, View } from "react-native"
import Navbar from "./navbar"
import SideMenu from "../SideMenu"

const bk = require("../../assets/background.jpg")

export default class Background extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            navbar: this.props.navbar !== false,
        }

        this.sidebar = React.createRef();
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
                {this.state.navbar ? <Navbar style={{flex:1.5}} onSidebarClick={(v) => this.sidebar?.toggle(v)} /> : null}
                <View style={{flex:8.5}}>{this.props.children}</View>
                <SideMenu ref={this.sidebar} />
            </ImageBackground>
        )
    }
}