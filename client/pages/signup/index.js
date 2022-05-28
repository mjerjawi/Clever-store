import NavbarLayout from 'components/layout/NavbarLayout'
import FlexBox from 'components/FlexBox'
import Register from 'components/user/Register'
import { useRouter } from 'next/router'
import { useAuthenticationStatus } from '@nhost/nextjs'

const SignUp = () => {
  const router = useRouter()
  const { isLoading, isAuthenticated } = useAuthenticationStatus()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isAuthenticated) {
    router.push('/')
    return null
  }

  return (
    <NavbarLayout>
      <FlexBox display='flex' justifyContent='center' alignItems='center'>
        <Register />
      </FlexBox>
    </NavbarLayout>
  )
}

export default SignUp
