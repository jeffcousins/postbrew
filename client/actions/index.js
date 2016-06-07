import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  API_URL,
  IS_SIGNED_IN,
  IS_SIGNED_OUT,
  SIGN_IN_ERROR,
  BREW_NOT_FOUND,
  RECEIVED,
  RECEIVED_ALL,
  POST_RECEIVED,
  RECEIVED_TOP_BREWS,
  RESET_BREW
} from '../constants';

export function fetchTopBrews () {
  const getUrl = `${API_URL}/topBrews`;

  return (dispatch) => {
    return axios({
      url: getUrl,
      timeout: 3000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      dispatch(receivedTopBrews(response.data));
    }).catch((response) => {
      console.log('error trying to GET top brews list from server:');
      console.log(response.data);
    });
  };
}

function receivedTopBrews (brewList) {
  var brewNames = brewList.sort((a, b) => {
    if (a.postCount < b.postCount) {
      return 1;
    } else {
      return -1;
    }
  }).map((brew) => brew.brew_name);

  return {
    type: RECEIVED_TOP_BREWS,
    payload: brewNames
  };
}

export function fetchBrewContent (brewId) {
  const getUrl = `${API_URL}/b/${brewId}`;

  return (dispatch) => {
    if (!brewId) {
      dispatch(fetchAllContent());
    } else {
      return axios({
        url: getUrl,
        timeout: 3000,
        method: 'get',
        responseType: 'json'
      }).then((response) => {
        dispatch(receivedData(response.data));
      }).catch((response) => {
        console.log('error trying to GET data from server:');
        console.log(response.data.errorMessage);
        dispatch(brewNotFound());
      });
    }
  };
}

export function brewNotFound () {
  return {
    type: BREW_NOT_FOUND
  };
}

const rootBrew = {
  title: '[ postbrew ]',
  description: 'All posts.',
  pathname: '/',
  brew_name: '',
  username: ''
};

export function fetchAllContent () {
  const getUrl = `${API_URL}/all`;
  return (dispatch) => {
    return axios({
      url: getUrl,
      timeout: 3000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      response.data.brew = rootBrew;
      dispatch(receivedData(response.data));
    }).catch((response) => {
      console.log('error trying to GET data from server:');
      console.log(response.data);
    });
  };
}

export function fetchPostContent (b, post) {
  const getUrl = `${API_URL}/${b}/comments/${post}`;

  return (dispatch) => {
    return axios({
      url: getUrl,
      timeout: 3000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      dispatch(receivedPost(response.data));
    }).catch((response) => {
      console.log('error trying to GET post content from server:');
      console.log(response);
    });
  };
}

export function resetBrew () {
  return {
    type: RESET_BREW
  };
}

export function receivedPost (data) {
  return {
    type: POST_RECEIVED,
    payload: data
  };
}

export function receivedData (data) {
  return {
    type: RECEIVED,
    payload: data
  };
}

export function receivedAll (data) {
  return {
    type: RECEIVED_ALL,
    payload: data
  };
}

export function createBrew (formProps) {
  const postUrl = `${API_URL}/brews/create`;

  return (dispatch) => {
    axios.post(postUrl, formProps, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    }).then((response) => {
      dispatch(fetchTopBrews());
      dispatch(fetchBrewContent(formProps.brewName));
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
      dispatch(fetchBrewContent(formProps.brewName));
      browserHistory.push(`/b/${formProps.brewName}`);
    }).catch((response) => {
      dispatch(signInError(response.data.errorMessage));
    });
  };
}

export function submitComment (UserId, BrewId, PostId, parentId, content, b) {
  const postUrl = `${API_URL}/comments/submit`;
  const body = {
    UserId,
    BrewId,
    PostId,
    parentId,
    content
  };

  return (dispatch) => {
    axios.post(postUrl, body, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    }).then((response) => {
      dispatch(fetchPostContent(b, PostId));
    }).catch((response) => {
      console.log('ERROR trying to submit a comment:');
      console.log(response);
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
        console.log('error signing up.');
        console.log(response);
        if (response.data && response.data.errorMessage) {
          dispatch(signInError(response.data.errorMessage));
        }
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

  return {
    type: IS_SIGNED_OUT
  };
}
