import { Sidebar } from '@/components/sidebar'

//import { auth } from '@/auth'
import { ChatHistory } from '@/components/chat-history'

export async function SidebarDesktop() {
  /*  
  const session = await auth()

  if (!session?.user?.id) {
    return null
  }
  */

  return (
    <Sidebar className="peer inset-y-0 z-30 hidden w-0 -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 data-[state=open]:lg:flex data-[state=open]:lg:w-[250px] data-[state=open]:xl:w-[300px]">
      {/* @ts-ignore */}
      <ChatHistory userId={undefined/*session.user.id*/} />
    </Sidebar>
  )
}
