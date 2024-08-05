export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Bedtime Stories for Kids: Magical Tales for Sweet Dreams`;
const description = `Discover enchanting bedtime stories for kids with Sleepytales. Create personalized tales with fun characters and soothing narration. Make bedtime magical every night.`;
const image = `/images/main/Bedtime-stories-for-kids.webp`;

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
        names={['Tommy', 'Lily']}
        descriptions={['the imaginative and curious boy with a love for adventure', ' the brave and resourceful girl with a knack for solving problems']}
        adventure='Discovering a hidden treehouse in the woods and transforming it into a magical clubhouse where they embark on daily adventures'
        text={{
          image1: image,
          image2: `images/main-mobile/Bedtime-stories-for-kids.webp`,
          alt1: `Bedtime stories for kids`,
          alt2: `Bedtime story for kids`,
          alt3: `Short bedtime stories for kids`,
          alt4: `Scary bedtime stories for kids`,
          alt5: `Free bedtime stories for kids`,
          header1: `Custom bedtime stories for kids with lifelike narration`,
          description1: `Create enchanting bedtime stories for kids in seconds, tailored with your child's name, favorite characters, and beloved themes.`,
          header2: `Create bedtime stories for kids in seconds with realistic voice narrations`,
          description2: `Tired from a long day and don't have the energy to read a bedtime story for kids? With Sleepytales, you can create personalized stories for kids bedtime in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of storytelling with our engaging tales.`,
          header3: `It's never been easier to create your own bedtime story for kids`,
          description3: `With just a few clicks, you can craft a one-of-a-kind bedtime story for kids. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated short bedtime stories for kids, ready for personalization, will keep you and your little ones delighted.`,
          header4: `Create your bedtime story for kids`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your bedtime story in seconds.`,
          header5: `Listen to your bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite bedtime stories for little kids, and we'll generate high-quality images to match. Preview it online and order your physical copy of the story.`,
          header7: `See why Sleepytales creates a better bedtime stories for kids experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for both parents and children. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day, you're left choosing from a limited selection of books, reading aloud to your child in a process that can be both time-consuming and exhausting.`,
          list1: [
            `Generic stories that don't cater to your child's specific interests`,
            `Requires you to read aloud yourself, which can be tiring`,
            `Limited selection of bedtimes stories for kids`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales bedtime stories for kids`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized bedtime stories for kids free, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your child's interests`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of free bedtime stories for kids generated on-demand`,
            `Soothing music to create the perfect bedtime atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Bedtime stories for kids reimagined`,
          description10: `Save time without sacrificing the precious moments of reading to your child. Bedtime stories for kids are crucial for their learning, growth, and bonding. With Sleepytales, you can ensure they never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a magical adventure with our AI bedtime story generator and narrator. Whether you need short bedtime stories for kids or even scary bedtime stories for kids, we've got you covered.`,
        }}
      />
    </div>
  );
}
