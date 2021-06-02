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
    <div className="form-container">
      <h3>Add more toDos</h3>
      <div className="form">
        <br></br>
        <input value={text} onChange={handleInputValue}></input>
        <button style={{height: '30px'}} className="button add" onClick={handleSubmit}>Add ToDo</button>
      </div>
    </div>
  )

}