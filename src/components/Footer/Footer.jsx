import React from 'react'
import "./footer.scss"

export default function Footer(props) {
    const {numOfTodoLeft, numOfTodo, activeBtn, filterStatus, clearCompleted} = props
    return (
        <div className="footer">
            <span className="todo-count">
                <strong>{ numOfTodoLeft }</strong>
                <span> </span>
                <span>{numOfTodoLeft > 1 ? 'items' : 'item'}</span>
                <span> left</span>
            </span>
            <ul className="filters">
                <li>
                    <a href="#/"
                        className={`${activeBtn === 'ALL' ? 'selected' : ''}`}
                        onClick={() => filterStatus('ALL')}
                    > All
                    </a>
                </li>
                
                <li>
                    <a href="#/active"
                        className={`${activeBtn === 'ACTIVE' ? 'selected' : ''}`}
                        onClick={() => filterStatus('ACTIVE')}
                    > Active
                    </a>
                </li>

                <li>
                    <a href="#/completd"
                        className={`${activeBtn === 'COMPLETED' ? 'selected' : ''}`}
                        onClick={() => filterStatus('COMPLETED')}
                    > Completed
                    </a>
                </li>
            </ul>
            {
                numOfTodoLeft < numOfTodo &&
                <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
            }
            
        </div>
    )
}
