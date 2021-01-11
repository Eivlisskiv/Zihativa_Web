const server = {
    ip: "localhost",//"34.67.163.218",
    port: "5001"
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



function queryUrl(table, params){
    const url = serverUrl("api/query/" + table)
    let paramsUrl = "";
    for(const key in params){
        const value = params[key]
        if(value){
            paramsUrl += (!paramsUrl ? "?" : "&") +
                encodeURIComponent(`${key}=${fields}`);
        }
    }
    return url + paramsUrl;
}

async function queryApiPost(table, query, fields){
    return await fetch(queryUrl(table, fields), {
        method: 'POST',
        mode: "no-cors",
        headers:{
            //Authorazisation: auth,
            Accept: 'application/json',
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Headers': "*"
        },
        body: JSON.stringify({query})
    });
}

async function queryApiGet(table, query, fields){
    const url = queryUrl(table, {query, fields});
    console.log(url);
    return await fetch(url, {
        method: 'GET',
        mode: "no-cors",
        headers:{
            //Authorazisation: auth,
            Accept: 'application/json',
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Headers': "*"
        },
    });
}

export async function getAreas(){
    const response = await queryApiGet("Area");
    console.log(response);
    return await response.json();
}