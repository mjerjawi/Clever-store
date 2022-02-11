import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material'
import Image from 'next/image'

const StyledBox = styled(Box)(({ theme }) => ({
  color: theme.palette.grey[800],
  position: 'relative',
  '.product-card-brand-wrap': {
    position: 'absolute',
    top: 0,
    right: 0,
    width: theme.imgSize(6),
    height: theme.imgSize(2),
    '.product-card-rel': {
      position: 'relative',
      width: '100%',
      height: theme.imgSize(2),
      zIndex: 2,
    },
  },
  '.image-center': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  '.product-card-image-container': {
    width: '90%',
    position: 'relative',
    height: theme.imgSize(30),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      height: theme.imgSize(18),
      width: '100%',
    },
  },
  '.card-product-name': {
    fontSize: '0.9rem',
    fontWeight: '400',
    lineHeight: '1.5',
  },
  '.card-product-price': {
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
}))

const ButtonBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
}))

const card = (
  <>
    <CardContent>
      <StyledBox>
        <Box className='product-card-brand-wrap'>
          <Box className='product-card-rel'>
            <Image
              src='/assets/images/brands/acer.png'
              alt='apple-watch-1'
              layout='fill'
              objectFit='contain'
              priority
            />
          </Box>
        </Box>
        <Box className='image-center'>
          <Box className='product-card-image-container'>
            <Image
              src='/assets/images/products/laptops/1.jpg'
              alt='apple-watch-1'
              layout='fill'
              objectFit='contain'
              priority
            />
          </Box>
        </Box>
        <Box mb={3}>
          <Typography
            sx={{ mb: 1.5 }}
            variant='span'
            className='card-product-name'
          >
            Lenovo IdeaPad 5-15ITL 82FG009NIV - Graphite Gray
          </Typography>
        </Box>
        <Typography variant='span' className='card-product-price'>
          ₪
        </Typography>
        <Typography variant='span' className='card-product-price'>
          3500
        </Typography>
      </StyledBox>
    </CardContent>
    <ButtonBox>
      <Button
        variant='contained'
        color='primary'
        endIcon={<ShoppingBagOutlinedIcon />}
      >
        Add to Cart
      </Button>
    </ButtonBox>
  </>
)

export default function ProductCard() {
  return (
    <Box>
      <Card variant='outlined'>{card}</Card>
    </Box>
  )
}
