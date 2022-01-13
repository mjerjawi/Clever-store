import AppLayout from 'components/layout/AppLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const Layout = (props) => {
  const { t } = useTranslation()
  return (
    <div>
      <AppLayout></AppLayout>
      <h1>{t('greeting')}</h1>
    </div>
  )
}

export default Layout
