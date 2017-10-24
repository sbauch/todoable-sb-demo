import {
  LISTS_REQUEST,
  LISTS_SUCCESS,
  LISTS_FAILURE,

  CREATE_LIST_REQUEST,
  CREATE_LIST_SUCCESS,
  CREATE_LIST_FAILURE,

  UPDATE_LIST_REQUEST,
  UPDATE_LIST_SUCCESS,
  UPDATE_LIST_FAILURE,

  DELETE_LIST_REQUEST,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE,

 } from '../actions/listActions';

const initialState = {
  loading: false,
  loaded: false,
  data: []
};


const lists = (state = initialState, action) => {
  switch (action.type) {
    case LISTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      }
    case LISTS_FAILURE:

    default:
      return state
  }
}

export default lists
