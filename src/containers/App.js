// @flow
import { connect } from 'react-redux';
import {
  addItem,
  changeFilter,
  clearCompleted,
  deleteItem,
  doneEditing,
  cancelEditing,
  toggleComplete,
  editItem
} from '../actions/action-creators';
import TodoApp from '../components/TodoApp';

import type { Dispatch, State } from '../types/type-def';

function mapStateToProps(state: State) {
  return {
    todos: state.todos,
    filter: state.filter
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onAddItem: (text: string) => dispatch(addItem(text)),
    onChangeFilter: (filter: string) => dispatch(changeFilter(filter)),
    onClearCompleted: () => dispatch(clearCompleted()),
    onDeleteItem: (id: string) => dispatch(deleteItem(id)),
    onDoneEditing: (id: string, value: string) => dispatch(doneEditing(id, value)),
    onCancelEditing: (id: string) => dispatch(cancelEditing(id)),
    onToggleComplete: (id: string) => dispatch(toggleComplete(id)),
    onDoubleClickTodo: (id: string) => dispatch(editItem(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
