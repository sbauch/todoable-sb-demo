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

import { LIST_ITEMS_SUCCESS, CLEAR_LIST_ITEMS } from '../actions/todoActions';

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
      return state;
    case CREATE_LIST_REQUEST:
      return state
    case CREATE_LIST_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    case CREATE_LIST_FAILURE:
      return state
    case DELETE_LIST_REQUEST:
      return state
    case DELETE_LIST_SUCCESS:
      return {
        ...state,
        data: state.data.filter((item) => ( item.id !== action.payload.id )),
      }
    case DELETE_LIST_FAILURE:
        return state
    case   LIST_ITEMS_SUCCESS:
      return {
        ...state,
        selectedListId: action.payload.id,
        selectedListName: action.payload.name,
      }
    case UPDATE_LIST_REQUEST:
      return state
    case UPDATE_LIST_SUCCESS:
      return {
        ...state,
        selectedListName: action.payload.name,
        data: state.data.map(
           (list) => list.id === action.payload.id ? {...list, name: action.payload.name} : list
       ),
      }
    case UPDATE_LIST_FAILURE:
      return state
    case CLEAR_LIST_ITEMS:
        return {
          ...state,
          selectedListName: null,
          selectedListId: null,
        }

    default:
      return state
  }
}

export default lists
