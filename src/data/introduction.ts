import type { IntroductionData } from '../types'

export const introductionData: IntroductionData = {
  name: "Hi，I'm Birdy",
  title: '产品设计师 / AI 内容生态 / 跨平台体验',
  photoPath: 'https://picsum.photos/seed/bg-hero/1400/900',
  avatarPath: '/images/头像.png',
  quote: '把设计作为方法',
  bioSections: [
    {
      number: '01',
      heading: '',
      tag: 'About Design',
      body: '从UI设计师、体验设计师傅到交互设计师，我的title在变，但是我对设计的理解始终如一：设计的本质都是为了更好地服务于用户和业务目标，是解决问题的方法。',
      image: 'https://picsum.photos/seed/design-evo/600/400',
    },
    {
      number: '02',
      heading: '',
      tag: 'Life & Soul',
      body: '清晨 7 点的 CrossFit 是我生活的"底层代码"。训练场上的磨砺，赋予了我耐力与专注；每日变化的训练，让我更加沉稳与从容。CF 不仅使我受益于身体，更教会我该如何面对一切生活中的难题。',
      image: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=600&h=400&fit=crop&q=80',
    },
  ],
  hobbies: ['CrossFit', '极简主义', '摄影', '阅读', '咖啡'],
}
