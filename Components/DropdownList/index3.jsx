import React from "react"
import { StyleSheet } from "react-native"
import RNPickerSelect from 'react-native-picker-select';

export default class DropdownList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            options: props.options
        }

        this.style = StyleSheet.create({
            picker:{
                height:"100%",
                //flexWrap:"wrap",
                fontSize: 18,
                fontWeight: "bold",
                backgroundColor: this.props.colors.color,
                color: this.props.colors.color,
            }
        })
    }

    render(){
        return (
            <RNPickerSelect
                style={this.style.picker}
                onValueChange={(value, index) => this.props.onChange ? this.props.onChange(value, index) : null}
                items={this.state.options.map((o, i) => { return { label:o, value:o.toLowerCase() } })}
            >
            </RNPickerSelect>
        )
    }
}