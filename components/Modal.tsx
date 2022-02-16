import React, { Dispatch, useState } from 'react'
import Modal from 'react-modal';
import { useStore } from '../stores/Root';
import { nanoid } from 'nanoid'

type Props = { isOpen: boolean, closeModal: () => void }
interface IFormData {
  title: string,
  description: string
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#334155',
    color: 'white',
    border: '1px solid #64748b',
    width: '400px',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function NewItemModal({ isOpen, closeModal }: Props) {
  const { checklist, newCheckList } = useStore().CheckListStore
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormData>({ title: '', description: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    newCheckList({ 
      id: nanoid(10),
      title: formData.title,
      description: formData.description,
      checked: isChecked,
      created_at: new Date().toLocaleDateString()
    })
  }

  const handleCheckBox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="CheckList Modal"
      overlayClassName="modal-overlay"
    >
      <h2 className='mb-4 text-center font-medium font-poppins'>Create a new Item</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={(e) => handleChange(e)} id='title' name='title' placeholder='Task' className='w-full block bg-slate-600 p-2 text-white mb-3' type="text" required/>
        <input onChange={(e) => handleChange(e)} id='description' name='description' placeholder='Description' className='w-full block bg-slate-600 p-2 text-white mb-6' type="text" />
        <div className='flex justify-center items-center mb-6'>
          <input 
          type="checkbox" 
          name="checked" 
          checked={isChecked} 
          onChange={handleCheckBox}
          className='h-6 w-6'
          />
          <p className='ml-2 text-sm font-medium font-poppins uppercase'>Mark as Completed</p>
        </div>
        <div className='flex space-x-4'>
          <button className='block w-full text-center p-2 bg-slate-600 hover:bg-slate-500/75 text-white font-medium' type='submit'>Add Item</button>
          <button onClick={closeModal} className='block w-full text-center p-2 bg-slate-600 hover:bg-slate-500/75 text-white font-medium' type='button'>Close</button>
        </div>
      </form>
    </Modal>
  )
}

export default NewItemModal
