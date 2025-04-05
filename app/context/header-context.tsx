"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";

type HeaderContextType = {
  title?: string;
  description?: string;
  setHeader?: (title?: string, description?: string) => void;
};

const HeaderContext = createContext<HeaderContextType>({
  title: undefined,
  description: undefined,
  setHeader: () => {},
});

export const useHeader = () => useContext(HeaderContext);

export function HeaderProvider({
  children,
  initialTitle,
  initialDescription,
}: {
  children: ReactNode;
  initialTitle?: string;
  initialDescription?: string;
}) {
  const [title, setTitle] = useState<string | undefined>(initialTitle);
  const [description, setDescription] = useState<string | undefined>(initialDescription);

  const setHeader = (newTitle?: string, newDescription?: string) => {
    setTitle(newTitle);
    setDescription(newDescription);
  };

  return (
    <HeaderContext.Provider value={{ title, description, setHeader }}>
      {children}
    </HeaderContext.Provider>
  );
}