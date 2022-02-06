import React, { useEffect } from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser,login,logout } from './features/userSlice';
import { auth } from './firebase';
import Login from './Login';

function App() {
  const user=useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl:userAuth.photoUrl,
        }))
      }else{
        dispatch(logout());
      }
    })
  },[])
  return (
  
    <div className="app">
       <Header/>
      {!user ?(<Login/>):(
       
        <div className="app__body">
          <Sidebar/>
          <Feed/>
        {/* Widgets */}
        </div>)}
        
        
         
        
        {/* footer */}

    </div>
  );
}

export default App;
