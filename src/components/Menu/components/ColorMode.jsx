import { createContext, useState } from 'react';

export const ColorModeContext = createContext({ mode: '', setMode: () => {} });

export function ColorModeProvider({ children, initialMode }) {
  const [mode, setMode] = useState(initialMode);

  return (
    <ColorModeContext.Provider value={{ mode: mode, setMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
