import axios from 'axios';

const ROOT_BREW_URL = 'http://localhost:8080/api/b/';

export function showThread (activePost) {
  console.log('SHOW_THREAD action fired', activePost);
  return {
    type: 'SHOW_THREAD',
    activePost
  };
}

export function fetchBrewContent (brewPath) {
  const brewId = brewPath.slice(3);
  console.log('FETCH_BREW_CONTENT action fired', brewId);
  const getUrl = `${ROOT_BREW_URL}${brewId}`;

  return function (dispatch) {
    return axios({
      url: getUrl,
      timeout: 8000,
      method: 'get',
      responseType: 'json'
    })
      .then(function (response) {
        dispatch(receivedData(response.data));
      })
      .catch(function (response) {
        console.log('error trying to GET data from server');
      });
  };
}

export function receivedData (data) {
  console.log('inside receivedData action creator: data is:');
  console.log(data);
  return {
    type: 'RECEIVED',
    payload: data
  };
}
