import { createContext, FC, useContext } from "react";
import CheckListStore from "./CheckList";

class RootStore {
  CheckListStore: CheckListStore
  constructor() {
    this.CheckListStore = new CheckListStore(this)
  }
}

const RootContext = createContext<RootStore>(new RootStore())
const StoreProvider: FC<{ store: RootStore }> = ({ store, children }) => <RootContext.Provider value={store}>{children}</RootContext.Provider>
const useStore = () => useContext(RootContext)
export { RootStore, StoreProvider, useStore }