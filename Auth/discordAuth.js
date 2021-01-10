import { currentUrl, serverUrl } from "../Utilities/api_query"
import querystring from "querystring"
import axios from "axios"

const baseUrl = "https://discord.com/api/"

class DiscordAuth{

    api_paths = {
        auth: baseUrl + "oauth2/authorize",
        token: baseUrl + "oauth2/token",
        user: baseUrl + "users/@me",
        revoke: baseUrl + "token/revoke"
    }

    constructor(){
        this.data = require('../local/login_auths/discord.json');
    }

    auth(data){
        data = data || { };
        console.log(this.data)
        const url = this.api_paths.auth
        + `?client_id=${this.data.client_id}`
        + `&redirect_uri=${encodeURIComponent(currentUrl())}`
        + `&response_type=${data.response_type || this.data.response_type}`
        + `&scope=${data.scope || this.data.scope}`
        + (data.state ? `&state=${data.state}` : "")
       console.log(url);
        return url;
    }

    async post(code){
        const result = await axios.post(
            this.api_paths.token,
            querystring.stringify({
              client_id: this.data.client_id,
              client_secret: this.data.client_secret,
              grant_type: "authorization_code",
              code: code,
              redirect_uri: currentUrl(),
              scope: "identify",
            }),
            {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }
          );
        return result.data.access_token;
    }

    async user(token){
      console.log(token);
      const result = await axios.get(
        serverUrl("api/login/discord/" + token)
        //"https://discord.com/api/users/@me"
        , {
          mode: "no-cors",
          
          headers: {
            //Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Headers': "*"
          },
      });
        console.log(result)
        return result.data;
    }
}

const instance = new DiscordAuth();
export default instance;