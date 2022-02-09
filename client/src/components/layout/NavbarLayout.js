import React from 'react'
import AppLayout from './AppLayout'
import Navbar from '../navbar/Navbar'
import { Container } from '@mui/material'

const NavbarLayout = ({ children }) => {
  return (
    <AppLayout navbar={<Navbar />}>
      <Container
        sx={{
          my: '2rem',
        }}
      >
        {children}
      </Container>
    </AppLayout>
  )
}

export default NavbarLayout
