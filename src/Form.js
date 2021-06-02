import React from 'react';
import { ThemeContext } from './ThemeContext';

export const Form = props => {
  const [text, setText] = React.useState('');

  const {toggleTheme} = React.useContext(ThemeContext);

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
      <button style={{marginTop: '30px'}} className="button add" onClick={toggleTheme}>Toggle theme</button>
    </div>
  )

}