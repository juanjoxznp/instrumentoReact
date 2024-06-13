import './App.css'
import { Paint } from './components/Layouts/Paint/Paint'
import { Welcome } from './components/Layouts/Welcome/Welcome'
import { Routes, Route } from 'react-router'

//Importo Routes y Route, luego dentro de la funcion, creo Routes y dentro de ella creo la ruta especifica
//para cada elemento que necesito

//Llamo a Welcome antes de Routes para que me muestre siempre el componente al abrir la pagina

function App() {
  
  return (
    <>
 

  <Welcome></Welcome>
    <Routes>

      <Route path='/paint' element={ <Paint />} />


    </Routes>

           
    </>
  )
}

export default App
