'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { SidebarProvider } from '@/lib/hooks/use-sidebar'
import { HeaderProvider } from '@/lib/hooks/use-header'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AudioProvider } from '@/lib/hooks/use-audio'

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <SidebarProvider>
        <HeaderProvider>
          <AudioProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </AudioProvider>
        </HeaderProvider>
      </SidebarProvider>
    </NextThemesProvider>
  )
}
