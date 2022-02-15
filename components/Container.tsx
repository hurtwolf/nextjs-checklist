import Head from 'next/head'
import React from 'react'
import Header from './Header'

type Props = { children: JSX.Element }

function Container({ children }: Props) {
  return (
    <div id='root'>
      <Head>
        <title>Another CheckList App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Another CheckList App" key="title" />
      </Head>
      <Header />
      <main className='max-w-7xl mx-auto text-white'>
        {children}
      </main>
    </div>
  )
}

export default Container