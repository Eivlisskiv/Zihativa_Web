import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, Text } from "react-native"
import Background from "../Background"
import Parchemin from "../Background/parchemin"
import TabContainer from "../TabContainer"
import { getItemType } from "../../Utilities/items"
import ItemStats from './itemStats'
import ItemRecipe from './itemRecipe'
import ItemPerk from './itemPerk'

export default class ItemDetail extends BaseComponent {

    style = StyleSheet.create({
        title:{
            fontWeight:"bold",
            margin:5,
        },
        description:{
            margin:5,
        }
    })

    constructor(props){
        super(props)

        this.state = {...{
            
        }, ...props.route.params}
    }

    render(){
        const data = this.state.data;
        if(!data) return null;
        return (
            <Background>
                <Parchemin>

                <View>
                    <Text style={[this.textStyle(20), this.style.title]}>{data.name}</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style={[this.textStyle(15), this.style.description]}>
                            Tier {data.tier} {getItemType(data.type)}  -  Base Value:
                        </Text>
                        <Text style={[this.textStyle(15), this.style.title]}>{data.baseValue}</Text>
                        <Text style={[this.textStyle(15), this.style.description]}>Coins</Text>
                    </View>
                    <Text style={[this.textStyle(18), this.style.description]}>{data.description}</Text>
                </View>

                <TabContainer
                    tabs={["Stats", "Recipe", "Perk"]}
                    color={this.getColor("contrast")}
                    secondaryColor={this.getColor("other")}
                >
                    <ItemStats item={data} />
                    <ItemRecipe recipe={data.schematic} />
                    <ItemPerk perk={data.perk} />
                </TabContainer>

                </Parchemin>
            </Background>
        )
    }
}