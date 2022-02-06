import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css';

function HeaderOption({Icon, title,onClick,avatar}) {
  const user = useSelector(selectUser);
  return <div onClick={onClick} className='headerOption'>
      {Icon && <Icon  className="headerOption__icon"/>}
      
      {avatar && <Avatar className="headerOption__icon">{user?.displayName[0]}</Avatar>}
     <h3 className="HeaderOption__title">{title}</h3> 
     
  </div>;
}

export default HeaderOption;
