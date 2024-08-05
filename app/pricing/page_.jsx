'use client';

import { useState } from 'react';

import Footer from '@/components/footer';
import { LoginDlg } from '@/components/login';
import { Spinner } from '@/components/ui/spinner';
import { Badge } from "@/components/ui/badge";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    header: `What do you do with my photos after training?`,
    desc: `We train our AI model with input photos, render avatars then delete them and the models from our servers/GPU API's within 7 days. To delete faster simply press "Delete" button and we'll erase all data instantly.`,
  },
  {
    header: `Who owns the pictures?`,
    desc: `You do. We grant you full commercial license and ownership over your photos. We don't use them for any other purpose than training our AI model, which we delete after 7 days.`,
  },
  {
    header: `Why does it take 2 hours and not faster?`,
    desc: `At HeadshotPro, we pride ourself for our high quality results. Quality takes time. We use a lot of computational power to render your photos, and we want to make sure we get it right. We're working on making it faster, but we won't compromise on quality.`,
  },
  {
    header: `What type of photos should I upload?`,
    desc: `We recommend 16 close-ups, and 1 upper body shots. Variety is key: facial expressions, locations, backgrounds and perspectives should all be different. High quality photos work best; minimal makeup is advised as it may be exaggerated in the photos. No nudes, swimwear/underwear is OK.`,
  },
  {
    header: `Why do you need so many photos?`,
    desc: `We need a lot of photos to train our AI model to create the best possible headshot for you. The more photos you upload, the better the result will be.`,
  },
  {
    header: `Where is my data stored?`,
    desc: `Data is stored securely on servers in the United States, by vetted, highly secure, third party partners of us.`,
  },
  {
    header: `Can I delete my data?`,
    desc: `After 30 days, we will delete your photos and data from our active databases. You can also request deletion at any time by manually deleting your photos from your profile page.`,
  },
  {
    header: `Can I get a refund?`,
    desc: `Yes, we can refund purchases made within the first 14 days, provided you haven’t downloaded any photos yet. You can request a refund at www.headshotpro.com/profile/refund. Please refer to our Terms of Service for details.`,
  },
  {
    header: `How many good photos can I expect?`,
    desc: `Just like a real photo shoot, not every photo is a winner. You might find a few extra fingers, an unexpected hairstyle, or a strange expression among your results. You can expect 3-6 incredible profile-worthy headshots from your order—but we let you see the entire batch, so you can decide on the keepers yourself.`,
  },
  {
    header: `What photo formats do you accept?`,
    desc: `We support JPG, PNG, WebP, and HEIC but not AVIF or GIF.`,
  },
  {
    header: `Is payment secure?`,
    desc: `Yes, we use Stripe for payment. We do not store any of your credit card information.`,
  },
  {
    header: `Can I get an invoice?`,
    desc: `Yes, you can get an invoice for your purchase. Head to the invoice page after purchase, add your details and save to PDF.`,
  },
  {
    header: `Can I use my photos anywhere?`,
    desc: `Yes, you can use your photos anywhere you want. We grant you full commercial license and ownership over your photos.`,
  },
  {
    header: `Can I use my headshots at work?`,
    desc: `Yes, our business headshots are so good that you’ll want to post them on your personal socials after work. Perfect profile pictures for your email signature, LinkedIn, or anywhere else you need a professional photo of yourself at work.`,
  },
  {
    header: `Can this replace a real photo shoot?`,
    desc: `Yes, HeadshotPro has reached professional grade photo quality that is indistinguishable from a photo taken by a real photographer. You can confidently use your AI headshots anywhere you’d use a real photo of yourself.`,
  },
];

