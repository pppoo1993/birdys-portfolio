import type { ExperienceEntry } from '../types'

export const experienceData: ExperienceEntry[] = [
  {
    id: 'job-4',
    company: '爱奇艺',
    role: '高级交互设计师',
    startDate: '2021-08',
    endDate: '2026-05',
    description: [
      '##吃鲸AI·视频互动社区',
      '主导产品从 0 到 1 的交互框架构建，将影视资源库与 AI 生产力深度结合，实现站内流量从消费者到创作者的转化。',
      '设计「换台词」、「故事接龙」等轻量化玩法，将高门槛创作降维为碎片化改写，有效提升用户创作留存率。',
      '##一起聊·明星陪看直播间',
      '优化多人连麦与动态视听布局逻辑，解决高并发场景下的交互冲突，确立直播间沉浸式观影标准。',
      '重构送礼面板并封装为通用组件，将商业消费转化为情感反馈闭环，显著驱动商业转化数据。',
      '##爱奇艺·Pad/PC端播放器',
      '主导核心播放器架构从三分屏向沉浸式二分屏的范式升级，交互效率显著提升，确立流媒体播放器行业交互准则。',
    ],
    techStack: ['Figma', 'AI Product Design', 'Design System', 'User Research', 'Prototyping', 'Live Streaming UX'],
    companyUrl: 'https://www.iqiyi.com',
  },
  {
    id: 'job-3',
    company: '全速创意设计',
    role: '资深用户体验设计师',
    startDate: '2020-05',
    endDate: '2021-08',
    description: [
      '重构菜鸟驿站 IoT 小样机线下大屏与线上小程序联动逻辑，统一跨端视觉语言，显著提升全链路核销体验',
      '优化首页交互结构，驱动派样 SKU 点击率实现 120% 量级增长',
      '基于「上瘾模型」重塑菜鸟驿站 B 端广告投放平台站长任务体系，显著提升广告任务报名率与完成率',
    ],
    techStack: ['Sketch', 'Axure', 'IoT UX', 'B-end Design', 'User Behavior Modeling'],
  },
  {
    id: 'job-2',
    company: '杭州大树网络',
    role: '高级 UI 设计师',
    startDate: '2015-12',
    endDate: '2020-12',
    description: [
      '负责「功夫贷」全端产品界面设计，建立并维护统一的设计语言系统（Design System），确保多终端视觉高度一致性',
      '主导 UI 组件库从 0 到 1 的搭建与迭代，有效提升跨团队开发对接效率与设计还原度',
    ],
    techStack: ['Photoshop', 'Illustrator', 'Sketch', 'Design System', 'Prototyping'],
  },
]
