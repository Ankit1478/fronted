'use client'

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { useLocalStorage } from '@/lib/hooks/use-local-storage';
import { cn, arrayToString } from '@/lib/utils';
import { useAudio } from '@/lib/hooks/use-audio';

export function SidebarItem({ index, chat, children, selectChat }) {
  const  { chats } = {};

  const { playing } = useAudio();

  const [messages] = [[]];

  const isActive = messages[1]?.chat == chat.id;
  const [newChatId, setNewChatId] = useLocalStorage('newChatId', null);
  const shouldAnimate = index === 0 && isActive && newChatId;

  const [isLoading, setLoading] = useState(false);

  const handleSelect = () => {
    if (isActive) return;

    setLoading(true);

    selectChat(chat);
  };

  useEffect(() => { if (isLoading) setLoading(false) }, [isActive]);

  if (!chat?.id) return null;

  return (
    <motion.div
      className="relative h-8 flex flex-row items-center"
      variants={{
        initial: {
          height: 0,
          opacity: 0
        },
        animate: {
          height: 'auto',
          opacity: 1
        }
      }}
      initial={shouldAnimate ? 'initial' : undefined}
      animate={shouldAnimate ? 'animate' : undefined}
      transition={{
        duration: 0.25,
        ease: 'easeIn'
      }}
    >
      <div className="absolute left-2 top-1 flex size-6 items-center justify-center">
          <Volume2 className={cn("h-4 w-4", !Object.keys(chats?.[chat.id]?.stories || {}).some((story) => playing(story)) && "hidden")} />
      </div>
      <button
        onClick={handleSelect}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'group w-full px-8 transition-colors hover:bg-zinc-200/40 dark:hover:bg-zinc-300/10',
          isActive && 'bg-zinc-200 font-semibold dark:bg-zinc-800'
        )}
      >
        <div
          className="relative max-h-5 flex-1 select-none overflow-hidden text-ellipsis break-all text-left"
          title={chat.title}
        >
          <span className="whitespace-nowrap flex flex-row overflow-x-auto no-scrollbar">
            {shouldAnimate ? (
              chat.title.split('⁂').map((character, index) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: {
                      opacity: 0,
                      x: -100
                    },
                    animate: {
                      opacity: 1,
                      x: 0
                    }
                  }}
                  initial={shouldAnimate ? 'initial' : undefined}
                  animate={shouldAnimate ? 'animate' : undefined}
                  transition={{
                    duration: 0.25,
                    ease: 'easeIn',
                    delay: index * 0.05,
                    staggerChildren: 0.05
                  }}
                  onAnimationComplete={() => {
                    if (index === chat.title.length - 1) {
                      setNewChatId(null)
                    }
                  }}
                >
                  {character}
                </motion.span>
              ))
            ) : (
              <span>{`${arrayToString(chat.title.split('⁂'))}${chat.index ? ` (${chat.index})` : ''}`}</span>
            )}
            {isLoading && <>&nbsp;<Spinner /></>}
          </span>
        </div>
      </button>
      <div className="absolute right-2 top-1">{children}</div>
    </motion.div>
  )
}
