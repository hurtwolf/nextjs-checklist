import React from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='max-w-7xl mx-auto text-white'>
      <div className='border-t border-slate-500'>
        <div className='flex justify-items-end mt-4 space-x-4'>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/hurtwxlf">
            <BsTwitter className='w-7 h-7' />
          </a> 
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/hurtwolf/nextjs-checklist-app">
            <BsGithub className='w-7 h-7' />
          </a> 
        </div>
      </div>
    </div>
  )
}

export default Footer