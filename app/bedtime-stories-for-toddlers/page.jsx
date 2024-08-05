export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Bedtime Stories for Toddlers: Magical Tales for Little Ones`;
const description = `Discover enchanting bedtime stories for toddlers with Sleepytales. Create personalized tales with soothing narration and music. Make bedtime a joyful adventure.`;
const image = `/images/main/Bedtime-stories-for-toddlers.webp`;

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
        names={['Teddy', 'Bubbles']}
        descriptions={['soft, cuddly, and gentle bear', 'cheerful, playful, and friendly fish']}
        adventure='A soothing journey through a dreamy underwater world to find sparkling sea stars and light up the ocean for a peaceful night’s sleep'
        text={{
          image1: image,
          image2: `images/main-mobile/Bedtime-stories-for-toddlers.webp`,
          alt1: `Bedtime stories for toddlers`,
          alt2: `Bedtime story for toddlers`,
          alt3: `Free audio bedtime stories for toddlers`,
          alt4: `Bedtime story books for toddlers`,
          alt5: `Calm bedtime stories for toddlers`,
          header1: `Custom bedtime stories for toddlers with lifelike narration`,
          description1: `Create an enchanting bedtime story for toddlers in seconds, tailored with your child's name, favorite characters, and beloved themes.`,
          header2: `Create bedtime stories for toddlers in seconds with realistic voice narrations`,
          description2: `Tired from a long day of work and don't have the time to read a bedtime story? With Sleepytales, you can create personalized bedtime stories for toddlers in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of imagination with our free audio bedtime stories for toddlers.`,
          header3: `It's never been easier to create your own bedtime story for toddlers`,
          description3: `With just a few clicks, you can craft a one-of-a-kind bedtime story for toddlers. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated bedtime stories for toddlers free, ready for personalization, will keep you delighted.`,
          header4: `Create your bedtime story for toddlers`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your bedtime story in seconds.`,
          header5: `Listen to your bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors, perfect for calm bedtime stories for toddlers.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite bedtime story books for toddlers, and we'll generate high-quality images to match. Preview it online and order your physical copy of the bedtime story.`,
          header7: `See why Sleepytales creates a better bedtime story experience for toddlers`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for both parents and toddlers. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day at work, you're left choosing from a limited selection of books, reading aloud to your toddler in a process that can be both time-consuming and exhausting.`,
          list1: [
            `Generic stories that don't cater to your toddler's interests`,
            `Requires you to read aloud yourself, which can be tiring`,
            `Limited selection of bedtime story books for toddlers`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales bedtime stories for toddlers`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized stories for your toddler, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your toddler's interests`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of stories generated on-demand, including short bedtime stories for toddlers`,
            `Soothing music to create the perfect bedtime atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Bedtime stories for toddlers reimagined`,
          description10: `Save time without sacrificing the precious moments of reading bedtime stories to your toddler. Bedtime stories are crucial for their learning and growth, fostering imagination and bonding. With Sleepytales, you can ensure they never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime stories into a magical adventure with our AI bedtime story generator and narrator. Enjoy free audio bedtime stories for toddlers or create your own personalized tales. Discover the perfect way to end each day with our collection of calm bedtime stories for toddlers.`,
        }}
      />
    </div>
  );
}
