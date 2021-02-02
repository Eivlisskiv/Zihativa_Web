import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

export default class HyperLinkText extends React.Component {

    style = StyleSheet.create({
        hyperlink: {
            display:"flex",
            flex:1,
            flexWrap:"wrap",
        }
    })

    constructor(props){
        super(props)

        this.state = {
            color: props.color || "black",
            size: props.size || 18,
            text: props.text,
            
        }
    }

    textStyle(){
        return {
            color: this.state.color, 
            fontSize: this.state.size,
            textDecoration: "underline",
        }
    }

    render(){
        return (
            <TouchableOpacity
                style={this.style.hyperlink}
                onPress={() => this.props.onPress()}
            >
                <Text style={this.textStyle()}>
                {this.state.text}
                </Text>
            </TouchableOpacity>
        )
    }
}