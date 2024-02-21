import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View } from "react-native"
import Button from "../button"

export default class SbButton extends BaseComponent {

    style = StyleSheet.create({
        t:{
            
        }
    })

    constructor(props){
        super(props)

        this.state = { }
    }

    onPress(){
        const pressed = !this.state.pressed;
        if(this.props.onPress)
            this.props.onPress(pressed);
        this.setState({pressed})
    }

    getStyle(){
        const pressed = this.state.pressed;
        return {
            transform: `rotate(${pressed ? 90 : 0}deg)`
        }
    }

    render(){
        return (
            <View style={this.getStyle()}>
                <Button title="| | |" onPress={() => this.onPress()} 
                    pad={"5px 5px 5px 5px"}
                />
            </View>
        )
    }
}