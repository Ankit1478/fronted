'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { Megaphone } from 'lucide-react'

import { cn } from '@/lib/utils'
import { SidebarList } from '@/components/sidebar-list'
import { Button, buttonVariants } from '@/components/ui/button'
import { IconPlus } from '@/components/ui/icons'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';

import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard';

export function ChatHistory({ userId }) {
  const { data: user } = { data: {} };

  const { referrals = {}, isNewUser = false, trialAvailable = false, customerId } = {};

  const { copyToClipboard } = useCopyToClipboard();

  const [, setMessages] = [];

  const referralsRef = useRef();

  // Clear messages
  const handleClear = () => {
    setMessages([])
    // setAiMessages([])  
  }

  const [isRedirecting, setRedirecting] = useState(false);

  const handleUpgrade = async () => {

  };



  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4">
        <h4 className="text-sm font-medium">Chat History</h4>
      </div>
      <div className="mb-2 px-2">
        <Button
          variant="outline"
          className={cn(
            'h-10 w-full justify-start bg-zinc-50 px-4 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10'
          )}
          onClick={() => handleClear()}
        >
          <IconPlus className="-translate-x-2 stroke-2" />
          New Story
        </Button>
      </div>
      {!!user && trialAvailable && <Dialog>
        <DialogTrigger asChild>
          <div className="mb-2 px-2">
            <Button
              ref={referralsRef}
              variant="outline"
              className={cn(
                'h-10 w-full justify-between bg-zinc-50 px-4 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10'
              )}
            >
              <div className="flex flex-row items-center">
                <Megaphone className="-translate-x-2 stroke-1 w-5 h-5" />
                {Object.keys(referrals).length >= 6 ? 'Activate 1 month free' : 'Refer friends'}
              </div>
              <p>{`${Math.max(Math.min(Object.keys(referrals).length, 6), 0)}/6`}</p>
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-lg p-12 max-h-dvh overflow-y-auto">
          {Object.keys(referrals).length >= 6 ?
            <div className="flex flex-col items-center space-y-4">
              <img className="w-60 object-cover" src="images/Referral-activation.png" alt="Sleepytales referral activation" />
              <p className="text-lg font-medium text-center">You&apos;ve earned 1 month of pro for free!</p>
              <p className="text-muted-foreground">We won&apos;t charge you for your 30 day trial.</p>
              <Button className="w-auto px-10" onClick={handleUpgrade}>Activate{isRedirecting && <>&nbsp;<Spinner /></>}</Button>
            </div> :
            <div className="flex flex-col items-center space-y-4">
              <img className="w-60 h-32 object-cover" src="images/Referral-start.png" alt="Sleepytales referral" />
              <p className="text-lg font-medium text-center px-6 py-2">Invite 6 friends to sign up and get 1 month of Pro for free!</p>
              <div className="flex flex-row space-x-2 w-full">
                <Input readOnly value={`${window.location.origin}/?referral=${user.uid}`} />
                <Button onClick={() => copyToClipboard(`${window.location.origin}/?referral=${user.uid}`)}>Copy Link</Button>
              </div>
            </div>}
        </DialogContent>
      </Dialog>}
      <Suspense
        fallback={
          <div className="flex flex-col flex-1 px-4 space-y-4 overflow-auto">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-6 rounded-md shrink-0 animate-pulse bg-zinc-200 dark:bg-zinc-800"
              />
            ))}
          </div>
        }
      >
        {/* @ts-ignore */}
        <SidebarList userId={userId} />
      </Suspense>
    </div>
  )
}
