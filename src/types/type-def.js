// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

export type Action =
  { type: 'CHANGE_FILTER', filter: string }
  | { type: 'EDIT_ITEM', itemId: string }
  | { type: 'DONE_EDITING', itemId: string, newText: string }
  | { type: 'CANCEL_EDITING', itemId: string }
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'DELETE_ITEM', itemId: string }
  | { type: 'ADD_ITEM', text: string }
;

export type State = Map<string, any>;
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;