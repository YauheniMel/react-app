import React from 'react';
import TextInput from '../../../../common/TextInput/TextInput';
import { LinguaContext } from '../../../../contexts/LinguaContext';

import style from './Desk.module.scss';

export default function Desk({ state, createCredoContent, createPostContent, setCredo, setPost }) {
  return (
    <LinguaContext.Consumer>
      {({language}) => (
        <div className={style.desk}>
          <div className={style.image_wrap}>
            <img className={style.image} src="shared/photo.jpg" alt="foto" />
          </div>
          <div className={style.profile}>
            <TextInput title={language.desk.credo} value={state.initCredo} content={state.credoContent} onSubmit={setCredo} onChange={createCredoContent} />
            <TextInput title={language.desk.post} value={state.initPost} content={state.postContent} onSubmit={setPost} onChange={createPostContent} />
          </div>
        </div>
      )}
    </LinguaContext.Consumer>
  );
}
