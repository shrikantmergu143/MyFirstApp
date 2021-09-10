import styled  from 'styled-components';
import Head from 'next/head';
import Home from './index';
import ChatScreen from '../components/ChatScreen';

function Chats() {
    return (
        <Container >
            <Head>
                <title>Chat</title>
            </Head>
            <Home />
            <ChatContainer  >
                <ChatScreen />
            </ChatContainer>
        </Container>
    )
}

export default Chats
const Container=styled.div`
display:flex;
background-color:#262626 ;

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