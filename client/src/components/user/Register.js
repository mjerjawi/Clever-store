import CleverButton from 'components/CleverButton'

import CleverTextField from 'components/CleverTextField'
import FlexBox from 'components/FlexBox'
import { H3, H6, Small } from 'components/Typography'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Box, Card, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useState, useEffect } from 'react'

import * as yup from 'yup'

import {
  useAccessToken,
  useAuthenticated,
  useChangeEmail,
  useChangePassword,
  useSignInEmailPassword,
  useSignInEmailPasswordless,
  useSignOut,
  useSignUpEmailPassword,
} from '@nhost/nextjs'

const fbStyle = {
  background: '#3B5998',
  color: 'white',
}
const googleStyle = {
  background: '#4285F4',
  color: 'white',
}
const StyledCard = styled(({ children, passwordVisibility, ...rest }) => (
  <Card {...rest}>{children}</Card>
))(({ theme, passwordVisibility }) => ({
  width: 500,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  '.content': {
    padding: '3rem 3.75rem 0px',
    [theme.breakpoints.down('xs')]: {
      padding: '1.5rem 1rem 0px',
    },
  },
  '.passwordEye': {
    color: passwordVisibility
      ? theme.palette.grey[600]
      : theme.palette.grey[400],
  },
  '.facebookButton': {
    marginBottom: 10,
    '&:hover': fbStyle,
    ...fbStyle,
  },
  '.googleButton': {
    '&:hover': googleStyle,
    ...googleStyle,
  },
  '.agreement': {
    marginTop: 12,
    marginBottom: 24,
  },
}))

const Register = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  // Nhost

  const { signUpEmailPassword, ...signUpResult } = useSignUpEmailPassword()
  const router = useRouter()
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible)
  }, [])

  const handleFormSubmit = async (values) => {
    await signUpEmailPassword(values.email, values.password)
    console.log(signUpResult)
    if (signUpResult.isSuccess) {
      router.push('/')
    } else {
      console.log(signUpResult.isError)
    }
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleFormSubmit,
      initialValues,
      validationSchema: formSchema,
    })

  return (
    <StyledCard elevation={1} passwordVisibility={passwordVisibility}>
      <form className='content' onSubmit={handleSubmit}>
        <H3 textAlign='center' mb={1}>
          Create Your Account
        </H3>

        <CleverTextField
          mb={1.5}
          name='name'
          label='Full Name'
          placeholder='Ralph Adwards'
          variant='outlined'
          size='small'
          fullWidth
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name || ''}
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        <CleverTextField
          mb={1.5}
          name='email'
          label='Email or Phone Number'
          placeholder='exmple@mail.com'
          variant='outlined'
          size='small'
          type='email'
          fullWidth
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email || ''}
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

        <CleverTextField
          mb={1.5}
          name='password'
          label='Password'
          placeholder='*********'
          autoComplete='on'
          type={passwordVisibility ? 'text' : 'password'}
          variant='outlined'
          size='small'
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton
                size='small'
                type='button'
                onClick={togglePasswordVisibility}
              >
                {passwordVisibility ? (
                  <Visibility className='passwordEye' fontSize='small' />
                ) : (
                  <VisibilityOff className='passwordEye' fontSize='small' />
                )}
              </IconButton>
            ),
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password || ''}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
        />

        <CleverTextField
          name='re_password'
          label='Retype Password'
          placeholder='*********'
          autoComplete='on'
          type={passwordVisibility ? 'text' : 'password'}
          variant='outlined'
          size='small'
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton
                size='small'
                type='button'
                onClick={togglePasswordVisibility}
              >
                {passwordVisibility ? (
                  <Visibility className='passwordEye' fontSize='small' />
                ) : (
                  <VisibilityOff className='passwordEye' fontSize='small' />
                )}
              </IconButton>
            ),
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.re_password || ''}
          error={!!touched.re_password && !!errors.re_password}
          helperText={touched.re_password && errors.re_password}
        />

        <FlexBox flexWrap='wrap' alignItems='center' justifyContent='center'>
          <Small
            fontWeight='600'
            fontSize='11px'
            color='grey.800'
            textAlign='center'
            mb={4}
            mt={4}
            display='block'
          >
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </Small>
        </FlexBox>

        <CleverButton
          variant='contained'
          color='primary'
          type='submit'
          fullWidth
          sx={{
            height: 44,
          }}
        >
          Create Account
        </CleverButton>

        <FlexBox justifyContent='center' alignItems='center' my='1.25rem'>
          <Box>Already have account?</Box>
          <Link href='/login'>
            <a>
              <H6 ml={1} borderBottom='1px solid' borderColor='grey.900'>
                Log In
              </H6>
            </a>
          </Link>
        </FlexBox>
      </form>
    </StyledCard>
  )
}

const initialValues = {
  name: '',
  email: '',
  password: '',
  re_password: '',
  agreement: false,
}
const formSchema = yup.object().shape({
  name: yup.string().required('${path} is required'),
  email: yup.string().email('invalid email').required('${path} is required'),
  password: yup
    .string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    )
    .required('${path} is required'),
  re_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please re-type password'),
})
export default Register
