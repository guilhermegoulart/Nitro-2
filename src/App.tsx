import Balance from 'react-wrap-balancer'
import './App.css'
import { Underline } from './Underline'
import { HeroPattern } from './HeroPattern'

function App() {

  return (
    <main>
      <h1><Balance>Craft pixel-perfect <span>UI <Underline /></span> experiencies</Balance></h1>
      <HeroPattern />
    </main>
  )
}

export default App
