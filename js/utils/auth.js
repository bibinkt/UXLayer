
import 'whatwg-fetch';
import request from './fakeRequest';

/**
 * Authentication lib
 * @type {Object}
 */
var auth = {
  /**
   * Logs a user in
   * @param  {string}   username The username of the user
   * @param  {string}   password The password of the user
   * @param  {Function} callback Called after a user was logged in on the remote server
   */
  login(username, password, callback) {
    // If there is a token in the localStorage, the user already is
    // authenticated
    if (this.loggedIn()) {
      callback(true);
      return;
    }
    //----------------------------------------------------------------
    fetch('http://localhost:8000/login/', {
      method: 'post',
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify({id: username, pwd: password})
        }).then(this.checkHttpStatus)
        .then(this.parseJSON)
        .then(response => {
          console.log('success.............'+response.success);
          if(response.success) {
            localStorage.token = response.token;
            callback(true);
          } else {
            console.log('Response error111 ===> credential-wrong');
            var eror1 = {
              type: "password-wrong"
            }
            callback(false,eror1);
          }

        })
        .catch(error => {
          console.log('Response error111 ===> password-wrong');
          var eror = {
            type: "password-wrong"
          }
          callback(false,eror);
        })

    //--------------------------------------------------------------------------
  },
  register(username, password, callback) {
    // If there is a token in the localStorage, the user already is
    // authenticated
    if (this.loggedIn()) {
      callback(true);
      return;
    }
    //----------------------------------------------------------------
    fetch('http://localhost:8000/register/', {
      method: 'post',
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify({id: username, pwd: password})
    }).then(this.checkHttpStatus)
        .then(this.parseJSON)
        .then(response => {
          console.log('success.............'+response.success);
          if(response.success) {
            localStorage.token = response.token;
            callback(true);
          } else {
            console.log('Response error111 ===> credential-wrong');
            var eror1 = {
              type: "username-exists"
            }
            callback(false,eror1);
          }

        })
        .catch(error => {
          console.log('Response error111 ===> username-exists');
          var eror = {
            type: "username-exists"
          }
          callback(false,eror);
        })

    //--------------------------------------------------------------------------
  },
  /**
   * Logs the current user out
   */
  logout(callback) {
    request.post('/logout', {}, () => {
      callback(true);
    });
  },

  checkHttpStatus(response) {
    console.log(''+response.status);

    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText)
      error.response = response;
      throw error;
    }
  },

  parseJSON(response) {
    return response.json();
  },
  /**
   * Checks if anybody is logged in
   * @return {boolean} True if there is a logged in user, false if there isn't
   */
  loggedIn() {
    return !!localStorage.token;
  },
  loginFake(username, password, callback) {
    // If there is a token in the localStorage, the user already is
    // authenticated
    if (this.loggedIn()) {
      callback(true);
      return;
    }
    // Post a fake request (see below)
    request.post('/loginFake', { username, password }, (response) => {
      // If the user was authenticated successfully, save a random token to the
      // localStorage
      if (response.authenticated) {
        localStorage.token = response.token;
        callback(true);
      } else {
        // If there was a problem authenticating the user, show an error on the
        // form
        callback(false, response.error);
      }
    });
  },
  /**
   * Registers a user in the system
   * @param  {string}   username The username of the user
   * @param  {string}   password The password of the user
   * @param  {Function} callback Called after a user was registered on the remote server
   */
  registerFake(username, password, callback) {
    console.log("i am here");
    // Post a fake request
    request.post('/registerFake', { username, password }, (response) => {
      // If the user was successfully registered, log them in
      if (response.registered === true) {
        this.loginFake(username, password, callback);
      } else {
        // If there was a problem registering, show the error
        callback(false, response.error);
      }
    });
  },
  onChange() {}
}

module.exports = auth;
