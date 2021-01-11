import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet } from "react-native"

import { getAreas } from "../../Query/api_query"

export default class MapDetails extends BaseComponent {

    style = StyleSheet.create({

    })

    constructor(props){
        super(props)

        this.state = {
            path: this.props.path,
            data: null,
        }
    }

    async loadData(){
        const path = this.state.path;
        if(!path){
            if(this.state.data) this.setState({data:null});
            return;
        }

        const area = await getAreas(path);
        console.log(area);
    }

    render(){
        this.loadData();
        if(!this.state.data) return null;
        return (
            <>
            </>
        )
    }
}