import React, { useState } from 'react'
import { Input, Link, Box, Typography } from '@mui/material'
import { StyledSubmitBtn, StyledTextField, StyledBox, StyledContainer, StyledButton, ButtonBox, StyledLinkBtn } from '@/components/signInAndUpStyle';
import { useRouter } from 'next/router';

function SignIn() {
    const [selctedBtn, setButtonState] = useState(0);
    const router = useRouter();

    const handleSignInClick = () => {
        localStorage.setItem('loggedIn','1')
        router.replace('/');
    }

    const handeSignUpClick = ()=>{
        router.replace('/sign_up')
    }

    return (
        <StyledContainer >
            <StyledBox>
                <Typography fontWeight={'bold'} variant='h4'>Sign In</Typography>
                <Typography>Don't have account? 

                      <StyledLinkBtn disableRipple variant="text" 
                      onClick={handeSignUpClick}>Sign Up
                      </StyledLinkBtn>
                     </Typography>
                <ButtonBox sx={{mb:8, mt:8}}>
                    <StyledButton className={selctedBtn === 0 ? 'active' : 'undefine'}
                        onClick={() => {
                            setButtonState(0);

                        }}>
                        FRANCHISOR
                    </StyledButton>
                    <StyledButton className={selctedBtn === 1 ? 'active' : 'undefine'}
                        onClick={() => {
                            setButtonState(1);

                        }}>
                        FRANCHISEE
                    </StyledButton>
                </ButtonBox>
                <StyledTextField type='email' disableUnderline placeholder='Email' />
                <StyledTextField type='password' disableUnderline placeholder='Password' />
                <StyledSubmitBtn onClick={handleSignInClick}>Sign In</StyledSubmitBtn>
            
            </StyledBox>
        </StyledContainer>
    )
}

export default SignIn