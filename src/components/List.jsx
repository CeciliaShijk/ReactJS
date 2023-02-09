import React, { Component } from 'react';
import Items from './Items'
import './App.css'





export default class List extends Component {
      
render() {
    const {todos}=this.props
    // console.log(todos,"list"); - received
    return (
        <ul className="todo-main">
            {
               todos.map((obj)=>{
                //将obj - todos的对象展开 而不是todos展开
                return <Items key={obj.id} {...obj}/>
               })
            }
        </ul>
    );
}
   
}



