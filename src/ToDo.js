import React from 'react';
import { ThemeContext } from './ThemeContext';

export const ToDo = ({ content, removeItself }) => {
  const {theme} = React.useContext(ThemeContext);
  return <li className={`card card-${theme}`}>
      <span>{content}</span>
      <button className="button remove" onClick={() => removeItself(content)}>☓</button>
    </li>
}