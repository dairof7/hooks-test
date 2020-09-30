import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

// import { TodoList } from './TodoList';
// import { TodoAdd } from './TodoAdd';
import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

// const init = () => {

//     return JSON.parse(localStorage.getItem('todos')) || [];

// }

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender',
    //     done: false
    // }];
    // parse me devuelve un objeto apartir de un string
    // si regresa un arreglo vacio devuelve un null y esto con || [] regresa el []
    return JSON.parse(localStorage.getItem('todos')) || []
}



export const TodoApp = () => {
    
    //dispatch es el que uso para enviar los datos al reducer
    //todos es lista de todo
    //todoReducer es la funcion que se encarga de administrar las acciones

    const [ todos, dispath ] = useReducer(todoReducer, [], init);
    
    useEffect(() => {
        //local storage solo guarda strings
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])

    const handleDelete = (todoId) => {
        const accion = {
            type: 'delete',
            payload: todoId
        }
        dispath(accion)
    }

    const handleToggle = ( todoId ) => {
    
        dispath({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {
        dispath({
            type: 'add',
            payload: newTodo
        })
    }

    return (


        <div>
            <h1>TodoApp ( { todos.length } ) </h1>
            <hr />

            <div className="row">

                <div className="col-7">

                < TodoList todos={todos} handleDelete={handleDelete} handleToggle={ handleToggle } />
 
                </div>
                <div className="col-5">
                   <TodoAdd 
                    handleAddTodo={handleAddTodo}
                   />
                </div>
            </div>
        </div>


    )
}
