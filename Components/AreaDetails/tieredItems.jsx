import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default class LootInfo extends BaseComponent {

    style = StyleSheet.create({
        container:{
            flexDirection: "row"
        },
        tier:{
            flex:1,
            flexDirection:"column",
            margin: 5,
        },
        tierText:{
            fontWeight: 'bold', 
            textDecorationLine: 'underline', 
        },
        itemText:{
            fontStyle: 'italic'
        }
    })

    constructor(props){
        super(props)

        this.state = {
            title: this.props.title || 'Unamed'
        }
    }

    render(){
        const items = this.props.items;
        return (
            <View style={this.style.container}>
                {items?.map((array, key) =>
                    <View key={key} style={this.style.tier}>
                    <Text style={[this.textStyle(20), this.style.tierText]}>
                        Tier {key}</Text>
                    <View>
                    {
                        array.map(v => 
                            <Text key={v}
                            style={this.textStyle(18)}
                            >{v}</Text> 
                        ) 
                    }  
                    </View>
                    </View>
                ) || <Text>No {this.state.title}</Text>}
            </View>
        )
    }
}