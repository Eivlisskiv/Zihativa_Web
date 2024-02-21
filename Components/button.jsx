import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import BaseComponent from './baseComponent'

export default class Button extends BaseComponent{

    constructor(props){
        super(props)
        this.state = {
            fontSize: this.props.fontSize || 20
        }
    }

    buttonStyle(){
        let style = super.buttonStyle(5);
        if(this.props.pad){
            const v = this.props.pad.split(' ')
            style.paddingtop = v[0];
            style.paddingRight = v[1];
            style.paddingBottom = v[2];
            style.paddingLeft = v[3];
        }
        style.alignItems = 'center'
        return style;
    }

    renderIcon(){
        return !this.props.icon ? null :
            <Image style={this.imageStyle(30)} source={this.props.icon} />
    }

    renderText(){
        return !this.props.title ? null :
        <Text style={{
            fontSize:this.state.fontSize, 
            color:this.getColor("button", 'text')
        }}
        >
            {this.props.title}
        </Text>
    }

    render(){
        return (
                <View style={[{alignItems:'center', }, this.props.style]}>
                    <TouchableOpacity style={this.buttonStyle()} onPress={this.props.onPress}>
                    {this.renderIcon()}
                    {this.renderText()}
                    </TouchableOpacity>
                </View>
        )
    }
}