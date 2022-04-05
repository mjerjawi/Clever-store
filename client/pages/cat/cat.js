import Grid from '@mui/material/Grid'
import NavbarLayout from 'components/layout/NavbarLayout'
import ProductCard from 'components/products/ProductCard'
import { useRouter } from 'next/router'

//graphql
import { gql } from '@apollo/client'
import client from '../../apollo-client'

const cat = ({ products }) => {
  return (
    <NavbarLayout>
      <Grid container>
        <Grid item md={3}>
          filter
        </Grid>
        <Grid container item md={9} xs={12} spacing={1}>
          {products.products2.map((product) => {
            return (
              <Grid item md={4} xs={6} key={product.id}>
                <ProductCard
                  name={product.name_en}
                  image={product.images}
                  price={product.price}
                ></ProductCard>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </NavbarLayout>
  )
}

export default cat

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        products2 {
          id
          images(path: "[1]")
          name_en
          price
        }
      }
    `,
    context: {
      headers: { 'x-hasura-admin-secret': 'Cleveradminsecretkey' },
    },
  })

  return {
    props: {
      products: data,
    },
  }
}
