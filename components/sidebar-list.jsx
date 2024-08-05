'use client'

import * as React from 'react';
import { Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SidebarItems } from '@/components/sidebar-items';
import { ThemeToggle } from '@/components/theme-toggle';
import { ChatVoice } from '@/components/chat-voice';
import { useSidebar } from '@/lib/hooks/use-sidebar';

export function SidebarList({ userId }) {
  const { isUpgraded = true, storyLimit = 0 } = {};

  const [aiMessages] = [];

  const chats = [];

  const { setUpgrading } = useSidebar();

  const handleSupportClick = () => window.location.href = 'mailto: dennis@sleepytales.ai';

  const handleUpgradeClick = () => setUpgrading(true);

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-auto">
        {aiMessages?.length ? (
          <div className="space-y-2 px-2">
            <SidebarItems chats={chats} />
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-sm text-muted-foreground">No chat history</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <ThemeToggle />
          <ChatVoice />
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSupportClick}
          >
            <Mail className="w-4 h-4 stroke-1" />
            <span className="sr-only">Support</span>
          </Button>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xs font-medium">{`${Math.max(Math.min(storyLimit, isUpgraded ? 42 : 7), 0)}/${isUpgraded ? 42 : 7} stories`}</p>
          {!isUpgraded && <Button onClick={handleUpgradeClick}>Upgrade</Button>}
        </div>
      </div>
    </div>
  )
}
