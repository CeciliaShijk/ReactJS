
import React, { Component } from 'react';
import Search from './Search'
import List from './List'
import Footer from './footer'
import './App.css'

export default class App extends Component {
    state = {
        todos: [
            { id: '001', content: 'sleep', done: false },
            { id: '002', content: 'playing', done: true },
            { id: '004', content: 'eating', done: false }
        ]
    }
    //子组件向父组件传参：在父组件中写方法-子组件调用后将子组件的参数传给父组件
    //将新的一条记录todoObj以对象的形式添加到原来的state中
    addTodo = (todoObj) => {
        //获取原来的state
        const { todos } = this.state
        //将新的todoObj加到todos中
        const newTodos = [todoObj, ...todos]
        //更改状态
        this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Search addTodo={this.addTodo} />
                    <List todos={todos} />
                    <Footer />
                </div>
            </div>

        )
    }
}









