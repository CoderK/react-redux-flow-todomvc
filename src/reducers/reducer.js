// @flow
import type { Action, State }from '../types/type-def';
import {
  TOGGLE_COMPLETE,
  CHANGE_FILTER,
  EDIT_ITEM,
  DONE_EDITING,
  CANCEL_EDITING,
  CLEAR_COMPLETED,
  DELETE_ITEM,
  ADD_ITEM
} from '../actions/action-creators';

function findItemIndexById(todos, id: string) {
  return todos.findIndex(todo => todo.id === id);
}

function toggleComplete(state: State, id: string) {
  const { todos } = state;
  const itemIndex = findItemIndexById(todos, id);
  const { status } = todos[itemIndex];
  const updatedTodos = updateTodo(todos, itemIndex, {
    status: status === 'active' ? 'completed' : 'active'
  });

  return { ...state, todos: updatedTodos };
}

function changeFilter(state: State, filter: string) {
  return { ...state, filter: filter };
}

function editItem(state: State, id: string) {
  const { todos } = state;
  const itemIndex = findItemIndexById(todos, id);
  const updatedTodos = updateTodo(todos, itemIndex, { editing: true });

  return { ...state, todos: updatedTodos };
}

function cancelEditing(state: State, id: string) {
  const { todos } = state;
  const itemIndex = findItemIndexById(todos, id);
  const updatedTodos = updateTodo(todos, itemIndex, { editing: false });

  return { ...state, todos: updatedTodos };
}

function doneEditing(state: State, id: string, text: string) {
  const { todos } = state;
  const itemIndex = findItemIndexById(todos, id);
  const updatedTodos = updateTodo(todos, itemIndex, {
    editing: false,
    text: text
  });

  return { ...state, todos: updatedTodos };
}

function updateTodo(prevTodos, idx, nextTodo) {
  const prevTodo = prevTodos[idx];
  const nextTodos = [ ...prevTodos ];
  nextTodos[idx] = { ...prevTodo, ...nextTodo };
  return nextTodos;
}

function clearCompleted(state: State) {
  const { todos } = state;

  return {
    ...state,
    todos: todos.filter(item => item.status !== 'completed')
  };
}

function addItem(state: State, text: string) {
  const { todos } = state;
  const createdId = todos.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
  const newItem = { id: createdId, text: text, status: 'active' };

  return {
    ...state,
    todos: [ ...todos, newItem ]
  };
}

function deleteItem(state: State, id: string) {
  const { todos } = state;

  return {
    ...state,
    todos: todos.filter(item => item.id !== id)
  };
}

export default function(state: State = {
  todos: [],
  filter: 'all'
}, action: Action) {
  switch (action.type) {
    case TOGGLE_COMPLETE:
      return toggleComplete(state, action.itemId);
    case CHANGE_FILTER:
      return changeFilter(state, action.filter);
    case EDIT_ITEM:
      return editItem(state, action.itemId);
    case CANCEL_EDITING:
      return cancelEditing(state, action.itemId);
    case DONE_EDITING:
      return doneEditing(state, action.itemId, action.newText);
    case CLEAR_COMPLETED:
      return clearCompleted(state);
    case ADD_ITEM:
      return addItem(state, action.text);
    case DELETE_ITEM:
      return deleteItem(state, action.itemId);
    default:
      return state;
  }
}
