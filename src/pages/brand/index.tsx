import React from 'react'
import{Grid,Typography, Button, Avatar,Box, Container, Link as MuiLink, ListItemButton} from '@mui/material'
import BrandCard from '../components/BrandCard'
import BrandCardWithLogo from '../components/BrandCardWithLogo'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaunchIcon from '@mui/icons-material/Launch';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import theme from '@/theme';

function Brand() {

  return (
    <Box sx={{[theme.breakpoints.up('sm')]:{
      ml:'240px'
    }, p:5}} >
      <Typography  align='center' color={'white'} variant='h3' >Brands and Franchisors</Typography>
      <Box sx={{mt:10}}>
        <Box  sx={{mb: 5,display:'flex', flexDirection:'row', alignItems:'center'}}>
          <Box sx={{display:'flex', flexDirection:'row', gap:4}}>
            <Box sx={{
              p:2,
              boxShadow: 'inset -12.446px -12.446px 31.1151px #3B4451, inset 12.446px 12.446px 31.1151px #000000',
              borderRadius: '248.921px'}} >
               <Avatar  sx={{ bgcolor: '#F3CDD4', width:'140px', height:'140px'}}>EL&N</Avatar>
               </Box>
          <Box sx={{margin:'auto'}}>
            <Typography variant='h5' color={'white'}>EL&N</Typography>
            <Typography color={'white'}>Eat, Live and Nourish</Typography>
          </Box>
          
          </Box>
         <Button sx={{ textTransform:'none',fontSize:'16px', borderRadius: '8px', margin:'0 0 0 auto', color:'white', background:theme.palette.secondary.main,
         '&:hover':{
          background:'red'
         }}} >Upload Final Documents</Button>
        </Box>


        <Box sx={{mb:10}} >
          <Typography fontWeight={'400'} sx={{mb:2,}} variant='h4' color={'white'} >About</Typography>
          <Typography paragraph color='white'  fontSize={'20px'} letterSpacing={'0.025em'}>EL&N is ‘Eat, Live and Nourish’ a taste for the very best. Founded in August 2017by Alexandra Miller, EL&N opened the 
doors to its first branch located right in the heart of Mayfair, Park Lane. EL&N London has become one of the most 
instagrammed destinations in the world with their iconic flower walls, pink interiors and alternative lattes taking 
social media by storm.EL&N ofer products which are aimed at consumers with a healthy, and nutritious lifestyle, 
as well as hand-crafted in-house pastries and cakes which are designed and coloured uniquely for that extra touch.</Typography>
        </Box>

     

{/* brand cards */}

<Grid container gap={5} justifyContent={'center'}>
  <Grid item>
   <BrandCard title='Franchise Fee' value={5600}/>
  </Grid>
  <Grid item>
    <BrandCard title='Royalty' value={1100}/>
  </Grid>
  <Grid item>
 <BrandCard title='Investment Amount' value={5600}/>
  </Grid>

  <Grid item>
 <BrandCardWithLogo title='Capex schedule' link='#'/>
  </Grid>
   <Grid item>
 <BrandCardWithLogo title='P&L' link='#'/>
  </Grid>
   <Grid item>
 <BrandCardWithLogo title='Trademark' link='#'/>
  </Grid>
   <Grid item>
 <BrandCardWithLogo title='Terms' link='#'/>
  </Grid>
   <Grid item>
 <BrandCardWithLogo title='Contact Brand' link='#'/>
  </Grid>

</Grid>


<Box sx={{mt:15,display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
<Box >
  <ListItemButton alignItems='center' sx={{color:'white', 
  boxShadow: 'inset -6.22302px -6.22302px 6.22302px #3B4451, inset 3.73381px 3.73381px 6.22302px #000000',
  borderRadius: '12.446px'}}
  
  
  href="#">
    <FileDownloadOutlinedIcon/>
    Brand Brochure
   </ListItemButton>
</Box>

<Box>
  <ListItemButton alignItems='center' sx={{color:'white'}} href='#'>
  <LocationOnIcon/>
  Location 172+
  <LaunchIcon/>
  </ListItemButton>
</Box>

</Box>

 </Box>

    </Box>
  )
}

export default Brand