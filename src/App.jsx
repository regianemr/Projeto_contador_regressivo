import Title from './components/Title'
import Counter from './components/Counter'

import Imagem from './assets/aniversario.jpg'

import useCountdown from './hooks/useCountdown'

import './App.css'

function App() {
  const [day, hour, minute, second] = useCountdown("2024-10-23T19:00:00")

  return (
    <div className="App" style={{backgroundImage: `url(${Imagem})`}}>
      <div className='container'>
        <Title title="Contagem regressiva para o boteco do Hermes" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  )
    
  }
   

export default App
