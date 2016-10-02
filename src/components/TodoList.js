// @flow

import React from 'react';
import TodoItem from './TodoItem';
import type { Todo } from '../types/type-def';

type Props = {
  todos: [],
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
    return this.filteredTodosBy(this.props.filter);
  }

  filteredTodosBy(filter: string) {
    return this.props.todos.filter(
      ({ status }) => filter === 'all' || filter === status
    );
  }

  isCompleted({ status }: Todo) {
    return status === 'completed';
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
          {
            this.getItems()
              .map(item => {
                return <TodoItem key={ item.id }
                          text={ item.text }
                          id={ item.id }
                          isCompleted={ this.isCompleted(item) }
                          isEditing={ item.editing }
                          onDoneEditing={ onDoneEditing }
                          onCancelEditing={ onCancelEditing }
                          onToggleComplete={ onToggleComplete }
                          onDeleteItem={ onDeleteItem }
                          onDoubleClickTodo={ onDoubleClickTodo }
                />;
              })
          }
        </ul>
      </section>
    );
  }
};
