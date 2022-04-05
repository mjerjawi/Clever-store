import NavbarLayout from 'components/layout/NavbarLayout'
import FlexBox from 'components/FlexBox'
import SignIn from 'components/user/SignIn'

const login = () => {
  return (
    <NavbarLayout>
      <FlexBox display='flex' justifyContent='center' alignItems='center'>
        <SignIn />
      </FlexBox>
    </NavbarLayout>
  )
}

export default login
