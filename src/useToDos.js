import React from 'react';

export const useToDos = () => {
  const [toDos, setToDos] = React.useState(['Llamar a Roberto']);

  function addToDo (newToDo) {
    const newListOfToDos = toDos.concat(newToDo);
    setToDos(newListOfToDos);
  }

  const removeToDo = toDoName => {
    const newListOfToDos = toDos.filter(currentToDo => currentToDo !== toDoName)
    setToDos(newListOfToDos);
  }

  const emptyList = () => setToDos([])

  return {toDos, addToDo, removeToDo, emptyList}
}