export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Bedtime Stories for Infants: Soothing Tales for Tiny Dreamers`;
const description = `Discover gentle bedtime stories for infants with Sleepytales. Create personalized tales with soft narration and calming sounds. Nurture your baby's bedtime routine.`;
const image = `/images/main/Bedtime-stories-for-infants.webp`;

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
        descriptions={['soft and cuddly bear', 'cheerful and playful fish']}
        adventure='discovering colorful sea stars in a magical underwater world'
        text={{
          image1: image,
          image2: `images/main-mobile/Bedtime-stories-for-infants.webp`,
          alt1: `Bedtime stories for infants`,
          alt2: `Bedtime stories for infants online`,
          alt3: `Bedtime story for infants`,
          alt4: `Bedtime story books for infants`,
          alt5: `Bedtime stories for infants free`,
          header1: `Custom bedtime stories for infants with lifelike narration`,
          description1: `Create enchanting bedtime stories for infants in seconds, tailored with gentle themes and soothing music.`,
          header2: `Create bedtime stories for infants in seconds with realistic voice narrations`,
          description2: `Exhausted from caring for your baby and need a calming bedtime routine? With Sleepytales, you can create personalized bedtime stories for infants in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of storytelling with our infant-friendly tales.`,
          header3: `It's never been easier to create your own bedtime story for infants`,
          description3: `With just a few clicks, you can craft a one-of-a-kind bedtime story for infants. The options are limitless! Looking for variety? Choose from plenty of gentle voice options and soothing background sounds. Out of ideas? Our library of curated bedtime stories for infants online, ready for personalization, will keep you and your baby delighted.`,
          header4: `Create your bedtime story for infants`,
          description4: `Choose your themes, sounds, and pacing, and AI will create your bedtime story for infants in seconds.`,
          header5: `Listen to your bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a soft, calming tone perfect for infants.`,
          header6: `Order a physical copy of your bedtime story`,
          description6: `Choose your favorite bedtime story books for infants, and we'll generate high-quality, baby-friendly images to match. Preview it online and order your physical copy of the story.`,
          header7: `See why Sleepytales creates a better bedtime stories for infants experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for parents and infants. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime soothing every single night.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day of caring for your infant, you're left searching for appropriate stories, which can be both time-consuming and challenging.`,
          list1: [
            `Generic stories that aren't tailored for infants`,
            `Requires you to read aloud yourself, which can be tiring - Limited selection of bedtime story books for infants`,
            `Same stories repeated night after night`,
            `No customizable soothing background sounds`,
          ],
          header9: `Sleepytales bedtime stories for infants`,
          description9: `After a busy day, you can relax as Sleepytales creates and narrates personalized bedtime stories for infants, offering a quick, effortless, and calming bedtime experience every night.`,
          list2: [
            `Custom stories tailored to infant development stages`,
            `Lifelike, gentle voice narration, so you don't have to read aloud`,
            `Endless variety of bedtime stories for infants free generated on-demand`,
            `Soothing music and sounds to create the perfect bedtime atmosphere`,
            `Adjustable story length to fit your infant's bedtime routine`,
          ],
          header10: `Bedtime stories for infants reimagined`,
          description10: `Save time without sacrificing the precious moments of bonding with your baby. Bedtime stories for infants are crucial for language development, emotional bonding, and establishing sleep routines. With Sleepytales, you can ensure your little one never misses out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a peaceful, nurturing moment with our AI bedtime story generator and narrator. Discover the perfect way to end each day with our collection of gentle and personalized bedtime stories for infants.`,
        }}
      />
    </div>
  );
}
