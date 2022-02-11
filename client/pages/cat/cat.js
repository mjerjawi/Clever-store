import Grid from '@mui/material/Grid'
import NavbarLayout from 'components/layout/NavbarLayout'
import ProductCard from 'components/products/ProductCard'

const cat = () => {
  return (
    <NavbarLayout>
      <Grid container>
        <Grid item md={3}>
          filter
        </Grid>
        <Grid container item md={9} xs={12} spacing={1}>
          <Grid item md={4} xs={6}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item md={4} xs={6}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item md={4} xs={6}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item md={4} xs={6}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item md={4} xs={6}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item md={4} xs={6}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item md={4} xs={6}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item md={4} xs={6}>
            <ProductCard></ProductCard>
          </Grid>
        </Grid>
      </Grid>
    </NavbarLayout>
  )
}

export default cat
