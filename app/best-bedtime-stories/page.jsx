export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Best Bedtime Stories: Magical Tales for Dreamy Nights`;
const description = `Discover the best bedtime stories with Sleepytales. Create personalized tales for all ages with enchanting narration. Transform bedtime into a magical experience.`;
const image = `/images/main/Best-bedtime-stories.webp`;

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
        names={['Leo', 'Milo']}
        descriptions={['adventurous and strong lion', 'mischievous and clever monkey']}
        adventure='rescuing their animal friends from a tricky maze in the jungle'
        text={{
          image1: image,
          image2: `images/main-mobile/Best-bedtime-stories.webp`,
          alt1: `Best bedtime stories`,
          alt2: `Best bedtime story`,
          alt3: `Best short bedtime stories`,
          alt4: `Best bedtime stories for adults`,
          alt5: `Best bedtime stories for kids`,
          header1: `Best bedtime stories with lifelike narration`,
          description1: `Create enchanting best bedtime stories in seconds, tailored with your name, favorite characters, and beloved themes.`,
          header2: `Create best bedtime stories in seconds with realistic voice narrations`,
          description2: `Tired from a long day and looking for the best bedtime story? With Sleepytales, you can create personalized best bedtime stories in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of storytelling with our top-rated tales.`,
          header3: `It's never been easier to create your own best bedtime story`,
          description3: `With just a few clicks, you can craft a one-of-a-kind best bedtime story. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated best short bedtime stories, ready for personalization, will keep you delighted.`,
          header4: `Create your best bedtime story`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create the best bedtime story in seconds.`,
          header5: `Listen to your bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite from our collection of best bedtime stories, and we'll generate high-quality images to match. Preview it online and order your physical copy of the story.`,
          header7: `See why Sleepytales creates the best bedtime story experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for everyone. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day, you're left searching for the best bedtime stories, which can be both time-consuming and challenging.`,
          list1: [
            `Generic stories that don't cater to specific interests`,
            `Requires you to read aloud yourself, which can be tiring`,
            `Limited selection of best bedtime stories for adults or children`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales best bedtime stories`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized best bedtime stories, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your interests, including best bedtime stories for girlfriend`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of best bedtime stories generated on-demand`,
            `Soothing music to create the perfect bedtime atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Best bedtime stories reimagined`,
          description10: `Save time without sacrificing the precious moments of sharing the best bedtime story. Whether you're looking for best bedtime stories for kindergarteners or best bedtime stories for kids, these tales are crucial for relaxation, bonding, and creating special memories. With Sleepytales, you can ensure you never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a magical adventure with our AI best bedtime story generator and narrator. Discover the perfect way to end each day with our collection of engaging and personalized best bedtime stories, designed to help everyone drift off to peaceful sleep with a smile.`,
        }}
      />
    </div>
  );
}
