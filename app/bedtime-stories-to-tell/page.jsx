export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Bedtime Stories to Tell: Personalized Tales for Loved Ones`;
const description = `Discover enchanting bedtime stories to tell with Sleepytales. Create personalized tales for your loved ones with lifelike narration. Share magical moments every night.`;
const image = `/images/main/Bedtime-stories-to-tell.webp`;

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
        names={['Daisy', 'Sammy']}
        descriptions={['sweet and curious bunny', 'cheerful and helpful squirrel']}
        adventure='finding a lost magical acorn that can make wishes come true'
        text={{
          image1: image,
          image2: `images/main-mobile/Bedtime-stories-to-tell.webp`,
          alt1: `Bedtime stories to tell`,
          alt2: `Bedtime stories to tell your girlfriend`,
          alt3: `Cute bedtime stories to tell your crush`,
          alt4: `Love bedtime stories to tell your girlfriend`,
          alt5: `Bedtime stories to tell your gf`,
          header1: `Custom bedtime stories to tell with lifelike narration`,
          description1: `Create enchanting bedtime stories to tell in seconds, tailored with your loved one's name, favorite characters, and beloved themes.`,
          header2: `Create bedtime stories to tell in seconds with realistic voice narrations`,
          description2: `Tired from a long day and want to share a special moment? With Sleepytales, you can create personalized bedtime stories to tell your girlfriend in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of storytelling with our romantic tales.`,
          header3: `It's never been easier to create your own bedtime stories to tell`,
          description3: `With just a few clicks, you can craft one-of-a-kind bedtime stories to tell your gf. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated cute bedtime stories to tell your crush, ready for personalization, will keep you inspired.`,
          header4: `Create your bedtime story to tell`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your bedtime story in seconds.`,
          header5: `Listen to your bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite love bedtime stories to tell your girlfriend, and we'll generate high-quality images to match. Preview it online and order your physical copy of the story.`,
          header7: `See why Sleepytales creates a better bedtime stories to tell experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for couples. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day, you're left struggling to come up with engaging bedtime stories to tell, which can be both time-consuming and challenging.`,
          list1: [
            `Generic stories that don't cater to your relationship`,
            `Requires you to create or read the story yourself, which can be tiring`,
            `Limited selection of romantic bedtime stories`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales bedtime stories to tell`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized bedtime stories to tell your girlfriend, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your relationship and interests`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of bedtime stories to tell generated on-demand`,
            `Soothing music to create the perfect romantic atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Bedtime stories to tell reimagined`,
          description10: `Save time without sacrificing the precious moments of sharing stories with your loved one. Bedtime stories to tell are crucial for bonding and creating special memories. With Sleepytales, you can ensure you never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a magical adventure with our AI bedtime story generator and narrator. Whether you need cute bedtime stories to tell your crush or romantic tales for your partner, we've got you covered.`,
        }}
      />
    </div>
  );
}
