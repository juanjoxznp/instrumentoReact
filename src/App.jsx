import './App.css'
import { Paint } from './components/Layouts/Paint/Paint'
import { Welcome } from './components/Layouts/Welcome/Welcome'
import { Routes, Route } from 'react-router'

//Importo Routes y Route, luego dentro de la funcion, creo Routes y dentro de ella creo la ruta especifica
//para cada elemento que necesito

function App() {
  
  return (
    <>

    <Routes>

      <Route path='/paint' element={ <Paint />} />


    </Routes>

           
    </>
  )
}

export default App
