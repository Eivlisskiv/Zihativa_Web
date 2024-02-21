import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, Text } from "react-native"
import HyperLinkText from "../HyperLinkText"
import { getById } from "../../Query/api_query"
import { navigate } from "../Navigation"

const slots = [
    "under", "main", "tying", "secondary", "special", "skavi"
]

export default class ItemRecipe extends BaseComponent {

    style = StyleSheet.create({

    })

    constructor(props){
        super(props)

        this.state = {
            recipe: props.recipe
        }
    }

    async onPress(name){
        const data = await getById("Item", name)
        if(data)
            navigate("Item", {data})
    }

    render(){
        const data = this.state.recipe;
        if(!data) return <Text>No Recipe, Item may not be crafted.</Text>
        console.log(data);
        return (
            <View>
                {slots.map(name => {
                    const a = data[name + "Amount"]
                    const n = data[name + "Mat"];
                    return a === 0 || !n ? null : 
                    <View key={name} style={{flexDirection:"row"}}>
                        <Text>{a}x </Text>
                        <HyperLinkText
                            onPress={() => this.onPress(n)}
                            text={n}
                        />
                    </View>
                    }
                )}
            </View>
        )
    }
}