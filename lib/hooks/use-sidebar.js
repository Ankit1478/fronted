'use client';

import * as React from 'react';

const SidebarContext = React.createContext(
  undefined
);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarContext must be used within a SidebarProvider');
  }
  return context;
}

export function SidebarProvider({ children }) {
  const { isUpgraded = false } = {};

  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const [isUpgrading, setUpgrading] = React.useState(false);
  const [narrator, setNarrator] = React.useState('nova');

  React.useEffect(() => {
    setNarrator(isUpgraded || (['nova', 'shimmer'].includes(JSON.parse(localStorage.getItem('narrator')))) ? JSON.parse(localStorage.getItem('narrator')) || 'nova' : 'nova');
  }, [isUpgraded]);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(value => {
      const newState = !value;
      localStorage.setItem('sidebar', JSON.stringify(newState));
      return newState;
    });
  }

  if (isLoading) {
    return null;
  }

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen, setSidebarOpen, toggleSidebar,
        isLoading, setLoading,
        isUpgrading, setUpgrading,
        narrator, setNarrator: (narrator) => {
          setNarrator(narrator);
          localStorage.setItem('narrator', JSON.stringify(narrator));
        },
      }}>
      {children}
    </SidebarContext.Provider>
  )
}
