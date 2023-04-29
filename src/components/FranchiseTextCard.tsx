import { Box, Typography } from '@mui/material';
import React from 'react'



const FranchiseTextCard = (props:{title:String, body:String})=> {
    const {title, body} = props;


  return (
    <Box gap={'10px'}>
    <Typography variant='h6'>{title}</Typography>
    <Typography>{body}</Typography>
    </Box>
  )
}

export default FranchiseTextCard