export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Short Bedtime Stories: Quick Tales for Peaceful Slumber`;
const description = `Discover enchanting short bedtime stories tailored for busy families. Create and enjoy personalized tales with lifelike narration in minutes. Sweet dreams made simple.`;
const image = `/images/main/Short-bedtime-stories.webp`;

export const metadata = {
  metadataBase: new URL('https://sleeptales.ai'),
  title,
  description,
  openGraph: {
    title,
    description
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@sleepytalesHQ'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: title,
  image,
  description,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.8,
    "reviewCount": 20
  },
};

export default function Page() {
  return (
    <div className='flex-1 overflow-y-auto relative'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Chat
        names={['Kai', 'Luna']}
        descriptions={['fearless, daring, and quick-witted explorer', 'resourceful, clever, and spirited navigator']}
        adventure='A thrilling race through treacherous mountains to recover a hidden map that leads to a long-lost treasure'
        text={{
          image1: image,
          image2: `images/main-mobile/Short-bedtime-stories.webp`,
          alt1: `Short bedtime stories`,
          alt2: `Short bedtime story`,
          alt3: `Short bedtime stories free`,
          alt4: `Short story for bedtime`,
          alt5: `Short bedtime stories to read online`,
          header1: `Short bedtime stories with lifelike narration`,
          description1: `Create enchanting short bedtime stories in seconds, tailored with your child's name, favorite characters, and beloved themes.`,
          header2: `Create short bedtime stories in seconds with realistic voice narrations`,
          description2: `Tired from a long day of work and don't have the time to read a long bedtime story? With Sleepytales, you can create personalized short bedtime stories in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of imagination with very short bedtime stories.`,
          header3: `It's never been easier to create your own short bedtime story`,
          description3: `With just a few clicks, you can craft a one-of-a-kind short story for bedtime. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated really short bedtime stories, ready for personalization, will keep you delighted.`,
          header4: `Create your short bedtime story`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your short bedtime story in seconds.`,
          header5: `Listen to your short bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your short bedtime story`,
          description6: `Choose your favorite bedtime short stories, and we'll generate high-quality images to match. Preview it online and order your physical copy of the short bedtime story.`,
          header7: `See why Sleepytales creates a better short bedtime story experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for both parents and children. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night with short bedtime stories to read online free.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day at work, you're left choosing from a limited selection of books, reading aloud to your child in a process that can be both time-consuming and exhausting.`,
          list1: [
            `Generic stories that don't cater to your child's interests`,
            `Requires you to read aloud yourself, which can be tiring`,
            `Limited selection of bedtime books`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales short bedtime stories`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized short bedtime stories free for your child, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom short bedtime stories tailored to your child's interests`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of short bedtime stories generated on-demand`,
            `Soothing music to create the perfect bedtime atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Short bedtime stories reimagined`,
          description10: `Save time without sacrificing the precious moments of reading bedtime stories to your child. Short bedtime stories are crucial for their learning and growth, fostering imagination and bonding. With Sleepytales, you can ensure they never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime stories into a magical adventure with our AI short bedtime story generator and narrator. Enjoy short bedtime stories to read online free or listen to, all personalized for your child.`,
        }}
      />
    </div>
  );
}
