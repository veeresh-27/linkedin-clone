import React from 'react';
import {Avatar} from '@material-ui/core';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser)
    const recentItem = (topic)=>{
        return( 
            <div className="sidebar__recentItems">
            <span className='sidebar__hash'>
                #
            </span>
            <p>{topic}</p>
            
        </div>
        )
        
    }

  return <div className='sidebar'>
    <div className="sidebar__top">
        <img src="https://media.istockphoto.com/photos/triangular-colorful-background-picture-id641352048?k=20&m=641352048&s=612x612&w=0&h=k1MVORiqUs6bYNwDlpGCb_HDkSyHgSRRu60NsKrosoY=" alt="" />
        <Avatar src={user.photoUrl}  className="sidebar__avatar">
            {user.displayName[0]}
        </Avatar>
        <h2>
            {user.displayName}
        </h2>
        <h4>
            {user.email}
        </h4>
    </div>
    <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>2,543</p>

        </div>
        <div className="sidebar__stat">
            <p>Views on your post</p>
            <p className='sidebar__statNumber'>2,443</p>
            
        </div>

    </div>
    <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('developer')}
            {recentItem('design')}
            
    </div>
  </div>;
}

export default Sidebar;
