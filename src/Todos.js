import React, { Component } from 'react';
import { getTodos } from './Utils.js';

class ToDoList extends Component {
    state = { 
        to_do: [],
        newTo_do: ''
     };

     componentDidMount = () => {
         this.fetchTodos();
         
     };

     fetchTodos = async () => {
         const data = await getTodos(this.props.token);
         console.log(data);
         this.setState({ to_do: data });
     };

     handleSubmit = async

    render() { 
        return ( 
            <>
            <h1>To Do List</h1>
            <section className='list'>
                {this.state.to_do.map((item) => (
                    <div className='todos' key={item.id}>
                        <input 
                        type='checkbox' 
                        checked={item.completed}
                       >

                        </input>
                        <label>{item.to_do}</label>
                    </div>
                ))}
            </section>
            </>
         );
    }
}
 
export default ToDoList;