import asciiClipart from '../assets/ascii.jpg'
import pcClipart from '../assets/photonic_crystal.jpg'
import transformerClipart from "../assets/transformer.jpg"
import rnnClipart from "../assets/rnn.jpg"

export interface Project {
  slug: string
  title: string
  summary: string
  image?: string
}

export const projects: Project[] = [
  { slug: 'project-one', title: 'base64 Implementation', summary: 'A from-scratch implementation of the classic base64 text encoding algorithm.', image: asciiClipart },
  { slug: 'project-two', title: 'Photonic Crystal Research Project', summary: 'A research codebase for calculating and detecting photonic crystal band structures.', image: pcClipart },
  { slug: 'project-three', title: 'Transformer Implementation', summary: 'A PyTorch implementation of the classic transformer neural network architecture from "Attention Is All You Need."', image: transformerClipart },
  { slug: 'project-four', title: 'Sentiment Analysis With Recurrent Neural Networks', summary: 'Exploring real-world sentiment analysis with different RNN architectures.', image: rnnClipart },
]
