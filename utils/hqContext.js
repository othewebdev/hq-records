import React, { createContext, useState } from "react";

export const HqContext = createContext();
export function HqProvider(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HqContext.Provider value={[isOpen, setIsOpen]}>
      {props.children}
    </HqContext.Provider>
  );
}
