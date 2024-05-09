import React from 'react'
import Layout from '../components/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:10, ml: 10, '& h3':{fontWeight:'bold', mb:2}}}>
          <Typography variant='h3'>Contact Us</Typography>
          <p>Any queries? Contact us here.</p>
        </Box>

        <Box sx={{m:3, width:'600px', ml:10, '@media(max-width:600px)':{width: '200px',}}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact-table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{color:'yellow', bgcolor:'purple'}} align='center'>
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon style={{color: 'purple'}}/> 1234567890
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <MailIcon style={{color: 'purple'}}/> test@gmail.com
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <AddIcCallIcon style={{color: 'purple'}}/> +92 333 567845
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact