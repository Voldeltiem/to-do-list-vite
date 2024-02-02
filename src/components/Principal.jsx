import React, { useState } from 'react'
import { useContext } from 'react'
import Contexto from '../Contex/Context'

export default function Principal() {
    const { listado, setListado } = useContext(Contexto)
    const [tarea, setTarea] = useState('')

    const handleSubmit = () => {
        if (tarea.trim() !== '') {
            setListado([...listado, tarea]);
            setTarea('');
        }
    };

    return (
        <div id='PRINCIPAL'>
            <h1>Principal</h1>
            <input
                type="text"
                placeholder='Ingresa una tarea'
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
            />
            <button onClick={handleSubmit}>Agregar</button>

        </div>
    )
}

