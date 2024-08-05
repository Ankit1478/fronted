export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Disney Bedtime Stories: Magical Tales for Enchanted Dreams`;
const description = `Discover personalized Disney bedtime stories with Sleepytales. Create magical tales featuring your child's favorite characters. Bring Disney wonder to bedtime.`;
const image = `/images/main/Disney-bedtime-stories.webp`;

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
        names={['Mickey', 'Donald']}
        descriptions={['adventurous and optimistic mouse', 'humorous and loyal duck']}
        adventure='exploring an enchanted forest to find a lost treasure'
        text={{
          image1: image,
          image2: `images/main-mobile/Disney-bedtime-stories.webp`,
          alt1: `Disney bedtime stories`,
          alt2: `Bedtime story Disney`,
          alt3: `Disney bedtime stories to read online`,
          alt4: `Disney bedtime stories book`,
          alt5: `Disney bedtime story`,
          header1: `Disney bedtime stories with lifelike narration`,
          description1: `Create enchanting Disney bedtime stories in seconds, tailored with your child's name, favorite Disney characters, and beloved themes.`,
          header2: `Create Disney bedtime stories in seconds with realistic voice narrations`,
          description2: `Tired from a long day and want to share some Disney magic? With Sleepytales, you can create personalized Disney bedtime stories in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the wonder of Disney with our magical tales.`,
          header3: `It's never been easier to create your own Disney bedtime story`,
          description3: `With just a few clicks, you can craft a one-of-a-kind Disney bedtime story. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated Disney princess bedtime stories, ready for personalization, will keep you and your little ones delighted.`,
          header4: `Create your Disney bedtime story`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your Disney bedtime story in seconds.`,
          header5: `Listen to your Disney bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your cute bedtime story`,
          description6: `Choose your favorite Disney bedtime stories book, and we'll generate high-quality images to match. Preview it online and order your physical copy of the story.`,
          header7: `See why Sleepytales creates a better Disney bedtime story experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for both parents and children. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night with Disney bedtime stories to read online.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day, you're left choosing from a limited selection of Disney books, reading aloud to your child in a process that can be both time-consuming and exhausting.`,
          list1: [
            `Generic stories that don't personalize the Disney experience`,
            `Requires you to read aloud yourself, which can be tiring`,
            `Limited selection of Disney bedtime stories books`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the magical experience`,
          ],
          header9: `Sleepytales Disney bedtime stories`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized Disney bedtime stories for your child, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your child's favorite Disney characters`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of Disney princess bedtime stories and other Disney tales generated on-demand`,
            `Magical music to create the perfect Disney bedtime atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Disney bedtime stories reimagined`,
          description10: `Save time without sacrificing the precious moments of sharing Disney magic with your child. Disney bedtime stories are crucial for fostering imagination, creating magical memories, and family bonding. With Sleepytales, you can ensure they never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a magical adventure with our AI bedtime story generator and narrator. Whether you need a full-length Disney bedtime story or a quick tale before sleep, we've got you covered. Discover the perfect way to end each day with our collection of enchanting Disney bedtime stories.`,
        }}
      />
    </div>
  );
}

