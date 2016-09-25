// @flow

import React from 'react';
import TodoItem from './TodoItem';

type Props = {
  todos: List<Map<string, any>>,
  filter: string,
  onDeleteItem: (id: string) => void,
  onDoneEditing: (id: string, value: string) => void,
  onCancelEditing: (id: string) => void,
  onToggleComplete: (id: string) => void,
  onDoubleClickTodo: (id: string) => void,
};
type State = {};

export default class TodoList extends React.Component {

  props: Props;
  state: State;

  getItems() {
    const empty = [];

    if (this.props.todos) {
      return this.filteredTodosBy(this.props.filter);
    }
    return empty;
  }

  filteredTodosBy(filter: string) {
    return this.props.todos.filter(
      (item: Map<string, any>) => {
        return filter === 'all' || filter === item.get('status');
      }
    );
  }

  isCompleted(item: Map<string, any>) {
    return item.get('status') === 'completed';
  }

  render() {
    const {
      onDeleteItem,
      onDoneEditing,
      onCancelEditing,
      onToggleComplete,
      onDoubleClickTodo
    } = this.props;

    return (
      <section className="main">
        <ul className="todo-list">
          {this.getItems().map(item =>
            <TodoItem key={ item.get('id') }
                      text={ item.get('text') }
                      id={ item.get('id') }
                      isCompleted={ this.isCompleted(item) }
                      isEditing={ item.get('editing') }
                      onDoneEditing={ onDoneEditing }
                      onCancelEditing={ onCancelEditing }
                      onToggleComplete={ onToggleComplete }
                      onDeleteItem={ onDeleteItem }
                      onDoubleClickTodo={ onDoubleClickTodo }/>
          )}
        </ul>
      </section>
    );
  }
};
