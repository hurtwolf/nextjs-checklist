import { observer } from 'mobx-react';
import React, { useState } from 'react'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { GoChecklist } from 'react-icons/go'
import NewItemModal from './Modal';

type Props = {}

function Header({}: Props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <header className='bg-slate-800 mb-10'>
      <div className='max-w-7xl py-4 mx-auto text-white'>
        <div className="flex flex-row items-center justify-between">
          <div className="text-xl hidden md:flex">
            <GoChecklist className='h-[2rem] w-[2rem] mr-2 font-light' />
            CHECK<span className='font-bold'>LIST</span>
          </div>
          <div className="flex overflow-hidden">
            <button 
            onClick={openModal}
            className="block text-white bg-slate-600 hover:bg-slate-500/75 px-4 py-2 font-sans tracking-wide uppercase font-medium">
              new item
            </button>
          </div>
        </div>
      </div>
      <NewItemModal isOpen={modalIsOpen} closeModal={closeModal} />
    </header>
  )
}

export default observer(Header)