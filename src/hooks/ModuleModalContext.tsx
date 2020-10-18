import React,{ createContext, useContext, useState } from "react";

export interface ModuleModalContextData{
  isActive: boolean;
  setIsActive(flag: any): void;
}

const ModuleModalContext = createContext<ModuleModalContextData>({} as ModuleModalContextData)

const ModuleModalProvider: React.FC = ({children}) => {
  const [isActive, setIsActive] = useState(false);

  return <ModuleModalContext.Provider value={{isActive,setIsActive}}>
    {children}
  </ModuleModalContext.Provider>
}

function useModule(){
  const context = useContext(ModuleModalContext);

  if (!context) {
    throw new Error('useModule must be used into a ModuleModalProvider!');
  }

  return context;
}

export { ModuleModalProvider, useModule};