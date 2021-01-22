import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet, View, TextInput, Text } from "react-native"
import Background from "../Background"
import Parchemin from "../Background/parchemin"
import DropdownList from "../DropdownList"
import Button from "../button"
import { getById } from "../../Query/api_query"
import HyperLinkText from "../HyperLinkText"
import { navigate } from "../Navigation"

export default class Template extends BaseComponent {

    style = StyleSheet.create({
        searchParams:{
            flexWrap: 'wrap',
            flex:1,
            flexDirection:"row",
            magin: 10,
            padding: 10,
            justifyContent:"center",
            alignContent:"center",
            alignItems:"stretch",
        },
        input:{
            padding: 5,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: "black",
        },
        droplist:{
            color: this.getColor("contrast"),
            backgroundColor: this.getColor("other"),
        },
        searchResult:{
            flexDirection:"column",
            magin: 10,
            padding: 10,
        }
    })

    tables = [
        "Item", "Creature"
    ]

    searchOptions = [
        ["Name"],
        ["Name"],
    ]

    selectedTable = "Item"

    constructor(props){
        super(props)
    }

    changeTable(v, i){
        this.selectedTable = this.tables[v];
        this.searchOptionsList?.setState({
            options:(this.searchOptions[v] || ["Name"])
        });
    }

    async search(){
        try{
            if(!this.searchText) return;
            const data = await getById(this.selectedTable, this.searchText);
            this.setState({searchResult: data ? { 
                    table: this.selectedTable,
                    items: [data],
                } : null})
            return;
        }catch(e){ }

        this.setState({searchResult:null})
    }

    openPage(index){
        if(!this.state?.searchResult) return;

        const data = this.state.searchResult.items[index];
        if(data) navigate(this.state.searchResult.table, { data: data });
    }

    renderSearchResults(){
        return this.state?.searchResult?.items.map((o, i) =>
            <HyperLinkText key={i}
                text={o.name}
                onPress={() => this.openPage(i)}
            />
        ) || <Text>No search results</Text>
    }

    render(){
        return (
            <Background>
                <Parchemin>
                    <View>
                        <View style={this.style.searchParams}>
                            <View style={{flexDirection:"column"}}>
                                <Text>Search:</Text>
                                <DropdownList 
                                    colors={this.style.droplist}
                                    options={this.tables}
                                    onChange={(v, i) => this.changeTable(v, i)}
                                
                                />
                            </View>
                            <View style={{flexDirection:"column"}}>
                                <Text>By:</Text>
                                <DropdownList 
                                colors={this.style.droplist}
                                ref={c => this.searchOptionsList = c }
                                options={this.searchOptions[this.selectedTable?.toLowerCase()] || ["Name"]}
                            />
                            </View>
                            <TextInput 
                                style={[this.style.input, this.inputStyle()]}
                                onChangeText={(text) => this.searchText = text}
                            />
                            <Button style={{}} 
                                title="Search" onPress={() => this.search()}/>
                            </View>
                        <View>
                        <View style={this.style.searchParams}>

                        </View>
                        <View style={this.style.searchResult}>
                            {this.renderSearchResults()}
                        </View>
                        </View>
                    </View>
                </Parchemin>
            </Background>
        )
    }
}