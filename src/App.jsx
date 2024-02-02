import { useState } from 'react'
import Contexto from './Contex/Context';
import Principal from './components/Principal'
import Listado from './components/Listado';

function App() {
  const [listado, setListado] = useState([]);

  return (
    <Contexto.Provider value={{listado, setListado}}>
      <Principal />
      <Listado />
    </Contexto.Provider>

  )
}

export default App
