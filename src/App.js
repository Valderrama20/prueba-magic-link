import logo from './logo.svg';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import './App.css';

// API Key 
// zGUVICztAGLOJhozlAeXEgHKI
// API Key Secret
// dSlUhSHue52XgyGALaqHAFgXZAkjIwq0rqYSeh4UBErE5nJNKm
// Bearer Token
// AAAAAAAAAAAAAAAAAAAAAOPflQEAAAAAalGuCNFkZb6bY76716jSR1kLYRQ%3DfUsufwuNTzBvAodcNsZ3ixCajmv7v4dkv9EuwHPFzJmvP1RNGU
// redirect
// https://auth.magic.link/v1/oauth2/y7sxrJKbPDnSvfcRfAZoTPu7vJwveTcDVUVwa1NPrUQ=/callback

function App() {
  const m = new Magic('pk_live_5AAEAC4E3D514B5B'); // ✨

  const magic = new Magic('YOUR_API_KEY', {
    extensions: [new OAuthExtension()],
  });

  const twitter = async () => {
    await magic.oauth.loginWithRedirect({
      provider: 'twitter' /* 'google', 'facebook', 'apple', or 'github' */,
      redirectURI: 'https://auth.magic.link/v1/oauth2/y7sxrJKbPDnSvfcRfAZoTPu7vJwveTcDVUVwa1NPrUQ=/callback',
      // scope: ['user:email'] /* optional */,
    });
    const result = await magic.oauth.getRedirectResult();
    console.log(result)
  }

  // const data = async () => {
  //   const isLoggedIn = await m.user.isLoggedIn();
  //   if(isLoggedIn) {
  //     const userMetadata = await m.user.getMetadata();
  //     console.log(userMetadata)
  //   }
  //   else alert("No hay usuario")
    

  // }

  // const render = async () => {
       
  // };

  // const Login = async e => {
  //   e.preventDefault()
  //   await m.auth.loginWithMagicLink({ email: 'jose2312200226@gmail.com' });
    
  // };

  // const Logout = async () => {
  //   await m.user.logout()
  // };

  return (
    <div className="App">
     {/* {<button onClick={(e)=>Login(e)}>login</button>}
     {<button onClick={()=>data()}>data</button>}
    {<button onClick={()=> Logout()}>logout</button>} */}
    {<button onClick={()=> twitter() }>twitter</button>}
    </div>
  );
}

export default App;
