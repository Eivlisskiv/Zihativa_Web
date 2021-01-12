import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, Text } from "react-native"

import { getAreas } from "../../Query/api_query"
import { getAreaType } from "../../Utilities/area"

export default class MapDetails extends BaseComponent {

    style = StyleSheet.create({
        container: {
            flex: 1,
            borderColor: this.getColor("other"),
            borderWidth: 5,
            padding: 5,
            margin:5,
        },
    })

    constructor(props){
        super(props)

        this.state = {
            data: null,
        }
    }

    async loadData(path){
        if(!path) return;

        const data = await getAreas(path);
        this.setState({data});
    }

    textStyle(s, m){
        let style = super.textStyle(s);
        style.marginLeft = 10;
        style.marginRight = 5;
        style.marginVertical = m + (this.state.landscape ? 0 : -10);
        return style;
    }

    paragraphStyle(){
        const style = this.textStyle(20, 20)
        style.textAlign = "justify"
        style.flex = 1;
        return style;
    }

    render(){
        if(!this.state.data) return null;
        const area = this.state.data;
        console.log(area);
        return (
            <View style={this.style.container}>
                <Text style={this.textStyle(40, 15)}>{area.name}</Text>
                <View style={{flex:1}}>
                    <Text style={this.textStyle(20, 12)}>{getAreaType(area.type)} Level {area.level}</Text>
                    <Text style={this.textStyle(15, 12)}>
                        {`${area.realm}, ${area.continent}, ${area.kingdom}`}
                    </Text>
                    <Text style={this.paragraphStyle()}>{area.description}</Text>
                </View>
                
            </View>
        )
    }
}