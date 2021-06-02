import React from 'react';
import './App.css';

import { ThemeContext } from './ThemeContext';

import { Form } from './Form';
import { ToDo } from './ToDo';
import { useToDos } from './useToDos';

const App = () => {

  const {theme} = React.useContext(ThemeContext);

  const {toDos, addToDo, removeToDo, emptyList} = useToDos()


  return (
    <div className={`main-box main-box-${theme}`}>
      <b>Current list:</b>
      <hr />
      <ul>
        {toDos.map(toDo => <ToDo content={toDo} removeItself={removeToDo} />)}
      </ul>
      <hr />
      <p className="aside">La longitud de la lista es {toDos.length}</p>
      <p className="aside"><button className="button remove" onClick={emptyList}>Click vacia la lista</button></p>
      <hr />
      <Form addToDo={addToDo}></Form>
    </div>
  );

}

export default App;