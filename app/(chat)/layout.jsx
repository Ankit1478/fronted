import { SidebarDesktop } from '@/components/sidebar-desktop'
import localFont from "next/font/local"
import { cn } from '@/lib/utils';

// Font files can be colocated inside of `pages`
const fontFavorit = localFont({
    src: "../../assets/fonts/Favorit_Regular.woff2",
    variable: "--font-favorit",
  })

export default function Layout({
    children
}) {
    return (
        <div className={cn("relative flex w-dvw font-favorit", fontFavorit.variable)}>
            <div className='relative flex w-full'>
                <SidebarDesktop />
                {children}
            </div>
        </div>
    )
}