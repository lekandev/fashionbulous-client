import Head from 'next/head'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import FeaturedProduct from '../components/FeaturedProducts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fashionbulous</title>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="description" content="Fashion Design Website and E-commerce store"/>
        <meta name="keywords" content="Fashionbulous, fashion, ecommerce, Fashion Website"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Banner />
      <FeaturedProduct />
    </>
  )
}
