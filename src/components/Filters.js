// @flow

import React from 'react';
import classNames from 'classnames';

type Props = {
  itemCount: number,
  selectedFilter: string,
  filter: string,
  onClearCompleted: () => void,
  onChangeFilter: (filter: string) => void
};

export default class Filters extends React.Component {

  props: Props

  getItemCount() {
    return this.props.itemCount || 0;
  }

  setSelectedClass(filter: string) {
    return classNames({'selected': this.props.filter === filter});
  }

  render() {
    const { onChangeFilter, onClearCompleted } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{ this.getItemCount() }</strong> items left
        </span>
        <ul className="filters">
          <li>
            <a href="#"
               onClick={() => onChangeFilter('all')}
               className={ this.setSelectedClass('all') }>
              All
            </a>
          </li>
          <li>
            <a href="#"
               onClick={() => onChangeFilter('active')}
               className={ this.setSelectedClass('active') }>
              Active
            </a>
          </li>
          <li>
            <a href="#"
               onClick={() => onChangeFilter('completed')}
               className={ this.setSelectedClass('completed') }>
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed"
                onClick={ onClearCompleted }>
          Clear completed
        </button>
      </footer>
    )
  }
};
