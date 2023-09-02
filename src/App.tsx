import { MantineProvider } from '@mantine/core';
import './App.css'
import Playground from './Playground';

function App() {
  return (
    <MantineProvider>
      <Playground />
    </MantineProvider>
  )

}

export default App
