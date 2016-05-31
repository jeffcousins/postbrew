import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  API_URL,
  IS_SIGNED_IN,
  IS_SIGNED_OUT,
  SIGN_IN_ERROR
} from '../constants';

export function showThread (activePost) {
  return {
    type: 'SHOW_THREAD',
    activePost
  };
}

export function fetchBrewContent (brewPath) {
  let brewId;
  if (brewPath[0] === '/') {
    brewId = brewPath.slice(3);
  } else {
    brewId = brewPath;
  }

  const getUrl = `${API_URL}/b/${brewId}`;

  return function (dispatch) {
    return axios({
      url: getUrl,
      timeout: 3000,
      method: 'get',
      responseType: 'json'
    }).then(function (response) {
      dispatch(receivedData(response.data));
    }).catch(function (response) {
      console.log('error trying to GET data from server:');
      console.log(response);
    });
  };
}

export function fetchAllContent () {
  const getUrl = `${API_URL}/all`;
  return function (dispatch) {
    return axios({
      url: getUrl,
      timeout: 3000,
      method: 'get',
      responseType: 'json'
    }).then(function (response) {
      dispatch(receivedData(response.data));
    }).catch(function (response) {
      console.log('error trying to GET data from server:');
      console.log(response);
    });
  };
}

export function receivedData (data) {
  return {
    type: 'RECEIVED',
    payload: data
  };
}

export function receivedAll (data) {
  return {
    type: 'RECEIVED_ALL',
    payload: data
  }
}

export function createBrew (formProps) {
  const postUrl = `${API_URL}/brews/create`;

  return (dispatch) => {
    axios.post(postUrl, formProps, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    }).then((response) => {
      browserHistory.push(`/b/${formProps.brewName}`);
    }).catch((response) => {
      dispatch(signInError(response.data.errorMessage));
    });
  };
}

export function submitPost (formProps) {
  const postUrl = `${API_URL}/posts/submit`;

  return (dispatch) => {
    axios.post(postUrl, formProps, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    }).then((response) => {
      // browserHistory.push(`/b/${formProps.brewName}/${response.data.postId}`);
      browserHistory.push(`/b/${formProps.brewName}`);
    }).catch((response) => {
      dispatch(signInError(response.data.errorMessage));
    });
  };
}

export function userSignUp (formProps) {
  const postUrl = `${API_URL}/signup`;

  return (dispatch) => {
    axios.post(postUrl, formProps)
      .then((response) => {
        dispatch({ type: IS_SIGNED_IN, payload: response.data.userId });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        browserHistory.push('/');
      }).catch((response) => {
        dispatch(signInError(response.data.errorMessage));
      });
  };
}

export function userSignIn ({ username, password }) {
  const postUrl = `${API_URL}/signin`;

  return (dispatch) => {
    axios.post(postUrl, { username, password })
      .then((response) => {
        dispatch({ type: IS_SIGNED_IN, payload: response.data.userId });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.userId);
        browserHistory.push('/');
      })
      .catch(() => {
        dispatch(signInError('Incorrect username or password.'));
      });
  };
}

export function signInError (errorMessage) {
  return {
    type: SIGN_IN_ERROR,
    payload: errorMessage
  };
}

export function userSignOut () {
  localStorage.removeItem('token');

  setTimeout(() => {
    browserHistory.push('/');
  }, 5500);

  return { type: IS_SIGNED_OUT };
}

