import styled  from 'styled-components';
import Head from 'next/head';
import Home from '../index';
import ChatScreen from '../../components/ChatScreen';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import GetRecipientEmail from './../../utils/GetRecipientEmail';
import { IconButton } from '@material-ui/core';

function Chats({ chat, messages }) {
    const [user] = useAuthState(auth);

    return (
        <Container >
            <Head>
                <title>Chat with {GetRecipientEmail(chat.users,user)}</title>
            </Head>
            <Home />
            <ChatContainer  >
                    <ChatScreen chat={chat} messages={messages}  />
            </ChatContainer>
        </Container>
    )
}

export default Chats;
export async function getServerSideProps(context){
    const ref = db.collection("chats").doc(context.query.id);
    const messagesRes = await ref
        .collection('messages')
        .orderBy('timestamp','acs')
        .get();
    const messages = messagesRes.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
    })).map(messages =>({
        ...messages,
        timestamp:messages.timestamp.toDate().getTime()
    }));
    const chatRes = await ref.get();
    const chat = {
        id:chatRes.id,
        ...chatRes.data() 
    }

    return {
        props:  {
            messages:   JSON.stringify(messages),
            chat:chat,
        }
    }
}
const Container=styled.div`
display:flex;

`;
const ChatContainer=styled.div`
overflow: scroll;
height: 100vh;
    ::-webkit-scrollbar{
        display:none;
    }
    -ms--ms-overflow-style:none;
    scrollbar-width: none;
`;