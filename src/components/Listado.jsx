import React from 'react'
import Contexto from '../Contex/Context'
import { useContext } from 'react'

export default function Listado() {
    const { listado } = useContext(Contexto)

    return (
        <div>
            <h2>Lista de tareas:</h2>
            <ul>
                {listado.map((tarea, index) => (
                    <li key={index}>{tarea}</li>
                ))}
            </ul>
        </div>
    )
}
