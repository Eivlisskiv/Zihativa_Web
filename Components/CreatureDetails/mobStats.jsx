import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { charStats as stats, getDamageType } from "../../Utilities/stats"

export default class MobStats extends BaseComponent {

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
            data: props.data
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
        const data = this.state.data;
        return (
            <View style={this.style.rows}>
                <View>
                    <Text style={this.style.title}>Main Stats</Text>
                    {this.renderStats(data, stats.main)}
                </View>
                <View>
                    <Text style={this.style.title}>Base Stats</Text>
                    {this.renderStats(data, stats.base)}
                </View>
                <View>
                <Text style={this.style.title}>Damages</Text>
                    {this.renderDamageTypes(data.damage)}
                </View>
                <View>
                <Text style={this.style.title}>Resistances</Text>
                    {this.renderDamageTypes(data.resistance)}
                </View>
            </View>
        )
    }
}