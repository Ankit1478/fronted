'use client';

import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { cn } from '@/lib/utils';
import { Callout } from '@/components/callout';
import { MdxCard } from '@/components/mdx-card';
import { LoginDlg } from '@/components/login';
import { Button } from '@/components/ui/button';

import { encrypt } from '@/app/actions';

const stories = [
  {
    names: ['Sarah', 'Gus'],
    descriptions: ['Curious young girl with a vivid imagination', 'Fluffy, shy monster with polka-dot fur'],
    adventure: `befriending Gus, the monster under Sarah's bed, as they work together to overcome their shared fear of the dark and embark on a midnight quest to find Gus's lost teddy bear`,
  },
  {
    names: ['Alex', 'Brushy'],
    descriptions: ['Creative child with a love for art', 'Enchanted old paintbrush with colorful bristles'],
    adventure: `painting a vibrant jungle scene with Brushy that magically comes to life, leading Alex on an exciting adventure with friendly animals and teaching the power of imagination`,
  },
  {
    names: ['Twinkle', 'Ray'],
    descriptions: ['Drowsy young star struggling to stay awake', 'Energetic sunbeam with a cheerful disposition'],
    adventure: `learning the importance of staying awake for nightly duties as Twinkle, guided by Ray's enthusiasm, discovers a special twinkling talent that brightens the night sky`,
  },
  {
    names: ['Cumulus', 'Ray'],
    descriptions: ['Pessimistic cloud always seeing the worst in situations', 'Persistent sunbeam with an infectious positive attitude'],
    adventure: `transforming Cumulus from a grumpy cloud into a happy rain cloud with Ray's help, bringing joy to the world below by helping flowers grow and filling streams with life-giving water`,
  },
  {
    names: ['Stripey', 'Wooley'],
    descriptions: ['Adventurous sock with musical stripes', 'Wise old sweater offering guidance'],
    adventure: `navigating through the perilous laundry cycle with Stripey, guided by Wooley's wisdom, making new friends and learning about courage while searching for a lost sock mate in the depths of the laundry basket`,
  },
];

const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  Image,
  Callout,
  Card: MdxCard,
}

// Isolating this state is needed to prevent markdown from rendering
function LoginDlgWrapper() {
  const pathname = usePathname();

  const loginRef = useRef();

  const [loginPayload, setLoginPayload] = useState(null);

  const handleLoginSuccess = async (loginPayload) => {

  };

  useEffect(() => {
    [...(document.getElementsByClassName('mdx')?.[0]?.getElementsByTagName('h3') || [])].forEach((ele, index) => {
      const newEle = document.createElement('div');

      if (ele.nextSibling?.nextSibling?.nextSibling) {
        ele.parentNode.insertBefore(newEle, ele.nextSibling.nextSibling.nextSibling);
      }
      else {
        ele.parentNode.append(newEle);
      }

      createRoot(newEle).render(
        <Button
          className="absoluterounded-md text-base py-6 px-4 mt-6 mb-4"
          onClick={() => {
            const loginPayload = { input: stories[index], timestamp: Date.now() };

            if (true) {
              setLoginPayload(loginPayload);

              loginRef.current?.click();
            }
            else {
              handleLoginSuccess(loginPayload);
            }
          }}>Create this bedtime story</Button>
      );
    });
  }, []);


  return (
    <LoginDlg
      onLoginSuccess={async () => await handleLoginSuccess(loginPayload)}
      emailLoginPayload={loginPayload}>
      <button ref={loginRef} className="hidden"></button>
    </LoginDlg>
  );
}

export function Mdx({ code, storyButtonsEnabled = false }) {
  const Component = useMDXComponent(code);

  useEffect(() => {
    [...(document.getElementsByClassName('mdx')?.[0]?.children || [])].forEach((ele) => {
      if (ele.innerHTML?.includes('These five-minute bedtime stories are designed to be easily adaptable.')) {
        ele.innerHTML = ele.innerHTML.replace(
          'five-minute bedtime stories',
          '<a href="/" class="underline">five-minute bedtime stories</a>',
        );
      }

      if (ele.innerHTML?.includes('Enter Sleepytales, an innovative solution designed to transform bedtime routines')) {
        ele.innerHTML = ele.innerHTML.replace(
          'Sleepytales',
          '<a href="/" class="underline">Sleepytales</a>',
        );
      }
    });
  }, []);

  return (
    <div className="mdx">
      <Component components={components} />
      {storyButtonsEnabled && <LoginDlgWrapper />}
    </div>
  )
}
