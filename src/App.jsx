import Title from './components/Title'
import Counter from './components/Counter'

import Imagem from './assets/aniversario.jpg'

import useCountdown from './hooks/useCountdown'

import './App.css'

function App() {
  const x = useCountdown("2024-10-23T19:00:00")

  return (
    <div className="App" style={{backgroundImage: `url(${Imagem})`}}>
      <div className='container'>
        <Title title="Contagem regressiva" />
        <div className="countdown-container">
          <Counter title="Dias" number={2} />
          <Counter title="Horas" number={2} />
          <Counter title="Minutos" number={2} />
          <Counter title="Segundos" number={2} />
        </div>
      </div>
    </div>
  )
    
  }
   

export default App
