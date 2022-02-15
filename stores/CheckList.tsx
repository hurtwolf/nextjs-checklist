import { action, makeObservable, observable } from 'mobx'
import { RootStore } from './Root'

interface checklistProps {
  id: string,
  title: string,
  description: string,
  checked: boolean,
  created_at: string
}

class CheckListStore {
  
  rootStore: RootStore
  checklist: checklistProps[] = []
  loading: boolean = false
  
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    makeObservable(this, {
      checklist: observable,
      loading: observable,
      newCheckList: action.bound,
      handleChecked: action.bound,
      deleteItem: action.bound,
      getList: action.bound,
    })
  }

  newCheckList = (data: checklistProps) => {
    this.loading = true
    if(!data.title) return
    if(!data.description) return
    this.checklist.push({
      id: data.id,
      title: data.title,
      description: data.description,
      checked: data.checked,
      created_at: data.created_at
    })
    localStorage.setItem('list', JSON.stringify(this.checklist))
    this.loading = false
  }

  handleChecked = (id: string, checked: boolean) => {
    const item = this.checklist.findIndex(p => p.id === id)
    this.checklist[item].checked = !checked
    localStorage.setItem('list', JSON.stringify(this.checklist))
  }

  deleteItem = (id: string) => {
    this.checklist = this.checklist.filter(item => item.id !== id)
    localStorage.setItem('list', JSON.stringify(this.checklist))
  }

  getList = () => {
    this.loading = true
    const json = localStorage.getItem("list");
    if(!json) return
    
    this.checklist = JSON.parse(json)
    this.loading = false

  }

}

export default CheckListStore