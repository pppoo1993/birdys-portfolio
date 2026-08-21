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
      body: '从UI设计师、体验设计师到交互设计师，我的Title在变，但是我对设计的理解始终如一：设计的本质都是为了更好地服务于用户和业务目标，是解决问题的方法。',
      image: '/birdys-portfolio/images/design-career.png',
    },
    {
      number: '02',
      heading: '',
      tag: 'Life & Soul',
      body: '生活中充满设计之美，从音乐中层层铺垫徐徐展开的编曲设计到CrossFit训练中每日变换的Wod挑战，我喜欢用设计思维处理日常琐事，让生活更美，让灵魂更自由。',
      image: '/birdys-portfolio/images/lifestyle.png',
    },
  ],
  hobbies: ['CrossFit', '极简主义', '摄影', '阅读', '咖啡'],
}
