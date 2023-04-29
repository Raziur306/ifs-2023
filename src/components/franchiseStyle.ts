import theme from "@/theme";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";


export const StyledBox = styled(Box)({
    maxWidth:'1433px',
    margin:'auto',
    boxShadow: '-6.22302px -6.22302px 18.6691px #3B4451, 6.22302px 6.22302px 18.6691px #000000',
    borderRadius: '24.8921px',
    padding:'80px',
})

export const StyledBtn = styled(Button)({
    color:'white',
    textTransform:'none',
    fontWeight:700,
    background:theme.palette.primary.main,
    boxShadow: '-3px -3px 4px #3B4451, 1px 1px 3px #000000',
    borderRadius: '12.446px',
})


export const StyledOutliedBox = styled(Box)({
    maxWidth:'780px',
border: '1px solid rgba(255, 255, 255, 0.2)',
borderRadius: '24.89px',
padding:'30px'
})

export const StyledTextBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    gap:'10px',
})