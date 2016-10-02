import React from 'react';
import TodoList from './TodoList'
import Header from './Header'
import Filters from './Filters'
import Footer from './Footer'

class App extends React.Component {

  countByFilter() {
    const { todos = [], filter } = this.props;
    return todos.filter(
      ({ status }) => filter === 'all' || status === filter
    ).length;
  }

  render() {
    const {
      onAddItem,
      onChangeFilter,
      onClearCompleted,
      filter
    } = this.props;

    return (
      <div>
        <section className="todoapp">
          <Header onAddItem={ onAddItem }/>
          <TodoList { ...this.props } />
          <Filters filter={ filter }
                   itemCount={ this.countByFilter() }
                   onChangeFilter={ onChangeFilter }
                   onClearCompleted={ onClearCompleted }
          />
        </section>
        <Footer />
      </div>
    );
  }
};

export default App;