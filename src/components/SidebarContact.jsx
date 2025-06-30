import React from 'react';
import { SearchIcon } from '../icons';
import MenuItem from './MenuItem';
import Avatar from './Avatar';

function SidebarContact() {
  return (
    <div className='fixed top-14 right-0 h-full w-[350px] overflow-auto flex flex-col max-xl:hidden gap-2 bg-primary/15'>
      <div className='flex justify-between text-gray-500'>
        <span>contact</span>
        <div className='flex gap-2'>
          <SearchIcon />
          <h4 className='relative -top-2 right-1'>...</h4>
        </div>
      </div>

      <MenuItem 
      icon={Avatar}
      text="Bob Codecamp20"  
      className="w-11 h-11 rounded-full bg-slate-200s"
      imgSrc='https://www.svgrepo.com/show/427085/avatar.svg'
      />
      <MenuItem 
      icon={Avatar}
      text="john Codecamp20"  
      className="w-11 h-11 rounded-full bg-slate-200s5"
      imgSrc='https://www.svgrepo.com/show/420361/avatar-man-muslim.svg'
      
      />
      <MenuItem 
      icon={Avatar}
      text="Jane Codecamp20"  
      className="w-11 h-11 rounded-full bg-slate-200s"
      imgSrc='https://www.svgrepo.com/show/420363/avatar-elderly-grandma.svg'
      />

      
    </div>
  );
}

export default SidebarContact;