
export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Princess Bedtime Stories: Enchanting Tales for Little Royals`;
const description = `Create magical princess bedtime stories with Sleepytales. Personalized royal adventures with soothing narration. Transform bedtime into a fairy tale experience.`;
const image = `/images/main/Princess-bedtime-stories.webp`;

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
        names={['Prince Leo', 'Princess Isabella']}
        descriptions={['brave, noble, and resourceful', 'wise, kind, and adventurous']}
        adventure='A daring quest through a mystical kingdom to find a magical gem and restore peace to their land'
        text={{
          image1: image,
          image2: `images/main-mobile/Princess-bedtime-stories.webp`,
          alt1: `Princess bedtime stories`,
          alt2: `Princess bedtime story`,
          alt3: `Bedtime stories for princess`,
          alt4: `Princess bedtime stories book`,
          alt5: `Princess short bedtime stories`,
          header1: `Princess bedtime stories with lifelike narration`,
          description1: `Create an enchanting princess bedtime story in seconds, tailored with your child's name, favorite royal characters, and beloved themes.`,
          header2: `Create princess bedtime stories in seconds with realistic voice narrations`,
          description2: `Tired from a long day of work and don't have the time to read a bedtime princess story? With Sleepytales, you can create personalized princess bedtime stories in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of imagination with our royal tales.`,
          header3: `It's never been easier to create your own princess bedtime story`,
          description3: `With just a few clicks, you can craft a one-of-a-kind princess bedtime story. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated short princess bedtime stories, ready for personalization, will keep you delighted.`,
          header4: `Create your princess bedtime story`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your princess bedtime story in seconds.`,
          header5: `Listen to your bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite princess bedtime stories book, and we'll generate high-quality images to match. Preview it online and order your physical copy of the bedtime story.`,
          header7: `See why Sleepytales creates a better princess bedtime story experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for both parents and children. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night with princess short bedtime stories.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day at work, you're left choosing from a limited selection of books, reading aloud to your child in a process that can be both time-consuming and exhausting.`,
          list1: [
            `Generic stories that don't cater to your child's interest in princesses`,
            `Requires you to read aloud yourself, which can be tiring`,
            `Limited selection of princess bedtime story books`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales princess bedtime stories`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized princess bedtime stories for your child, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your child's favorite princess characters`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of princess bedtime stories generated on-demand`,
            `Soothing music to create the perfect royal bedtime atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Princess bedtime stories reimagined`,
          description10: `Save time without sacrificing the precious moments of reading bedtime stories to your child. Princess bedtime stories are crucial for their learning and growth, fostering imagination and bonding. With Sleepytales, you can ensure they never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime stories into a magical royal adventure with our AI bedtime story generator and narrator. Whether you prefer a full-length princess bedtime story or short princess bedtime stories, we've got you covered. Discover the perfect way to end each day with our collection of enchanting bedtime stories for princesses.`,
        }}
      />
    </div>
  );
}
