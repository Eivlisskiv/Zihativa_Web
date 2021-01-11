import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, ImageBackground, View } from "react-native"

import Marker from "./marker"
import MapDetails from "./mapdetails"

export default class Map extends BaseComponent {

    style = StyleSheet.create({
        background: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.getColor("background"),
        },
        container:{
            flex: 'warp',
            justifyContent: 'center',
            alignItems: 'center',

            borderColor: this.getColor("other"),
            borderWidth: 20,
            borderRadius: 20,
        },
    })

    constructor(props){
        super(props)
        
        this.state = this.findPreset(this.props.preset) || {

        }
    }

    findPreset(name){
        if(!name) return null;
        try{
            const preset = require(`./presets/${name}.json`);
            return preset;
        }catch(e){

        }
        return null;
    }

    getPath(name){
        const loc = this.state.location;
        return `${loc.realm}\\${loc.continent}\\${loc.kingdom}\\${loc.parent || name}\\${name}`;
    }

    onMarkerPress(name){
        if(!this.mapDetails) return;

        const path = this.getPath(name);
        this.mapDetails.setState({path});
    }

    imageStyle(rate = 1){
        return {
            width: (this.state.size.width || 50) * rate,
            height: (this.state.size.height || 50) * rate,
        }
    }

    renderMarkers(){
        return this.state.nodes.map(data => 
            <Marker key={data.area} area={data.area} x={data.x} y={data.y}
                onPress={n => this.onMarkerPress(n)}
            />    
        )
    }

    render(){
        return (
            <View style={this.style.background}>
                <View style={this.style.container}>
                    <ImageBackground
                        style={this.imageStyle(1)}
                        source={this.state.image}
                    >
                    {this.renderMarkers()}
                    </ImageBackground>
                </View>
                <MapDetails ref={c => this.mapDetails = c} />
            </View>
        )
    }
}