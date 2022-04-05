import NavbarLayout from 'components/layout/NavbarLayout'
import FlexBox from 'components/FlexBox'
import Register from 'components/user/Register'

const SignUp = () => {
  return (
    <NavbarLayout>
      <FlexBox display='flex' justifyContent='center' alignItems='center'>
        <Register />
      </FlexBox>
    </NavbarLayout>
  )
}

export default SignUp
