
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import './App.css';

// API Key 
// 5Z95PXDJ7VUGaYcQfIUug5Z8J
// API Key Secret
// 29JrHuh2KrmVg0LkV1Flh5GAeMF0t7aU6xVUKgGGk0hstdxEcG
// Bearer Token
// AAAAAAAAAAAAAAAAAAAAAMfvlQEAAAAATzxclIpjqBQESfQ7mcruHA4NDWY%3DjzGQM7OwHMP0FphUwKkZSQlK4KiYajlHK5AvHKEvsOwbOIzUZK
// redirect
// https://auth.magic.link/v1/oauth2/y7sxrJKbPDnSvfcRfAZoTPu7vJwveTcDVUVwa1NPrUQ=/callback

function App() {
  // const m = new Magic('pk_live_5AAEAC4E3D514B5B'); // ✨

  const magic = new Magic('pk_live_5AAEAC4E3D514B5B', {
    extensions: [new OAuthExtension()],
  });

  const twitter = async () => {
    await magic.oauth.loginWithRedirect({
      provider: 'twitter' /* 'google', 'facebook', 'apple', or 'github' */,
      redirectURI: 'https://pruebamagiclink.netlify.app/oauth/callback',
      // scope: ['user:email'] /* optional */,
    });
   
    // const result = await magic.oauth.getRedirectResult();
    // console.log(result)
  }

  // const data = async () => {
  //   const isLoggedIn = await m.user.isLoggedIn();
  //   if(isLoggedIn) {
  //     const userMetadata = await m.user.getMetadata();
  //     console.log(userMetadata)
  //   }
  //   else alert("No hay usuario")
    

  // }

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
