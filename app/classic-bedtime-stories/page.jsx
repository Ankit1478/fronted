export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Classic Bedtime Stories: Timeless Tales for Magical Nights`;
const description = `Rediscover beloved classic bedtime stories with Sleepytales. Enjoy timeless tales with modern, personalized narration. Create magical bedtime moments every night.`;
const image = `/images/main/Bedtime-stories-to-tell.webp`;

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
        names={['Wilbur', 'Charlotte']}
        descriptions={['young, naive pig', 'wise and clever spider']}
        adventure={`Escaping the farm to save Wilbur from becoming bacon, enlisting the help of Charlotte's web-writing skills and the other barnyard animals along the way.`}
        text={{
          image1: image,
          image2: `images/main-mobile/Bedtime-stories-to-tell.webp`,
          alt1: `Classic bedtime stories`,
          alt2: `Story bedtime classic`,
          alt3: `Classic bedtime story`,
          alt4: `Classic bedtime stories book`,
          alt5: `Classic bedtime stories online`,
          header1: `Classic bedtime stories with lifelike narration`,
          description1: `Create enchanting classic bedtime stories in seconds, tailored with your child's name, favorite characters, and beloved themes.`,
          header2: `Bring classic bedtime stories to life in seconds with realistic voice narrations`,
          description2: `Tired from a long day and want to share a bedtime story classic with your little one? With Sleepytales, you can enjoy personalized classic bedtime stories for kids in seconds with a realistic AI narrator bringing the tale to life. Rediscover the magic of timeless storytelling with our engaging renditions.`,
          header3: `It's never been easier to enjoy your favorite classic bedtime story`,
          description3: `With just a few clicks, you can experience a one-of-a-kind classic bedtime story. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Looking for variety? Our library of curated classic bedtime stories book selections, ready for personalization, will keep you and your children delighted.`,
          header4: `Create your classic bedtime story experience`,
          description4: `Choose your favorite classic tale, customize characters if desired, and let AI bring the classic bedtime story to life in seconds.`,
          header5: `Listen to your bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite bedtime stories classic, and we'll generate high-quality images to match. Preview it online and order your physical copy of the story.`,
          header7: `See why Sleepytales creates a better classic bedtime stories experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for both parents and children. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night with classic bedtime stories online.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day, you're left choosing from a limited selection of classic books, reading aloud to your child in a process that can be both time-consuming and exhausting.`,
          list1: [
            `Limited selection of physical classic bedtime stories books`,
            `Requires you to read aloud yourself, which can be tiring`,
            `Same classic stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
            `Difficulty in finding less common classic tales`,
          ],
          header9: `Sleepytales classic bedtime stories`,
          description9: `After a busy day, you can relax as Sleepytales narrates personalized classic bedtime stories, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Wide selection of classic bedtime stories for kids`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Option to personalize classic tales with your child's name`,
            `Soothing music to create the perfect bedtime atmosphere`,
            `Easy access to both popular and lesser-known classic bedtime stories`,
          ],
          header10: `Classic bedtime stories reimagined`,
          description10: `Save time without sacrificing the precious moments of sharing timeless tales with your child. Classic bedtime stories are crucial for cultural literacy, moral lessons, and bonding. With Sleepytales, you can ensure they never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime stories into a magical journey through time-honored tales with our AI classic bedtime story narrator.`,
        }}
      />
    </div>
  );
}

