import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { stats, getDamageType } from "../../Utilities/stats"

export default class ItemStats extends BaseComponent {

    style = StyleSheet.create({
        columns:{
            flexDirection:"column",
            margin: 5,
        },
        rows:{
            flexDirection:"row",
            margin: 5,
        },
        title:{
            margin: 5,
            fontWeight: "bold",
        }
    })

    constructor(props){
        super(props)

        this.state = {
            item: props.item
        }
    }

    renderStats(item, list){
        return <View style={this.style.rows}>
            <View style={this.style.columns}>
                {list.map(o => o && <Text key={`row 1 ${o.key}`}>{o.name}</Text>)}
            </View>
            <View style={this.style.columns}>
                {list.map(o => o && <Text key={`row 2 ${o.key}`}>{Math.round(item[o.key])}</Text>)}
            </View>
        </View>
    }

    renderDamageTypes(list){
        return <View style={this.style.rows}>
            <View style={this.style.columns}>
                {list.map((o, i) => <Text key={`row 1 ${i}`}>{getDamageType(i)}</Text>)}
            </View>
            <View style={this.style.columns}>
                {list.map((o, i) => <Text key={`row 2 ${i}`}>{o}</Text>)}
            </View>
        </View>
    }

    render(){
        const item = this.state.item;
        return (
            <View style={this.style.rows}>
                <View>
                    <Text style={this.style.title}>Base Stats</Text>
                    {this.renderStats(item, stats.base)}
                </View>
                <View>
                <Text style={this.style.title}>Damages</Text>
                    {this.renderDamageTypes(item.damage)}
                </View>
                <View>
                <Text style={this.style.title}>Resistances</Text>
                    {this.renderDamageTypes(item.resistance)}
                </View>
            </View>
        )
    }
}