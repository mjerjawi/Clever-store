import AppLayout from 'components/layout/AppLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HomeSection1 from 'components/sections/HomeSection1'
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
    <AppLayout>
      <HomeSection1></HomeSection1>
    </AppLayout>
  )
}

export default Layout
