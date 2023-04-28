import theme from '@/theme';
import styled from '@emotion/styled';
import { Box, Container,Button ,TextField, Input } from '@mui/material';



export const StyledContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    height: '100vh'
})


export const StyledBox = styled(Box)({
    width: '582px',
    height: '694px',
    background: ' #303438',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25);border - radius: 10px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    padding: '20px',
    color: 'white',
    gap:'30px',
    borderRadius:'10px'

})



export const StyledButton = styled(Button)({
   boxShadow:' -6.22302px -6.22302px 18.6691px #3B4451, 3px 3px 8px #000000',
    bordeRadius: '5px',
    color: 'white',
    width: '183px',
    height: '51px',
    '&.active':{
          boxShadow: 'inset -6.22302px -6.22302px 6.22302px #3B4451, inset 3.73381px 3.73381px 6.22302px #000000',
    }
})


export const ButtonBox = styled(Box)({
    display:'flex',
    flexDirection:'row',
    gap:'15px',
})


export const StyledTextField = styled(Input )({
    width:'394px',
    height:'44px',
    padding:"10px",
    color:"white",
    boxShadow: 'inset -6.22302px -6.22302px 6.22302px #3B4451, inset 3.73381px 3.73381px 6.22302px #000000',
    borderRadius: '5px',
    fontStyle:'italic'
})


export const StyledSubmitBtn = styled(Button)({
background: theme.palette.secondary.main,
boxShadow: '-6.22302px -6.22302px 18.6691px #3B4451, 3px 3px 8px #000000',
borderRadius: '5px',
width:'394px',
height:'51px',
fontStyle: 'normal',
fontWeight: 700,
fontSize: '18px',
lineHeight: '25px',
color:'white',
'&:hover':{
    background:theme.palette.secondary.main,
}
})



