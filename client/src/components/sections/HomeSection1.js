import Carousel from 'components/carousel/Carousel'

import Navbar from 'components/navbar/Navbar'
import { Box, Container } from '@mui/material'
import { Fragment } from 'react'

const HomeSection1 = () => {
  return (
    <Fragment>
      <Navbar />
      <Box bgcolor='white' mb={8} pt={1}>
        <Container>
          <Carousel slidesPerView={1} spaceBetween={0} />
        </Container>
      </Box>
    </Fragment>
  )
}

export default HomeSection1
