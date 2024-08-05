export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Funny Bedtime Stories: Hilarious Tales for Joyful Nights`;
const description = `Discover side-splitting funny bedtime stories with Sleepytales. Create personalized humorous tales for all ages. End your day with laughter and sweet dreams.`;
const image = `/images/main/Funny-bedtime-stories.webp`;

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
        names={['Max', 'Sophie']}
        descriptions={['clumsy, cheerful, and lovable baker', 'witty, mischievous, and spirited chef']}
        adventure='A hilarious escapade through a bustling city to find the perfect ingredients for their baking contest, encountering quirky characters and ridiculous obstacles along the way'
        text={{
          image1: image,
          image2: `images/main-mobile/Funny-bedtime-stories.webp`,
          alt1: `Funny bedtime stories`,
          alt2: `Funny bedtime story`,
          alt3: `Short funny bedtime stories`,
          alt4: `Bedtime stories funny short`,
          alt5: `Bedtime stories funny`,
          header1: `Funny bedtime stories with lifelike narration`,
          description1: `Create hilarious funny bedtime stories in seconds, tailored with your name, favorite characters, and beloved comedic themes.`,
          header2: `Create funny bedtime stories in seconds with realistic voice narrations`,
          description2: `Tired from a long day and need a good laugh before bed? With Sleepytales, you can create personalized funny bedtime stories for adults or kids in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of laughter with our humorous tales.`,
          header3: `It's never been easier to create your own funny bedtime story`,
          description3: `With just a few clicks, you can craft a one-of-a-kind funny bedtime story. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated short funny bedtime stories, ready for personalization, will keep you giggling.`,
          header4: `Create your funny bedtime story`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your funny bedtime story in seconds.`,
          header5: `Listen to your funny bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite bedtime stories funny short, and we'll generate high-quality images to match. Preview it online and order your physical copy of the funny bedtime story.`,
          header7: `See why Sleepytales creates a better funny bedtime story experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for both adults and children. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime a hilarious adventure every single night.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day, you're left struggling to come up with an engaging funny story, which can be both time-consuming and challenging.`,
          list1: [
            `Generic stories that don't cater to your specific sense of humor`,
            `Requires you to create or read the story yourself, which can be tiring`,
            `Limited selection of bedtime stories for adults funny`,
            `Same jokes repeated night after night`,
            `No background sound effects to enhance the comedic experience`,
          ],
          header9: `Sleepytales funny bedtime stories`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized funny bedtime stories, offering a quick, effortless, and entertaining bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your sense of humor`,
`Lifelike voice narration, so you don't have to read aloud`,
`Endless variety of bedtime stories funny generated on-demand`,
`Amusing sound effects to create the perfect comedic atmosphere`,
`Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Funny bedtime stories reimagined`,
          description10: `Save time without sacrificing the precious moments of laughter before bed. Funny bedtime stories are crucial for stress relief and creating joyful memories. With Sleepytales, you can ensure you never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a hilarious adventure with our funny bedtime story generator and narrator. Whether you're looking for funny bedtime stories for kids or adults, we've got you covered.`,
        }}
      />
    </div>
  );
}

