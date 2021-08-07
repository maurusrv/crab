const Button = (props) => {
  const { color } = props
  const onButtonClick = () => {
    alert('Me clicked!')
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
        color,
      }} 
      onClick={onButtonClick}
    >
      Click me!
    </button> 
  )
}

export default Button
