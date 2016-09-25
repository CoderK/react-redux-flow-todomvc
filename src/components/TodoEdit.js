// @flow

import React from 'react';

type Props = {
  text: string,
  id: string,
  onCancelEditing: (id: string) => void,
  onDoneEditing: (id: string, value: string) => void
};

type State = {
  value: string;
};

class TodoEdit extends React.Component {

  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = { value: props.text };
  }

  render() {
    return (
      <input className="edit"
             value={ this.state.value }
             onChange={ this.handleOnChange }
             type="text"
             ref="itemInput"
             onKeyDown={ this.handleKeyDown }
             onBlur={ this.handleOnBlur }
      />
    );
  }

  cancelEditing() {
    this.setState({'value': this.props.text});
    return this.props.onCancelEditing(this.props.id);
  }

  handleKeyDown = ({ key }: any) => {
    if(key === 'Enter') {
      return this.props.onDoneEditing(this.props.id, this.state.value);
    } else if(key === 'Escape') {
      return this.cancelEditing();
    }
  };

  handleOnBlur = () => {
    return this.cancelEditing();
  };

  handleOnChange = (e: any) => {
    this.setState({ value: e.target.value });
  };

};

export default TodoEdit;
