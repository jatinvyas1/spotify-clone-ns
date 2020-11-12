export const authEndpoint = "https://accounts.spotify.com/authorize";


const redirectURL = "http://localhost:3000/";

const clientID = "b27f82c70fc94c96a3a5f046441940ca";

const scopes = "user-read-currently-playing user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state"

export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes}&response_type=token&show_dialog=true`;

export const getToken = () => window.location.hash.substring(1).split("&").reduce((initial,item)=>{
    let parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
},{})