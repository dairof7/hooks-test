import React from 'react'


export const TodoListItem = ({todo, handleDelete, handleToggle, i}) => {
    return (
            <li
                    
                    className='list-group-item'
                >
                    <p
                        className={`${todo.done && 'complete' }`}
                        onClick={ () => handleToggle(todo.id) }
                    > { i + 1 }. {todo.desc}
                    </p>
                    <button
                        // uso funcion de flecha cuando quiero pasar parametros a la funcion
                        onClick={ () => handleDelete (todo.id) }
                        className='btn btn-danger'
                    >
                        Delete
                    </button>

            </li>
    )
}
