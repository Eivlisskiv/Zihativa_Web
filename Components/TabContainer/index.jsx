import React from "react"
import { StyleSheet, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Button from "./tabButton"

export default class TabContainer extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            color: props.color || "white",
            secondaryColor: props.secondaryColor || "black",
            index: this.props.index || 0,
            tabs: this.props.tabs || Array.from(Array(this.props.children.length).keys())
        }

        this.style = StyleSheet.create({
            container: {
                display:"flex",
                position:"relative",
                width:"100%",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
            },
            
            childBasket:{
                display:"flex",
                position:"relative",
                justifyContent:"center",
                alignContent:"center",
                alignItems:"center",
                width:"100%",
                borderWidth: 5,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
                borderColor: this.state.color,
                marginBottom: 10,
            },

            content:{
                display:"flex",
                position:"relative",
                width:"100%", height:"100%",
                justifyContent:"center",
                alignContent:"center",
                alignItems:"center",
                margin: 5,
            },
        })
    }

    renderTabs(){
        return (
            <View style={{flexDirection:"row", justifyContent:"flex-start", width:"100%"}}>
            {this.state.tabs.map((name, key) =>
                    <Button key={key} title={name || "Unammed Tab"} 
                        onPress={() => this.setState({ index: key })}
                        color={this.state.index !== key ? this.state.color 
                            : this.state.secondaryColor }
                        secondaryColor={this.state.index !== key ? 
                            this.state.secondaryColor : this.state.color }
                    />
            )}
            </View>
        )
    }

    render(){
        return (
            <View style={this.style.container}>
                {this.renderTabs()}
                <View style={this.style.childBasket}>
                    <View style={this.style.content}>
                        {this.props.children[this.state.index]}
                    </View>
                </View>
            </View>
        )
    }
}