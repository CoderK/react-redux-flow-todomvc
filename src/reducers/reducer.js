// @flow

import { Map, List } from 'immutable';
import type { Action }from '../types/type-def';

type State = Map<string, any>;

function findItemIndex(state: State, itemId: string) {
  return state.get('todos').findIndex(
    (item) => item.get('id') === itemId
  );
}

function toggleComplete(state: State, itemId: string) {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = state.get('todos')
    .get(itemIndex)
    .update('status', status => status === 'active' ? 'completed' : 'active');

  return state.update('todos', todos => todos.set(itemIndex, updatedItem));
}

function changeFilter(state: State, filter: string) {
  return state.set('filter', filter);
}

function editItem(state: State, itemId: string) {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = state.get('todos')
    .get(itemIndex)
    .set('editing', true);

  return state.update('todos', todos => todos.set(itemIndex, updatedItem));
}

function cancelEditing(state: State, itemId: string) {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = state.get('todos')
    .get(itemIndex)
    .set('editing', false);

  return state.update('todos', todos => todos.set(itemIndex, updatedItem));
}

function doneEditing(state: State, itemId: string, newText: string) {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = state.get('todos')
    .get(itemIndex)
    .set('editing', false)
    .set('text', newText);

  return state.update('todos', todos => todos.set(itemIndex, updatedItem));
}

function clearCompleted(state: State) {
  return state.update(
    'todos',
    todos => todos.filterNot(
      item => item.get('status') === 'completed'
    )
  );
}

function addItem(state: State, text: string) {
  const id = state
      .get('todos')
      .reduce((maxId, item) => Math.max(maxId,item.get('id')), 0) + 1;
  const newItem = Map({ id, text, status: 'active' });
  return state.update('todos', todos => todos.push(newItem));
}

function deleteItem(state: State, itemId: string) {
  return state.update('todos',
    (todos) => todos.filterNot(
      (item) => item.get('id') === itemId
    )
  );
}

export default function(state: State = Map({
  todos: List([]),
  filter: 'all'
}), action: Action) {
  switch (action.type) {
    case 'TOGGLE_COMPLETE':
      return toggleComplete(state, action.itemId);
    case 'CHANGE_FILTER':
      return changeFilter(state, action.filter);
    case 'EDIT_ITEM':
      return editItem(state, action.itemId);
    case 'CANCEL_EDITING':
      return cancelEditing(state, action.itemId);
    case 'DONE_EDITING':
      return doneEditing(state, action.itemId, action.newText);
    case 'CLEAR_COMPLETED':
      return clearCompleted(state);
    case 'ADD_ITEM':
      return addItem(state, action.text);
    case 'DELETE_ITEM':
      return deleteItem(state, action.itemId);
    default:
      return state;
  }
}
