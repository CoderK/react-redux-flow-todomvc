// @flow

import React from 'react';
import classNames from 'classnames';
import TodoEdit from './TodoEdit';

type Props = {
  isEditing: boolean,
  isCompleted: boolean,
  onDeleteItem: (id: string) => void,
  onDoneEditing: (id: string, value: string) => void,
  onCancelEditing: (id: string) => void,
  onToggleComplete: (id: string) => void,
  onDoubleClickTodo: (id: string) => void,
  text: string,
  id: string
};
type State = {};

class TodoItem extends React.Component {

  props: Props;
  state: State;

  render() {
    const {
      isEditing,
      isCompleted,
      onDeleteItem,
      onDoneEditing,
      onCancelEditing,
      onToggleComplete,
      onDoubleClickTodo,
      text,
      id
    }: Props = this.props;

    const itemClass = classNames({
      'todo': true,
      'completed': isCompleted,
      'editing': isEditing
    });

    return (
      <li className={ itemClass }>
        <div className="view">
          <input type="checkbox"
                 className="toggle"
                 defaultChecked={ isCompleted }
                 onClick={ () => onToggleComplete(id) } />
          <label htmlFor="todo"
                 ref="text"
                 onDoubleClick={ () => onDoubleClickTodo(id) }>
            { text }
          </label>
          <button className="destroy"
                  onClick={ () => onDeleteItem(id) }></button>
        </div>
        <TodoEdit text={ text }
                  id={ id }
                  onCancelEditing={ onCancelEditing }
                  onDoneEditing={ onDoneEditing } />
      </li>
    );
  }
};

export default TodoItem;