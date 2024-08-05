export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `The #1 Custom Bedtime Story Generator and Narrator`;
const description = `Create enchanting bedtime stories tailored just for your child. With lifelike narration and soothing music, our personalized tales make bedtime a magical adventure every night.`;
const image = `/images/Sleepytales.webp`;

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
    <div className='w-full relative mt-2 md:mt-4 font-serif'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Chat
        names={['Dennis', 'Jason']}
        descriptions={['friendly dragon', 'hungry giant']}
        adventure='eating lots of yummy food'
        text={{
          image1: image,
          image2: `images/Sleeptales-mobile.webp`,
          alt1: `Custom bedtime stories`,
          alt2: `Custom bedtime story`,
          alt3: `Bedtime story audio`,
          alt4: `Bedtime story book`,
          alt5: `free bedtime stories`,
          header1: `Custom bedtime stories with lifelike narration`,
          description1: `
          Create enchanting bedtime stories in seconds, tailored with your child's name, favorite characters, and beloved themes.`,
          header2: `Create bedtime stories in seconds with realistic voice narrations`,
          description2: `Tired after a long day and don't have the energy to read a bedtime story? With Sleepytales, you can create personalized bedtime stories in seconds and enjoy realistic narration bringing the story to life. Rediscover the magic of imagination with our free bedtime stories.`,
          header3: `It's never been easier to create your own bedtime story`,
          description3: `With just a few clicks, you can craft a one-of-a-kind bedtime story book. The options are limitless! Bored of the same voice? Choose from plenty of voice options and languages. Out of ideas? Our library of curated bedtime stories to read online will keep you delighted.`,
          header4: `Create your bedtime story`,
          description4: `Choose your characters, theme, adventure, and language, and we'll create your bedtime story in seconds.`,
          header5: `Listen to your bedtime story`,
          description5: `Enjoy lifelike narrations of bedtime stories to read, with a wide range of emotions and languages.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite bedtime story, and we'll generate high-quality images to match. Preview it online and order your physical bedtime story book.`,
          header7: `See why Sleepytales creates a better bedtime story experience`,
          description7: `Let's compare traditional bedtime stories to read online free with the innovative Sleepytales method. Discover how we're revolutionizing bedtime for both parents and children with our personalized bedtime stories online.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day, you're left choosing from a limited selection of bedtime story books, reading aloud to your child in a time-consuming and exhausting process.`,
          list1: [
            `Generic stories that don't cater to your child's interests`,
            `Requires you to read aloud yourself, which can be tiring`,
            `Limited selection of bedtime books`,
            `Same stories repeated night after night`,
            `No background music to enhance the experience`,
          ],
          header9: `Sleepytales bedtime stories`,
          description9: `Relax as Sleepytales creates and narrates personalized bedtime stories for your child, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your child's interests`,
            `Lifelike voice narration of bedtime stories to read`,
            `Endless variety of free bedtime stories generated on-demand`,
            `Soothing music to create the perfect bedtime atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Bedtime stories reimagined`,
          description10: `Save time without sacrificing the precious moments of reading bedtime stories to your child. Bedtime stories are crucial for learning and growth, fostering imagination and bonding. With Sleepytales, you can ensure they never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime stories into magical adventures with our AI bedtime story generator and narrator. Enjoy free bedtime stories to read online or listen to, all personalized for your child.`,
          header11: `130,500 custom bedtime stories already created for 10,500 happy customers!`,
          description11: `You’re in good company. We’ve been featured in the top news sites and you can check out real customer bedtime story examples, shared with their permission.`,
        }}
      />
    </div>
  );
}
