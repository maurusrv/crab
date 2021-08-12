import logo from './logo.svg'
import './App.css'
import Title from './components/Title'
import Button from './components/Button'
import Input from './components/Input'
import Subtitle from './components/common/Subtitle'
import { useEffect, useState } from 'react'

function App() {
  const [guest, setGuest] = useState('John')

  useEffect(() => {
    setGuest('Mcnikko')
  }, [])

  const status = 'success'

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello Batch 10 + Mcnikko!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <span style={{display: 'flex', alignItems: 'center'}}>Heading: <Title guest={guest} /></span>
          <span style={{display: 'flex', alignItems: 'center'}}>Subheading: <Subtitle guest={guest} /></span>
          <Input />
          {/* {Array.from(Array(7).keys()).map(index => {
            return (
              <Button key={index} color={colors[index]} />
            )
          })} */}

          {status === 'success' && <Button color={1} labelWithNameThatIWant="Custom Label" />}
          {/* {status === 'failed' && <Button color="red" />} */}
      </header>
    </div>
  );
}

export default App
