import React from 'react';

export const ToDo = ({ content, removeItself }) => {
  return <li><span>{content}</span><button onClick={() => removeItself(content)}>☓</button></li>
}