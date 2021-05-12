import React from 'react';

import { Form } from './Form';
import { ToDo } from './ToDo';

const App = () => {

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
    <div>
      Current list:
      <hr />
      <ul>
        {toDos.map(toDo => <ToDo content={toDo} removeItself={removeToDo} />)}
      </ul>
      <hr />
      <button onClick={() => setToDos([])}>Click vacia la lista</button>
      <hr />
      <Form addToDo={addToDo}></Form>
    </div>
  );

}

export default App;