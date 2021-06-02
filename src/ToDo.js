import React from 'react';

export const ToDo = ({ content, removeItself }) => {
  return <li className="card"><span>{content}</span><button className="button remove" onClick={() => removeItself(content)}>☓</button></li>
}