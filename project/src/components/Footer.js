import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'purple',
          color: 'white',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          padding: '1px 10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& svg': { cursor: 'pointer', margin: '0 10px', fontSize: '24px' },
            '& svg:hover': { color: 'yellow', transform: 'rotate(360deg)', transition: 'all 400ms' }
          }}
        >
          <InstagramIcon />
          <GitHubIcon />
          <FacebookIcon />
        </Box>
        <Typography variant='h6' sx={{ '@media(min-width:600px)': { fontSize: '1rem' } }}>
          All rights Reserved &copy; Course Online
        </Typography>
      </Box>
    </>
  )
}

export default Footer
