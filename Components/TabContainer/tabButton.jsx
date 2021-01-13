import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

export default class Button extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            fontSize: this.props.fontSize || 20,
            color: props.color || "white",
            secondaryColor: props.secondaryColor || "black",
        }

        this.style = StyleSheet.create({
            button: {
                marginTop: 5,
                marginRight: 0,
                marginLeft: 0,
                marginBottom: 0,
                paddingBottom: 3,
                paddingHorizontal: 8,

                flexWrap: "wrap",
                alignItems: 'center',

                borderWidth: 2,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
            },
            image:{
                width: 30,
                height: 30,
            },
            text:{
                fontSize:this.state.fontSize,
            }
        })
    }

    componentDidUpdate(prevProps) {
        this.checkProp("color", prevProps)
        this.checkProp("secondaryColor", prevProps)
    }

    checkProp(name, pprops){
        if (this.props[name] !== pprops[name]) {
            const obj = { }
            obj[name] = this.props[name];
            this.setState(obj);
        }
    }

    renderIcon(){
        return !this.props.icon ? null :
            <Image style={this.style.image} source={this.props.icon} />
    }

    renderText(){
        return !this.props.title ? null :
        <Text style={[this.style.text,
            {color: this.state.secondaryColor}
        ]}>
            {this.props.title}
        </Text>
    }

    render(){
        return (
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={[
                            this.style.button, 
                        {color: this.state.secondaryColor,
                        borderColor: this.state.secondaryColor,
                        backgroundColor: this.state.color}
                        ]} onPress={this.props.onPress}>
                    {this.renderIcon()}
                    {this.renderText()}
                    </TouchableOpacity>
                </View>
        )
    }
}