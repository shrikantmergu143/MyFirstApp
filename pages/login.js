import Head from "next/head";
import  styled  from 'styled-components';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Button, IconButton } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import {auth} from "../config/firebase";
import {provider} from "../config/firebase";
import firebase from 'firebase';
import InputBase from '@material-ui/core/InputBase';
import  * as EmailValidator  from 'email-validator';
import  React,{useState}  from 'react';
const useStyles = makeStyles((theme) => ({
    fabButton: {
      height: 180,
      width: 180,
      borderRadius:180/2,
      backgroundColor:'green',
      boxShadow:2,
    },
    Button: {
      marginTop:-300,
      flexDirection:'column',
      display:'flex',
    },
    Input:{
      margin:5,
      border: '1px solid #ced4da',
    }
  }));

function Login() {
    const classes = useStyles();
    const signIn = () =>{
          auth.signInWithPopup(provider).catch(alert);
    }
    return (
       <Container  >
          <Fab color="transparent" aria-label="add" className={classes.fabButton}>
                <WhatsAppIcon style={{fontSize:150,color:'white'}} />
          </Fab>
            <Button className={classes.Button} onClick={signIn} style={{backgroundColor:'lightpink',}} >Sign in With Google</Button>
       </Container>
    )
}

export default Login;
const Container=styled.div`
  display:grid;
  place-items:center; 
  height:100vh;
`;