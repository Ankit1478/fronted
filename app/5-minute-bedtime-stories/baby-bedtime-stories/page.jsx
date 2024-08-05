export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Baby Bedtime Stories: Soothing Tales for Peaceful Nights`;
const description = `Discover gentle baby bedtime stories with Sleepytales. Create personalized tales with soft narration and lullabies. Help your little one drift off to sweet dreams.`;
const image = `/images/main/Baby-bedtime-stories.webp`;

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
        names={['Benny', 'Lila']}
        descriptions={['playful, curious, and friendly bear', 'sweet, adventurous, and kind bunny']}
        adventure='A delightful adventure through a colorful forest to find a magical rainbow and share its bright colors with their forest friends'
        text={{
          image1: image,
          image2: `images/main-mobile/Baby-bedtime-stories.webp`,
          alt1: `Baby bedtime stories`,
          alt2: `Bedtime stories for babies`,
          alt3: `Free bedtime stories for babies`,
          alt4: `Short bedtime stories for babies`,
          alt5: `Baby bedtime story`,
          header1: `Baby bedtime stories with lifelike narration`,
          description1: `Create an enchanting bedtime story for baby in seconds, tailored with your little one's name, favorite characters, and beloved themes.`,
          header2: `Create baby bedtime stories in seconds with realistic voice narrations`,
          description2: `Tired from a long day of caring for your little one and don't have the energy to read a bedtime story for babies? With Sleepytales, you can create personalized baby bedtime stories in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of storytelling with our gentle tales.`,
          header3: `It's never been easier to create your own bedtime story for baby`,
          description3: `With just a few clicks, you can craft a one-of-a-kind baby bedtime story. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated free bedtime stories for babies, ready for personalization, will keep you and your little one delighted.`,
          header4: `Create your bedtime story for baby`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your bedtime story for a baby girl or boy in seconds.`,
          header5: `Listen to your baby bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of soothing emotions and offer different languages with AI voice actors.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite bedtime stories for baby, and we'll generate high-quality images to match. Preview it online and order your physical copy of the baby bedtime story.`,
          header7: `See why Sleepytales creates a better baby bedtime story experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for both parents and babies. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day of caring for your baby, you're left choosing from a limited selection of books, reading aloud in a process that can be both time-consuming and exhausting.`,
          list1: [
            `Generic stories that don't cater to your baby's developing interests`,
            `Requires you to read aloud yourself, which can be tiring`,
            `Limited selection of bedtime story books for babies`,
            `Same stories repeated night after night`,
            `No background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales baby bedtime stories`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized bedtime stories for babies, offering a quick, effortless, and engaging bedtime experience every night.`,
          list2: [
            `Custom stories tailored to your baby's age and developmental stage`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of baby bedtime stories generated on-demand`,
            `Soothing music to create the perfect bedtime atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Baby bedtime stories reimagined`,
          description10: `Save time without sacrificing the precious moments of reading to your little one. Bedtime stories for babies are crucial for their learning, language development, and bonding. With Sleepytales, you can ensure they never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a magical adventure with our AI bedtime story generator and narrator. Whether you need a full-length bedtime story for baby or short bedtime stories for babies, we've got you covered. Discover the perfect way to end each day with our collection of soothing bedtime stories for babies.`,
        }}
      />
    </div>
  );
}
