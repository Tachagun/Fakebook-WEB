import React from 'react';
import DefaultImg from "../assets/default-avatar.png"
import { DropdownIcon } from '../icons';

function Avatar(props) {
  const {imgSrc, menu, bottom, right, ...resProps} = props
  return (
    <div className='avatar items-center cursor-pointer'>
      <div {...resProps}>
        <img src={imgSrc ? imgSrc : DefaultImg} alt="avatar" />
      </div>
      {menu &&
      <DropdownIcon className='bg-gray-300 rounded-full hover:bg-gray-400  absolute  w-4' style={{right, bottom}} />}
    </div>
  );
}

export default Avatar;
