'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

const HeaderContext = React.createContext(
  undefined
);

export function useHeader() {
  const context = React.useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeaderContext must be used within a HeaderProvider');
  }
  return context;
}

export function HeaderProvider({ children }) {
  const { data: signInCheckResult } = { data: {} };

  const pathname = usePathname();

  const [isLandingHeader, setLandingHeader] = React.useState(true);

  const [showHeader, setShowHeader] = React.useState(['pricing', 'blog'].some((s) => pathname.includes(s)) || !signInCheckResult.signedIn);

  return (
    <HeaderContext.Provider
      value={{ isLandingHeader, setLandingHeader, showHeader, setShowHeader }}
    >
      {children}
    </HeaderContext.Provider>
  );
}