import theme from '@/theme'
import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'


const BrandCard =(props:{title:string, value:number})=> {
  return (
   <Card sx={{ borderRadius:'16px', minHeight:'160px', minWidth:'382px',background:theme.palette.secondary.main, display:'flex',alignItems:'center', justifyContent:'center'}}>
      <CardContent>
        <Typography align='center' color={'white'}>{props.title}</Typography>
        <Typography align='center' color={'white'} >${props.value}</Typography>
      </CardContent>
    </Card>
  )
}

export default BrandCard