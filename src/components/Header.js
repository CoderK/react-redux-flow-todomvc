import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  handleKeyPress = ({ key }) => {
    if (key !== 'Enter') {
      return;
    }

    const { addTodoInput } = this.refs;
    const itemText = addTodoInput.value;

    if (itemText === '') {
      return;
    }

    addTodoInput.value = '';
    return this.props.onAddItem(itemText);
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo"
               ref="addTodoInput"
               autoComplete="off"
               placeholder="What needs to be done?"
               onKeyPress={ this.handleKeyPress } />
      </header>
    );
  }
};
