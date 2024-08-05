import 'server-only';

import {
  StreamableValue,
  createAI,
  createStreamableUI,
  createStreamableValue,
  getMutableAIState,
} from 'ai/rsc';
import { Spinner } from '@/components/ui/spinner';
import { Section } from '@/components/section';
import { Narrate } from '@/components/narrate';
import { BotMessage } from '@/components/message';
import { UserMessage } from '@/components/user-message';
import { writer } from '@/lib/agents/writer';
import { uuid } from '@/lib/utils';

async function submit(formData = new FormData()) {
  'use server';

  const uiStream = createStreamableUI();
  const isCollapsed = createStreamableValue(false);
  const voiceStream = createStreamableValue();

  const inputNames = formData?.get('name');
  const inputNamesArr = inputNames.split("⁂");
  const inputName = inputNamesArr.join(" and ");

  const inputDescs = formData?.get('description');
  const inputDescsArr = inputDescs.split("⁂");
  const inputDesc = inputNamesArr.map((v, index) => v + ' is a ' + inputDescsArr[index]).join('. ') + '. ';

  const inputAdven = formData?.get('adventure');
  const inputSkill = formData?.get('skill');
  const inputLimit = formData?.get('limit');
  const inputLang = formData?.get('lang');
  const inputAudience = formData?.get('audience');
  const inputTheme = formData?.get('theme');
  const inputStory = formData?.get('story');

  const messages = [];

  let systemMsg = inputSkill == 'expert' ?
    "You are an AI writer with a passion for creative writing and storytelling. Your task is to create an engaging story with imaginative plot twists and dynamic character development based on the user’s preferences. Only include the title for the story and the story. Do not include any illustrations, synopsis, profanity, violence, or sexual acts." :
    inputAudience == 'adults' ?
      "You are an expert adult story write that creates engaging and creating stories for adults. Only include the title for the story and the story. Do not include any illustrations, synopsis, profanity, violence, or sexual acts." :
      "You are an expert children’s story writer that creates engaging and creative stories for children. Only include the title of the story and the story. Do not include any illustrations, synopsis, profanity, violence, or sexual acts.";
  // if (inputLang == "Chinese") {
  //   systemMsg = inputAudience == 'adults' ? "您是一位成人故事寫作專家，為成人創作引人入勝的故事。僅包含故事標題和故事內容。請勿包含任何插圖、概要、褻瀆、暴力或性行為。" :
  //     "您是一位專業的兒童故事作家，為兒童創作引人入勝且富有創意的故事。僅包含故事標題和故事內容。請勿包含任何插圖、概要、褻瀆、暴力或性行為。";
  // }
  // else if (inputLang == "French") {
  //   systemMsg = inputAudience == 'adults' ? "Vous êtes un expert en écriture d'histoires pour adultes qui crée des histoires engageantes et créatrices pour les adultes. Incluez uniquement le titre de l’histoire et de l’histoire. N’incluez aucune illustration, synopsis, grossièreté, violence ou acte sexuel." :
  //     "Vous êtes un écrivain expert d’histoires pour enfants qui crée des histoires engageantes et créatives pour les enfants. Incluez uniquement le titre de l’histoire et l’histoire. N’incluez aucune illustration, synopsis, grossièreté, violence ou acte sexuel.";
  // }
  // else if (inputLang == "German") {
  //   systemMsg = inputAudience == 'adults' ? "Sie sind ein Experte für das Schreiben von Erwachsenengeschichten, der fesselnde und kreative Geschichten für Erwachsene kreiert. Geben Sie nur den Titel für die Geschichte und die Geschichte an. Fügen Sie keine Illustrationen, Zusammenfassungen, Obszönitäten, Gewalt oder sexuelle Handlungen hinzu." :
  //     "Sie sind ein erfahrener Autor von Kindergeschichten, der spannende und kreative Geschichten für Kinder schreibt. Geben Sie nur den Titel der Geschichte und die Geschichte an. Fügen Sie keine Illustrationen, Zusammenfassungen, Obszönitäten, Gewalt oder sexuelle Handlungen hinzu.";
  // }
  // else if (inputLang == "Italian") {
  //   systemMsg = inputAudience == 'adults' ? "Sei un esperto di scrittura di storie per adulti che crea storie coinvolgenti e creative per adulti. Includi solo il titolo della storia e della storia. Non includere illustrazioni, sinossi, linguaggio volgare, violenza o atti sessuali." :
  //     "Sei uno scrittore esperto di storie per bambini che crea storie coinvolgenti e creative per i bambini. Includere solo il titolo della storia e la storia. Non includere illustrazioni, sinossi, linguaggio volgare, violenza o atti sessuali.";
  // }
  // else if (inputLang == "Japanese") {
  //   systemMsg = inputAudience == 'adults' ? "あなたは、大人向けの魅力的なストーリーを作成する、大人向けのストーリー執筆の専門家です。ストーリーのタイトルとストーリーのみを含めます。イラスト、あらすじ、冒涜、暴力、性的行為は含まないでください。" :
  //     "あなたは、子供向けに魅力的で創造的な物語を作成する童話作家の専門家です。ストーリーのタイトルとストーリーのみを含めます。イラスト、あらすじ、冒涜、暴力、性的行為は含まないでください。";
  // }
  // else if (inputLang == "Korean") {
  //   systemMsg = inputAudience == 'adults' ? "당신은 성인을 위한 흥미롭고 창조적인 이야기를 만드는 전문 성인 이야기 작가입니다. 스토리 제목과 스토리만 포함하세요. 일러스트레이션, 시놉시스, 욕설, 폭력, 성행위를 포함하지 마세요." :
  //     "당신은 아이들을 위한 흥미롭고 창의적인 이야기를 만드는 전문 동화 작가입니다. 이야기의 제목과 이야기만 포함하세요. 일러스트레이션, 시놉시스, 욕설, 폭력, 성행위를 포함하지 마세요.";
  // }
  // else if (inputLang == "Spanish") {
  //   systemMsg = inputAudience == 'adults' ? "Eres un experto en redacción de historias para adultos que crea historias atractivas y creativas para adultos. Incluya únicamente el título de la historia y la historia. No incluya ilustraciones, sinopsis, malas palabras, violencia o actos sexuales." :
  //     "Eres un escritor experto en cuentos infantiles que crea historias atractivas y creativas para niños. Incluya únicamente el título de la historia y la historia. No incluya ilustraciones, sinopsis, malas palabras, violencia o actos sexuales.";
  // }

  const systemMessage = {
    role: "system",
    content: systemMsg,
  };
  messages.push(systemMessage);

  const userMessage = {
    role: "user",
    content:
      !!inputStory ?
        `Write a sequel in ${inputLang} with at least ${inputLimit} but less than ${parseInt(inputLimit) + 100} words to the following bedtime story. This previous story was ${inputStory}. The new story must include the following details: Character names are ${inputName}. ${inputDesc}. The adventure is ${inputAdven}. The theme is ${inputTheme}. The intended audience is ${inputAudience}. Only include the title of the story and the story.` :
        `Write a story in ${inputLang} with at least ${inputLimit} but less than ${parseInt(inputLimit) + 100} words with the following information: Character names are ${inputName}. ${inputDesc}. The adventure is ${inputAdven}. The theme is ${inputTheme}. The intended audience is ${inputAudience}. Only include the title of the story and the story.`,
  };

  messages.push(userMessage);

  const chat = formData?.get('chat');
  const id = uuid();

  const streamText = createStreamableValue();
  const error = createStreamableValue();

  async function processEvents() {
    // Set the collapsed state to true
    isCollapsed.done(true);

    //  Generate the answer
    uiStream.update(<Spinner />);

    const answer = await writer(uiStream, streamText, messages, {
      language: inputLang,
      model: inputSkill == 'expert' ? 'claude' : 'llama',
    })
      .then((answer) => {
        error.done();
        return answer;
      })
      .catch(() => writer(uiStream, streamText, messages, {
        language: inputLang,
        model: inputSkill == 'expert' ? 'claude' : 'llama',
      })
        .then((answer) => {
          error.done();
          return answer;
        })
        .catch((e) => {
          error.done(e.message);
          return null;
        })
      )
      .finally(() => {
        streamText.done();
      });

    if (answer) uiStream.append(
      <Narrate id={id} content={voiceStream.value} />
    );

    voiceStream.done(answer);
    uiStream.done();
  }

  processEvents();

  return {
    id,
    chat,
    name: inputNames,
    description: inputDescs,
    language: inputLang,
    component: uiStream.value,
    isCollapsed: isCollapsed.value,
    streamText: streamText.value,
    voice: voiceStream.value,
    error: error.value,
  };
};

