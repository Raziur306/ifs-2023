import  React , {useState} from 'react';
import {MenuItem,Button,AppBar,Avatar, ListItemText,Drawer, IconButton,CssBaseline, List,ListItem,ListItemButton, useMediaQuery} from '@mui/material';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Link from 'next/link';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import theme from '@/theme';
import {StyledCustomDrawer, MenuListItem, TopBarItem} from './drawerStyle'


const drawerWidth = 240;

interface Props {
  window?: () => Window;
  children:React.ReactNode;
  onDrawerSelected:Function;
}


export default function ResponsiveDrawer(props: Props) {
  const { window, children} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const menuItem = [
  {title:'Brands and Franchisors', link:'/brand'}, 
  {title:'Franchise Management', link:'/#'}, 
  {title:'Taxes', link:'/texes' },
  {title:'Actions', link:'/#'},
  {title:'Value Added Services', link:'/#'},
  {title:'Help Center',link:'/#'},
  {title:'AI Chat',link:'/#'},
  {title:'Wallet', link:'/#'}];



  const [drawerActiveItem, setDrawerActiveItem] = useState(0);
  const handleOnDrawerItemClick = (index:number)=>{
    setDrawerActiveItem(index);
    props.onDrawerSelected(index);
  }


// const container = window !== undefined ? () => window().document.body : undefined;
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const drawer = (
   <Box sx={{pt:1.5}}>
   <Box component={'img'} sx={{width:'180px', height:'180px', borderRadius:'25px',display:'flex', verticalAlign:'center',margin:'auto'}} alt='Web Logo' src='/logo.svg' />
      <List>
        {menuItem.map((item, index) => (
            <MenuListItem key={index} sx={{m:2.5}}  selected={drawerActiveItem === index}  onClick={()=>{handleOnDrawerItemClick(index)}}>
              <ListItemText sx={{textAlign:'center'}} primary={item.title} />
          </MenuListItem> 
       
        ))}
      </List>
      </Box>
  
  );

  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ width:'100%', display:'flex', alignItems:'center'}}>


            <Link style={{textDecoration:'none', margin:'auto'}} href='#' >
              <TopBarItem>
                Home
              </TopBarItem>
              </Link>


            <Link style={{textDecoration:'none', margin:'auto'}} href='#'>
              <TopBarItem>
                Company
              </TopBarItem>
              </Link>



             <Link style={{textDecoration:'none', margin:'auto'}}href='#' ><TopBarItem>
                Request
              </TopBarItem></Link>
              

              <TopBarItem>
             <NotificationsNoneOutlinedIcon/>
              </TopBarItem>
            

            
               <Avatar  alt="User Avatar" src="/static/images/avatar/1.jpg" />
            


             <Link style={{textDecoration:'none' , margin:'auto'}} href='#' >
             <TopBarItem>
              Nadhif<KeyboardArrowDownOutlinedIcon/>
            </TopBarItem>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <StyledCustomDrawer
          variant={isMobile?"temporary" : "permanent"}
          open = {isMobile? mobileOpen : true }
          onClose={isMobile?handleDrawerToggle : undefined }
          sx={
            isMobile?
          {
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {borderWidth:0, borderRight:'none' },
          }:
           {
            display:  { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }
        } >
          {drawer}
        </StyledCustomDrawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        {/* current menu content will be placed here */}
        
        {children}


      </Box>
    </Box>
  );
}