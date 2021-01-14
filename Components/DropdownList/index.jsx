import React from "react"
import { StyleSheet } from "react-native"
import { Picker } from "@react-native-picker/picker"

export default class DropdownList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            options: props.options
        }

        this.style = StyleSheet.create({
            picker:{
                flexWrap:"wrap",
                fontSize: 18,
                fontWeight: "bold",
                backgroundColor: this.props.colors.color,
                color: this.props.colors.color,
            }
        })
    }

    render(){
        return (
            <Picker
            style={this.style.picker}
                onValueChange={(value, index) => this.props.onChange ? this.props.onChange(value, index) : null}
            >
                {this.state.options?.map((o, k) => 
                    <Picker.Item
                        style={{
                            fontWeight: "bold",
                        }}
                    color={this.props.colors.backgroundColor}
                    key={k} label={o.name || o} value={o.value || k} />
                )}
            </Picker>
        )
    }
}