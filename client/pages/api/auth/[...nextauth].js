import NextAuth from 'next-auth'
import { HasuraAdapter } from '@skillrecordings/next-auth-hasura-adapter'

export default NextAuth({
  providers: [],
  adapter: HasuraAdapter({
    endpoint: process.env.HASURA_PROJECT_ENDPOINT,
    adminSecret: process.env.HASURA_ADMIN_SECRET,
  }),
})
