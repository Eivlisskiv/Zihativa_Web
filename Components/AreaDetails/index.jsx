import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View } from "react-native"
import Background from "../Background"
import GeneralInfo from "./generalInfo"
import TabContainer from "../TabContainer"
import JunctionsInfo from "./junctions"
import TieredList from "../TieredList"

import Parchemin from "../Background/parchemin"

export default class AreaDetail extends BaseComponent {

    style = StyleSheet.create({
        container:{
            width:"90%",  
            height:"100%",
            flexDirection:"column",
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: "center",
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
            fontSize: s,
            marginLeft: 10,
            marginRight: 5,
            marginVertical: m,
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
        console.log(area.junctions, area.loot, area.mobs)
        return (
            <Background>
                <View style={this.style.container}>
                    <Parchemin>
                        <GeneralInfo 
                            style={{flex:2}}
                            textSize={10}
                            data={this.state.data} />
                        <TabContainer
                            style={{flex:4}}
                            tabs={["Junctions","Item Drops", "Creatures"]}
                            color={this.getColor("contrast")}
                            secondaryColor={this.getColor("other")}
                        >
                            <JunctionsInfo junctions={area.junctions} />
                            <TieredList items={area.loot} title="Item" />
                            <TieredList items={area.mobs} title="Creature" />
                        </TabContainer>
                    </Parchemin>
                </View>
            </Background>
        )
    }
}