import type { SiteConfig } from '../types'

export const siteConfig: SiteConfig = {
  name: "Birdy's Portfolio",
  title: '',
  subtitle: '',
  navLinks: [
    { label: '关于我', sectionId: 'intro' },
    { label: '工作经历', sectionId: 'experience' },
    { label: '项目', sectionId: 'projects' },
    { label: '联系方式', sectionId: 'contact' },
  ],
}
