import React, {  createContext, useState } from 'react';
import { useContext } from 'react';

export interface IAsideMenuContextData {
  isActive: boolean;
  listItems: JSX.Element;
  title: string;
  setTitle(title: string): void;
  setListItems(item: JSX.Element): void;
  setIsActive(flag: boolean): void;
}

const AsideMenuContext = createContext<IAsideMenuContextData>({} as IAsideMenuContextData);

const AsideMenuProvider: React.FC = ({children}) => {
  const [isActive, setIsActive] = useState(false);
  const [listItems, setListItems] = useState(<></>);
  const [title, setTitle] = useState('');

  return <AsideMenuContext.Provider value={{isActive, listItems, title, setTitle, setIsActive, setListItems}}>
    {children}
  </AsideMenuContext.Provider>
}

function useAside() {
  const context = useContext(AsideMenuContext);

  if (!context) {
    throw new Error('UseAside must be used into a AsideContext');
  }

  return context;
}

export { AsideMenuProvider, useAside };