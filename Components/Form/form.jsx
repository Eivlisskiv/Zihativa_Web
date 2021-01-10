import BaseComponent from "../baseComponent"
import React from "react"
import { StyleSheet } from "react-native"

import Email from "./email"
import Password from "./password"
import Button from "../button"

export default class Form extends BaseComponent {

    style = StyleSheet.create({

    })

    formContent = { };

    constructor(props){
        super(props)

        //this.state = { }
    }

    verifyForm(){
        let verified = true;
        this.foreachC((n, c) =>{
            c.verify();
            if(c.state.error)
                verified = false;
        })

        if(verified)
            this.props.submit()
    }

    loadFormContent(){
        return this.props.content.map( n => {
            n = n.toLowerCase()
            let onRef = c => { this.setC(n, c) };
            switch(n){
                case "email": return <Email 
                key={n}
                ref={onRef}
                />;
                case "password": return <Password 
                key={n}
                ref={onRef}
                />;
            }
        });
    }
    
    render(){
        return (
            <>
            {this.loadFormContent()}
            <Button title={this.props.title}
            onPress={() => this.verifyForm()}
            />
            </>
        )
    }
}