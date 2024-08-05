'use client'

import { AnimatePresence, motion } from 'framer-motion';

import { SidebarActions } from '@/components/sidebar-actions';
import { SidebarItem } from '@/components/sidebar-item';

export function SidebarItems({ chats }) {  
  const selectChat = async ({ id }) => {

  };

  const removeChat = async ({ id }) => {
   
  };


  if (!chats?.length) return null

  return (
    <AnimatePresence>
      {chats.toReversed().map(
        (chat, index) =>
          chat && (
            <motion.div
              key={chat?.id}
              exit={{
                opacity: 0,
                height: 0
              }}
            >
              <SidebarItem index={index} chat={chat} selectChat={selectChat}>
                <SidebarActions
                  chat={chat}
                  removeChat={removeChat}
                  shareChat={() => { }}
                />
              </SidebarItem>
            </motion.div>
          )
      )}
    </AnimatePresence>
  )
}
