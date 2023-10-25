import RussianBlue from '../assets/russianblue.jpg';
import Siamese from '../assets/siamese.jpg';
import Persian from '../assets/persian.jpg';
import Bengal from '../assets/bengal.jpg';
import TurkishAngora from '../assets/turkishangora.jpg';
import Abyssinian from '../assets/abyssinian.jpg';
import Norwegianforest from '../assets/norwegianforest.jpg';
import AmericanShorthair from '../assets/americanshorthair.jpg';
import KoreanShorthair from '../assets/korshorthair.jpg';
import Exotic from '../assets/exoticshorthair.png';
import ScottishFold from '../assets/scottishfold.jpg';
import Munchkin from '../assets/munchkin.jpg';
import Ragdoll from '../assets/ragdoll.jpg';
import BritishShorthair from '../assets/britishshorthair.jpg';
import Sphinx from '../assets/sphinx.jpg';
import Mainecoon from '../assets/mainecoon.jpg';
import { ResultType } from '../types/type';

const results: ResultType[] = [
  {
    id: 1,
    name: 'Russian Blue',
    best: 'ESTJ',
    mbti: 'ISFJ',
    desc: "Scaredy. A very gentle personality and a quiet cat that feels timid! I tend to be very shy.If I leave it alone, I'm curious, so I'm a cat who hits, touches, and has a lot of fun.It's a good seedling for novice cat owners.",
    image: `${RussianBlue}`,
  },
  {
    id: 2,
    name: 'Siamese',
    best: 'ESFP',
    mbti: 'INFP',
    desc: "I'm generally gentle and relaxed.I'm easily lonely and jealous.He's a chatty personality.It is a cat that has a strong sense of independence, but unusually likes to ride human hands.",
    image: `${Siamese}`,
  },
  {
    id: 3,
    name: 'Persian',
    best: 'ENTJ',
    mbti: 'ISTP',
    desc: "I often become a dog cat because I am quiet and have a gentle personality. It's a hair growth type, so its fur is very soft.It is a very gentle and independent cat that can be raised with a child.",
    image: `${Persian}`,
  },
  {
    id: 4,
    name: 'Bengal',
    best: 'INTP',
    mbti: 'ESTP',
    desc: "I'm an active cat! That's why it's one of the cats that doesn't get fat!The butler might get exhausted from playing with me!",
    image: `${Bengal}`,
  },
  {
    id: 5,
    name: 'Turkish Angora',
    best: 'INTJ',
    mbti: 'ENFJ',
    desc: "An elegant long-haired cat! As a result, I'm a bit feisty and short-tempered! A cat with a lot of sneaky hair and a lot of vindictiveness! But each cat has a different personality, so please note!",
    image: `${TurkishAngora}`,
  },
  {
    id: 6,
    name: 'Abyssinian',
    best: 'ISTJ',
    mbti: 'ESFJ',
    desc: "Agile, curious, and smart cat! I'm a very chatty cat, so when a butler calls me, I meows and answers well! I love water so much that when I take a bath, it's one of the most comfortable cats! But a cat who is curious and is good at shaking this and that!",
    image: `${Abyssinian}`,
  },
  {
    id: 7,
    name: 'Norwegian Forest',
    best: 'ESTP',
    mbti: 'INTP',
    desc: "One of the quiet, human-loving cats! I'm a cat that lived in the woods, so I really like hunting. I'm a big cat, so I have a lot of appetite",
    image: `${Norwegianforest}`,
  },
  {
    id: 8,
    name: 'American Shorthair',
    best: 'INFP',
    mbti: 'ESFP',
    desc: "I'm very curious about the owner and I'm very cute!But the butler is mine! I have a strong desire to monopolize. If you're a butler who already has several cats, you might see other cats harangue..",
    image: `${AmericanShorthair}`,
  },
  {
    id: 9,
    name: 'Korean Shorthair',
    best: 'ISFP',
    mbti: 'ENFP',
    desc: "It's a cat with a lot of cat blood! Most have a lively and pleasant personality, and are intimate and clever! I love hunting because I have a great hunting instinct",
    image: `${KoreanShorthair}`,
  },
  {
    id: 10,
    name: 'Exotic',
    best: 'ISFJ',
    mbti: 'ESTJ',
    desc: "It's a cat who is not shy and enjoys her daily life by her owner! Just be careful because I don't have that much exercise and I can become a fat cat!",
    image: `${Exotic}`,
  },
  {
    id: 11,
    name: 'Scottish Fold',
    best: 'ENFP',
    mbti: 'ISFP',
    desc: "A cat with very cute folded ears! Nice, laid back, little crying cat! I'm very cute for a cat, and sometimes follows the butler to the point of annoyance!",
    image: `${ScottishFold}`,
  },
  {
    id: 12,
    name: 'Munchkin',
    best: 'INFJ',
    mbti: 'ENTJ',
    desc: "It is a cat with short legs and a cute appearance! So curious that an energetic cat that travels from place to place with short legs! I'm smart and cute",
    image: `${Munchkin}`,
  },
  {
    id: 13,
    name: 'Ragdoll',
    best: 'ESFJ',
    mbti: 'ISTJ',
    desc: "A cat that is loved a lot for its long fur and pretty formal hair! Like the name stuffed doll, it's a cat that's hugged by a butler like a doll! One of the cats who is so gentle and loves to interact with the butler!",
    image: `${Ragdoll}`,
  },
  {
    id: 14,
    name: 'British Shorthair',
    best: 'ENTP',
    mbti: 'ISTP',
    desc: "A cat like an English gentleman as its name goes! It's a caring, very quiet, patient cat. It's a big cat that likes to sit on the side rather than on the butler's lap!",
    image: `${BritishShorthair}`,
  },
  {
    id: 15,
    name: 'Sphinx',
    best: 'ISTP',
    mbti: 'ENTP',
    desc: "I'm the only cat without fur! Unlike my appearance, I'm a golden retriever from the cat world who says that I have the best personality among cats! However, be careful because I can get skin diseases easily!",
    image: `${Sphinx}`,
  },
  {
    id: 16,
    name: 'Mainecoon',
    best: 'ENFJ',
    mbti: 'INTJ',
    desc: "It's a cat nicknamed a giant gentleman! It has a quiet, gentle personality, and is very smart, and it looks like a lion or tiger!",
    image: `${Mainecoon}`,
  },
];

export default results;
