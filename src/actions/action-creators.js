// @flow

export function toggleComplete(itemId: string) {
  return {
    type: 'TOGGLE_COMPLETE',
    itemId
  }
}

export function changeFilter(filter: string) {
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}

export function editItem(itemId: string) {
  return {
    type: 'EDIT_ITEM',
    itemId
  }
}

export function doneEditing(itemId: string, newText: string) {
  return {
    type: 'DONE_EDITING',
    itemId,
    newText
  }
}

export function cancelEditing(itemId: string) {
  return {
    type: 'CANCEL_EDITING',
    itemId
  }
}

export function clearCompleted() {
  return {
    type: 'CLEAR_COMPLETED'
  }
}

export function deleteItem(itemId: string) {
  return {
    type: 'DELETE_ITEM',
    itemId
  }
}

export function addItem(text: string) {
  return {
    type: 'ADD_ITEM',
    text
  }
}
