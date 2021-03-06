import React, { Component } from 'react';
import TodosList from './TodosList';
import AddTodo from './AddTodo';
import './Todo.css';
import { connect } from 'react-redux';

export class Todo extends Component {
    state = {
        todos: []
    }
    deleteTodo = id => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos:todos
        })
    }
    addTodo = todo => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos: todos
        })
    }
    render(){
        return (
            <div className={this.props.theme}>
                <div className="todo-div" style={{backgroundColor:this.props.background}}>
                    <div className="main-div">
                        <div className="my-header todo-link" style={{color:this.props.name}}>
                            {this.props.language==='english' ? "To see code click on link: " : "Klikni za prikaz koda:"} 
                            <a 
                                href="https://github.com/Emi-GitHub/MyApp-React/tree/todo" 
                                target="_blank" 
                                rel="noopener noreferrer"> Add todo's
                            </a> 
                            <br/> <br/>
                        </div>
                    </div>
                    <div className="ui container">
                        <div className="ui divider"></div>
                        <h1 className="todo-header">Todo's</h1>
                        <h3 className="add-todo" style={{color:this.props.name}}>Add new Todo's:</h3>
                        <AddTodo addTodo={this.addTodo}/>
                        <TodosList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
        name: state.name,
        background: state.background,
        language: state.language
    }
}
export default connect(mapStateToProps)(Todo);
