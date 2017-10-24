import { CALL_API } from 'redux-api-middleware';

export const LIST_ITEMS_REQUEST = '/list_items/REQUEST';
export const LIST_ITEMS_SUCCESS = '/list_items/RECEIVE';
export const LIST_ITEMS_FAILURE = '/list_items/FAILURE';

export function fetchListItems(id) {
  return {
    [CALL_API]: {
      endpoint: `/api/lists/${id}`,
      method: 'GET',
      types: [LIST_ITEMS_REQUEST, LIST_ITEMS_SUCCESS, LIST_ITEMS_FAILURE]
    }
  }
}

export const CREATE_LIST_ITEM_REQUEST = '/list_items/CREATE_REQUEST'
export const CREATE_LIST_ITEM_SUCCESS = '/list_items/CREATE_RECEIVE'
export const CREATE_LIST_ITEM_FAILURE = '/list_items/CREATE_FAILURE'

export function createListItem(listId, name) {
  return {
    [CALL_API]: {
      endpoint: `/api/lists/${listId}`,
      method: 'POST',
      body: JSON.stringify({ name: name }),
      types: [CREATE_LIST_ITEM_REQUEST, CREATE_LIST_ITEM_SUCCESS, CREATE_LIST_ITEM_FAILURE]
    }
  }
}

export const CLEAR_LIST_ITEMS = '/list_items/CLEAR';
export const clearListItems = { type: CLEAR_LIST_ITEMS }

export const MARK_DONE_ITEM_REQUEST = '/list_items/MARK_DONE_ITEM_REQUEST'
export const MARK_DONE_ITEM_SUCCESS = '/list_items/MARK_DONE_ITEM_RECEIVE'
export const MARK_DONE_ITEM_FAILURE = '/list_items/MARK_DONE_ITEM_FAILURE'

export function markDone(id, listId) {
  return {
    [CALL_API]: {
      endpoint: `/api/lists/${listId}/items/${id}/done`,
      method: 'PUT',
      types: [MARK_DONE_ITEM_REQUEST, MARK_DONE_ITEM_SUCCESS, MARK_DONE_ITEM_FAILURE]
    }
  }
}


export const DELETE_ITEM_REQUEST = '/list_items/DELETE_ITEM_REQUEST'
export const DELETE_ITEM_SUCCESS = '/list_items/DELETE_ITEM_RECEIVE'
export const DELETE_ITEM_FAILURE = '/list_items/DELETE_ITEM_FAILURE'

export function deleteItem(id, listId) {
  return {
    [CALL_API]: {
      endpoint: `/api/lists/${listId}/items/${id}`,
      method: 'DELETE',
      types: [DELETE_ITEM_REQUEST, DELETE_ITEM_SUCCESS, DELETE_ITEM_FAILURE]
    }
  }
}
