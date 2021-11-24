import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';
export default class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        description: 'Buy Tabac !',
        done: false,
      },
      {
        id: 2,
        description: 'Buy more Tabac !',
        done: true,
      },
      {
        id: 3,
        description: 'Save the world !',
        done: false,
      },
    ],
  };

  setUpdate = (text, id) => {
    const tasks = this.state.tasks;
    tasks.map((item) => {
      if (item.id === id) {
        item.description = text;
      }
    });

    this.setState({
      tasks: tasks,
    });
  };

  setDone = (id) =>
    this.setState({
      tasks: this.state.tasks.map((el) =>
        el.id === id ? { ...el, done: !el.done } : el
      ),
    });
  handleDelete = (id) => {
    this.setState({ tasks: this.state.tasks.filter((el) => el.id !== id) });
  };
  render() {
    return (
      <div>
        <TodoList
          tasks={this.state.tasks}
          setUpdate={this.setUpdate}
          setDone={this.setDone}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
