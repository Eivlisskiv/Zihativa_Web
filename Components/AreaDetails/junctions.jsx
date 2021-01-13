import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default class JunctionsInfo extends BaseComponent {

    style = StyleSheet.create({

    })

    constructor(props){
        super(props)
    }

    render(){
        const junctions = this.props.junctions;
        return (
            <View>
                {
                    junctions?.map(obj => 
                        <Text key={obj.destination}
                            style={this.textStyle(20)}
                        >{obj.destination}</Text>    
                    ) || 
                    <Text style={this.textStyle(20)}>
                    No Junctions</Text>  
                }
            </View>
        )
    }
}