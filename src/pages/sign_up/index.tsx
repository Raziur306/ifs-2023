import React,{useState} from 'react'
import {Input, Link, Box, Typography,Button} from '@mui/material'
import {StyledLinkBtn,StyledSubmitBtn,StyledTextField ,StyledBox, StyledContainer,StyledButton,ButtonBox} from '@/components/signInAndUpStyle';
import theme from '@/theme'
import { useRouter } from 'next/router';
function SignUp() {


const [selctedBtn, setButtonState] = useState(0);
const router = useRouter();

const handleSignUpClick = ()=>{
    localStorage.setItem('loggedIn','1')
    router.replace('/');
}

const handleSignInClick = ()=>{
    router.replace('sign_in');
}


  return (
    <StyledContainer >
        <StyledBox>
            <Typography fontWeight={'bold'} variant='h4'>Sign Up</Typography>
            <Typography>Already have an account?
                 <StyledLinkBtn disableRipple variant="text" 
                 onClick={handleSignInClick}>Sign In
                 </StyledLinkBtn>
            </Typography>
            <ButtonBox>
                <StyledButton className={selctedBtn===0?'active':'undefine'}  
                onClick={()=>{
                setButtonState(0);

            }}>
                FRANCHISOR
            </StyledButton>
              <StyledButton className={selctedBtn===1?'active':'undefine'} 
              onClick={()=>{
                setButtonState(1);

            }}>
                FRANCHISEE
            </StyledButton>
            </ButtonBox>
            <StyledTextField type='text' disableUnderline placeholder='Name'/>
            <StyledTextField type='email' disableUnderline placeholder='Email'/>
            <StyledTextField type='password' disableUnderline placeholder='Password'/>
            <StyledSubmitBtn onClick={handleSignUpClick}>Sign up</StyledSubmitBtn>

            <Box sx={{display:'flex', gap:'10px'}}> <Input type='checkbox'/> I have read and aree to the <Link sx={{color:theme.palette.secondary.main}} href='#'>Terms of Service</Link></Box>


        </StyledBox>
    </StyledContainer>
  )
}

export default SignUp