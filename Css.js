
import styled from 'styled-components'
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

export const Input=styled.input`
      color: white;
      border: 0;
      outline: 0;
      background: none;
      width: 0;
      height: 24px;
      caret-color:transparent;
`;
export const View=styled.div`
     color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.4s linear;
`;
export const UserAvatar=styled(Avatar)`
  cursor: pointer;
  :hover{
    opacity:0.8;
  }
`;
export const IconButtons=styled(IconButton)`
  color: white;
  font-size: 24px;
`;
export const IconsContainer=styled.div`
  display: flex;
`;

export const Button = styled.button`
  background: linear-gradient(45deg, red, orange, yellow);
  border-radius: -10px;
  border: 0px;
  margin: 1px;
  padding: 0.30em 3em;
  color:white;
  float: right;
`;
export const Ctext=styled.text`
	background: linear-gradient(45deg, red, orange, yellow);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font: {
		size: 20vw;
		family: $font;
	};
`;

export const Div=styled.div`
    background-color: #262626;
    width: 100%;
    height: 100%;
`;
export const Container=styled.div``;

export const Header=styled.div`
  display: flex;
  position: sticky;
  top:0;
  background-color:#262626 ;
  z-index: 1;
  justify-content: space-between;
  align-items: center ;
  padding: 15px;
  height: 50px;
  border-bottom: 0.5px solid lightgray;
`;

