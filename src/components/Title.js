import React, { useState, useEffect } from 'react'

class Title extends React.Component {
  // 1st gen
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     greeting: 'Hello, world!!'
  //   }
  // }

  // 2nd gen
  state = {
    greeting: '',
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: "Goodbye Philippines!", 
      })
    }, 5000)    
  }

  componentDidUpdate() {
    console.log('Updated!')
  }

  render() {
    return (
      <h1 className="greeting">
        {this.state.greeting === '' ? (
          `Loading...`
        ) : (
          this.state.greeting
        )}
      </h1>
    )
  }
}

function Title2 () {
  const [greeting, setGreeting] = useState('Hello, world!')

  useEffect(() => {
    setTimeout(() => {
      setGreeting("Goodbye Philippines!")
    }, 5000) 
  }, [])

  useEffect(() => {
    console.log('Updated!')
  }, [greeting])

  return (
    <h1 className="greeting">
      {greeting}
    </h1> 
  )
}

export default Title2
