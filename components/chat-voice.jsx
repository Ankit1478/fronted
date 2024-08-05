import {
  Play,
  Pause,
} from 'lucide-react';
import { ReloadIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IconVoice } from '@/components/ui/icons';
import { cn, formatTime } from '@/lib/utils';
import { useSidebar } from '@/lib/hooks/use-sidebar';
import { useAudio } from '@/lib/hooks/use-audio';

const narrators = [
  'alloy', 'echo', 'fable', 'onyx', 'shimmer', 'nova'
];

export function ChatVoice({
  className,
  ...props
}) {
  const { isUpgraded = false } = {};

  const { setUpgrading, narrator, setNarrator } = useSidebar();

  const { playSample, playCalled, playing, currentTime, duration } = useAudio();

  const handleSelect = (narrator) => {
    if (!isUpgraded && !['nova', 'shimmer'].includes(narrator)) return setUpgrading(true);

    setNarrator(narrator);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'
          size='icon'
          className={cn(className)} {...props}
        >
          <IconVoice />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Choose your narrator
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {narrators.map((v) => (
            <DropdownMenuItem key={v} onSelect={() => { handleSelect(v) }}
              className={cn(
                v == narrator ? "bg-zinc-200 font-semibold dark:bg-zinc-800" : "",
              )}>
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <p>{v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()}</p>
                  {!isUpgraded && !['nova', 'shimmer'].includes(v) && <Badge>Upgrade</Badge>}
                </div>
                {(isUpgraded || ['nova', 'shimmer'].includes(v)) &&
                  <div className="absolute flex flex-row space-x-2 right-[10px] top-[7px] font-normal">
                    {(playCalled(v) || !!duration(v)) && <p>{formatTime(currentTime(v))} / {formatTime(duration(v))}</p>}
                    <button disabled={playCalled(v)}
                      className={cn(playCalled(v) ? "cursor-default" : "")}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(v);
                        playSample(v);
                      }}>
                      {playCalled(v) ? (
                        <ReloadIcon className="h-4 w-4 animate-spin" />
                      ) : playing(v) ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </button>
                  </div>}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
