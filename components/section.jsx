'use client'

import { cn } from '@/lib/utils'
import {
  BookCheck,
  Image,
  MessageCircleMore,
  Newspaper,
  Repeat2,
  Search,
  Pencil
} from 'lucide-react'
import React from 'react'
import { Separator } from './ui/separator'

export const Section = ({
  children,
  className,
  size = 'md',
  title,
  separator = false,
  icon: Icon,

}) => {
  let icon
  switch (title) {
    case 'Images':
      // eslint-disable-next-line jsx-a11y/alt-text
      icon = <Image size={18} className="mr-2" />
      break
    case 'Sources':
      icon = <Newspaper size={18} className="mr-2" />
      break
    case 'Answer':
      icon = <BookCheck size={18} className="mr-2" />
      break
    case 'Related':
      icon = <Repeat2 size={18} className="mr-2" />
      break
    case 'Story':
      icon = <Pencil size={18} className="mr-2" />
      break
    default:
      icon = Icon ? <Icon size={18} className="mr-2" /> : <Search size={18} className="mr-2" />
  }

  return (
    <>
      {separator && <Separator className="my-2 bg-primary/10" />}
      <section
        className={cn(
          ` ${size === 'sm' ? 'py-1' : size === 'lg' ? 'py-4' : 'py-2'}`,
          className
        )}
      >
        {title && (
          <h2 className="flex items-center text-lg leading-none py-2">
            {icon}
            {title}
          </h2>
        )}
        {children}
      </section>
    </>
  )
}
