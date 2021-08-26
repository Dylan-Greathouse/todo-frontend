import React, { Component } from 'react';
import { createTodos, getTodos, updateTodos } from './Utils.js';
import './Todos.css';

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
         this.setState({ to_do: data });
     };

     handleSubmit = async (e) => {
        e.preventDefault();
        const data = await createTodos(this.props.token, {
            to_do: this.state.newTo_do,
            completed: false,
        });
        this.setState({ newTo_do: '' });
        this.setState((prevState) => ({
            to_do: [...prevState.to_do, data],
        }));
     };

     handleCompleted = async (item) => {
         item.completed = !item.completed;
        await updateTodos(this.props.token, item);
         this.fetchTodos();
     }

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
                        onChange={() => this.handleCompleted(item)}>
                        </input>
                        <label>{item.to_do}</label>
                    </div>
                ))}
            </section>
            <section className="new">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            value={this.state.newTo_do}
                            type="text"
                            onChange={(e) =>
                                this.setState({ newTo_do: e.target.value })
                            }
                        />
                        <button>Add to the list</button>
                    </form>
                </section>
            </>
         );
    }
}
 
export default ToDoList;