export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `5 Minute Bedtime Stories: Quick Tales for Busy Nights`;
const description = `Discover enchanting 5 minute bedtime stories with Sleepytales. Create personalized quick tales with soothing narration. Perfect for busy families and sleepy kids.`;
const image = `/images/main/5-minute-bedtime-stories.webp`;

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
        names={['Elara', 'Finn']}
        descriptions={['enigmatic, wise, and magical sorceress', 'brave, curious, and daring adventurer']}
        adventure='A mystical journey through enchanted forests and ancient ruins to find a legendary crystal and harness its powerful magic to save their realm'
        text={{
          image1: image,
          image2: `images/main-mobile/5-minute-bedtime-stories.webp`,
          alt1: `5 minute bedtime stories`,
          alt2: `5 minute bedtime story`,
          alt3: `5 minute bedtime stories online`,
          alt4: `5 minute bedtime stories book`,
          alt5: `5 minute bedtime stories free`,
          header1: `Custom 5 minute bedtime stories with lifelike narration`,
          description1: `Create enchanting 5 minute bedtime stories in seconds, tailored with your child's name, favorite characters, and beloved themes.`,
          header2: `Create 5 minute bedtime stories in seconds with realistic voice narrations`,
          description2: `Tired from a long day of work and don't have the time for a lengthy tale? With Sleepytales, you can create personalized 5 minute bedtime story options in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of quick storytelling with our free 5 minute bedtime stories.`,
          header3: `It's never been easier to create your own 5 minute bedtime story`,
          description3: `With just a few clicks, you can craft one-of-a-kind short 5 minute bedtime stories. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated 5 minute bedtime stories free, ready for personalization, will keep you delighted.`,
          header4: `Create your 5 minute bedtime story`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your 5 minute bedtime story in seconds.`,
          header5: `Listen to your 5 minute bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite 5 minute bedtime stories book, and we'll generate high-quality images to match. Preview it online and order your physical copy of the story.`,
          header7: `See why Sleepytales creates a better 5 minute bedtime story experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for both parents and children. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night with 5 minute bedtime stories online.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day at work, you're left choosing from a limited selection of books, reading aloud to your child in a process that can be both time-consuming and exhausting.`,
          list1: [
            `Generic stories that don't cater to your child's interests`,
            `Requires you to read aloud yourself, which can be tiring`,
            `Limited selection of short bedtime stories`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales 5 minute bedtime stories`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized 5 minute bedtime stories for your child, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your child's interests`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of 5 minute bedtime stories generated on-demand`,
            `Soothing music to create the perfect bedtime atmosphere`,
            `Consistent 5-minute length to fit your bedtime routine perfectly`,
          ],
          header10: `5 minute bedtime stories reimagined`,
          description10: `Save time without sacrificing the precious moments of reading bedtime stories to your child. 5 minute bedtime stories are crucial for their learning and growth, fostering imagination and bonding in a time-efficient manner. With Sleepytales, you can ensure they never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime stories into quick adventures with our 5 minute bedtime story generator and narrator. Enjoy free 5 minute bedtime stories and discover the perfect way to end each day with our collection of engaging and efficient 5 minute bedtime stories online.`,
        }}
      />
    </div>
  );
}