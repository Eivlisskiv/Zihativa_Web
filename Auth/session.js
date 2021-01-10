


export class Session {

    constructor(token){

    }
}

let session = null;
export function verifyToken(token){
    const result = await fetch("verifyToken");
    if(result.status !== true){
        //logout
    }
}

export default session;