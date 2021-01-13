import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, ImageBackground, Text } from "react-native"
import Background from "../Background"
import GeneralInfo from "./generalInfo"
import TabContainer from "../TabContainer"
import JunctionsInfo from "./junctions"
import TieredList from "./tieredItems"

const parchemin = require("../../assets/parchemin.png")

export default class AreaDetail extends BaseComponent {

    style = StyleSheet.create({
        general:{

        }
    })

    constructor(props){
        super(props)
        this.state = {...{
            //data: props.areaData
        }, ...props.route.params}
    }

    textStyle(s, m){
        return {
            fontSize: s + (this.state.landscape ? 5 : 0),
            marginLeft: 10,
            marginRight: 5,
            marginVertical: m + (this.state.landscape ? 5 : -5),
            color: 'black',
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
        if(!area) return null;
        return (
            <Background>
                <View  style={{width:"90%",height:"95%"}}>
                <ImageBackground 
                    style={{width:"100%",height:"100%"}}
                    source={parchemin}>
                    <GeneralInfo 
                    data={this.state.data} />
                    <TabContainer
                        tabs={["Junctions","Item Drops", "Creatures"]}
                        color={this.getColor("contrast")}
                        secondaryColor={this.getColor("other")}
                    >
                        <JunctionsInfo junctions={area.junctions} />
                        <TieredList items={area.loot} title="Item" />
                        <TieredList items={area.mobs} title="Creature" />
                    </TabContainer>
                </ImageBackground>
                </View>
            </Background>
        )
    }
}