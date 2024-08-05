import { useEffect, useState, useRef } from 'react';
import { Pencil } from 'lucide-react';

import { CollapsibleMessage } from '@/components/collapsible-message';
import { Section } from '@/components/section';

import { cn } from '@/lib/utils';

export function ChatMessages({ audience }) {
  const [messages] = [[]];

  const [,, pending] = [];

  const [index, setIndex] = useState(1);
  const [chat, setChat] = useState();

  const errors = useState(null);

  const ref = useRef();

  const handleScrollToTop = () => {
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'instant', block: 'start' }), 10);
  };


  const handleScrollToBottom = () => {
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }), 10);
  };

  return (
    <div ref={ref} className={cn('max-w-4xl w-full mx-auto', messages.length > 0 ? 'p-3.5 md:p-10' : '')}>
      {messages.map(
        (message, i) => (
          <CollapsibleMessage
            key={message.id}
            message={message}
            open={message.id === messages[index]?.id}
            onOpenChange={(open) => setIndex(open ? i : null)}
            onScrollToTop={handleScrollToTop}
          />
        )
      )}
    
    </div>
  );
}
