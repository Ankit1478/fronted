
export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Quick Bedtime Stories: Swift Tales for Busy Nights`;
const description = `Discover enchanting quick bedtime stories with Sleepytales. Create personalized short tales in seconds. Perfect for busy families seeking magical bedtime moments.`;
const image = `/images/main/Quick-bedtime-stories.webp`;

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
        names={['Sophie', 'Max']}
        descriptions={['imaginative and kind girl', 'protective and playful dog']}
        adventure='exploring a magical garden where toys come to life'
        text={{
          image1: image,
          image2: `images/main-mobile/Quick-bedtime-stories.webp`,
          alt1: `Quick bedtime stories`,
          alt2: `Quick bedtime story`,
          alt3: `A quick bedtime story`,
          alt4: `Quick short bedtime story`,
          alt5: `Quick bedtime stories free`,
          header1: `Quick bedtime stories with lifelike narration`,
          description1: `Create enchanting quick bedtime stories in seconds, tailored with your name, favorite characters, and beloved themes.`,
          header2: `Create quick bedtime stories in seconds with realistic voice narrations`,
          description2: `Tired from a long day and don't have time for a lengthy tale? With Sleepytales, you can create personalized quick bedtime story options in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of swift storytelling with our efficient tales.`,
          header3: `It's never been easier to create your own quick bedtime story`,
          description3: `With just a few clicks, you can craft a one-of-a-kind quick short bedtime story. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated quick bedtime stories free, ready for personalization, will keep you delighted.`,
          header4: `Create your quick bedtime story`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create a quick bedtime story in seconds.`,
          header5: `Listen to your quick bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite quick bedtime stories, and we'll generate high-quality images to match. Preview it online and order your physical copy of the story.`,
          header7: `See why Sleepytales creates a better quick bedtime story experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for both adults and children. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day, you're left struggling to find a quick bedtime story, which can be both time-consuming and challenging.`,
          list1: [
            `Generic stories that don't cater to specific time constraints`,
            `Requires you to read aloud yourself, which can be tiring`,
            `Limited selection of quick bedtime stories for 4 year olds or adults`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales quick bedtime stories`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized quick bedtime stories, offering a swift, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your interests and time constraints`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of quick bedtime stories generated on-demand`,
            `Soothing music to create the perfect bedtime atmosphere`,
            `Adjustable story length to fit your bedtime routine perfectly`,
          ],
          header10: `Quick bedtime stories reimagined`,
          description10: `Save time without sacrificing the precious moments of sharing a bedtime story. Whether you need quick bedtime stories for adults or a quick bedtime story for 4 year olds, these tales are crucial for relaxation, bonding, and creating special memories in a time-efficient manner. With Sleepytales, you can ensure you never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a magical adventure with our quick bedtime story generator and narrator. Whether you need a quick short bedtime story or a slightly longer tale, we've got you covered. Discover the perfect way to end each day with our collection of engaging and personalized quick bedtime stories.`,
        }}
      />
    </div>
  );
}
