import React, { useState, useContext, createContext, ReactNode } from "react";

import { ProcessContextType } from "./ProcessesType";

const ProcessContext = createContext<ProcessContextType>(
  {} as ProcessContextType
);

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
  const [loading, setLoading] = useState<Boolean>(false);

  return {
    processes,
    process,
    setProcess,
  };
}
