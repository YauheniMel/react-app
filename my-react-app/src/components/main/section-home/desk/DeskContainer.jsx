import React from 'react';
import Desk from './Desk';
import { LinguaContext } from '../../../../contexts/LinguaContext';

export default function DeskContainer({ post, credo, dispatch }) {
  function setValue(elem, callback) {
    event.preventDefault();

    const value = elem.current.value;

    const action = callback(value);

    dispatch(action);
  }

  return (
    <LinguaContext.Consumer>
      {({ language }) => (
        <Desk setValue={setValue} credo={credo} post={post} postTitle={language.desk.post} credoTitle={language.desk.credo} />
      )}
    </LinguaContext.Consumer>
  );
}
