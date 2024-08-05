export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Tell Me a Bedtime Story: Personalized Tales at Your Command`;
const description = `Experience magic with "Tell me a bedtime story" by Sleepytales. Instantly create and hear personalized tales with AI narration. Sweet dreams are just a request away.`;
const image = `/images/main/Tell-me-a-bedtime-story.webp`;

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
        names={['Zara', 'Finn']}
        descriptions={['fearless and kind pirate', 'clever and loyal parrot']}
        adventure='sailing to a mysterious island to uncover a hidden pirate treasure'
        text={{
          image1: image,
          image2: `images/main-mobile/Tell-me-a-bedtime-story.webp`,
          alt1: `Tell me a bedtime story`,
          alt2: `Can you tell me a bedtime story`,
          alt3: `Hey google tell me a bedtime story`,
          alt4: `Please tell me a bedtime story`,
          alt5: `Tell me bedtime stories`,
          header1: `Tell me a bedtime story experience with lifelike narration`,
          description1: `Create enchanting bedtime stories in seconds, tailored with your name, favorite characters, and beloved themes.`,
          header2: `Tell me a bedtime story in seconds with realistic voice narrations`,
          description2: `Tired from a long day and longing to hear a soothing tale? With Sleepytales, you can say "can you tell me a bedtime story" and enjoy a realistic AI narrator bringing a personalized story to life in seconds. Rediscover the magic of storytelling with our innovative platform.`,
          header3: `It's never been easier to hear a bedtime story`,
          description3: `With just a few clicks, you can experience a one-of-a-kind bedtime story. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated stories, ready for personalization, will keep you delighted when you say "please tell me a bedtime story."`,
          header4: `Create your bedtime story`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your bedtime story in seconds when you request "tell me a bedtime story."`,
          header5: `Listen to your bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `See why Sleepytales creates a better tell me a bedtime story experience`,
          header7: `See why Sleepytales creates a better short bedtime story experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for both adults and children. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day, you're left struggling to come up with a story when someone says "tell me a bedtime story," which can be both time-consuming and challenging.`,
          list1: [
            `Generic stories that don't cater to specific interests`,
            `Requires you to create or read the story yourself, which can be tiring`,
            `Limited selection of stories to tell`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales tell me a bedtime story experience`,
          description9: `After a busy day, you can relax as Sleepytales responds to "tell me a bedtime story" with personalized tales, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your interests`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of stories generated on-demand`,
            `Soothing music to create the perfect bedtime atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `"Tell me a bedtime story" reimagined`,
          description10: `Save time without sacrificing the precious moments of storytelling. When you or your loved ones say "please tell me a bedtime story," these tales are crucial for relaxation, bonding, and creating special memories. With Sleepytales, you can ensure you never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a magical adventure with our AI bedtime story generator and narrator.`,
        }}
      />
    </div>
  );
}
