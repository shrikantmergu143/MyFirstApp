import styled from 'styled-components';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { auth,db } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import Chat from './Chat';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import  * as EmailValidator  from 'email-validator';


const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    fabButton: {
      top: '0 auto',
      margin:10,
      opacity: 1.2,
      top:0,
    },
    inputInput: {
        color:'whitesmoke',
      margin: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
export default function Sidebar(props) {
    const classes = useStyles();
    const [user]=useAuthState(auth);
    const userChatRef=db.collection('chats').where('users','array-contains',user.email);
    const [chatsSnapshot]=useCollection(userChatRef);

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

    console.log(user);
    return (
        <Container >
            <Header  >
                <UserAvatar src={user.photoURL}  onClick={()=>auth.signOut()}/>
                <IconsContainer style={{flexDirection:'row'}}>
                    <SearchBar className={classes.search}>
                        <SearchIcons className={classes.searchIcon}>
                            <SearchIcon />
                        </SearchIcons>
                        <InputBase placeholder="Search…" classes={{root: classes.inputRoot,input: classes.inputInput}} inputProps={{ 'aria-label': 'search' }}  />
                    </SearchBar>
                    <IconButtons>
                        <ChatIcon style={{fontSize:24}}  />
                    </IconButtons>
                    <IconButtons>
                        <MoreVertIcon style={{fontSize:24}} />
                    </IconButtons>
                </IconsContainer>
            </Header>
            <List dense   >
            {chatsSnapshot?.docs.map((chat) =>(
                <Chat key={chat.id} id={chat.id} users={chat.data().users} style={{display:'flex'}} />
            ))}
            </List>
            <AddChatss className={classes.fabButton} color="primary" aria-label="add" onClick={createChat} >
              <PersonAddRoundedIcon />
            </AddChatss>
        </Container>
    )
}
const AddChatss=styled(Fab)`
 position:fixed;
 top:89vh;
 bottom: 0px;

 `;
const SearchBar=styled.div``;
const SearchIcons=styled.div``;

 const Input=styled.input`
      color: white;
      border: 0;
      outline: 0;
      background: none;
      width: 0;
      height: 24px;
      caret-color:transparent;
`;

 const UserAvatar=styled(Avatar)`
  cursor: pointer;
  :hover{
    opacity:0.8;
  }
`;
 const IconButtons=styled(IconButton)`
`;
 const IconsContainer=styled.div`
  display: flex;
`;

 const Button = styled.button`
  background: linear-gradient(45deg, red, orange, yellow);
  border-radius: -10px;
  border: 0px;
  margin: 1px;
  padding: 0.30em 3em;
  color:white;
  float: right;
`;
 const Ctext=styled.text`
	background: linear-gradient(45deg, red, orange, yellow);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font: {
		size: 20vw;
		family: $font;
	};
`;

 const Div=styled.div`
    background-color: #262626;
    width: 100%;
    height: 100%;
`;
 const Container=styled.div`
 `;

 const Header=styled.div`
  display: flex;
  position: sticky;
  top:0;
  left:0;
  right:0;
  z-index: 1;
  justify-content: space-between;
  align-items: center ;
  padding: 15px;
  height: 80px;
  border-bottom: 0.5px solid lightgray;
`;

