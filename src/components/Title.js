import React, { useState, useEffect } from 'react'

class Title extends React.Component {
  // 1st gen
  constructor(props) {
    super(props)
    this.state = {
      greeting: props.guest,
      name: 'Tyler',
      surname: 'Durden',
    }
  }

  // 2nd gen
  // state = {
  //   greeting: '',
  // }

  // componentDidMount() {
        
  // }


  



  componentDidUpdate() {
    const { guest } = this.props
    setTimeout(() => {
      this.setState({
        greeting: guest, 
      })
    }, 5000)    
    console.log('Updated!')
  }

  render() {

    const { greeting } = this.state
    // const { guest } = this.props

    return (
      <h1 className="greeting">
        {greeting === '' ? (
          `Loading...`
        ) : (
         `Goodbye, ${greeting}!`
        )}
      </h1>
    )
  }
}

function Title2 ({ guest }) {
  const [greeting, setGreeting] = useState('Philippines')

  useEffect(() => {
    setTimeout(() => {
      setGreeting(guest)
    }, 5000) 
  }, [guest])

  // useEffect(() => {
  //   console.log('Updated!')
  // }, [greeting])

  return (
    <h1 className="greeting">
      Goodbye, {greeting}!
    </h1> 
  )
}

export default Title
