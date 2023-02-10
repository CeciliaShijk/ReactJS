import React, { Component } from 'react';

class Search extends Component {

    handleKeyUp=(event)=>{
   
        //绑定键盘事件
        if(event.key!=='Enter')return
        if(event.target.value.trim()==='')return alert ('please enter')
        //获取输入的内容，并以obj的形式传给App
        const obj={id:Date.now(),content:event.target.value,done:false}
        const {addTodo}=this.props
        addTodo(obj)
        
        event.target.value=''
        console.log('commit');
        
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}

export default Search;

    
    
    
