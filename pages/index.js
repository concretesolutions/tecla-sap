import Head from 'next/head'
import PostContainer from '../components/PostContainer'
import MainFooter from '../components/MainFooter'
import LandingLayout from '../components/LandingLayout'
import MainHeader from '../components/MainHeader'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tecla SAP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingLayout>
        <MainHeader />
        <PostContainer />
        <MainFooter />
      </LandingLayout>
    </>
  )
}
