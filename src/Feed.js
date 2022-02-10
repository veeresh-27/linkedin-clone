import React,{useEffect, useState} from 'react';
import './Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import { Avatar } from '@material-ui/core';
import SubscriptionstionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcone from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
            setPosts(snapshot.docs.map((doc)=>({
                id: doc.id,
                data: doc.data(),
            })));
        })
    }, []);
    const sendPost = (e)=>{
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description : user.email,
            message: input,
            photoUrl: user.photoURL || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        })
        setInput('');
    };
  return <div className='feed'>
    <div className="feed__inputContainer">
        
        <div className="feed__input">
            <CreateIcon/>
            <form action="">
                <input placeholder='Write your Post' value={input} onChange={e =>setInput(e.target.value)} type="text" />
                <button onClick={sendPost} type='submit'>Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
            <InputOption title='Photo' Icon={ImageIcon} color='#7085f9'/>
            <InputOption title='Video' Icon={SubscriptionstionsIcon} color='#e7a33e'/>
            <InputOption title='Event' Icon={EventNoteIcone} color='#c0cbcd'/>
            <InputOption title='Write article' Icon={CalendarViewDayIcon} color='#7fc15e'/>
        </div>
    </div>
    <FlipMove>
    {
        posts.map(({id, data: {name,description,message,photoUrl}})=>{
            return(
            <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
            )
            
        })
    }
    </FlipMove>
    
    
  </div>;
}

export default Feed;
