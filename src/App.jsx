import './App.css'
import '@mantine/core/styles.css';
import HeroIntro from './components/HeroIntro/HeroIntro.jsx'

import { MantineProvider } from '@mantine/core';


function App() {
  return (
    <MantineProvider>
      <HeroIntro></HeroIntro>
    </MantineProvider>
  )
}

export default App
