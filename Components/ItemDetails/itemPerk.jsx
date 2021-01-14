import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { navigate } from "../Navigation"

const perkType = [
    "Other", "Buff", "Debuff", "Blessing", "Curse"
]

export default class ItemRecipe extends BaseComponent {

    style = StyleSheet.create({

    })

    constructor(props){
        super(props)

        this.state = {
            perk: props.perk
        }
    }

    async onPress(name){
        const data = await getById("Item", name)
        navigate("Item", {data})
    }

    render(){
        const data = this.state.perk;
        if(!data) return <Text>Item does not come with any perks.</Text>
        console.log(data)
        return (
            <View>
                <Text>{data.name}</Text>
                <Text>Tier {data.tier} Type {perkType[data.type]}</Text>
                <Text>{data.desc}</Text>
            </View>
        )
    }
}