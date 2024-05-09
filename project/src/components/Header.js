import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SummarizeIcon from '@mui/icons-material/Summarize';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/headerstyle.css'

const Header = () => {

    const [mobopen, setmobopen] = useState(false)

    // menu click 
    const handledrawer = () => {
        setmobopen(!mobopen)
    }

    // menu drawer 
    const drawer=(
        <Box onClick={handledrawer} sx={{textAlign:'left'}}>
             <Typography variant='h6' component='div' className='brand' sx={{flexGrow: 1, my:2}}>
                <CodeIcon style={{ color: 'aqua' }} />
                Course Online
            </Typography>
            <Divider></Divider>
                    
                        <ul className='mob-navigation-menu'>
                            <li>
                                <HomeIcon style={{ color: 'purple' }}/>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <InfoIcon style={{ color: 'purple' }}/>
                                <Link to={'/about'}>About</Link>
                            </li>
                            <li>
                                <SummarizeIcon style={{ color: 'purple' }}/>
                                <Link to={'/courses'}>Courses</Link>
                            </li>
                            <li>
                                <AlternateEmailIcon style={{ color: 'purple' }}/>
                                <Link to={'/contact'}>Contact Us</Link>
                            </li>
                            <li>
                                <HowToRegIcon style={{ color: 'purple' }}/>
                                <Link to={'/register'}>Register</Link>
                            </li>
                            
                        </ul>
        </Box>
            
        
    )
  return (
    <>
        <Box>
            <AppBar component={'nav'} sx={{bgcolor:'purple'}}>
                <Toolbar>
                    <IconButton style={{ color: 'white' }} aria-label='open drawer' edge='start' sx={{mr:2, display:{sm:'none'}}} onClick={handledrawer}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant='h5' component='div' className='brand'>
                        <CodeIcon style={{ color: 'aqua' }} />
                        Course Online
                    </Typography>

                    <Box marginLeft='auto' sx={{display:{xs:'none', sm:'block'}}}>
                        <ul className='navigation-menu'>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>About</Link>
                            </li>
                            <li>
                                <Link to={'/courses'}>Courses</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>Contact Us</Link>
                            </li>
                            <li>
                                <Link to={'/register'}>Register</Link>
                            </li>
                           
                        </ul>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box component='nav'>
                <Drawer variant='temporary' 
                open={mobopen} 
                onClose={handledrawer} 
                sx={{display:{xs:'block', sm:'none'}, 
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width:'240px'
                    }}}>
                    {drawer}
                </Drawer>
            </Box>

                <Box>
                   <Toolbar />
                </Box>

        </Box>
        
    </>
  )
}

export default Header