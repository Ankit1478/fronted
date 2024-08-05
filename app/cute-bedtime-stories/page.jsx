export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Cute Bedtime Stories: Adorable Tales for Sweet Dreams`;
const description = `Discover charming cute bedtime stories with Sleepytales. Create personalized tales with heartwarming narration. Share magical moments with loved ones every night.`;
const image = `/images/main/Cute-bedtime-stories.webp`;

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
        names={['Benny', 'Lulu']}
        descriptions={['playful, curious, and friendly puppy', 'kind, insightful, and devoted servant']}
        adventure='A spiritual journey through ancient lands to retrieve a sacred scroll and bring its message of hope and redemption to their people'
        text={{
          image1: image,
          image2: `images/main-mobile/Cute-bedtime-stories.webp`,
          alt1: `Cute bedtime stories`,
          alt2: `Cute bedtime story`,
          alt3: `Cute short bedtime stories`,
          alt4: `Cute bedtime stories short`,
          alt5: `Cute bedtime stories for boyfriend`,
          header1: `Cute bedtime stories with lifelike narration`,
          description1: `Create enchanting cute bedtime stories in seconds, tailored with your loved one's name, favorite characters, and beloved themes.`,
          header2: `Create cute bedtime stories in seconds with realistic voice narrations`,
          description2: `Tired from a long day and want to share something special? With Sleepytales, you can create personalized cute short bedtime stories in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of storytelling with our adorable tales.`,
          header3: `It's never been easier to create your own cute bedtime story`,
          description3: `With just a few clicks, you can craft a one-of-a-kind cute bedtime story. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated cute bedtime stories, ready for personalization, will keep you delighted.`,
          header4: `Create your cute bedtime story`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your cute bedtime story in seconds.`,
          header5: `Listen to your cute bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your cute bedtime story`,
          description6: `Choose your favorite from our collection of short and cute bedtime stories, and we'll generate high-quality images to match. Preview it online and order your physical copy of the cute bedtime story.`,
          header7: `See why Sleepytales creates a better cute bedtime story experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for couples and friends. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night with love cute bedtime stories.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day, you're left struggling to come up with an engaging story, which can be both time-consuming and challenging.`,
          list1: [
            `Generic stories that don't cater to your specific interests`,
            `Requires you to create or read the story yourself, which can be tiring`,
            `Limited selection of cute bedtime stories to tell your crush`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales cute bedtime stories`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized cute bedtime stories, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your or your loved one's interests`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of cute bedtime stories generated on-demand`,
            `Soothing music to create the perfect atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Cute bedtime stories reimagined`,
          description10: `Save time without sacrificing the precious moments of sharing stories with your loved ones. Cute bedtime stories are crucial for bonding and creating special memories. With Sleepytales, you can ensure you never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a magical adventure with our cute bedtime story generator and narrator. Whether you're looking for cute bedtime stories for your boyfriend or just want to share a sweet tale with a friend, we've got you covered. Discover the perfect way to end each day with our collection of enchanting and cute bedtime stories.`,
        }}
      />
    </div>
  );
}
