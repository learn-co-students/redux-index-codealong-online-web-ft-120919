import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodosContainer extends Component {
   todos = () =>
    this.props.todos.map((todo, index) => <Todo key={index} text={todo} />);
  render() {
    return (
      <div>
       {this.todos()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};
export default connect(mapStateToProps)(TodosContainer);
