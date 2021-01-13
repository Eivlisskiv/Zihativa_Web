import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, ImageBackground } from "react-native"

import { getAreas } from "../../Query/api_query"
import GeneralInfo from "../AreaDetails/generalInfo"
import { navigate } from "../Navigation"
import Button from "../button"

const parchemin = require("../../assets/parchemin.png")

export default class MapDetails extends BaseComponent {

    style = StyleSheet.create({
        container: {
            flex: 1,
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

        const data = await getAreas(path);
        this.setState({path, data});
    }

    inspectArea(){
        navigate('Area', {data: this.state.data})
    }

    render(){
        if(!this.state.data) return null;
        const area = this.state.data;
        return (
            <ImageBackground 
                    style={{width:"100%",height:"100%"}, this.style.container}
                    source={parchemin}>
                 <GeneralInfo data={this.state.data}/>
                 <Button title={"More Info"}
                        style={{flex:1}}
                        onPress={() => this.inspectArea()}/>
            </ImageBackground>
        )
    }
}