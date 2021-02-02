import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { navigate } from "../Navigation"
import { getById } from "../../Query/api_query"
import HyperLinkText from "../HyperLinkText"

export default class JunctionsInfo extends BaseComponent {

    style = StyleSheet.create({

    })

    constructor(props){
        super(props)
    }

    async onPress(junction){
        const data = await getById("Area", junction.filePath);
        navigate("Area", {data});
    }

    render(){
        const junctions = this.props.junctions;
        return (
            <View>
                {
                    junctions?.map(obj => 
                        <HyperLinkText key={obj.destination}
                            style={[this.textStyle(20),{flexWrap:"wrap", flex:1}]}
                            onPress={() => this.onPress(obj) }
                            text={obj.destination}
                        />
                    ) || 
                    <Text style={this.textStyle(20)}>
                    No Junctions</Text>  
                }
            </View>
        )
    }
}