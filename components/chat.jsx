'use client'

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth, useSigninCheck, useUser } from 'reactfire';
import { useUIState, useAIState } from 'ai/rsc';

import { ChatPanel } from '@/components/chat-panel'
import { ChatMessages } from '@/components/chat-messages';

import { useHeader } from '@/lib/hooks/use-header';
import { useSidebar } from '@/lib/hooks/use-sidebar';
import { getUser } from '@/lib/features/user/user';
import { useAppSelector } from '@/lib/hooks/redux';
import { cn, decrypt } from '@/lib/utils';
import { ChatUpgrade } from '@/components/chat-upgrade';
import Footer from '@/components/footer';

export function Chat(props) {

  function updateCSSVariables() {
    var windowWidth = window.innerWidth; // width without scrollbar
    var windowHeight = window.innerHeight; // height minus current navbar on touch
    var documentHeight = document.documentElement.scrollHeight; // entire document height
    var windowInnerHeight = window.innerHeight; // height minus current navbar on touch
    //const fullTouch = document.querySelector('.full-touch').offsetHeight; // height including navbar on touch
    var navbarHeight = 0//fullTouch - windowHeight;
    var navbarPresent = windowInnerHeight === windowHeight ? 1 : 0;
    var navbarCurrentHeight = navbarPresent * navbarHeight;

    var rootStyle = document.documentElement.style;
    rootStyle.setProperty('--window-width', windowWidth + 'px');
    rootStyle.setProperty('--window-height', windowHeight + 'px');
    rootStyle.setProperty('--document-height', documentHeight + 'px');
    rootStyle.setProperty('--inner-height', windowInnerHeight + 'px');
    rootStyle.setProperty('--navbar-height', navbarHeight + 'px');
    rootStyle.setProperty('--current-navbar-height', navbarCurrentHeight + 'px');
  }

  let prevWindowWidth = 0;

  useEffect(() => {
    updateCSSVariables();

    prevWindowWidth = window.innerWidth;

    window.addEventListener('resize', function() {
      const currentWindowWidth = window.innerWidth;
      if (currentWindowWidth !== prevWindowWidth) {
          updateCSSVariables();
          prevWindowWidth = currentWindowWidth;
      }
    });
  }, []);

  const pathname = usePathname();

  const router = useRouter();

  const { data: signInCheckResult } = { data: {} }//useSigninCheck();

  const { data: user } = { data: {} }//useUser();

  const { chats } = {};

  const [, setMessages] = [];
  const [, setAiMessages] = [];

  const { setLandingHeader, setShowHeader } = useHeader();
  const { setSidebarOpen, isUpgrading, setUpgrading } = useSidebar();

  const [initialized, setInitialized] = useState(false);

  const initChat = async () => {
    setLandingHeader(false);

    const aiMessages = Object.values(Object.entries(chats).reduce((obj, [id, { name }]) => ({ ...obj, [id]: { id, title: name } }), {}));

    setAiMessages(aiMessages);

    setSidebarOpen(true);
    setShowHeader(true);
    setInitialized(true);
  };

  useEffect(() => {
    if (chats && !initialized) initChat();
    if ((!signInCheckResult.signedIn || chats === null) && !initialized) {
      if (signInCheckResult.signedIn) {
        setLandingHeader(false);
        setSidebarOpen(true);
        setShowHeader(true);
      }
      setInitialized(true);
    }
  }, [chats]);

  return (
    <div className="w-full h-full flex flex-col">
      {!initialized ? <div className="w-full h-full flex justify-center items-center">
        <img src="images/logo-grey.png" className="w-48 md:w-96" alt="Sleepytales" />
      </div> : <>
        <ChatMessages {...props} />
        <ChatPanel {...props} />
        {isUpgrading && <ChatUpgrade open={isUpgrading} onOpenChange={setUpgrading} />}
        <Footer {...props} />
        <div className='full-touch'></div>
      </>}
    </div>
  )
}
