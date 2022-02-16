import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = { children: JSX.Element }

function Container({ children }: Props) {
  return (
    <div id='root'>
      <Head>
        <title>Not Just Another CheckList App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Not Just Another CheckList App" key="title" />
      </Head>
      <Header />
      <main className='mx-4 lg:mx-auto max-w-7xl text-white'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Container
