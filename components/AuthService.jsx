import auth0 from 'auth0-js';
// import Auth from './Auth/Auth.js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'gradetracker.auth0.com',
    clientID: 'VW3lj4FQTNvQn0xoPgnNYu9fqb9XCj4V',
    redirectUri: 'http://localhost:3000/Callback',
    audience: 'https://gradetracker.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
// App.js


const auth = new Auth();
// auth.login();