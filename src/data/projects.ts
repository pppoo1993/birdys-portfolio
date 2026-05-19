import type { Project } from '../types'

export const projectData: Project[] = [
  {
    id: 'project-3',
    title: '[PLACEHOLDER: 项目名称 A]',
    description:
      '一个面向开发者的 API 文档管理平台，支持团队协作、版本管理和自动生成 OpenAPI 规范。前端使用 Next.js 构建，实现了实时协作编辑和差异对比功能。',
    imagePath: 'https://picsum.photos/seed/project3/1200/800',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'WebSocket'],
    sourceUrl: 'https://github.com',
  },
  {
    id: 'project-2',
    title: '[PLACEHOLDER: 项目名称 B]',
    description:
      '一个跨平台的个人财务管理应用，帮助用户追踪支出、制定预算和管理投资组合。使用 React Native 构建，支持 iOS 和 Android，集成银行 API 自动同步交易。',
    imagePath: 'https://picsum.photos/seed/project2/1200/800',
    techStack: ['React Native', 'TypeScript', 'Firebase', 'Plaid API'],
    sourceUrl: 'https://github.com',
  },
  {
    id: 'project-1',
    title: '[PLACEHOLDER: 项目名称 C]',
    description:
      '一款实时协作白板工具，支持多人同时绘制、添加便签和评论。基于 Canvas API 和 WebSocket 实现低延迟同步，支持导出为 PNG/SVG/PDF 格式。',
    imagePath: 'https://picsum.photos/seed/project1/1200/800',
    techStack: ['React', 'Canvas API', 'Node.js', 'WebSocket'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
  },
]
