import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { navigate } from "../Navigation"
import { getById } from "../../Query/api_query"

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
            flex:1,
            fontStyle: 'italic'
        }
    })

    constructor(props){
        super(props)

        this.state = {
            title: this.props.title || 'Unamed'
        }
    }

    async inspectItem(id){
        const data = await getById(this.state.title, id);
        if(data)
            navigate(this.state.title, { data: data })
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
                            onPress={() => this.inspectItem(v)}
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