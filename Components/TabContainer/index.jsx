import React from "react"
import { StyleSheet, View } from "react-native"
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
                margin: 10,
            },
            
            childBasket:{
                borderWidth: 5,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
                borderColor: this.state.color,
                marginBottom: 10,
            },

            content:{
                width:"100%",height:"100%",
                margin: 5,
            },
        })
    }

    renderTabs(){
        return (
            <View style={{flexDirection:"row"}}>
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