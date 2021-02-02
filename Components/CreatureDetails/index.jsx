import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, ScrollView, View, Text } from "react-native"
import Background from "../Background"
import Parchemin from "../Background/parchemin"
import TabContainer from "../TabContainer"
import TieredList from "../TieredList"
import MobStats from "./mobStats"

export default class CreatureDetail extends BaseComponent {

    style = StyleSheet.create({
        container:{
            height:"100%",
            display:"flex", 
            flexDirection:"column", 
            flexWrap:"wrap",
            padding:5,
        },
        details:{
            display:"flex", 
            flexDirection:"column", 
            flexWrap:"wrap",
            padding:5, 
            justifyContent:"space-around"
        },
        extraDeets:{
            display:"flex", 
            flexDirection:"row",
             flexWrap:"wrap", 
             marginVertical:8, 
             justifyContent:"space-evenly"
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
        if(!data) return (
        <Background>
            <Parchemin>
                <Text>There was an error getting the data from the server</Text>
            </Parchemin>
        </Background>
        )
        
        if(!data) return null;
        return (
            <Background>
                <Parchemin>
                    <ScrollView>
                    <View style={this.style.container}>
                        <View style={this.style.details}>
                            <Text style={[this.textStyle(20), this.style.title]}>{data.name}</Text>
                            <View style={this.style.extraDeets}>
                                <Text style={this.textStyle(15)}>
                                    Base Level: {data.baseLevel}
                                </Text> 
                                <Text style={this.textStyle(15)}> 
                                    Race: {data.race} 
                                </Text>
                                <Text style={this.textStyle(15)}>
                                    Xp Drop Multiplier: {data.xpDropBuff}x
                                </Text>
                            </View>
                            <Text style={this.textStyle(18)}>{data.desc}</Text>
                        </View>
                        <View style={{flex:2}}>
                            <TabContainer
                                tabs={["Stats", "Drops"]}
                                color={this.getColor("contrast")}
                                secondaryColor={this.getColor("other")}
                            >
                                <MobStats data={data.stats} />
                                <TieredList title="Item" items={data.drops} />
                            </TabContainer>
                        </View>
                    </View>
                    </ScrollView>
                </Parchemin>
            </Background>
        )
    }
}