import Grid from '@mui/material/Grid'
import FlexBox from 'components/FlexBox'
import { Box, styled } from '@mui/material'
import { H6 } from 'components/Typography'
import Image from 'next/image'

const StyledBox = styled(FlexBox)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '.imageContainer': {
    width: '100%',
    position: 'relative',
    height: 200,
  },

  '.CatImage': {},
}))

const CategoryCard = ({ category }) => {
  return (
    <Grid item lg={3} xs={6} md={4}>
      <StyledBox>
        <Box className='imageContainer'>
          <Image
            src={category.url}
            alt='apple-watch-1'
            layout='fill'
            objectFit='contain'
            className='catImage'
            priority
          />
        </Box>
        <H6>{category.title}</H6>
      </StyledBox>
    </Grid>
  )
}

export default CategoryCard
