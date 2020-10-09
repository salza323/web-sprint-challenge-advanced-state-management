import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  POST_SMURFS_SUCCESS,
} from '../actions';

//what endpoints does our server need?******************
const initialSmurf = [
  {
    name: '',
    age: '',
    height: '',
  },
];

const initialState = {
  smurfs: [initialSmurf],
  isLoading: false,
  error: '',
};

//need to add post funtionality?*********************
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
      };
    default:
      return state;
  }
};
