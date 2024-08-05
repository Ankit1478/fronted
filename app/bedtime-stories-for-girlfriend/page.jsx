export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Bedtime Stories for Girlfriend: Romantic Tales for Couples`;
const description = `Create personalized bedtime stories for girlfriend with Sleepytales. Enjoy romantic tales with lifelike narration and soothing music. Make every night special.`;
const image = `/images/main/Bedtime-stories-for-girlfriend.webp`;

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
        names={['Alex', 'Mia']}
        descriptions={['adventurous, thoughtful, and fun-loving boyfriend', 'creative, warm-hearted, and curious girlfriend']}
        adventure='A thrilling journey through an enchanted forest to find a legendary hidden treasure and unlock its ancient secrets'
        text={{
          image1: image,
          image2: `images/main-mobile/Bedtime-stories-for-girlfriend.webp`,
          alt1: `Bedtime stories for girlfriend`,
          alt2: `Bedtime story for girlfriend`,
          alt3: `Bedtime stories for your girlfriend`,
          alt4: `Romantic bedtime stories for girlfriend`,
          alt5: `Short bedtime stories for girlfriend`,
          header1: `Custom bedtime stories for girlfriend with lifelike narration`,
          description1: `Create an enchanting bedtime story for your girlfriend in seconds, tailored with her name, favorite themes, and beloved characters.`,
          header2: `Create bedtime stories for your girlfriend in seconds with realistic voice narrations`,
          description2: `Tired from a long day and want to surprise your partner with something special? With Sleepytales, you can create personalized bedtime stories for my girlfriend in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of storytelling with our romantic tales.`,
          header3: `It's never been easier to create your own bedtime story for girlfriend`,
          description3: `With just a few clicks, you can craft a one-of-a-kind bedtime story for your girlfriend. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated stories, ready for personalization, includes both long bedtime story for girlfriend options and short bedtime stories for girlfriend.`,
          header4: `Create your bedtime story for girlfriend`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your bedtime story in seconds.`,
          header5: `Listen to your bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite bedtime story for your girlfriend, and we'll generate high-quality images to match. Preview it online and order your physical copy of the romantic bedtime story.`,
          header7: `See why Sleepytales creates a better bedtime story experience for couples`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for couples. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day, you're left struggling to come up with an engaging story for your girlfriend, which can be both time-consuming and challenging.`,
          list1: [
            `Generic stories that don't cater to your girlfriend's interests`,
            `Requires you to create or read the story yourself, which can be tiring`,
            `Limited selection of romantic bedtime stories`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales bedtime stories for girlfriend`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized stories for your girlfriend, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your girlfriend's interests`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of bedtime stories for your girlfriend generated on-demand`,
            `Soothing music to create the perfect romantic atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Bedtime stories for girlfriend reimagined`,
          description10: `Save time without sacrificing the precious moments of sharing stories with your partner. Bedtime stories for your girlfriend are crucial for bonding and creating special memories. With Sleepytales, you can ensure you never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a magical adventure with our AI bedtime story generator and narrator. Whether you prefer long bedtime stories for girlfriend options or short bedtime stories for girlfriend, we've got you covered. Discover the perfect way to end each day with our personalized romantic bedtime stories for girlfriend.`,
        }}
      />
    </div>
  );
}