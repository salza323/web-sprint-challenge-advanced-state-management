import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

//action to "get" smurfs from server
export const fetchSmurfs = (url) => (dispatch) => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get(url)
    .then((res) => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log('error:', err));
};

//action to post new smurf to server
export const POST_SMURFS_START = 'POST_SMURFS_START';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_FAILURE = 'POST_SMURFS_FAILURE';

export const postSmurfs = (smurfs) => (dispatch) => {
  axios
    .post('http://localhost:3333/smurfs', smurfs)
    .then((res) => {
      dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log('error:', err));
};
