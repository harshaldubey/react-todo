import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle =()=>{
        return{
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
        }
    }
    markComplete = (e) =>{
        console.log(this.props)
    }

    render() {
        const { id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind (this,id)} /> {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)}style={btnstyle}>x</button>
                </p>
            </div>
        )
    }
}
// PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}
const btnstyle={
    background:'red',
    color:'white',
    border:'none',
    padding:'6px 10px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'

}

export default Todoitem;
