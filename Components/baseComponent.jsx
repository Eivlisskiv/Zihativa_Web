import React from "react"
import { AsyncStorageStatic } from "react-native"
import theme from "../Utilities/theme"

export default class BaseComponent extends React.Component{

    cachedComponents = { }
    
    constructor(props){
        super(props)
    }

    getC(name){
        return this.cachedComponents[name]
    }

    setC(name, component){
        this.cachedComponents[name] = component
    }

    foreachC(func){
        for(let key in this.cachedComponents){
            func(key, this.cachedComponents[key])
        }
    }

    async authenticate(){
        const token = await this.getStoredData("token");
        
    }

    async setStoredData(key, value){
        try {
            await AsyncStorage.setItem(key, JSON.serialize(value));
        } catch (error) {
            console.log(error);
        }
    }

    async getStoredData(key){
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null)
                return JSON.deserialize(value);
        } catch (error) {
            console.log(error)
        }

        return null;
    }


    getColor(a, b){
        return ((b && theme[a]) ? theme[a][b]
        : theme[a]) || "white";
    }

    textStyle(size=18){
        return {
            color: theme.text,
            fontSize: size,
        }
    }

    inputStyle(margin=5, fontSize=18){
        return {
            fontSize,
            color: theme.input.text,
            backgroundColor: theme.input.background,
            marginTop: margin,
            marginRight: margin,
            marginLeft: margin,
            marginBottom: margin,
        }
    }

    buttonStyle(margin=10){
        return {
            color: theme.button.text,
            backgroundColor: theme.button.background,
            marginTop: margin,
            marginRight: margin,
            marginLeft: margin,
            marginBottom: margin,
            borderRadius: 5,
            
            paddingBottom: 3,
            paddingHorizontal: 8
        }
    }

    imageStyle(size){
        return{
            width: size,
            height: size,
        }
    }

    render(){
        return (
            <>
            </>
        )
    }

}