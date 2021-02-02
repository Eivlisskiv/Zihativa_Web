import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, ImageBackground, View, Dimensions, Image } from "react-native"
import PanPanel from '../Panel';
import Background from "../Background"
import Marker from "./marker"
import MapDetails from "./mapdetails"

export default class Map extends BaseComponent {

    style = StyleSheet.create({
        container:{
            flex: 1,
            width:"100%"
        },
        mapcontainer:{
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: this.getColor("other"),
            borderWidth: 5,
            borderRadius: 20,

            overflow: "hidden",
        },
    })

    winConf = { }
    constructor(props){
        super(props)
        
        this.state = this.findPreset(this.props.preset) || {

        }

        this.state.mapSize = { width:0, height:0}
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
        this.mapDetails.loadData(path);
    }

    imageStyle(rate = 1){
        return {
            zIndex:-1,
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

    getWindowSize(){
        const win = Dimensions.get("window");
        this.winConf.x = win.width;
        this.winConf.y = win.height - 50;
        
        const landscape =this.winConf.x > this.winConf.y;
        this.winConf.landscape = landscape;
        const q = Math.min(this.winConf.x, this.winConf.y, this.state.size.width, this.state.size.height)
        return{
            x: landscape ? Math.min(q, this.winConf.x / 2) : q,
            y: !landscape ? Math.min(q, this.winConf.y /2) : q,
        }
    }

    render(){
        const frameSize = this.getWindowSize();
        return (
            <Background>
                <View style={[this.style.container, {flexDirection:this.winConf.landscape ? "row" : "column"}]}>
                    <View style={[this.style.mapcontainer, {width:frameSize.x, height:frameSize.y} ]}>
                        <PanPanel imageSize={this.state.size} frameSize={frameSize}>
                            <ImageBackground
                                style={this.imageStyle()}
                                source={this.state.image}>
                            {this.renderMarkers()}
                            </ImageBackground>
                        </PanPanel>
                    </View>
                    <MapDetails 
                        style={{width:"100%"}}
                        ref={c => this.mapDetails = c} 
                        landscape={this.winConf.landscape}
                    />
                </View>
            </Background>
        )
    }
}