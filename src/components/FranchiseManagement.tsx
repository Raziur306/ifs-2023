import { StyledBox,StyledBtn, StyledOutliedBox, StyledTextBox } from './franchiseStyle'

import { Container, Box, Typography, Grid } from '@mui/material'
import React from 'react'
import FranchiseTextCard from './FranchiseTextCard'
import FranchiseCard from './FranchiseCard'

function FranchiseManagement() {
  return (
    <Box sx={{color:'white'}}>
      <Typography sx={{p:'50px 0px 50px 150px'}}textTransform={'uppercase'} variant='h4'>Franchise Management</Typography>
      <StyledBox>
        <Box sx={{width:'100%',display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
          <Typography variant='h5'>Financials</Typography>
        <StyledBtn>Invite to Collect Rent</StyledBtn>
        </Box>
       
       
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <StyledOutliedBox>
        <Grid container columnSpacing={{ xs: 4, sm: 5, md: 6 }} rowSpacing={{ xs: 4, sm: 5, md: 6}}>
          <Grid item>
            <StyledTextBox >
              <FranchiseTextCard title={'Fixed Lease'} body={'$12400'}/>
              <FranchiseTextCard title={'Start Date'} body={'12/06/2023'}/>
            </StyledTextBox>


            
          </Grid>


           <Grid item>
            <StyledTextBox>
  <FranchiseTextCard title={'End Date'} body={'12/06/2024'}/>
   <FranchiseTextCard title={'Payment Due '} body={'5th of Month'}/>
            </StyledTextBox>
            
          </Grid>

           <Grid item>
            <StyledTextBox>
  <FranchiseTextCard title={'Rent Amount'} body={'$12400'}/>
            <FranchiseTextCard title={'Security Amount'} body={'$24800'}/>
            </StyledTextBox>

          </Grid>
        </Grid>
          
        </StyledOutliedBox>

        <Box sx={{m:'auto',gap:'20px',display:'flex', flexDirection:'column',alignItems:'center'}}>
          <Typography fontWeight={700} variant='h4'>Amount Due</Typography>
          <Typography variant='h3'>$12400</Typography>
        </Box>
        </Box>
      </StyledBox>

      <Grid sx={{mt:10,}} justifyContent={'center'} container gap={10}>
        <Grid item>
          <FranchiseCard title={'Property'} icon = {'property.svg'}/>
        </Grid>
        <Grid item>
          <FranchiseCard title={'Payments'} icon = {'payments.svg'}/>
        </Grid>
         <Grid item>
          <FranchiseCard title={'Deposit'} icon = {'deposit.svg'}/>
        </Grid>
      </Grid>


    </Box>
  )
}

export default FranchiseManagement