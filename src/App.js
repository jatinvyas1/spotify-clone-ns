import React,{useEffect,useState}from 'react'
import {loginURL,getToken} from './spotify';
import Login from "./Login";

export default function App() {
  const [token,setToken] = useState(null);
    useEffect(() => {
        const hash = getToken();
        window.location.hash = "";
        const _token = hash.access_token;
        if (_token){
            setToken(_token);
        }
       }, [])
  return (
    <div className="App">
    {token?"Logged In":<Login/>}
    </div>
  );
}
