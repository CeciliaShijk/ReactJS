import React, { Component } from 'react';

export default class Items extends Component {
    render() {
        const {id,content,done}=this.props
        
        return (
            <div>
                <li>
                <label>
                    <input type="checkbox" defaultChecked={done} />
                    <span>{content}</span>
                </label>
                <button className="btn btn-danger" style={{ display: 'none' }}>删除</button>
            </li>
            </div>
        );
    }
}

