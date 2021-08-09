import logo from './logo.svg'
import './App.css'
import Title from './components/Title'
import Button from './components/Button'
import Input from './components/Input'

function App() {
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
          <Title />
          <Input />
          {Array.from(Array(7).keys()).map(index => {
            return (
              <Button key={index} color={colors[index]} />
            )
          })}
      </header>
    </div>
  );
}

export default App
