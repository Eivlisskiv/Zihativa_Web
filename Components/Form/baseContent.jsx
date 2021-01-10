import BaseComponent from "../baseComponent"
import React from "react"
import { Text, View, Image } from "react-native"

export default class BaseContent extends BaseComponent {

    constructor(props){
        super(props)
    }

    onChangeText(text){
        this.inputText = text;
        super.verifyInput()
    }

    verifyInput(){
        console.log(this.inputText)
        let error = !this.inputText ? "Empty" : null
        this.setState({error})
    }

    renderError(){
        return this.state.error ?   
        (
            <View style={{flexDirection:'row'}}>
                <Image source={require('../../assets/icons/errorIcon.png')}
                 style={this.imageStyle(20)}/>
                <Text style={{color:'red'}}>{this.state.error}</Text>
            </View>
        ) : (<> </>)
    }

    render(){
        return (
            <>
            <Text style={this.textStyle()}>{this.state.title}</Text>
            {this.renderError()}
            </>
        )
    }
}