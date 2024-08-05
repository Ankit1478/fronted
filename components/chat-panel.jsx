import { Fragment, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { UserMessage } from '@/components/user-message';
import { Input } from '@/components/ui/input';
import { TextareaAutosize } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Heart,
  CirclePlus,
  Play,
  CircleStop,
  Pause,
  Check,
  School,
  Baseline,
  Library,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Autoplay from "embla-carousel-autoplay"
import EmblaCarousel from './embla-carousel'
import HoverImage from './hover-image';

import { Header } from '@/components/header';
import { LoginDlg } from '@/components/login';
import { Player } from '@/components/player';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { IconRedX, IconGreenCheck, IconStar } from '@/components/ui/icons';
import { ReloadIcon } from "@radix-ui/react-icons";
import { Narrate } from '@/components/narrate'

import { cn, fixAudioForSafariMobile } from '@/lib/utils';
import { useSidebar } from '@/lib/hooks/use-sidebar';
import { useHeader } from '@/lib/hooks/use-header';
import { useAudio } from '@/lib/hooks/use-audio';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';
import { getChats, setChat } from '@/lib/features/storage/storage';
import { getUser } from '@/lib/features/user/user';
import { decrypt, uuid } from '@/lib/utils';
import { encrypt } from '@/app/actions';

import suggestedStories from '@/lib/suggested-stories.json';
import { duration } from 'moment';

let audioContext, audioContextBgm;

export function ChatPanel({
  text = {},
  names = [],
  descriptions = [],
  adventure = '',
  audience = '',
}) {
  const pathname = usePathname();

  const router = useRouter();

  const { data: signInCheckResult } = { data: {} };

  const { data: user } = { data: {} };

  const { isUpgraded = false, chats: userChats, storyLimit = 0 } = {};

  const { stopAudio } = useAudio();

  const [inputNames, setInputNames] = useState(names);
  const [inputDescs, setInputDescs] = useState(descriptions);
  const [inputAdven, setInputAdven] = useState(adventure);
  const [inputSkill, setInputSkill] = useState('basic');
  const [inputLimit, setInputLimit] = useState('500');
  const [inputLang, setInputLang] = useState('English');
  const [inputAudience, setInputAudience] = useState(audience || 'children');
  const [inputTheme, setInputTheme] = useState('calm');
  const [messages, setMessages] = [[]];
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const inputRef = useRef(null);
  const { setSidebarOpen, setUpgrading, narrator } = useSidebar();
  const { isLandingHeader, setLandingHeader } = useHeader();
  const [isLoggingIn, setLoggingIn] = useState(false);
  const [suggestions, setSuggestions] = useState(null);
  const suggestionsRef = useRef(null);

  const [playCalled, setPlayCalled] = useState(false);
  const [playing, setPlaying] = useState(false);

  const [errors, setErrors] = useState(null);

  const [curIndex, setCurIndex] = useState(-1);


  const chaColors = [
    'bg-[#FDE4CF]', 'bg-[#FFCFD2]', 'bg-[#F1C0E8]', 'bg-[#90DBF4]', 'bg-[#B9FBC0]'
  ];

  const OPTIONS = { loop: true }
  const SLIDES = Array.from(Array(8).keys())

  const devices = [
    {name: 'iPhone', icon: 'https://www.apple.com/v/apple-podcasts/e/images/overview/devices_iphone__05o4ipy8jg2u_large.jpg'},
    {name: 'CarPlay', icon: 'https://www.apple.com/v/apple-podcasts/e/images/overview/devices_iphone__05o4ipy8jg2u_large.jpg'},
    {name: 'HomePod', icon: 'https://www.apple.com/v/apple-podcasts/e/images/overview/devices_iphone__05o4ipy8jg2u_large.jpg'},
    {name: 'Mac', icon: 'https://www.apple.com/v/apple-podcasts/e/images/overview/devices_iphone__05o4ipy8jg2u_large.jpg'},
    {name: 'iPad', icon: 'https://www.apple.com/v/apple-podcasts/e/images/overview/devices_iphone__05o4ipy8jg2u_large.jpg'},
    {name: 'Apple Watch', icon: 'https://www.apple.com/v/apple-podcasts/e/images/overview/devices_iphone__05o4ipy8jg2u_large.jpg'},
    {name: 'Apple TV', icon: 'https://www.apple.com/v/apple-podcasts/e/images/overview/devices_iphone__05o4ipy8jg2u_large.jpg'}
  ]
  const questionItems = [
    {question: 'What is Apple Podcasts?', answer: 'Apple Podcasts is the best app for finding, following, and listening to millions of the world’s most popular podcasts. And you can easily discover new shows through expert curation and personalized recommendations.'},
    {question: 'Where can I listen?', answer: 'Apple Podcasts is already installed on all your favorite Apple devices. You can also listen with CarPlay, on a variety of smart speakers, and on select car systems.'},
    {question: 'How do I listen in my car?', answer: 'CarPlay lets you connect your iPhone to your car’s built-in display and is available in over 800 different models. CarPlay makes it easy to access Apple Podcasts on your vehicle’s touchscreen or with Siri. Apple Podcasts also comes preinstalled in select cars.'},
    {question: 'How does it cost?', answer: 'Apple Podcasts offers millions of shows completely free. And some publishers offer premium shows, episodes, and channels that can be purchased through a monthly or annual subscription.'},
    {question: 'What is Apple Podcasts Subscriptions?', answer: 'Apple Podcasts Subscriptions is a global marketplace for you to discover premium subscriptions offered by your favorite creators. As part of your premium subscription, you get access to a variety of benefits curated by creators, such as access to additional content, ad-free listening, and early or exclusive access to new series.'},
  ]

  const handleSkillChange = (skill) => {
    if (!skill) return;
    if (!isUpgraded && skill != 'basic') return setUpgrading(true);

    setInputSkill(skill);
  };

  const handleLimitChange = (limit) => {
    if (!limit) return;
    if (!isUpgraded && limit != '500') return setUpgrading(true);

    setInputLimit(limit);
    localStorage.setItem('limit', JSON.stringify(limit));
  };

  const handleLangChange = (lang) => {
    if (!lang) return;
    if (!isUpgraded && !['English', 'Spanish'].includes(lang)) return setUpgrading(true);

    setInputLang(lang);
    localStorage.setItem('lang', JSON.stringify(lang));
  };

  const handleAudienceChange = (audience) => {
    if (!audience) return;

    setInputAudience(audience);
    localStorage.setItem('audience', JSON.stringify(audience));
  };

  const handleThemeChange = (theme) => {
    if (!theme) return;

    setInputTheme(theme);
    localStorage.setItem('story-theme', JSON.stringify(theme));
  };

  const handleSubmit = async (formData) => {
  
  };

  const handleLoginSuccessSubmit = async (credential) => {
  
  };

  const addInputName = (e) => {

  };

  const handleHeightChange = (id, index, height, rowHeight) => {
  
  };

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log("test")
      const scrollTop = window.scrollY;
      const transformValue = Math.max(-60, Math.min(0, -scrollTop));
      const elements = document.querySelectorAll('.edge-item');

      elements.forEach(element => {
        element.style.transform = `matrix(1, 0, 0, 1, 0, ${transformValue})`;
      });
    };

    addEventListener('scroll', handleScroll);

    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    addEventListener('resize', handleResize);

    return () => removeEventListener('resize', handleResize);
  }, []);

  // If there are messages and the new button has not been pressed, display the new Button
  if (messages.length > 0 && !isButtonPressed) {
    return (
      <></>
    );
  }

  return (
    <div className="w-full flex flex-col bg-[#F5F5F7]">
      <div className="hero fade-in in-view">
        <div className="hero__carousel flickity-enabled">
          <div className="flickity-viewport" style = {{ touchAction: 'pan-y' }} >
            <div className="flickity-slider" style = {{ left: '0px', transform: 'translateX(0%)' }} >
              <div className="hero__carousel__item hero__carousel__item--step-2 is-selected" data-theme="grey" style = {{ position: 'absolute', left: '0px', transform: 'translateX(0%)' }}>
                <div className="hero__carousel__item__inner">
                  <img className="hero__carousel__item__visual" src="/images/hero-carousel.jpg" alt="" />
                    <Header />
                    <div className="hero__carousel__item__body absolute px-6 py-28 max-sm:py-20 w-full">
                      <div className="w-full flex flex-col md:flex-1 md:flex-row md:max-h-full pb-4">
                        <div className="flex flex-col md:flex-1">
                          <div className={cn("flex flex-1 flex-col h-full py-10 items-center", !isLandingHeader ? "md:py-28" : "md:py-0 md:justify-center")}>
                            <form id="submit"
                              onSubmit={(e) => {
                                e.preventDefault();

                                if (isLoggingIn) return;

                                const formData = new FormData(e.currentTarget);
                                formData.append('user', user.uid);

                                handleSubmit(new FormData(e.currentTarget));
                              }}
                              className="px-3.5 lg:px-10 w-full max-w-full md:max-w-3xl lg:max-w-[52rem]">
                              {isLandingHeader && <div className="flex-col w-full space-y-3 lg:space-y-4">
                                
                                <div className="flex flex-col leading-6 items-center text-center gap-4">
                                  <div className="flex flex-col items-center gap-1">
                                    <h1 className="text-5xl max-md:text-[2rem] text-white font-normal leading-tight font-serif">
                                      {text.header1}
                                    </h1>
                                    <span className="flex font-normal text-base text-[#BBBBBB] mb-6">
                                      {text.description1}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex justify-center space-x-6">
                                  <LoginDlg onLoginSuccess={() => window.location.reload()}>
                                    <Button className="rounded-md text-base py-5 px-4">Get started for free</Button>
                                  </LoginDlg>
                                </div>                
                              </div>}
                              <div className={cn("flex-col w-full", isLandingHeader ? "hidden" : "flex")}>
                                <div className="w-full mb-6 lg:mb-4">
                                  <p className="text-[30px] leading-[34px] lg:text-[40px] lg:leading-[48px] font-normal">What adventure will you create next?</p>
                                </div>
                                <div className="w-full flex justify-around sm:justify-start overflow-x-auto">
                                  <Select name="skill" value={inputSkill} onValueChange={handleSkillChange}>
                                    <SelectTrigger className="shrink-0 w-20 sm:w-28 border-0 focus:ring-0 justify-start space-x-2 truncate px-0 sm:px-3">
                                      <SelectValue placeholder="Choose your story length" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        <SelectLabel>
                                          Choose your writer&apos;s skill level
                                        </SelectLabel>
                                        <SelectItem value="basic">
                                          <div className="flex items-center h-10">
                                            <Library className="hidden sm:block mr-2 w-4 h-4" />
                                            <p>Basic</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="expert">
                                          <div className="flex items-center h-10">
                                            <School className="hidden sm:block mr-2 w-4 h-4" />
                                            <p>Expert</p>
                                            {!isUpgraded && <Badge className="ml-2">Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                  <Select name="limit" value={inputLimit} onValueChange={handleLimitChange}>
                                    <SelectTrigger className="shrink-0 w-20 sm:w-48 border-0 focus:ring-0 justify-start space-x-2 truncate px-0 sm:px-3">
                                      <SelectValue placeholder="Choose your story length" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        <SelectLabel>
                                          Choose your story length
                                        </SelectLabel>
                                        <SelectItem value="500">
                                          <div className="flex items-center h-10">
                                            <p className="block sm:hidden">Short</p>
                                            <p className="hidden sm:block">Short (500 words)</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="750">
                                          <div className="flex items-center h-10">
                                            <p className="block sm:hidden">Medium</p>
                                            <p className="hidden sm:block">Medium (750 words)</p>
                                            {!isUpgraded && <Badge className="ml-2">Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="1000">
                                          <div className="flex items-center h-10">
                                            <p className="block sm:hidden">Long</p>
                                            <p className="hidden sm:block">Long (1000 words)</p>
                                            {!isUpgraded && <Badge className="ml-2">Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                  <Select name="lang" value={inputLang} onValueChange={handleLangChange}>
                                    <SelectTrigger className="shrink-0 w-20 sm:w-32 border-0 focus:ring-0 justify-start space-x-2 px-0 sm:px-3">
                                      <SelectValue placeholder="Choose your story languages" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        <SelectLabel>
                                          Choose your story&apos;s language
                                        </SelectLabel>
                                        <SelectItem value="English">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>English</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Spanish">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Spanish</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Arabic">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Arabic</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Chinese">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Chinese</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="French">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>French</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="German">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>German</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Greek">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Greek</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Hebrew">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Hebrew</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Hindi">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Hindi</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Indonesian">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Indonesian</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Italian">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Italian</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Japanese">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Japanese</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Korean">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Korean</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Portuguese">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Portuguese</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Russian">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Russian</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Thai">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Thai</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="Vietnamese">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Vietnamese</p>
                                            {!isUpgraded && <Badge>Upgrade</Badge>}
                                          </div>
                                        </SelectItem>
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                  <Select name="audience" value={inputAudience} onValueChange={handleAudienceChange}>
                                    <SelectTrigger className="shrink-0 w-20 sm:w-28 border-0 focus:ring-0 justify-start space-x-2 px-0 sm:px-3">
                                      <SelectValue placeholder="Who is this story for?" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        <SelectLabel>
                                          Who is this story for?
                                        </SelectLabel>
                                        <SelectItem value="children">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Children</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="adults">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Adults</p>
                                          </div>
                                        </SelectItem>
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                  <Select name="theme" value={inputTheme} onValueChange={handleThemeChange}>
                                    <SelectTrigger className="hidden sm:flex shrink-0 w-32 border-0 focus:ring-0 justify-start space-x-2 px-0 sm:px-3">
                                      <SelectValue placeholder="What's the theme of the story?" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        <SelectLabel>
                                          What&apos;s the theme of the story?
                                        </SelectLabel>
                                        <SelectItem value="calm">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Calm</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="adventurous">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Adventurous</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="magical">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Magical</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="funny">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Funny</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="educational">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Educational</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="inspirational">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Inspirational</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="mythical">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Mythical</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="fantasy">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Fantasy</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="friendship">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Friendship</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="family">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Family</p>
                                          </div>
                                        </SelectItem>
                                        <SelectItem value="love">
                                          <div className="flex items-center space-x-2 h-10">
                                            <p>Love</p>
                                          </div>
                                        </SelectItem>
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="relative flex items-stretch w-full border rounded-[2rem] lg:rounded-[2.5rem] py-3 px-2 pr-6 pl-4 md:pl-6 mb-2 flex-col sm:flex-row">
                                  <div className="flex flex-col w-full sm:w-[30%] border-b sm:border-0 pb-2 sm:pb-0">
                                    <div className="px-2">
                                      <div className="flex items-center space-x-2">
                                        <p className="text-[0.75rem] text-[#bbbbbb] truncate">Character Name(s)</p>
                                        {inputNames.length < 5 ? (
                                          <Button type="button" variant="ghost" size="icon" className='w-4 h-4' onClick={addInputName}>
                                            <CirclePlus color='#bbbbbb' className='h-4' />
                                          </Button>
                                        ) : null}
                                      </div>
                                      <p className={cn(
                                        "text-xs", ['names', 'descriptions', 'adventure'].some((e) => errors?.includes(e)) ? errors.includes('names') ? "block" : "hidden sm:block" : "hidden",
                                        errors?.includes('names') ? "text-rose-600" : "text-transparent",
                                      )}>1000 character max length per name</p>
                                    </div>
                                    <div className="w-full h-full sm:border-r pt-1 px-2">
                                      <div className="w-full h-full flex space-y-1 items-start flex-col">
                                        {inputNames.map((input, index) => (<Fragment key={index}>
                                          <div className="w-full">
                                            <p
                                              id={`name-line-${index}`}
                                              className={cn(
                                                "absolute px-3 py-2 text-transparent -z-[1] min-h-[37px]",
                                                "text-[0.875rem] border-0 rounded-3xl !ring-0 !ring-offset-0",
                                                chaColors[index],
                                              )}>{input}</p>
                                            <TextareaAutosize
                                              id={`name-${index}`}
                                              type="text"
                                              value={input}
                                              minRows={1}
                                              className={cn("text-[0.875rem] border-0 rounded-3xl !ring-0 !ring-offset-0", "text-black", chaColors[index])}
                                              onChange={e => {
                                                setErrors(null);
                                                setInputNames((inputNames) => [
                                                  ...inputNames.slice(0, index),
                                                  e.target.value
                                                    .replaceAll('⁂', '')
                                                    .replaceAll('\n', ' ')
                                                    .replaceAll(/\s{2,}/g, ' '),
                                                  ...inputNames.slice(index + 1),
                                                ]);
                                              }}
                                              onKeyDown={(e) => {
                                                if (e.key == 'Backspace' && input == '') {
                                                  setInputNames((inputNames) => [...inputNames.slice(0, index), ...inputNames.slice(index + 1)]);
                                                  setInputDescs((inputDescs) => [...inputDescs.slice(0, index), ...inputDescs.slice(index + 1)]);
                                                }
                                              }}
                                              onHeightChange={(height, { rowHeight }) => handleHeightChange('name', index, height, rowHeight)}
                                            />
                                          </div>
                                          <div id={`name-space-${index}`}></div>
                                        </Fragment>))}
                                        <Input
                                          type="hidden"
                                          name="name"
                                          value={inputNames.filter((v, index) => v.trim() != "" && inputDescs[index].trim() != "").join("⁂")}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col w-full sm:w-[35%] border-b sm:border-0 pb-2 sm:pb-0">
                                    <div className="px-2 pt-2 sm:pt-0">
                                      <p className="text-[0.75rem] text-[#bbbbbb] truncate">Character Description(s)</p>
                                      <p className={cn(
                                        "text-xs", ['names', 'descriptions', 'adventure'].some((e) => errors?.includes(e)) ? errors.includes('descriptions') ? "block" : "hidden sm:block" : "hidden",
                                        errors?.includes('descriptions') ? "text-rose-600" : "text-transparent",
                                      )}>1000 character max length per description</p>
                                    </div>
                                    <div className="w-full h-full sm:border-r pt-1 px-2">
                                      <div className="w-full h-full flex space-y-1 items-start flex-col">
                                        {inputDescs.map((input, index) => (<Fragment key={index}>
                                          <div className="w-full">
                                            <p
                                              id={`description-line-${index}`}
                                              className={cn(
                                                "absolute px-3 py-2 text-transparent -z-[1]  min-h-[37px]",
                                                "text-[0.875rem] border-0 rounded-3xl !ring-0 !ring-offset-0",
                                                chaColors[index],
                                              )}>{input}</p>
                                            <TextareaAutosize
                                              id={`description-${index}`}
                                              type="text"
                                              value={input}
                                              minRows={1}
                                              className={cn("text-[0.875rem] border-0 rounded-3xl !ring-0 !ring-offset-0", "text-black", chaColors[index])}
                                              onChange={e => {
                                                setErrors(null);
                                                setInputDescs((inputDescs) => [
                                                  ...inputDescs.slice(0, index),
                                                  e.target.value
                                                    .replaceAll('⁂', '')
                                                    .replaceAll('\n', ' ')
                                                    .replaceAll(/\s{2,}/g, ' '),
                                                  ...inputDescs.slice(index + 1),
                                                ]);
                                              }}
                                              onKeyDown={(e) => {
                                                if (e.key == 'Backspace' && input == '') {
                                                  setInputNames((inputNames) => [...inputNames.slice(0, index), ...inputNames.slice(index + 1)]);
                                                  setInputDescs((inputDescs) => [...inputDescs.slice(0, index), ...inputDescs.slice(index + 1)]);
                                                }
                                              }}
                                              onHeightChange={(height, { rowHeight }) => handleHeightChange('description', index, height, rowHeight)}
                                            />
                                          </div>
                                          <div id={`description-space-${index}`}></div>
                                        </Fragment>))}
                                        <Input
                                          type="hidden"
                                          name="description"
                                          value={inputDescs.filter((v, index) => v.trim() != "" && inputNames[index].trim() != "").join("⁂")}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col w-full sm:w-[35%] border-b sm:border-0 pb-2 sm:pb-0">
                                    <div className="px-2 pt-2 sm:pt-0">
                                      <p className="text-[0.75rem] text-[#bbbbbb] truncate">Adventure</p>
                                      <p className={cn(
                                        "text-xs", ['names', 'descriptions', 'adventure'].some((e) => errors?.includes(e)) ? errors.includes('adventure') ? "block" : "hidden sm:block" : "hidden",
                                        errors?.includes('adventure') ? "text-rose-600" : "text-transparent",
                                      )}>1000 character max length</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row">
                                      <TextareaAutosize
                                        ref={inputRef}
                                        type="text"
                                        name="adventure"
                                        value={inputAdven}
                                        className="text-[0.875rem] pl-0 pr-2 py-0 h-full border-y-0 border-0 focus-visible:ring-0 pt-1 mx-2 py-[9px] resize-none min-h-0"
                                        onChange={(e) => {
                                          setErrors(null);
                                          setInputAdven(
                                            e.target.value
                                              .replaceAll('⁂', '')
                                              .replaceAll('\n', ' ')
                                              .replaceAll(/\s{2,}/g, ' ')
                                          )
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col">
                                    {signInCheckResult.signedIn ?
                                      <>
                                        <div className="px-2 pt-2 sm:pt-0">
                                          <p className="flex sm:hidden text-[0.75rem] text-[#bbbbbb] truncate">Theme</p>
                                        </div>
                                        <Select name="theme" value={inputTheme} onValueChange={handleThemeChange}>
                                          <SelectTrigger className={cn(
                                            "flex sm:hidden shrink-0 w-32 border-0 focus:ring-0 justify-between space-x-2 px-0 sm:px-3",
                                            "px-3 py-2 min-h-[37px]",
                                            "text-[0.875rem] border-0 rounded-3xl !ring-0 !ring-offset-0",
                                            "bg-secondary mt-1",
                                          )}>
                                            <SelectValue placeholder="What's the theme of the story?" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectGroup>
                                              <SelectLabel>
                                                What&apos;s the theme of the story?
                                              </SelectLabel>
                                              <SelectItem value="calm">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Calm</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="adventurous">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Adventurous</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="magical">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Magical</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="funny">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Funny</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="educational">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Educational</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="inspirational">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Inspirational</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="mythical">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Mythical</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="fantasy">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Fantasy</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="friendship">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Friendship</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="family">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Family</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="love">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Love</p>
                                                </div>
                                              </SelectItem>
                                            </SelectGroup>
                                          </SelectContent>
                                        </Select>
                                        <Button
                                          type="submit"
                                          size={'icon'}
                                          variant={'ghost'}
                                          className="absolute right-2 top-1/2 transform -translate-y-1/2 hidden sm:flex"
                                          disabled={inputAdven.length === 0}>
                                          <ArrowRight size={20} />
                                        </Button>
                                        <Button
                                          type="submit"
                                          variant={'ghost'}
                                          className="w-full flex sm:hidden justify-between bg-black text-white mt-3 rounded-[1.25rem]"
                                          disabled={inputAdven.length === 0}>
                                          <span></span>
                                          Create story
                                          <ArrowRight size={20} />
                                        </Button></> : <>
                                        <button type="submit" className="sr-only" />
                                        <div className="px-2 pt-2 sm:pt-0">
                                          <p className="flex sm:hidden text-[0.75rem] text-[#bbbbbb] truncate">Theme</p>
                                        </div>
                                        <Select name="theme" value={inputTheme} onValueChange={handleThemeChange}>
                                          <SelectTrigger className={cn(
                                            "flex sm:hidden shrink-0 w-32 border-0 focus:ring-0 justify-between space-x-2 px-0 sm:px-3",
                                            "px-3 py-2 min-h-[37px]",
                                            "text-[0.875rem] border-0 rounded-3xl !ring-0 !ring-offset-0",
                                            "bg-secondary mt-1",
                                          )}>
                                            <SelectValue placeholder="What's the theme of the story?" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectGroup>
                                              <SelectLabel>
                                                What&apos;s the theme of the story?
                                              </SelectLabel>
                                              <SelectItem value="calm">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Calm</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="adventurous">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Adventurous</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="magical">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Magical</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="funny">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Funny</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="educational">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Educational</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="inspirational">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Inspirational</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="mythical">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Mythical</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="fantasy">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Fantasy</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="friendship">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Friendship</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="family">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Family</p>
                                                </div>
                                              </SelectItem>
                                              <SelectItem value="love">
                                                <div className="flex items-center space-x-2 h-10">
                                                  <p>Love</p>
                                                </div>
                                              </SelectItem>
                                            </SelectGroup>
                                          </SelectContent>
                                        </Select>
                                        <LoginDlg
                                          onLoginSuccess={handleLoginSuccessSubmit}
                                          onOpenChange={setLoggingIn}
                                          emailLoginPayload={(() => {
                                            if (!document.getElementById('submit')) return {};

                                            const submit = {};
                                            new FormData(document.getElementById('submit')).forEach((value, key) => submit[key] = value);

                                            return { submit };
                                          })()}><>
                                            <Button
                                              size={'icon'}
                                              variant={'ghost'}
                                              className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                              disabled={inputAdven.length === 0}>
                                              <ArrowRight size={20} />
                                            </Button>
                                            <Button
                                              type="submit"
                                              variant={'ghost'}
                                              className="w-full flex sm:hidden justify-between bg-black text-white mt-3 rounded-[1.25rem]"
                                              disabled={inputAdven.length === 0}>
                                              <span></span>
                                              Create story
                                              <ArrowRight size={20} />
                                            </Button></>
                                        </LoginDlg></>}
                                  </div>
                                </div>
                                <p className={cn(
                                  "text-xs text-rose-600", errors?.includes('submit') ? "block" : "hidden",
                                )}>Sorry! Our networks are busy, try again later.</p>
                                <div className="py-2">
                                  <p className="text-base">Suggested stories</p>
                                  <ScrollArea>
                                    <div className="flex flex-row space-x-4 overflow-x-auto mt-1 mb-3">
                                      {suggestedStories.map((s) => s.key).toSorted().map((key) => (
                                        <Button key={key} variant={suggestions?.key == key ? "" : "secondary"} onClick={(e) => {
                                          e.preventDefault();

                                          setSuggestions({
                                            key,
                                            items: suggestedStories.find((s) => s.key == key).stories,
                                          });

                                          setTimeout(() => suggestionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }), 10);
                                        }}>{key}</Button>
                                      ))}
                                      <ScrollBar orientation="horizontal" className="h-1.5 p-0 mb-2" />
                                    </div>
                                  </ScrollArea>
                                  <div ref={suggestionsRef} className="flex flex-col w-full space-y-2">
                                    {suggestions?.items
                                      .map((item, index) => (
                                        <div className="flex items-start w-full" key={index}>
                                          <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-accent-foreground/50" />
                                          <Button
                                            variant="link"
                                            className="flex-1 justify-start px-0 py-1 h-fit font-semibold text-accent-foreground/50 whitespace-normal text-left"
                                            name={'related_query'}
                                            onClick={(e) => {
                                              e.preventDefault();

                                              setInputNames(item.names);
                                              setInputDescs(item.descriptions);
                                              setInputAdven(item.adventure);
                                            }}
                                          >
                                            {item.adventure}
                                          </Button>
                                        </div>
                                      ))}
                                  </div>
                                </div>
                              </div>
                              <Input
                                type="hidden"
                                name="narrator"
                                value={narrator}
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hero__carousel__item__body absolute px-6 bottom-10 w-full flex flex-col md:items-center gap-10">
                      <div className='w-full px-0 md:px-20'>
                        <Player className="w-full" />
                      </div>
                      <div className="flex flex-col lg:flex-row items-start justify-start text-xs lg:text-sm space-y-2 lg:space-y-0 lg:space-x-4 pt-2 text-white">
                        <div className="flex items-center space-x-1">
                          <Check className="w-5 h-5" />
                          <p>Create in seconds</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Check className="w-5 h-5" />
                          <p>10,540 happy customers</p>
                          <div className="flex"><IconStar /><IconStar /><IconStar /><IconStar /><IconStar /></div>
                        </div>
                        <div className="flex items-center space-x-1"><Check className="w-5 h-5" /><p>121,300 custom stories created</p></div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLandingHeader && <>
        <section className="section-catalog section-pad-top">
          <div className='section-content px-[20px] md:px-[30px] mx-auto'>
            <header className="section-header">
              <h2 className="section-header-headline typography-section-headline large-8 large-centered small-12">Handpicked. <br /><span className="color-pop">For every passion.</span></h2>
              <p className="mt-[.8em] section-header-copy typography-section-copy large-10 large-centered medium-10 small-12">Immerse yourself in stories that will challenge your mind and capture your heart. Explore new interests and stay on top of what’s trending. Our global catalog features leading voices on the topics you care about — from the biggest names to independent&nbsp;creators.</p>
            </header>
          </div>
          <div className='gallery flex flex-col'>
            <div className='item-container'>
              <div className='gallery-item tab-gallery-top-charts'>
                <div className='top-charts curation-top-charts'>
                  <EmblaCarousel slides={SLIDES} options={{ loop: true, duration: 30 }} className="row1" />
                  <EmblaCarousel slides={SLIDES} options={{ loop: true, duration: 60 }}  className="row2" />
                  {/* <div className='flex marquee row2 images-loading'>
                    <ul className='marquee-list'>
                        {Array.from({length: 13}).map((_, i) => 
                          <li key={i} className='marquee-item'>
                            <div className="hover-container">
                              <picture className="marquee-picture" style={{ backgroundColor: '#93c12b' }} >
                                <img className="marquee-picture-img" src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/5f/16/9c/5f169c87-1e3d-b9eb-fd01-38e154c62e8f/mza_8949828061767787292.jpg/195x195bb.jpg" alt="" />
                              </picture>
                              <div className="hover-content">
                                <span className="marquee-cta icon icon-after icon-playsolid">Listen now</span>
                              </div>
                            </div>
                            <div class="top-charts-copy typography-tile-caption">
                              <p class="show-title">History</p>
                              <p class="station">Series</p>
                            </div>
                          </li>
                        )}
                      </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      <div className='section-content space-y-[15px] md:space-y-[30px] px-[20px] md:px-[30px] mx-auto'>
        <section className='mx-auto section-tiles'>
          <Card className="bg-white text-black rounded-[18px]">
            <CardContent className="p-0 tile-content">
              <div className="flex flex-col md:flex-row items-center">
                <div className="copy-wrapper mr-0 md:mr-[85px] lg:mr-[100px] md:max-w-[260px] lg:max-w-[290px]">
                  <h2 className="tile-headline typography-tile-headline">
                    Personalized<br /><span className="color-pop">discovery.</span>
                  </h2>
                  <p className="tile-copy typography-tile-copy">
                    With personalized recommendations based on what you already listen to, you’ll get more shows catering to your tastes than ever&nbsp;before.
                  </p>
                </div>
                <div className='shows-episodes-wrapper'>
                  <h4 className="headline headline-01 typography-tile-subheadline">Essential Listens</h4>
                  <div className="flex mt-4">
                    <div className="mr-4">
                      <img className="rounded-[8px]"
                        src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/a6/87/8e/a6878eb4-acf1-c1c1-bef5-659f2d5d8e44/mza_12212408568521507999.jpg/270x270bb.jpg" alt="" width="250"/>
                      <div className='typography-tile-caption mt-[8px]'>
                        <p>Visual Arts</p>
                        <p className='caption'>Updated Biweekly</p>
                      </div>
                    </div>
                    <div>
                      <img className="rounded-[8px]"
                        src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/8b/ab/47/8bab47f5-44f7-0636-ddd3-9bdfb670ed4a/mza_3270469791972990871.jpg/270x270bb.jpg" alt="" width="250"/>
                      <div className='typography-tile-caption mt-[8px]'>
                        <p>Visual Arts</p>
                        <p className='caption'>Updated Biweekly</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="mx-auto tile-subscription">
          <Card className="bg-white text-black rounded-[18px]">
            <CardContent className="p-0 tile-content">
              <div className="flex flex-col md:flex-row-reverse">
                <div className="copy-wrapper large-6 large-offset-1 medium-5 small-12 small-offset-0">
                  <h2 className="tile-headline typography-tile-headline">
                    <span className="color-pop">Subscribe</span> <br />for even more <br />of what you love.
                  </h2>
                  <p className="tile-copy typography-tile-copy">
                    Unlock ad-free listening, bonus content, unreleased episodes, and more subscriber-only benefits from your favorite shows and creators.<sup className="footnote footnote-number"><a href="#footnote-1" aria-label="Footnote 1">1</a></sup> You can also connect your subscriptions from select apps on the App&nbsp;Store —&nbsp;as well as Apple&nbsp;News+ and Apple&nbsp;Music — to access all your premium audio content in one&nbsp;place.
                  </p>
                </div>
                <div className='image-wrapper large-6 medium-6 small-12'>
                  <img className='overview-subscriptions-iphone' src="https://www.apple.com/v/apple-podcasts/e/images/overview/subscriptions_iphone__enq6wlp5efue_large.jpg" alt=""/>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
       <section className="mx-auto tile-subscription">
  <Card className="bg-black text-white rounded-[18px]">
  <CardContent className="p-0 tile-content">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="copy-wrapper md:w-1/2 p-8 md:p-0">
        <h2 className="tile-headline typography-tile-headline text-4xl md:text-5xl font-bold">
          Catch up on <br /><span className="color-pop text-purple-500">your commute.</span>
        </h2>
        <p className="tile-copy typography-tile-copy text-lg md:text-xl mt-4">
          CarPlay lets you listen seamlessly from your iPhone in your car, bringing the same in‑depth experience to your vehicle’s built‑in controls.<sup className="footnote footnote-number"><a href="#footnote-2" aria-label="Footnote 2">2</a></sup> You can even ask Siri to play the latest episode or control playback. And Apple&nbsp;Podcasts comes preinstalled in select car&nbsp;models.
        </p>
      </div>
      <div className="image-wrapper md:w-1/2 flex justify-center p-4 md:p-0">
        <img src="/images/book.png" className="object-cover w-full h-auto rounded-lg" alt="CarPlay in car" />
      </div>
    </div>
  </CardContent>
</Card>

</section>
        <section className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-[8px] md:gap-[20px]">
            <Card className="tile-siri bg-white text-black rounded-[18px]">
              <CardContent className="p-0 tile-content">
                <div className="utterance-rotation-container" >
									<h2 className="tile-headline typography-tile-headline large-6 large-centered small-12" ><span className="color-pop">Siri,</span> play</h2>
									<h2 className="tile-utterance tile-utterance-0 typography-tile-headline" >my podcasts.</h2>
								</div>
                <p className="tile-copy typography-tile-copy">Go ahead, put your feet up — you&nbsp;can access anything and everything you want to hear on Apple&nbsp;Podcasts just&nbsp;by asking&nbsp;Siri.</p>
                <div className="overview-siri-homepod loaded">
                  <img src="/images/echo.png" alt=""></img>
                </div>
              </CardContent>
            </Card>
            <Card className="tile-transcript bg-white text-black rounded-[18px]">
              <CardContent className="p-0 tile-content">
                <div className="flex flex-col">
                  <div className="copy-wrapper">
                    <h2 className="tile-headline typography-tile-headline">
                      <span className="color-pop">Transcripts</span> puts it all in&nbsp;writing.
                    </h2>
                    <p className="tile-copy typography-tile-copy">Read along as you listen to the podcasts you love, or view the full text by itself. Easily search to find your favorite moments and tap any paragraph to jump to that point in the&nbsp;episode.<sup className="footnote footnote-number"><a href="#footnote-3" aria-label="Footnote 3">3</a></sup>
                  </p>
                  </div>
                  <div className='image-wrapper'>
                    <img src="https://www.apple.com/v/apple-podcasts/e/images/overview/transcript__blgiczdlr71e_large.jpg" alt=""></img>
                  </div>
                </div>
              </CardContent>
            </Card>
        </section>
        <section className="mx-auto section section-ecosystem section-pad-top">
          <div className="section-content">
            <header className="section-header">
              <h2 className="section-header-headline typography-section-headline large-12 large-centered">Stories that go <br /><span className="color-pop">everywhere.</span></h2>
              <p className="mt-[.8em] section-header-copy typography-section-copy large-9 large-centered medium-10 small-12">All your Apple devices come ready to play every podcast on the app —&nbsp;so whether you’re driving or jogging or cooking, you can keep the conversation going. You can even download shows to your Apple&nbsp;Podcasts library and listen&nbsp;offline.</p>
            </header>
            <div className="devices flex flex-wrap w-full large-12 large-centered">
              {devices.map((item, key) => (
                <div className="icon">
                  <div className="icon-wrapper">
                    <div className="device-icon">
                      <div className="overview-devices-iphone loaded h-full">
                        <img src={item.icon} alt="" className='h-full mx-auto' />
                      </div>
                    </div>
                    <h3 className="device-headline typography-tile-subheadline">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto section-faq section-pad-top">
          <div className="section-content">
          <h2 className="headline typography-section-headline" id="questions-answers">Questions? Answers.</h2>
            <Accordion type="single" collapsible className="accordion">
              {questionItems.map((item, key) => (
                <AccordionItem value={"item" + key} key={key}
                  className={cn("border-0")}
                >
                  <AccordionTrigger  
                    className="accordion-item text-left border-0"
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="accordion-content-paragraph">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section className="mx-auto section-router">
  <div className="section-content router">
    <div className="overview-footer-icon footer-icon loaded">
      <img className='mx-auto md:pb-[7px]' src="https://www.apple.com/v/apple-podcasts/e/images/overview/footer_icon__4t6qb8tdycyq_large.png" alt="" />
    </div>
    <h2 className="router-headline typography-router-headline large-10 large-centered small-12">Working with Apple&nbsp;Podcasts.</h2>
    <p className="router-copy typography-tile-copy large-7 medium-9 large-centered small-12">Stay up to date on the latest news, features, and best practices that help you create your own podcast.</p>
    <Button className="rounded-md typography-tile-copy">Get started for free</Button>
  </div>
</section>
        {/* <section className="container space-y-10 py-8 md:py-12 lg:py-16 max-w-6xl">
          <div className="w-full mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center">
              {Array.from({ length: 9}).map((v, i) => (
                <Narrate key={i} narIndex={i} curIndex={curIndex} setCurIndex={setCurIndex} />
              ))}
            </div>
          </div>
        </section> */}
      </div>
      </>}
    </div>
  );
}
