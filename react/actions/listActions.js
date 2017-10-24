import { CALL_API } from 'redux-api-middleware';

export const LISTS_REQUEST = '/lists/REQUEST';
export const LISTS_SUCCESS = '/lists/RECEIVE';
export const LISTS_FAILURE = '/lists/FAILURE';

export function fetchLists() {
  return {
    [CALL_API]: {
      endpoint: `/api/lists`,
      method: 'GET',
      types: [LISTS_REQUEST, LISTS_SUCCESS, LISTS_FAILURE]
    }
  }
}

export const CREATE_LIST_REQUEST = '/lists/CREATE_REQUEST';
export const CREATE_LIST_SUCCESS = '/lists/CREATE_RECEIVE';
export const CREATE_LIST_FAILURE = '/lists/CREATE_FAILURE';

export function createList(name) {
  return {
    [CALL_API]: {
      endpoint: `/api/lists`,
      method: 'POST',
      types: [CREATE_LIST_REQUEST, CREATE_LIST_SUCCESS, CREATE_LIST_FAILURE]
    }
  }
}

export const UPDATE_LIST_REQUEST = '/lists/UPDATE_REQUEST';
export const UPDATE_LIST_SUCCESS = '/lists/UPDATE_RECEIVE';
export const UPDATE_LIST_FAILURE = '/lists/UPDATE_FAILURE';

export function updateList(id, name) {
  return {
    [CALL_API]: {
      endpoint: `/api/lists/${id}`,
      method: 'PUT',
      types: [UPDATE_LIST_REQUEST, UPDATE_LIST_SUCCESS, UPDATE_LIST_FAILURE]
    }
  }
}

export const DELETE_LIST_REQUEST = '/lists/DELETE_REQUEST';
export const DELETE_LIST_SUCCESS = '/lists/DELETE_RECEIVE';
export const DELETE_LIST_FAILURE = '/lists/DELETE_FAILURE';

export function deleteList(id) {
  return {
    [CALL_API]: {
      endpoint: `/api/lists/${id}`,
      method: 'DELETE',
      types: [DELETE_LIST_REQUEST, DELETE_LIST_SUCCESS, DELETE_LIST_FAILURE]
    }
  }
}
