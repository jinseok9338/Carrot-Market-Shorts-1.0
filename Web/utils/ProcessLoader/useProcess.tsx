import React, { useState, useContext, createContext, ReactNode } from "react";

import { ProcessContextType } from "./ProcessesType";

const ProcessContext = createContext<ProcessContextType | null>(null);

interface ProvideProcessProps {
  children: ReactNode;
}

export function ProvideProcess({ children }: ProvideProcessProps) {
  const processContext = useProvideProcess();

  return (
    <ProcessContext.Provider value={processContext}>
      {children}
    </ProcessContext.Provider>
  );
}

export const useProcess = () => {
  return useContext(ProcessContext);
};

function useProvideProcess() {
  const processes = ["Home", "Discover", "Inbox", "Me"];
  const [process, setProcess] = useState<string>(processes[0]);

  return {
    processes,
    process,
    setProcess,
  };
}
