import React from 'react';
import HeaderOption from './HeaderOption';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


import './Header.css';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';


function Header() {
  


  const dispatch = useDispatch();
  const logoutOfApp = () =>{
    dispatch(logout());
    auth.signOut();
  };
 
  return(<div className='header'>
    <div className="header__left">
      <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Logo" />
      <div className="header__search">
        <SearchIcon />
        <input placeholder='Seacrh' type="text" />
      </div>
    </div>
    <div className="header__right">
      <HeaderOption Icon={HomeIcon} title="Home"/>
      <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
      <HeaderOption Icon={ChatIcon} title="Messaging"/>
      <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
      <HeaderOption avatar={true} title="Logout"
      onClick={logoutOfApp}
      />
      
    </div>
  </div>);
}

export default Header;
