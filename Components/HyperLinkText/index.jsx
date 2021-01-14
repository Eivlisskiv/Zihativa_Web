import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

export default class HyperLinkText extends React.Component {

    style = StyleSheet.create({
        hyperlink: {

        }
    })

    constructor(props){
        super(props)

        this.state = {
            color: props.color || "black",
            size: props.size || 18,
            text: props.text,
            
        }

        this.state.style = {
            color: this.state.color, 
            fontSize: this.state.size
        }
    }

    hyperlink(){
        this.setState({
            style:{

            }
        })
    }

    render(){
        return (
            <TouchableOpacity
                onPress={() => this.props.onPress()}
            >
                <Text style={this.state.style}>
                {this.state.text}
                {this.props.children}
                </Text>
            </TouchableOpacity>
        )
    }
}