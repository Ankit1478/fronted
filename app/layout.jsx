
import '@/styles/globals.css'
import '@/styles/custom.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      {/* <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_CONTAINER_ID} /> */}
      <body className={cn('antialiased overflow-hidden fixed')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange>
          <div className="flex flex-col w-dvw h-dvh relative">
            { /*<Header />*/ }
            <main className="flex flex-col w-full overflow-y-auto">
              <ScrollArea>
                {children}
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
