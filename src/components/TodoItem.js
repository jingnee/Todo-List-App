import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const {todoText, checked, id, myToggle, myRemove} = this.props;
        return (
            <div className="todo-item" onClick={() => myToggle()}>
                <div className="remove" onClick={(e) => {
                    //버블업(event 전파) 방지 되도록
                    e.stopPropagation();
                    myRemove(id);
                }}>&times;
                </div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{todoText}</div>
                </div>
                <div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
                </div>
            </div>
        );
    }
}

export default TodoItem