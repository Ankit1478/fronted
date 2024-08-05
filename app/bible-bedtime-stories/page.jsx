export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Bible Bedtime Stories: Faith-Filled Tales for Peaceful Nights`;
const description = `Discover inspiring Bible bedtime stories with Sleepytales. Create personalized faith-based tales with gentle narration. Nurture your child's spiritual growth at bedtime.`;
const image = `/images/main/Bible-bedtime-stories.webp`;

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
        names={['David', 'Abigail']}
        descriptions={['courageous, faithful, and wise shepherd', 'kind, insightful, and devoted servant']}
        adventure='A spiritual journey through ancient lands to retrieve a sacred scroll and bring its message of hope and redemption to their people'
        text={{
          image1: image,
          image2: `images/main-mobile/Bible-bedtime-stories.webp`,
          alt1: `Bible bedtime stories`,
          alt2: `Bedtime Bible stories`,
          alt3: `Bedtime Bible stories audio`,
          alt4: `Bedtime Bible stories book`,
          alt5: `Bible bedtime story`,
          header1: `Bible bedtime stories with lifelike narration`,
          description1: `Create inspiring Bible bedtime stories in seconds, tailored with your child's name, favorite biblical characters, and beloved scriptures.`,
          header2: `Create Bible bedtime stories in seconds with realistic voice narrations`,
          description2: `Tired from a long day and want to share the Word of God with your little one? With Sleepytales, you can create personalized bedtime Bible stories in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of scripture with our faith-based tales.`,
          header3: `It's never been easier to create your own bedtime Bible story`,
          description3: `With just a few clicks, you can craft a one-of-a-kind Bible bedtime story. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated bedtime stories from the Bible, ready for personalization, will keep you and your child inspired.`,
          header4: `Create your bedtime Bible story`,
          description4: `Choose your characters, theme, scripture, and language, and AI will create your Bible bedtime story in seconds.`,
          header5: `Listen to your bedtime Bible story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors, perfect for bedtime Bible stories audio.`,
          header6: `Order a physical copy of your bedtime Bible story`,
          description6: `Choose your favorite bedtime Bible stories book, and we'll generate high-quality images to match. Preview it online and order your physical copy of the Bible bedtime story.`,
          header7: `See why Sleepytales creates a better Bible bedtime story experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for both parents and children. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime a time of spiritual growth every single night.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day, you're left choosing from a limited selection of Bible story books, reading aloud to your child in a process that can be both time-consuming and exhausting.`,
          list1: [
            `Generic stories that don't personalize the biblical message`,
            `Requires you to read aloud yourself, which can be tiring`,
            `Limited selection of bedtime Bible stories books`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales Bible bedtime stories`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized bedtime Bible stories for your child, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your child's age and understanding`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of Bible bedtime stories generated on-demand`,
            `Soothing music to create the perfect bedtime atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Bible bedtime stories reimagined`,
          description10: `Save time without sacrificing the precious moments of sharing God's Word with your child. Bedtime Bible stories are crucial for their spiritual growth, moral development, and family bonding. With Sleepytales, you can ensure they never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a meaningful spiritual adventure with our AI bedtime Bible story generator and narrator. Whether you need a full-length bedtime Bible story or a quick scripture before sleep, we've got you covered. Discover the perfect way to end each day with our collection of inspiring bedtime stories from the Bible.`,
        }}
      />
    </div>
  );
}
