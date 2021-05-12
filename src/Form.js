import React from 'react';

export const Form = props => {
  const [text, setText] = React.useState('Daniel');

  const handleSubmit = () => {
    props.addToDo(text);
    setText('');
  }

  const handleInputValue = event => {
    setText(event.target.value)
  }

  return (
    <>
      <input value={text} onChange={handleInputValue}></input>
      <button onClick={handleSubmit}>Add ToDo</button>
    </>
  )

}