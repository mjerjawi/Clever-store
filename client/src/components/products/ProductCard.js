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
  minHeight: '440px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    minHeight: '480px',
  },
  '.product-card-brand-wrap': {
    position: 'absolute',
    top: 0,
    right: 0,
    width: theme.imgSize(7),
    height: theme.imgSize(3),
    '.product-card-rel': {
      position: 'relative',
      width: '100%',
      height: theme.imgSize(3),
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
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
      height: theme.imgSize(30),
      width: '100%',
    },
  },
  '.product-card-name-container': {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    '.card-product-name': {
      fontSize: '0.9rem',
      fontWeight: '400',
      lineHeight: '1.5',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
    },
  },
  '.product-card-price-container': {
    flexGrow: 1,
    '.card-product-price': {
      fontWeight: 'bold',
      fontSize: '1.1rem',
    },
  },
}))

const ButtonBox = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
}))

const ProductCard = ({ brandImg, name, image, price }) => {
  return (
    <Card>
      <CardContent>
        <StyledBox>
          <Box className='product-card-brand-wrap'>
            <Box className='product-card-rel'>
              <Image
                src={'/assets/images/brands/acer.png'}
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
                src={image}
                alt={name}
                layout='fill'
                objectFit='contain'
                priority
              />
            </Box>
          </Box>
          <Box mb={3} className='product-card-name-container'>
            <Typography
              sx={{ mb: 1.5 }}
              variant='span'
              className='card-product-name'
            >
              {name}
            </Typography>
          </Box>
          <Box className='product-card-price-container'>
            <Typography variant='span' className='card-product-price'>
              ₪{price}
            </Typography>
          </Box>
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
    </Card>
  )
}

export default ProductCard
