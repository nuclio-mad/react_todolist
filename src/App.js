import React from 'react';
import './App.css';

import { ThemeContext } from './ThemeContext';

import { Form } from './Form';
import { ToDo } from './ToDo';

const App = () => {

  const {theme} = React.useContext(ThemeContext);

  const [toDos, setToDos] = React.useState(['Llamar a Roberto']);

  function addToDo (newToDo) {
    const newListOfToDos = toDos.concat(newToDo);
    setToDos(newListOfToDos);
  }

  const removeToDo = toDoName => {
    const newListOfToDos = toDos.filter(currentToDo => currentToDo !== toDoName)
    setToDos(newListOfToDos);
  }


  return (
    <div className={`main-box main-box-${theme}`}>
      <b>Current list:</b>
      <hr />
      <ul>
        {toDos.map(toDo => <ToDo content={toDo} removeItself={removeToDo} />)}
      </ul>
      <hr />
      <p className="aside">La longitud de la lista es {toDos.length}</p>
      <p className="aside"><button className="button remove" onClick={() => setToDos([])}>Click vacia la lista</button></p>
      <hr />
      <Form addToDo={addToDo}></Form>
    </div>
  );

}

export default App;