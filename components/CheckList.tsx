import { observer } from 'mobx-react'
import { FaTrash } from 'react-icons/fa'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { useStore } from '../stores/Root'

type Props = { list: any }

function CheckList({ list }: Props) {
  const { handleChecked, deleteItem } = useStore().CheckListStore

  return (
    <div key={list.id} className='flex justify-between border border-slate-700'>
      <div className='flex justify-between bg-slate-800/50 text-white w-full p-4 px-6'>
        <p className='font-medium'>{list.title}</p>
        <p>{list.description}</p>
      </div>
      <div className='flex'>
        <div className='p-4 bg-slate-600'>
          {list.checked ? 
            <button onClick={() => handleChecked(list.id, list.checked)} className='block'>
              <ImCheckboxChecked className='w-6 h-6' />
            </button>
            : 
            <button onClick={() => handleChecked(list.id, list.checked)} className='block'>
              <ImCheckboxUnchecked className='w-6 h-6' />
            </button>
          }
        </div>
        <div className='p-4 bg-slate-500/75'>
          <button onClick={() => deleteItem(list.id)} className='block'>
            <FaTrash className='w-6 h-6' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default observer(CheckList)