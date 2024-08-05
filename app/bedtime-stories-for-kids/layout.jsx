import { SidebarDesktop } from '@/components/sidebar-desktop'

export default function Layout({ 
    children 
}){
    return (
        <div className="relative flex h-[calc(100dvh_-_theme(spacing.16))]">
            <div className='relative flex w-full'>
                <SidebarDesktop />
                {children}
            </div>
        </div>
    )
}