import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, Text } from "react-native"
import Background from "../Background"
import Parchemin from "../Background/parchemin"
import TabContainer from "../TabContainer"
import TieredList from "../TieredList"
import MobStats from "./mobStats"

export default class CreatureDetail extends BaseComponent {

    style = StyleSheet.create({

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
                    <View>
                        <Text style={[this.textStyle(20), this.style.title]}>{data.name}</Text>
                        <View style={{flexDirection:"row"}}>
                            <Text style={[this.textStyle(15), this.style.description]}>
                                Base Level: {data.baseLevel}  -  Race: {data.race}  -  Xp Drop Multiplier: {data.xpDropBuff}x
                            </Text>
                        </View>
                        <Text style={[this.textStyle(18), this.style.description]}>{data.desc}</Text>
                    </View>
                    <TabContainer
                        tabs={["Stats", "Drops"]}
                        color={this.getColor("contrast")}
                        secondaryColor={this.getColor("other")}
                    >
                        <MobStats data={data.stats} />
                        <TieredList title="Item" items={data.drops} />
                    </TabContainer>
                </Parchemin>
            </Background>
        )
    }
}