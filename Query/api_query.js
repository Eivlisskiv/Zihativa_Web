import axios from "axios"

const dev = false;
var clientUrl;

export function serverUrl(path = ""){
    return (dev ? "https://localhost:5001/"
        : "https://api.zihativa.tk/") 
        + path;
            
}

export function currentUrl(){
    if(!clientUrl){
        let url = window.location.href;
        const i = url.indexOf("?")
        if(i >= 0) url = url.substr(0, i)
        clientUrl = url;
    }
    console.log(clientUrl);
    return clientUrl;
}

export async function get_async(url, headers){
    headers = headers || { };

    let reponse = await axios.get(url, {
        headers        
    });
    return reponse;
}

export async function post_async(url, headers, body){
    headers = headers || { };
    headers.Accept = 'application/json';
    headers['Access-Control-Allow-Origin'] = "*";
    headers['Content-Type'] = 'application/json'
    headers['Access-Control-Allow-Headers'] = "*"
    let reponse = await fetch(url, {
        method: 'POST',
        mode: "no-cors",
        headers,
        body: JSON.stringify(body) 
        
    });
    return reponse;
}

export async function getById(controller, id){
    const url = serverUrl(`api/${controller}/${id.replace(/\\/g, ';')}`)
    const response = await get_async(url)
    return response.data;
}