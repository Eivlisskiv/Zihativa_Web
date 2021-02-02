import BaseComponent from "../baseComponent"
import React from "react";
import { View, Text } from "react-native"
import { getAreaType } from "../../Utilities/area"

export default class GeneralInfo extends BaseComponent {

    constructor(props){
        super(props)

        this.state = {
            data: props.data,
            textSize: props.textSize || 1,
        }
    }

    componentDidUpdate(oldProps){
        if(this.props.data.AreaId !== oldProps.data.AreaId)
            this.setState({data: this.props.data})
    }

    textStyle(s, m){
        return {
            fontSize: s * (this.state.landscape ? this.state.textSize : 1),
            marginLeft: 3,
            marginRight: 3,
            marginVertical: m + (this.state.landscape ? 0 : -m/2),
            color: 'black',
        }
    }

    paragraphStyle(){
        const style = this.textStyle(18, 8)
        style.textAlign = "justify"
        return style;
    }

    render(){
        const area = this.state.data;
        return (
        <View>
            <Text style={this.textStyle(35, 8)}>{area.name}</Text>
            <View style={{margin:5}}>
                <Text style={this.textStyle(20, 8)}>{getAreaType(area.type)} Level {area.level}</Text>
                 <Text style={this.textStyle(15, 8)}>
                    {`${area.realm}, ${area.continent}, ${area.kingdom}`}
                </Text>
            <Text style={this.paragraphStyle()}>{area.description}</Text>
            </View>
        </View>
        )
    }
}