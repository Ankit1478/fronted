import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

import { Button } from "@/components/ui/button"
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
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils'
import { Spinner } from '@/components/ui/spinner';

export function LogoutDlg({
  className,
  ...props
}) {
  const auth = { signOut: () => {} };

  const { data: user } = { data: {} };

  const pathname = usePathname();

  const { customerId } = {};

  const [isRedirecting, setRedirecting] = useState(false);

  const handlePlanClick = async () => {
 
  };

  return (
    <DropdownMenu open={isRedirecting || undefined}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost"
          className={cn(className, "space-x-1")} {...props}
        >
          <p>{user?.email}</p>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <p className="text-muted-foreground">{user?.email}</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {!!customerId && <DropdownMenuItem onSelect={handlePlanClick}>
            <p className="font-medium">Plan</p>
            {isRedirecting && <>&nbsp;<Spinner /></>}
          </DropdownMenuItem>}
          <DropdownMenuItem onSelect={() => auth.signOut()}>
            <p className="font-medium">Sign out</p>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
