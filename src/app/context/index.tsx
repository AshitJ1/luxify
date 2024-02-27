'use client'
import React, { createContext, ReactNode } from "react";

interface GlobalStateProps {
  children: ReactNode;
}

export const GlobalContext = createContext(null);

export default function GlobalState({ children }: GlobalStateProps) {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
}
