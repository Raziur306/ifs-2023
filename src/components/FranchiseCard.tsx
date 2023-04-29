import theme from '@/theme';
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const FranchiseCard = (props:{title:string, icon:string})=> {
    const {title,icon} = props;


    return (
    <Box sx={{display:'flex', flexDirection:'column',gap:5, alignItems:'center',minWidth:'439px', p:4, bgcolor:theme.palette.secondary.main, 
      boxShadow:'7px 7px 10px rgba(16, 16, 18, 0.75), -7px -7px 30px #262E32',
      borderRadius:'24px'
    }}>
        <Image width={80} height={80} alt='' src={icon}/>
        <Typography fontWeight={500} variant='h5'>{title}</Typography>
    </Box>
  )
}

export default FranchiseCard