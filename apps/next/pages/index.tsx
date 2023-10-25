import { HomeLayout } from 'app/features/home/layout.web'
import Head from 'next/head'
import { userProtectedGetSSP } from 'utils/userProtected'
import { NextPageWithLayout } from './_app'

import dynamic from 'next/dynamic'
 
const HomeScreenNOSSR = dynamic(() => import('app/features/home/screen'), { ssr: false })

export const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>2048tris</title>
      </Head>
      <HomeScreenNOSSR />
    </>
  )
}

Page.getLayout = (page) => <HomeLayout>{page}</HomeLayout>

export const getServerSideProps = userProtectedGetSSP()

export default Page
