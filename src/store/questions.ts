import { QuestionType } from '../types/type';

const questions: QuestionType[] = [
  {
    id: 1,
    title: "Someone brought a new cat, What's  my reaction?",
    qA: 'I want to keep talking to cat',
    qB: 'Gives time to adjust',
    type: 'EI',
  },
  {
    id: 2,
    title: 'I have questions about cats, What do I do?',
    qA: 'Enter cat-related communities to communicate and gain knowledge about cats.',
    qB: 'Although join the community, it is convenient to look for it by yourself.',
    type: 'EI',
  },
  {
    id: 3,
    title: 'I think my cat is really pretty. What do I do?',
    qA: 'I brag about it and make an Instagram account to share pictures and communicate with others',
    qB: 'Take a picture and keep it in the photo album.',
    type: 'EI',
  },
  {
    id: 4,
    title:
      'I am Looking to start a cat YouTube. What kind of YouTube do I want to make?',
    qA: 'Make other YouTubers similar by using guidelines.',
    qB: 'Think about it in a new or free way.',
    type: 'SN',
  },
  {
    id: 5,
    title: "I'm searching for parts I don't know about cats. How do I read?",
    qA: 'Read meticulously and accurately.',
    qB: 'Read it while grasping the overall meaning.',
    type: 'SN',
  },
  {
    id: 6,
    title: "I'm going to feed my cat What's my method?",
    qA: 'I give it to you by hand and eye measurement, thinking this is enough.',
    qB: 'Match the calories exactly and serve them with scales or spoons.',
    type: 'SN',
  },
  {
    id: 7,
    title:
      "My friend is sad because the cat seems to be sick. What's my reaction?",
    qA: 'Think about solutions together and look for information together.',
    qB: 'First, comfort him.',
    type: 'TF',
  },
  {
    id: 8,
    title:
      'I had a conflict with my family while raising a cat. At a time like this?',
    qA: 'I explain it to my family first to prove that my thoughts and logic are correct.',
    qB: "I think first to convey my opinion well so that it doesn't make the other person feel bad.",
    type: 'TF',
  },
  {
    id: 9,
    title:
      "I looked at the review to choose a hospital because my cat was sick. Where's the hospital I'm going to go?",
    qA: 'A well-performing hospital',
    qB: "A hospital where the doctor's personality is said to be good",
    type: 'TF',
  },
  {
    id: 10,
    title: 'How to feed cat food?',
    qA: "I'll give this much three times a day at what time, and I'll take care of the snacks then. You should also take nutritional supplements in advance! I plan.",
    qB: "First, I'll give it to them as a self-service meal.",
    type: 'JP',
  },
  {
    id: 11,
    title: 'There were several kinds of cat food by chance. How do you feed?',
    qA: "Fed little by little, test the cat's preferences, and if eat everything well, I will be fed by changing it so that the cat doesn't get tired of it according to the date.",
    qB: "Feed for what I'm attracted to.",
    type: 'JP',
  },
  {
    id: 12,
    title: 'What about me before you go to bed?',
    qA: 'I decide what to do tomorrow.',
    qB: 'First, lie down and think.',
    type: 'JP',
  },
];

export default questions;
