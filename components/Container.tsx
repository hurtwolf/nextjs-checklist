import React from 'react'
import Header from './Header'

type Props = { children: JSX.Element }

function Container({ children }: Props) {
  return (
    <div id='root'>
      <Header />
      <main className='max-w-7xl mx-auto text-white'>
        {children}
      </main>
    </div>
  )
}

export default Container