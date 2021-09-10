
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { useRouter } from 'next/router';
import { Avatar, IconButton } from '@material-ui/core';
import { MoreVertIcon } from '@material-ui/icons/MoreVert';
import { AttachFileRounded } from '@material-ui/icons';

function ChatScreen({chat,messages}) {
    const [user] = useAuthState(auth);
    const router = useRouter();
    return (
        <Container >
            <Header >
                <Headers>
                        <Avatars />
                </Headers>

                <HeaderInfo>
                    <h3>Recipient Email</h3>
                    <text>demo</text>
                </HeaderInfo>
                <HeaderIcons>
                    <IconButton>
                        <AttachFileRounded/>
                    </IconButton>
                    
                </HeaderIcons>
            </Header>
        </Container>
    )
}

export default ChatScreen;
const Avatars = styled(Avatar)`
    
`;
const Headers = styled.div``;

const Container=styled.div`
`;
const Header = styled.div`
    display:flex;
    position : sticky;
    z-index: 100;
    top:0;

`;
const HeaderInfo =styled.div`

`;
const HeaderIcons = styled.div`

`;