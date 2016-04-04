import axios from 'axios';

const ROOT_BREW_URL = 'http://localhost:8080/api/b/';

export function showThread (activePost) {
  console.log('SHOW_THREAD action fired', activePost);
  return {
    type: 'SHOW_THREAD',
    activePost
  };
}

export function fetchBrewContent (brewId) {
  console.log('FETCH_BREW_CONTENT action fired', brewId);
  const getUrl = `${ROOT_BREW_URL}${brewId}`;
  // const request = axios.get(getUrl);
  // console.log('`REQUEST` FROM AXIOS in Actions:');
  // console.log(request);

  // return {
  //   type: FETCH_BREW_CONTENT,
  //   payload: request
  // };

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
  return {
    type: 'RECEIVED',
    payload: data
  };
}
