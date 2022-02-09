import NavbarLayout from 'components/layout/NavbarLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HomeSection1 from 'components/sections/HomeSection1'
import HomeSection2 from 'components/sections/HomeSection2'
import HomeSection3 from 'components/sections/HomeSection3'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header'])),
    },
  }
}

const Layout = (props) => {
  const { t } = useTranslation()
  return (
    <>
      <NavbarLayout>
        <HomeSection1></HomeSection1>
        <HomeSection2></HomeSection2>
        <HomeSection3></HomeSection3>
      </NavbarLayout>
    </>
  )
}

export default Layout
