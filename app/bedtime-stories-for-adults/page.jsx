export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Bedtime Stories for Adults: Relaxing Tales for Peaceful Nights`;
const description = `Discover soothing bedtime stories for adults. Personalized tales with calming narration to help you unwind and sleep better. Create your perfect bedtime story tonight.`;
const image = `/images/main/Bedtime-stories-for-adults.webp`;

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
        names={['Jack', 'Emma']}
        descriptions={['adventurous, intelligent, and witty writer', 'compassionate, imaginative, and spirited artist']}
        adventure='An exhilarating quest through a mysterious city to uncover a long-lost manuscript and unveil its hidden secrets'
        audience='adults'
        text={{
          image1: image,
          image2: `images/main-mobile/Bedtime-stories-for-adults.webp`,
          alt1: `Bedtime stories for adults`,
          alt2: `Bedtime story for adults`,
          alt3: `Free audio bedtime stories for adults`,
          alt4: `Good bedtime stories for adults`,
          alt5: `Free bedtime stories for adults`,
          header1: `Bedtime stories for adults with lifelike narration`,
          description1: `Create an enchanting bedtime story for adults in seconds, tailored with your name, favorite themes, and preferred storytelling styles.`,
          header2: `Create bedtime stories for adults in seconds with realistic voice narrations`,
          description2: `Tired from a long day and struggling to unwind? With Sleepytales, you can create personalized bedtime stories for adults in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of storytelling with our short bedtime stories for adults.`,
          header3: `It's never been easier to create your own bedtime story for adults`,
          description3: `With just a few clicks, you can craft a one-of-a-kind bedtime story for adults. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated free bedtime stories for adults, ready for personalization, will keep you delighted.`,
          header4: `Create your bedtime story for adults`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your bedtime story for adults in seconds.`,
          header5: `Listen to your bedtime story`,
          description5: `Enjoy lifelike voice narrations of good bedtime stories for adults that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite bedtime story for adults, and we'll generate high-quality images to match. Preview it online and order your physical copy of the bedtime story.`,
          header7: `See why Sleepytales creates a better bedtime story experience for adults`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for adults. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night.`,
          header8: `Traditional bedtime stories for adults`,
          description8: `After a long day at work, you're left choosing from a limited selection of books, struggling to find content that helps you relax and unwind.`,
          list1: [
            `Generic stories that don't cater to your interests`,
            `Limited selection of bedtime books for adults`,
            `Lack of variety in themes and styles`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales bedtime stories for adults`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized stories for you, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your interests, including calming bedtime stories for adults`,
            `Lifelike voice narration, perfect for free audio bedtime stories for adults`,
            `Endless variety of stories generated on-demand`,
            `Soothing music to create the perfect bedtime atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Bedtime stories for adults reimagined`,
          description10: `Save time without sacrificing the precious moments of winding down before sleep. Bedtime stories for adults to fall asleep free are crucial for relaxation and mental well-being. With Sleepytales, you can ensure you never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a magical adventure with our AI bedtime story generator and narrator, offering everything from small bedtime stories for adults to more elaborate tales. Discover the perfect way to relax and drift off to sleep with our personalized bedtime stories for adults.`,
        }}
      />
    </div>
  );
}