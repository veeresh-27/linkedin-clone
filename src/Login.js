import React,{useState} from 'react';
import './Login.css';
import {login} from './features/userSlice';
import { useDispatch } from 'react-redux';
import {auth} from './firebase';

function Login() {
    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [photo,setPhoto] =useState('');
    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();
        if(!name){
            return alert('Please enter your name');
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: photo
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: photo,
                }))
            })
        }).catch((error)=>alert(error));
        
    }

    const loginToApp =(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: photo,
            }))
        }).catch(error=>alert(error))
    }
  return <div>
    <div className="login">
        <div className="login__header">
            <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg" alt="" />
        </div>
        <form className='forms' action="">
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Full Name (Required if not registered)' type="text" />
            <input value={photo} onChange={(e)=>setPhoto(e.target.value)} placeholder='Profile Picture (Optional)' type="text" />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type="email" />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type="password" />

            <button type="submit" onClick={loginToApp}>
                Login
            </button>
        </form>
        <p>
            Not a member?
            <span className='login__register' onClick={register}>
                Signup

            </span>
        </p>
  </div>
  </div>;
}

export default Login;
