import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar';
import {db,auth,provider} from '../config/firebase';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import  * as EmailValidator  from 'email-validator';
import  styled  from 'styled-components';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 10,
  },
  fabButton: {
    top: '0 auto',
    margin:10,
    opacity: 1.2,
    top:0,
  },
  })
);
export default function Home(props) {
  
  const [user]=useAuthState(auth);
  const userChatRef=db.collection('chats').where('users','array-contains',user.email);
  const [chatsSnapshot]=useCollection(userChatRef);
  const classes = useStyles();
  const createChat = () => {
    const input = prompt('Please Enter a valid email id');
    if(!input) return null;
    if(EmailValidator.validate(input) && !chatAlreadyExists(input) && input !== user.email){
      db.collection('chats').add({
        users:[user.email,input]
      })
    }
    else{
      return alert("Already Exist");
    }
   
  }
  const chatAlreadyExists = (recipientEmail) => 
    !!chatsSnapshot?.docs.find(
      (chat) =>  
          chat.data().users.find((user)=>user === recipientEmail)?.length > 0
      );

  return (
      <Container  scrollbars={false} >
        <Sidebar user={user.email} style={{scrollbars:true}} />
        <ChatScreeen> </ChatScreeen>
      </Container>
  )
}

const ChatScreeen= styled.div``;

const Container=styled.div`
height: 100vh;
display:flex;
`;

