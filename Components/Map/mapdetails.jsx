import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, ScrollView } from "react-native"

import Parchemin from "../Background/parchemin"
import { getById } from "../../Query/api_query"
import GeneralInfo from "../AreaDetails/generalInfo"
import { navigate } from "../Navigation"
import Button from "../button"

export default class MapDetails extends BaseComponent {

    style = StyleSheet.create({
        container: {
            flex:1,
            borderColor: this.getColor("other"),
            borderWidth: 5,
            borderRadius: 5,
            padding: 5,
            margin: 5,
        },
    })

    constructor(props){
        super(props)

        this.state = {
            data: null,
        }
    }

    async loadData(path){
        if(!path) return;

        const data = await getById("Area", path);
        this.setState({path, data});
    }

    inspectArea(){
        navigate('Area', {data: this.state.data})
    }

    render(){
        if(!this.state.data) return null;
        const area = this.state.data;
        return (
            <Parchemin>
                <ScrollView>
                    <GeneralInfo 
                    textSize={15}
                    data={this.state.data}/>
                 <Button title={"More Info"}
                        style={{flex:1}}
                        onPress={() => this.inspectArea()}/>
                </ScrollView>
            </Parchemin>
        )
    }
}