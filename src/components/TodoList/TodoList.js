import React, { Component } from 'react';
import Todo from '../Todo/Todo';
import './styles.css';
export default class TodoList extends Component {
  render() {
    return (
      <div className="todo-wrapper">
        {this.props.tasks.map((el) => (
          <Todo
            key={el.id}
            id={el.id}
            done={el.done}
            description={el.description}
            setUpdate={this.props.setUpdate}
            setDone={this.props.setDone}
            handleDelete={this.props.handleDelete}
          />
        ))}
      </div>
    );
  }
}
