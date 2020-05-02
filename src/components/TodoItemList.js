import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const {todos, myToggle, myRemove} = this.props;
        return (
            <div>
                <TodoItem todoText="할일 1" checked={true}/>
                <TodoItem todoText="할일 2" checked={false}/>
                <TodoItem todoText="할일 3" checked={true}/>
            </div>
        );
    }
}

export default TodoItemList;