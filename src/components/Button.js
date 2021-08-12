// function createButton (color) {
//   const button = document.createElement('button')
//   button.style.color = color
//   return button
// }

import { useState } from "react"

const Button = (props) => {
  const { color, darkMode } = props
  const [buttonLabel, setButtonLabel] = useState(props.labelWithNameThatIWant)
  
  const onButtonClick = () => {
    setButtonLabel('Clicked me!')
  }

  // const buttons = [
  //   <button onClick={onButtonClick}>Click me!</button>,
  //   <button onClick={onButtonClick}>Click me!</button>
  // ]

  // return buttons.map((button, index) => {
  //   return (
  //     <div key={index}>
  //       {button}
  //     </div>
  //   )
  // })


  return (
    <button 
      style={{
        backgroundColor: darkMode ? 'black' : color,
      }} 
      onClick={onButtonClick}
    >
      {buttonLabel}
    </button> 
  )
}

export default Button
