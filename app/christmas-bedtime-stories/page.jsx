export const runtime = 'edge';
export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import { Chat } from '@/components/chat';

const title = `Christmas Bedtime Stories: Magical Holiday Tales for Kids`;
const description = `Create enchanting Christmas bedtime stories personalized for your child. Enjoy festive tales with lifelike narration and holiday music. Make bedtime magical this season.`;
const image = `/images/main/Christmas-bedtime-stories.webp`;

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
        names={['Ella', 'Rudy']}
        descriptions={['Cheerful, curious, and kind Elf', 'Brave, playful, and loyal Reindeer']}
        adventure='A magical quest to find Santa’s lost sleigh bells and save Christmas'
        text={{
          image1: image,
          image2: `images/main-mobile/Christmas-bedtime-stories.webp`,
          alt1: `Christmas bedtime stories`,
          alt2: `Christmas bedtime story`,
          alt3: `Short christmas bedtime stories`,
          alt4: `Christmas bedtime stories book`,
          alt5: `Bedtime christmas stories`,
          header1: `Christmas bedtime stories with lifelike narration`,
          description1: `Create enchanting Christmas bedtime stories in seconds, tailored with your child's name, favorite holiday characters, and beloved yuletide themes.`,
          header2: `Create Christmas bedtime stories in seconds with realistic voice narrations`,
          description2: `Tired from a long day of holiday preparations and don't have the time to read a bedtime story about Christmas? With Sleepytales, you can create personalized Christmas bedtime stories in seconds and enjoy a realistic AI narrator bringing the story to life. Rediscover the magic of imagination with our holiday-themed tales.`,
          header3: `It's never been easier to create your own Christmas bedtime story`,
          description3: `With just a few clicks, you can craft a one-of-a-kind bedtime story about Christmas. The options are limitless! Bored of the same voice narrator? Choose from plenty of voice options and different languages. Out of ideas? Our library of curated Christmas bedtime short stories, ready for personalization, will keep you delighted throughout the holiday season.`,
          header4: `Create your Christmas bedtime story`,
          description4: `Choose your characters, theme, adventure, and language, and AI will create your Christmas bedtime story in seconds.`,
          header5: `Listen to your Christmas bedtime story`,
          description5: `Enjoy lifelike voice narrations that convey a wide range of emotions and offer different languages with AI voice actors, perfect for Christmas bedtime stories to read online.`,
          header6: `Order a physical copy of your christmas bedtime story`,
          description6: `Choose your favorite bedtime Christmas stories, and we'll generate high-quality images to match. Preview it online and order your physical copy of the Christmas bedtime story.`,
          header7: `See why Sleepytales creates a better christmas bedtime story experience`,
          description7: `Let's compare the traditional approach to the innovative Sleepytales method, and discover how we're revolutionizing bedtime for both parents and children during the holiday season. With Sleepytales, you'll find a more engaging, personalized, and effortless way to make bedtime magical every single night with short Christmas bedtime stories.`,
          header8: `Traditional bedtime stories`,
          description8: `After a long day of holiday activities, you're left choosing from a limited selection of Christmas books, reading aloud to your child in a process that can be both time-consuming and exhausting.`,
          list1: [
            `Generic Christmas stories that don't cater to your child's interests`,
            `Requires you to read aloud yourself, which can be tiring`,
            `Limited selection of Christmas bedtime books`,
            `Same stories repeated night after night`,
            `No festive background music or sound effects to enhance the experience`,
          ],
          header9: `Sleepytales Christmas bedtime stories`,
          description9: `After a busy day of holiday preparations, you can relax as Sleepytales creates and narrates personalized Christmas bedtime stories for your child, offering a quick, effortless, and engaging bedtime experience every night of the holiday season.`,
          list2: [
            `Custom Christmas bedtime stories tailored to your child's interests`,
            `Lifelike voice narration, so you don't have to read aloud`,
            `Endless variety of Christmas bedtime stories generated on-demand`,
            `Soothing holiday music to create the perfect bedtime atmosphere`,
            `Adjustable story length to fit your bedtime routine`,
          ],
          header10: `Christmas bedtime stories reimagined`,
          description10: `Save time without sacrificing the precious moments of reading holiday stories to your child. Christmas bedtime stories are crucial for creating magical memories and fostering imagination during this special time of year. With Sleepytales, you can ensure they never miss out on this important experience.`,
          footer1: `Use Sleepytales to transform bedtime into a magical Christmas adventure with our AI bedtime story generator and narrator. Enjoy Christmas bedtime stories to read online or listen to, all personalized for your child and filled with holiday cheer.`,
        }}
      />
    </div>
  );
}

