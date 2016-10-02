// @flow

export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DONE_EDITING = 'DONE_EDITING';
export const CANCEL_EDITING = 'CANCEL_EDITING';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

export function toggleComplete(itemId: string) {
  return {
    type: TOGGLE_COMPLETE,
    itemId
  }
}

export function changeFilter(filter: string) {
  return {
    type: CHANGE_FILTER,
    filter
  }
}

export function editItem(itemId: string) {
  return {
    type: EDIT_ITEM,
    itemId
  }
}

export function doneEditing(itemId: string, newText: string) {
  return {
    type: DONE_EDITING,
    itemId,
    newText
  }
}

export function cancelEditing(itemId: string) {
  return {
    type: CANCEL_EDITING,
    itemId
  }
}

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED
  }
}

export function deleteItem(itemId: string) {
  return {
    type: DELETE_ITEM,
    itemId
  }
}

export function addItem(text: string) {
  return {
    type: ADD_ITEM,
    text
  }
}
