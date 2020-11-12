import React,{useEffect,useState}from 'react'
import {loginURL,getToken} from './spotify';
import Login from "./Login";
import SpotifyWebAPI from "spotify-web-api-js";
import Player from "./Player"
import "./styles.css"
const spotify = new SpotifyWebAPI();


export default function App() {
  const [token,setToken] = useState(null);
    useEffect(() => {
        const hash = getToken();
        window.location.hash = "";
        const _token = hash.access_token;
        if (_token){
            setToken(_token);
            spotify.setAccessToken(_token);
            //To get User Acc
            spotify.getMe().then(user=>{
              console.log(user);
            })
        }
       }, [])
  return (
    <div className="App">
    {token?<Player />:<Login/>}
    </div>
  );
}
