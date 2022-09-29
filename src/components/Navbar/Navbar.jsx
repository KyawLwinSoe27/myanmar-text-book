import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: '10px' }} borderRadius="10px">
      <AppBar position="static">
        <Toolbar>
          <Typography
            margin="auto"
            variant="h6"
            component="div"
            sx={{ display: {sm: 'block' }, textAlign: 'center' }}
          >
            မြန်မာကျောင်းဖတ်စာအုပ်များ
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;