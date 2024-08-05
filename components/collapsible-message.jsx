'use client';

import React, { useEffect, useState, useRef } from 'react'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@/components/ui/collapsible'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Separator } from './ui/separator'

export const CollapsibleMessage = ({
  message,
  open = false,
  onOpenChange = () => { },
  onScrollToTop = () => { },
}) => {
  const [data] = [];
  const isCollapsed = data ?? false
  const [streamText] = [];
  const [, , pending] = [];
  const ref = useRef();

  useEffect(() => {
    if (!!streamText) {
      ref.current?.scrollIntoView({ behavior: 'auto', block: 'end' });
    }
  }, [streamText]);

  const [isWaiting, setWaiting] = useState(false);

  useEffect(() => {
    if (pending && !isWaiting) {
      setWaiting(true);
    }
    else if (!pending && isWaiting) {
      setWaiting(false);
      setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }), 400);
    }
  }, [pending, isWaiting]);

  useEffect(() => {
    if (open) {
      onScrollToTop();

      setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }), 400);
    }
  }, [open]);

  // if not collapsed, return the component
  if (!isCollapsed) {
    return message.component
  }

  return (
    <Collapsible
      open={open}
      onOpenChange={onOpenChange}
    >
      <CollapsibleTrigger asChild>
        <div
          className={cn(
            'w-full flex justify-end',
            !isCollapsed ? 'hidden' : ''
          )}
        >
          <Button
            variant="ghost"
            size={'icon'}
            className={cn('-mt-3 rounded-full')}
          >
            <ChevronDown
              className={cn(
                open ? 'rotate-180' : 'rotate-0',
                'h-4 w-4 transition-all'
              )}
            />
            <span className="sr-only">collapse</span>
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent ref={ref}>{message.component}</CollapsibleContent>
      {open && <div className="h-6"></div>}
      <Separator className="my-2 bg-muted" />
    </Collapsible>
  )
}
