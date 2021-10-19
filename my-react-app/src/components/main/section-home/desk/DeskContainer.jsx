import React from 'react';
import Desk from './Desk';

export default function DeskContainer({ post, credo, dispatch }) {
  function setValue(elem, callback) {
    event.preventDefault();

    const value = elem.current.value;

    const action = callback(value);

    dispatch(action);
  }

  return (
    <Desk
      setValue={setValue}
      credo={credo}
      post={post}
    />
  );
}
