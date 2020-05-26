import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodosContainer extends Component {

    const mapStateToProps = state => {
        return {
            todos: state.todos
        }
    }

    render() {
        return(
            <div></div>
        );
    }
};

export default connect(mapStateToProps)(TodosContainer);
