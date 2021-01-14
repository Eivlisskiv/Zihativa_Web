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

    textStyle(s, m, f){
        return {
            fontSize: s * (this.state.landscape ? this.state.textSize : 1),
            marginLeft: 10,
            marginRight: 5,
            marginVertical: m + (this.state.landscape ? 0 : -10),
            color: 'black',
            flex: f,
        }
    }

    paragraphStyle(){
        const style = this.textStyle(20, 20)
        style.textAlign = "justify"
        style.flex = 1;
        return style;
    }

    render(){
        const area = this.state.data;
        return (
            <>
            <Text style={[this.textStyle(35, 15, 1), {flex:1}]}>{area.name}</Text>
            <View style={{flex:5}}>
                <Text style={this.textStyle(20, 12, 1)}>{getAreaType(area.type)} Level {area.level}</Text>
                 <Text style={this.textStyle(15, 12, 1)}>
                    {`${area.realm}, ${area.continent}, ${area.kingdom}`}
                </Text>
            <Text style={this.paragraphStyle()}>{area.description}</Text>
            </View>
            </>
        )
    }
}