import React, { useEffect } from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser,login,logout } from './features/userSlice';
import { auth } from './firebase';
import Login from './Login';
import Widget from './Widget';

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
          photoUrl:userAuth.photoURL,
        }))
      }else{
        dispatch(logout());
      }
    })
  },[])
  return (!user ?(<Login/>):(
        <div className="app">
          <Header/>
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <Widget/>
          </div>
        </div>)        
    
  );
}

export default App;