export default function Page() {
  const { data: user } = { data: {} };

  const { isUpgraded = false, plan, referrals = {}, trialAvailable = false, customerId } = {};

  const [isRedirecting, setRedirecting] = useState(false);

  const handleUpgrade = async (user) => {

  };

  return (
    <div className="relative flex flex-col h-[calc(100dvh_-_theme(spacing.16))] overflow-y-auto">
      <div className='flex flex-1 flex-col'>
        <div className="flex flex-1 flex-col w-full">
          <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
            <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Simple, transparent pricing
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Unlock all features including longer stories, different voice actors, and more.
              </p>
            </div>
            <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
              <div className="grid gap-6">
                <h3 className="text-xl font-bold sm:text-2xl">
                  What&apos;s included in the FREE plan
                </h3>
                <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg><p className="max-w-48 lg:max-w-72">Basic level story writer</p>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg><p className="max-w-48 lg:max-w-72">7 short stories per month</p>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg><p className="max-w-48 lg:max-w-72">Unlimited voice narrations</p>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg><p className="max-w-48 lg:max-w-72">2 voice actors</p>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg><p className="max-w-48 lg:max-w-72">Choose from 2 background songs</p>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg><p className="max-w-48 lg:max-w-72">Email support</p>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg><p className="max-w-48 lg:max-w-72">Supported languages: English, Spanish</p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 text-center">
                <div>
                  <h4 className="text-7xl font-bold">$0</h4>
                  <p className="text-sm font-medium text-muted-foreground">Billed Monthly</p>
                </div>
                <LoginDlg onLoginSuccess={() => window.location.href = '/'}>
                  <button disabled={!!plan}
                    className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md">
                    Get Started
                  </button>
                </LoginDlg>
              </div>
            </div>
            <div className="w-full rounded-lg border">
              <div className="text-right pr-3 pt-3">
                <Badge variant="outline" className="px-3 py-2 border-black">Summer sale</Badge>
              </div>
              <div className="grid w-full items-start gap-10 p-10 pt-0 md:grid-cols-[1fr_200px]">
                <div className="grid gap-6">
                  <h3 className="text-xl font-bold sm:text-2xl">
                    What&apos;s included in the PRO plan
                  </h3>
                  <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg><p className="max-w-48 lg:max-w-72">Expert level story writer</p>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg><p className="max-w-48 lg:max-w-72">42 short, medium, or long stories per month</p>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg><p className="max-w-48 lg:max-w-72">Unlimited voice narrations</p>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg><p className="max-w-48 lg:max-w-72">6 unique voice actors</p>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg><p className="max-w-48 lg:max-w-72">Access to our full library of background songs</p>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg><p className="max-w-48 lg:max-w-72">Download story audio</p>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg><p className="max-w-48 lg:max-w-72">Email priority support</p>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg><p className="max-w-48 lg:max-w-72">Supported languages: English, Arabic, Chinese, French, German, Greek, Hebrew, Hindi, Indonesian, Italian, Japanese, Korean, Portuguese, Russian, Spanish, Thai, Vietnamese</p>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 text-center">
                  <div>
                    <div className="text-center relative">
                      <span className="text-muted-foreground line-through absolute text-[3.5rem] left-0 xxxs:left-[10%] xxs:left-[15%] xs:left-[22%] sm:left-[27%] md:left-[-1.2rem]">$9</span>
                      <h4 className="text-7xl font-bold">$6</h4>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">Billed Monthly</p>
                  </div>
                  {!!plan ?
                    <button disabled={isUpgraded} onClick={() => handleUpgrade(user)}
                      className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md">
                      Get Started {isRedirecting && <>&nbsp;<Spinner /></>}
                    </button> :
                    <LoginDlg
                      onLoginSuccess={(credential) => handleUpgrade(credential.user)}
                      emailLoginPayload={{ upgrade: { plan: 'pro' } }}>
                      <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md">
                        Get Started
                      </button>
                    </LoginDlg>}
                </div>
              </div>
            </div>
          </section>
          <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto flex max-w-5xl flex-col justify-center gap-12 lg:items-stretch">
                <div className="flex flex-col lg:max-w-lg text-center mx-auto">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-primary-500 sm:text-4xl">
                      Frequently Asked Questions
                    </h2> 
                    <p className="mt-4 text-base font-normal text-gray-500">
                      Answers to common questions about our professional AI generated headshot service for individuals and remote teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Accordion type="single" collapsible className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {faqs.map((v, index) => (
                <AccordionItem value={index + 1} className="border-b border-gray-200 w-full pb-4">
                  <AccordionTrigger className="flex w-full items-center justify-between text-left text-base font-bold text-gray-900 py-0">
                    {v.header}
                  </AccordionTrigger>
                  <AccordionContent className="text-base font-normal text-gray-900">
                    {v.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}