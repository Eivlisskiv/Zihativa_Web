import { Linking } from "react-native"

export default async function redirect(url){
    if(await Linking.canOpenURL(url)){
        Linking.openURL(url)
    }
}