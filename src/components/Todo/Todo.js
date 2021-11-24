import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.done}
          onChange={(e) => this.props.setDone(this.props.id)}
        />
        <input
          type="text"
          value={this.props.description}
          onChange={(e) => this.props.setUpdate(e.target.value, this.props.id)}
        />
        <input
          type="button"
          value="Delete"
          onClick={() => this.props.handleDelete(this.props.id)}
        />
      </div>
    );
  }
}
