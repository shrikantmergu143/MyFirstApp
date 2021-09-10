import { Avatar, Button, } from '@material-ui/core';
import  styled  from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import GetRecipientEmail from './../utils/GetRecipientEmail';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, db} from '../config/firebase'
import { useCollection } from 'react-firebase-hooks/firestore';
import ChatScreen from './ChatScreen';
import Router from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router'

function Chat({id,users},props) {
    const router=useRouter();
    const [user]=useAuthState(auth);
    const [recipientsnapshot] = useCollection(
        db.collection("users").where('email','==',GetRecipientEmail(users,user))
    );
        console.log(props)
    const recipientEmail=GetRecipientEmail(users,user);
    const recipient = recipientsnapshot?.docs?.[0]?.data();
    const handleClick = () => {
        router.push(`/chat/${id}`);
      }
    return (
            <Button  onClick={handleClick} style={{display:'flex',borderBottomWidth:0.9 ,borderBottomColor:'gray'}} >
                <ListItems >
                    <ListItemAvatar>
                        {recipient?(
                            <Avatar src={recipient.photoURL}/> 
                        ):
                        (
                            <Avatar/> 
                        )

                        }
                    </ListItemAvatar>
                    <UserAvatarName primary={`${recipientEmail}`} />
                </ListItems>
            </Button>
    )
}

export default Chat;


const ListItems=styled(ListItem)`
    :hover{
        opacity:0.7;
    }
`;
const UserAvatarName=styled(ListItemText)`
background: linear-gradient(to right, #B4C5CF 0%, #82DAFF 26%, #52BAFF 59%, #6887CF 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font: {
		size: 28px;
	};
    
    `;