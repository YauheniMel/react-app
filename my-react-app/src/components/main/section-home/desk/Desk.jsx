import React from 'react';
import TextInput from '../../../../common/TextInput/TextInput';
import { addCredoContent, addPostContent } from '../../../../redux/home-reducer';

import style from './Desk.module.scss';

export default function Desk({ credo, post, setValue, postTitle, credoTitle }) {
  return (
    <div className={style.desk}>
      <div className={style.image_wrap}>
        <img className={style.image} src="shared/photo.jpg" alt="foto" />
      </div>
      <div className={style.profile}>
        <TextInput title={credoTitle} content={credo} setValue={setValue} callback={addCredoContent} />
        <TextInput title={postTitle} content={post} setValue={setValue} callback={addPostContent} />
      </div>
    </div>
  );
}
