import {
  LIST_ITEMS_REQUEST,
  LIST_ITEMS_SUCCESS,
  LIST_ITEMS_FAILURE,

  CREATE_LIST_ITEM_REQUEST,
  CREATE_LIST_ITEM_SUCCESS,
  CREATE_LIST_ITEM_FAILURE,

  MARK_DONE_ITEM_REQUEST,
  MARK_DONE_ITEM_SUCCESS,
  MARK_DONE_ITEM_FAILURE,

  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,

  CLEAR_LIST_ITEMS, } from '../actions/todoActions';

const initialState = {
  loading: false,
  loaded: false,
  items: []
};


const lists = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ITEMS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case LIST_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        items: action.payload.items
      }
    case LIST_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
      }
    case CLEAR_LIST_ITEMS:
      return { ...initialState }

    case CREATE_LIST_ITEM_REQUEST:
        return state

    case CREATE_LIST_ITEM_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload.item]
      }
    case CREATE_LIST_ITEM_FAILURE:
      return state
    case MARK_DONE_ITEM_REQUEST:
        return state
    case MARK_DONE_ITEM_SUCCESS:

      return {
        ...state,
        items: state.items.map(
           (item) => item.id === action.payload.id ? {...item, status: "finished"} : item
       ),
      }
    case MARK_DONE_ITEM_FAILURE:
      return state
    case DELETE_ITEM_REQUEST:
        return state
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => ( item.id !== action.payload.id )),
      }
    case DELETE_ITEM_FAILURE:
      return state

    default:
      return state
  }
}

export default lists
