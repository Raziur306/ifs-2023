import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import { Card, CardContent, Typography } from '@mui/material';
import theme from '@/theme';

const BrandCardWithLogo =(props:{title:string, link:string})=> {
  return (
    <Card sx={{ borderRadius:'16px', minHeight:'160px', minWidth:'382px',background:theme.palette.secondary.main, display:'flex',alignItems:'center', justifyContent:'center'}}>
      <CardContent sx={{color:'white',display:'flex', flexDirection:'row',gap:'10px'}} >
         <Typography >{props.title}</Typography>
         <LaunchIcon/>
      </CardContent>
    
    </Card>
  )
}

export default BrandCardWithLogo