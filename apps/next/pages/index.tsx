import { HomeLayout } from 'app/features/home/layout.web'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

import dynamic from 'next/dynamic'
import { guestOnlyGetSSP } from 'utils/guestOnly'
 
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

export const getServerSideProps = guestOnlyGetSSP()

export default Page
