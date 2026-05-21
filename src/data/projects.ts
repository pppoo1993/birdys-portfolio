import type { Project } from '../types'

export const projectData: Project[] = [
  {
    id: 'project-3',
    title: 'Lingxi Design System',
    description:
      '企业级 B 端设计系统，覆盖 Web/Mobile 双端 60+ 组件，支撑 3 条业务线统一接入，设计还原度提升至 95%。',
    imagePath: 'https://picsum.photos/seed/project3/1200/800',
    techStack: ['Figma', 'Design Tokens', 'Storybook', 'React', 'Zeroheight'],
    sourceUrl: 'https://github.com',
    detail: {
      pageTitle: 'Lingxi Design System',
      mainTitle: '从 0 到 1 构建企业级设计系统',
      subtitle: '支撑 3 条业务线、60+ 组件的统一设计语言',
      sections: [
        {
          heading: '项目背景',
          body: '公司业务快速发展，3 条产品线各自维护设计规范，导致品牌体验割裂、设计研发沟通成本高、组件复用率低。亟需一套统一的设计系统来提升一致性和协作效率。',
        },
        {
          heading: '我的角色',
          body: '作为设计系统负责人，主导了从设计语言定义、组件库搭建到文档站点落地的全流程。与 2 名设计师和 5 名前端工程师紧密协作，历时 8 个月完成 1.0 版本发布。',
        },
        {
          heading: '设计语言',
          body: '基于"简洁、高效、包容"三大原则，定义了完整的设计 Token 体系：色彩系统（主色/功能色/ neutral 色阶）、字体排版（11 级字阶 + 行高规范）、间距系统（基于 4px 的 8 级间距）、圆角与阴影规范。所有 Token 通过 Figma Styles + Style Dictionary 实现设计-代码双向同步。',
          illustration: {
            src: 'https://picsum.photos/seed/design-tokens/1200/600',
            alt: 'Design Token 体系示意图',
            caption: 'Design Token 体系：从设计到代码的自动化映射',
          },
        },
        {
          heading: '组件库建设',
          body: '按照原子设计方法论，从基础组件（Button、Input、Icon）到复合组件（Table、Form、DatePicker），分 4 个迭代完成 60+ 组件的设计与开发。每个组件经过设计评审、前端实现、视觉走查三轮验收，确保设计还原度 ≥ 95%。制定了完整的组件使用规范与最佳实践文档。',
          illustration: {
            src: 'https://picsum.photos/seed/component-lib/1200/600',
            alt: '组件库概览',
            caption: '组件库覆盖导航、数据录入、数据展示、反馈等 7 大类别',
          },
        },
        {
          heading: '落地与影响',
          body: '设计系统 1.0 上线后，已完成 3 条业务线全面接入。设计稿产出效率提升 40%，设计与前端沟通成本降低 60%，产品体验一致性显著提升。后续持续迭代中，计划增加无障碍支持（WCAG 2.1 AA）和暗色模式。',
        },
      ],
    },
  },
  {
    id: 'project-2',
    title: '智课 AI 教育平台',
    description:
      '面向 K12 的 AI 自适应学习平台，通过智能诊断与个性化推荐，帮助学生精准定位薄弱知识点，学习效率提升 35%。',
    imagePath: 'https://picsum.photos/seed/project2/1200/800',
    techStack: ['User Research', 'Wireframe', 'Hi-Fi Prototype', 'Usability Testing', 'Figma'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    detail: {
      pageTitle: '智课 AI 教育平台',
      mainTitle: 'AI 自适应学习体验设计',
      subtitle: '如何让 AI 推荐变得可理解、可信任、可控制',
      sections: [
        {
          heading: '产品目标',
          body: '智课是一款面向 K12 学生的 AI 自适应学习产品，核心功能是基于知识图谱诊断学生的薄弱点，并智能推荐学习路径。我们的设计挑战在于：如何让 AI 的"黑盒"决策对用户透明且可信。',
        },
        {
          heading: '用户研究',
          body: '我们进行了 12 场深度访谈和 200+ 份问卷调研，发现核心痛点：学生不清楚系统为什么推荐某道题（缺乏解释性），家长对 AI 诊断结果的信任度低，长期学习缺乏进度感知和成就感。基于此，我们定义了三个设计原则：可解释、渐进式、激励性。',
          illustration: {
            src: 'https://picsum.photos/seed/user-research/1200/600',
            alt: '用户研究洞察',
            caption: '用户研究关键发现：信任、解释、激励是三大核心诉求',
          },
        },
        {
          heading: '关键设计',
          body: '知识图谱可视化：将抽象的"知识掌握度"转化为直观的星系图，每个知识点是一颗星球，大小表示重要程度，颜色深浅表示掌握程度。诊断报告：用"能力雷达图 + 文字解读"替代数据罗列，让家长和学生都能看懂。推荐理由卡片：每次推荐都附带一句话解释——"因为你上次在这类题型上花了较多时间，建议先巩固基础"。学习里程碑：将大目标拆解为阶段任务，完成每个里程碑有视觉反馈和成就感。',
        },
        {
          heading: '验证与迭代',
          body: '上线前进行了 3 轮可用性测试（共 24 名用户），关键任务完成率从初次原型的 72% 提升至最终版本的 94%。上线后 AB 测试显示：新设计组的 7 日留存提升 28%，AI 推荐采纳率提升 35%，用户对"推荐理由"的理解度评分从 3.2 升至 4.5（5 分制）。',
          illustration: {
            src: 'https://picsum.photos/seed/usability-test/1200/600',
            alt: '可用性测试数据',
            caption: '3 轮可用性测试关键指标变化',
          },
        },
      ],
    },
  },
  {
    id: 'project-1',
    title: 'Vibes · 音乐社交 App',
    description:
      '以"音乐情绪"为核心的社交应用，用户通过分享当下心情音乐来连接同频的人，上线首月获 5 万注册用户。',
    imagePath: 'https://picsum.photos/seed/project1/1200/800',
    techStack: ['iOS', 'Android', 'Motion Design', 'Prototyping', 'Principle'],
    liveUrl: 'https://example.com',
    detail: {
      pageTitle: 'Vibes · 音乐社交',
      mainTitle: '用音乐情绪连接同频的人',
      subtitle: '一款以情感共鸣为核心的轻社交产品设计',
      sections: [
        {
          heading: '产品洞察',
          body: '传统音乐 App 围绕"歌单"和"歌手"组织内容，但音乐消费的本质往往不是"听什么"，而是"此刻我是什么心情"。我们想做一个以情绪为入口的音乐社交产品——用户分享的不是一首歌，而是一个"此刻的心情"。',
        },
        {
          heading: '设计策略',
          body: '情绪入口设计：打开 App 的第一屏不是歌单，而是一个情绪矩阵（横轴：能量高低，纵轴：愉悦度），用户通过拖拽位置来表达当前心情。音乐可视化：播放页的动效随音乐节奏实时变化，每种情绪有不同的色彩主题和粒子效果。匹配机制：通过情绪距离算法，将"此刻心情相近"的用户连接——不是基于兴趣标签，而是基于情感共鸣。',
          illustration: {
            src: 'https://picsum.photos/seed/vibes-ui/1200/600',
            alt: 'Vibes 界面设计',
            caption: '情绪矩阵入口与音乐可视化播放页',
          },
        },
        {
          heading: '动效设计',
          body: '动效是 Vibes 体验的核心差异化。我制定了完整的动效规范：转场采用弹性缓动（spring），时长 300-500ms；音乐播放页粒子系统跟随 BPM 实时变化；情绪切换时色彩渐变过渡，使用 LAB 色彩空间确保过渡平滑。所有动效都通过 Principle 制作原型并与开发团队逐一对接参数。',
          illustration: {
            src: 'https://picsum.photos/seed/motion-design/1200/600',
            alt: '动效设计规范',
            caption: '动效规范：时长、缓动曲线、BPM 映射关系',
          },
        },
        {
          heading: '上线数据',
          body: '产品上线首月获得 5 万注册用户，日均使用时长 28 分钟，情绪匹配功能周活跃率 62%。用户反馈中最常出现的词是"治愈"和"懂我"，验证了"情绪共鸣"作为社交连接点的设计假设。',
        },
      ],
    },
  },
]
