'use client'

import { useRef, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconNextChat,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import { SidebarMobile } from '@/components/sidebar-mobile'
import { SidebarToggle } from '@/components/sidebar-toggle'
import { ChatHistory } from '@/components/chat-history'
import { LoginDlg } from '@/components/login'
import { LogoutDlg } from '@/components/logout'
import { useHeader } from '@/lib/hooks/use-header'

export function Header() {
  const auth = {};

  const { data: signInCheckResult } = { data: {} };

  const { isLandingHeader, showHeader } = useHeader();

  const loginRef = useRef();

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // if (!showHeader) return null;

  function UserOrLogin() {
    return (
      <>
        {isLandingHeader ? (
          <a href="/" rel="nofollow">
            <img
              src="/images/logo-white.png"
              width={145} height={31}
              alt="Picture of the author"
            />
          </a>
        ) : (
          <>
            <SidebarMobile>
              <ChatHistory userId={undefined} />
            </SidebarMobile>
            <SidebarToggle />
            <div className="flex items-center">
              <IconSeparator className="size-6 text-muted-foreground/50" />
              <LogoutDlg className="px-2" />
            </div>
          </>
        )}
      </>
    )
  }

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 flex items-center justify-between w-full h-16 px-5 lg:px-10",
        showHeader ? "" : "hidden",
        isScrolled ? "bg-opacity-70 shadow-md" : "bg-transparent"
      )}>
        <div className="flex items-center">
          <UserOrLogin />
        </div>
        <div className="flex items-center space-x-2">
          {isLandingHeader ? (
            <>
              <a href="/blog">
                <Button variant="ghost" className="hidden sm:block text-white">
                  Blog
                </Button>
              </a>
              <a href="/pricing">
                <Button variant="ghost" className="hidden sm:block text-white" onClick={() => true}>
                  Pricing
                </Button>
              </a>
              {signInCheckResult.signedIn ?
                <Button variant="secondary" className="hidden sm:block" onClick={() => auth.signOut()}>Logout</Button> :
                <Button variant="secondary" className="hidden sm:block" onClick={() => loginRef.current?.click()}>Login</Button>}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="block sm:hidden">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-row items-center min-w-0">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      {signInCheckResult.signedIn ?
                        <Button variant="secondary" onClick={() => auth.signOut()}>Logout</Button> :
                        <Button variant="secondary" className="w-full" onClick={() => loginRef.current?.click()}>Login</Button>}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="/blog">
                        <Button variant="ghost" className="w-full">
                          Blog
                        </Button>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="/pricing">
                        <Button variant="ghost" className="w-full">
                          Pricing
                        </Button>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              {!signInCheckResult.signedIn &&
                <LoginDlg onLoginSuccess={() => window.location.reload()}>
                  <button ref={loginRef} className="hidden">Login</button>
                </LoginDlg>}
            </>
          ) : null
            // (<>
            //   <ChartShareHeader />
            // </>)
          }
        </div>
      </header>
    </>
  )
}