async function init(chats = {}, chat) {
  'use server';

  const _chat = chats[chat] || Object.values(chats)[Object.keys(chats).length - 1];

  const stories = Object.entries(_chat?.stories || {}).map(([id, { adventure, answer, name, description }]) => ({
    chat: chat || Object.keys(chats)[Object.keys(chats).length - 1],
    id,
    name,
    description,
    language: _chat.language,
    adventure,
    answer,
  }));

  const messages = stories.map(({ chat, id, name, description, language, adventure, answer }, index) => {
    const uiStream = createStreamableUI();
    const isCollapsed = createStreamableValue();
    const voiceStream = createStreamableValue();

    voiceStream.done(answer);

    uiStream.append(<Section title="Story">
      <BotMessage content={voiceStream.value} />
    </Section>);
    uiStream.append(
      <Narrate id={id} content={voiceStream.value} />
    );

    isCollapsed.done(true);
    uiStream.done();

    const inputName = name.split("⁂").filter((n) => !(stories[index - 1]?.name.split("⁂") || []).includes(n)).join("⁂");

    return [{
      id: uuid(),
      component: <UserMessage isSequel={index > 0} inputName={inputName} inputAdven={adventure} />,
    }, {
      id,
      chat,
      name,
      description,
      language,
      component: uiStream.value,
      isCollapsed: isCollapsed.value,
      voice: voiceStream.value,
    }];
  })
    .flat();

  return messages;
};

// Define the initial state of the AI. It can be any JSON object.
const initialAIState = [];

// The initial UI state that the client will keep track of, which contains the message IDs and their UI nodes.
const initialUIState = [];

// AI is a provider you wrap your application with so you can access AI and UI state in your components.
export const AI = createAI({
  actions: {
    submit,
    init,
  },
  // Each state can be any shape of object, but for chat applications
  // it makes sense to have an array of messages. Or you may prefer something like { id: number, messages: Message[] }
  initialUIState,
  initialAIState,
});