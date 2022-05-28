import FlexBox from 'components/FlexBox'
import { Fragment } from 'react'
import Grid from '@mui/material/Grid'
import CategoryCard from 'components/categories/CategoryCard'
import { homeCategories } from 'data/homeCarousel'
import { H1, H2, H3, H6 } from 'components/Typography'

const HomeSection3 = () => {
  return (
    <Fragment>
      <H3 fontWeight='bold' lineHeight='1'>
        PRODUCTS CATALOG
      </H3>
      <Grid container spacing={3}>
        {homeCategories.map((cat) => {
          return <CategoryCard category={cat} key={cat} />
        })}
      </Grid>
    </Fragment>
  )
}

export default HomeSection3
