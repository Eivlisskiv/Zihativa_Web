const server = {
    ip: "34.67.163.218",
    port: "5000"
}

var clientUrl;

export function serverUrl(path = ""){
    return `https://${server.ip}:${server.port}/${path}`;
}

export function currentUrl(){
    if(!clientUrl){
        let url = window.location.href;
        const i = url.indexOf("?")
        if(i >= 0) url = url.substr(0, i)
        clientUrl = url;
    }
    return clientUrl;
}

export async function get_async(url, headers){
    headers = headers || { };
    headers.Accept = 'application/json';
    headers['Access-Control-Allow-Origin'] = "*";
    headers['Content-Type'] = 'application/json'
    headers['Access-Control-Allow-Headers'] = "*"

    let reponse = await fetch(url, {
        method: 'GET',
        mode: "no-cors",
        headers        
    });
    console.log(response);
    return await reponse.json();
}

export async function post_async(url, body){
    let reponse = await fetch(url, {
        method: 'POST',
        mode: "no-cors",
        headers : {
            Accept: 'application/json',
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Headers': "*"
        },
        body: JSON.stringify(body) 
        
    });
    return await reponse.json();
}