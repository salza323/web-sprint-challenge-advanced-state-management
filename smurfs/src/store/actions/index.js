import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const fetchSmurfs = (url) => (dispatch) => {
  dispatch({ type: FETCH - SMURFS_START });
  axios
    .get(url)
    .then((res) => {
      dispatch({ FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log('error:', err));
};

export const POST_SMURFS_START = 'POST_SMURFS_START';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_FAILURE = 'POST_SMURFS_FAILURE';

export const postSmurfs = (url) => (dispatch) => {
  axios
    .post(url)
    .then((res) => {
      dispatch({ POST_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log('error:', err));
};
