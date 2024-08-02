import { Outlet } from 'react-router-dom'
import Imagem from './assets/aniversario.jpg'

import './App.css'

function App() {

  return (
    <div className="App" style={{backgroundImage: `url(${Imagem})`}}>
      <div className='container'>
        
        <Outlet />
      </div>
    </div>
  )
    
  }
   

export default App
