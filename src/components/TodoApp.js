import React from 'react';
import TodoList from './TodoList'
import Header from './Header'
import Filters from './Filters'
import Footer from './Footer'

class App extends React.Component {

  countByFilter() {
    const empty = 0;
    const { todos, filter } = this.props;

    if (todos) {
      return todos
        .filter(
          (item) => {
            const status = item.get('status');
            return filter === 'all' || status === filter;
          }
        ).size;
    }

    return empty;
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