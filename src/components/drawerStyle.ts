import styled from '@emotion/styled';
import theme from '@/theme';
import { MenuItem, ListItemButton, Drawer,  } from '@mui/material';


//menu item
export const MenuListItem = styled(ListItemButton)({
    background: theme.palette.primary.main,
    minHeight: '90px',
    fontWeight: 400,
    lineHeight: '22px',
    textAlign: 'center',
    padding: ' 10px 20px 10px 20px',
    fontStyle: 'normal',
    boxShadow: '-6.22302px -6.22302px 18.6691px #3B4451, 6.22302px 6.22302px 18.6691px #000000',
    borderRadius: '12.446px',
    color: 'white',
    '&:hover': {
        boxShadow: 'inset -6.22302px -6.22302px 6.22302px #3B4451, inset 3.73381px 3.73381px 6.22302px #000000',
    },
    '&.Mui-selected': {
        background: theme.palette.secondary.main,
        '&:hover':{
            background:theme.palette.secondary.main,
            boxShadow:'none'
        }
    }
});

export const TopBarItem = styled(MenuItem)({
    margin: 'auto',
    padding: '1 12 1 12',
    textDecoration: 'none',
    color: 'white',
    background: theme.palette.primary.main,
    boxShadow: '-6.22302px -6.22302px 18.6691px #3B4451, 3px 3px 8px #000000',
    borderRadius: '12.446px',
    overflow: 'hidden',
    '&:hover': {
        boxShadow: 'inset -6.22302px -6.22302px 6.22302px #3B4451, inset 3.73381px 3.73381px 6.22302px #000000',
    },
    '&.Mui-selected': {
        background: theme.palette.secondary.main
    }
})





//custom drawer


export const  StyledCustomDrawer = styled(Drawer)({
    scrollbarWidth:'thin',
    scrollbarColor: 'rgba(155, 155, 155, 0.5) rgba(255, 255, 255, 0.2)',
     '& .MuiPaper-root::-webkit-scrollbar': {
    width: '6px',
  },
'& .MuiPaper-root::-webkit-scrollbar-track': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  '& .MuiPaper-root::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(155, 155, 155, 0.5)',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: 'rgba(155, 155, 155, 0.7)',
    },
  },
})


