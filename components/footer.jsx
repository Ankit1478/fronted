import React from 'react';
import { Mail, Instagram, Twitter } from 'lucide-react';

import { useHeader } from '@/lib/hooks/use-header';
import { cn } from '@/lib/utils';

export default function Footer({
  text = {
    footer1: `Use Sleepytales to transform bedtime stories into magical adventures with our AI bedtime story generator and narrator. Enjoy free bedtime stories to read online or listen to, all personalized for your child.`,
  },
}) {
  const { isLandingHeader } = useHeader();

  return (
    <footer className={cn("bg-[#f5f5f7]", isLandingHeader ? "" : "hidden")} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="section-content px-4 md:px-6 lg:px-8 mx-auto pb-28 border-t border-gray-900/10 pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img className="h-7" src="/images/footer-logo.png" alt="Sleepytales logo" />
            <div className="text-sm leading-6 text-gray-600">{text.footer1}</div>
            <div className="flex space-x-6">
              <a href="https://instagram.com/sleepytales.ai" className="text-gray-400 hover:text-gray-500" target="_blank" rel="noreferrer">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a href="https://x.com/sleepytalesHQ" className="text-gray-400 hover:text-gray-500" target="_blank" rel="noreferrer">
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
              <a href="mailto: dennis@sleepytales.ai" className="text-gray-400 hover:text-gray-500" target="_blank" rel="noreferrer">
                <span className="sr-only">Support</span>
                <Mail />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-4 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Product</h3>
                <ul role="list" className="mt-6 space-y-4 list-none p-0">
                  <li className="p-0 m-0"><a href="/bedtime-stories-for-adults" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Bedtime stories for adults</a></li>
                  <li className="p-0 m-0"><a href="/short-bedtime-stories" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Short bedtime stories</a></li>
                  <li className="p-0 m-0"><a href="/christmas-bedtime-stories" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Christmas bedtime stories</a></li>
                  <li className="p-0 m-0"><a href="/bedtime-stories-for-girlfriend" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Bedtime stories for girlfriend</a></li>
                  <li className="p-0 m-0"><a href="/bedtime-stories-for-toddlers" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Bedtime stories for toddlers</a></li>
                  <li className="p-0 m-0"><a href="/princess-bedtime-stories" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Princess bedtime stories</a></li>
                  <li className="p-0 m-0"><a href="/baby-bedtime-stories" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Baby bedtime stories</a></li>
                </ul>
              </div>
              <div className="md:mt-6">
                <ul role="list" className="mt-4 md:mt-6 space-y-4 list-none p-0">
                  <li className="p-0 m-0"><a href="/cute-bedtime-stories" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Cute bedtime stories</a></li>
                  <li className="p-0 m-0"><a href="/bible-bedtime-stories" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Bible bedtime stories</a></li>
                  <li className="p-0 m-0"><a href="/5-minute-bedtime-stories" className="text-sm leading-6 text-gray-600 hover:text-gray-900">5 minute bedtime stories</a></li>
                  <li className="p-0 m-0"><a href="/funny-bedtime-stories" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Funny bedtime stories</a></li>
                  <li className="p-0 m-0"><a href="/bedtime-stories-to-tell" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Bedtime stories to tell</a></li>
                  <li className="p-0 m-0"><a href="/good-bedtime-stories" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Good bedtime stories</a></li>
                  <li className="p-0 m-0"><a href="/classic-bedtime-stories" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Classic bedtime stories</a></li>
                </ul>
              </div>
              <div className="md:mt-6">
                <ul role="list" className="mt-4 md:mt-6 space-y-4 list-none p-0">
                  <li className="p-0 m-0"><a href="/best-bedtime-stories" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Best bedtime stories</a></li>
                  <li className="p-0 m-0"><a href="/disney-bedtime-stories" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Disney bedtime stories</a></li>
                  <li className="p-0 m-0"><a href="/quick-bedtime-stories" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Quick bedtime stories</a></li>
                  <li className="p-0 m-0"><a href="/tell-me-a-bedtime-story" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Tell me a bedtime story</a></li>
                  <li className="p-0 m-0"><a href="/bedtime-stories-for-infants" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Bedtime stories for infants</a></li>
                  <li className="p-0 m-0"><a href="/bedtime-stories-for-kids" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Bedtime stories for kids</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4 list-none p-0">
                  <li className="p-0 m-0"><a href="/blog" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a></li>
                  <li className="p-0 m-0"><a href="https://sleepytales.notion.site/Sleepytales-Terms-of-Service-b236d83d2a8742fc83d0722c7ce92012" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms of Service</a></li>
                  <li className="p-0 m-0"><a href="https://sleepytales.notion.site/Sleepytales-Privacy-Policy-6da3e1f6367b44b792aed077ac45ca76" className="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}