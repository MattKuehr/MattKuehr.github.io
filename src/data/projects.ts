import asciiClipart from '../assets/ascii.jpg'
import pcClipart from '../assets/photonic_crystal.jpg'
import transformerClipart from "../assets/transformer.jpg"
import rnnClipart from "../assets/rnn.jpg"

export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  githubUrl: string
  image?: string
}

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'base64 Implementation',
    summary: 'A from-scratch implementation of the classic base64 text encoding algorithm.',
    description: 'I was first introduced to the base64 text encoding algorithm during my Summer 2025 internship when I was investigating ways for clients to send images in their requests to my vision-language model endpoint.\n\nI am a big believer that you don\'t understand something unless you build it yourself. So naturally, when I had some free time during my Summer 2026 internship, I decided to implement the algorithm which I had made such extensive use of.',
    githubUrl: 'https://github.com/MattKuehr/base64-from-scratch',
    image: asciiClipart,
  },
  {
    slug: 'project-two',
    title: 'Photonic Crystal Research Project',
    summary: 'A research codebase for calculating and detecting photonic crystal band structures.',
    description: 'This is a repo for code I wrote during my undergraduate research fellowship studying photonic crystals. You can read more about it under the research tab of this website.',
    githubUrl: 'https://github.com/MattKuehr/PhotonicResearch',
    image: pcClipart,
  },
  {
    slug: 'project-three',
    title: 'Transformer Implementation',
    summary: 'A PyTorch implementation of the classic transformer neural network architecture from "Attention Is All You Need."',
    description: 'This is the repo for a from-scratch PyTorch implementation of the transformer architecture from "Attention Is All You Need". I wrote this code as part of a final project for a graduate data mining course I took in the senior year of my undergraduate degree.\n\nEven with extensive prior introduction to transformers and how they work, reading and implementing the paper gave my understanding a level of depth which has been invaluable to me in other projects.',
    githubUrl: 'https://github.com/MattKuehr/WorkingTransformer',
    image: transformerClipart,
  },
  {
    slug: 'project-four',
    title: 'Sentiment Analysis With Recurrent Neural Networks',
    summary: 'Exploring real-world sentiment analysis with different RNN architectures.',
    description: 'This repo is for the final project of a graduate level machine learning class I took during the senior year of my undergraduate degree.\n\nI implemented a variety of tokenizers and RNN architectures to be tested on a sentiment analysis dataset. Our project compared how these architectures and tokenizers did at classifying real versus fake news headlines. This project served as an excellent chance for me to dive deeper on tokenization algorithms, and explore certain neural network architectures which I had limited prior knowledge of, such as LSTMs and GRUs.',
    githubUrl: 'https://github.com/MattKuehr/COMP-6630-Project',
    image: rnnClipart,
  },
]
