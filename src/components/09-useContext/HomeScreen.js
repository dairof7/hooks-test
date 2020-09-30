import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

//UserContext es el componente que se creo como contexto
//Context es el contexto es decir donde puedo guardar las funciones o datos

  const { user } = useContext(UserContext)

  return (
    <div>
      <h1>HomeScreen</h1>
      <pre>
        { JSON.stringify(user,null,3)}
      </pre>
    </div>
  )
}
