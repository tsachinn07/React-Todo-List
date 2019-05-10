import React, { Component } from 'react'
class TodoItems extends Component {
    
    createTasks = item => {
        return (
            <li key={item.key} >
                {item.text} <span className="close-icon" onClick={() => this.props.deleteItem(item.key)}>X</span>
            </li>
        )
    }
    
    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)
        return <ol className="theList">{listItems}</ol>
    }
}
export default TodoItems