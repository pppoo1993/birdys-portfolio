# 首页文字规范

> 最后更新：2026-06-14

---

## 一、字体

| 层级 | 字体 | 用途 |
|------|------|------|
| 中文正文 | `Noto Sans SC` → `PingFang SC` → `Microsoft YaHei` | 全局 |
| 英文/数字 | `system-ui, -apple-system` | 全局 |
| 代码/标签 | `ui-monospace, SFMono-Regular` | 标签、AboutMe编号 |

---

## 二、字重体系

| 字重 | Tailwind | 值 | 用途 |
|------|----------|-----|------|
| 一级标题 | `font-semibold` | 600 | h1、打字机、卡片标题、Contact引语 |
| 二级标题 | `font-semibold` | 600 | AboutMe标题、导航、首页副标题 |
| 卡片副标题 | `font-normal` | 400 | 项目卡片副标题 |
| 正文 | `font-light` | 300 | 关于我、项目描述、工作经历 |
| 标签/徽章 | `font-medium` | 500 | 成就标签 |

> **一致性规则**：全站正文统一 `font-light`(300)，标题统一 `font-semibold`(600)，卡片副标题 `font-normal`(400)。

---

## 三、正文规范

| 属性 | 值 |
|------|-----|
| 字号 | `13px` |
| 颜色 | `#a1a1aa` |
| 行高 | `1.6` |
| 字间距 | `0.02em` |
| 字重 | `300`（`font-light`） |

适用范围：关于我·卡片正文、项目描述、工作经历描述。

---

## 四、标题规范

| 层级 | 字号 | 颜色 | 用途 |
|------|------|------|------|
| H1 主标题 | `text-4xl md:text-5xl` | `text-white` | Hi, I'm Birdy |
| H2 打字机 | `text-3xl md:text-4xl` | `text-white` | 以系统化思维… |
| H3 卡片标题 | `text-2xl md:text-[32px]` | `text-white` | 吃鲸AI 等 |
| H4 卡片副标题 | `text-base md:text-lg` | `#d4d4d8` | 生成式 AI… |
| AboutMe 标题 | `text-base` | `text-zinc-200` | 设计演变 等 |
| Contact 引语 | `text-2xl md:text-3xl` | `text-white` | 技术在解构界面… |
| Contact CTA | `text-sm md:text-base` | `text-zinc-500` | 一起聊聊吗？ |

---

## 五、辅助文字

| 元素 | 字号 | 颜色 | 字重 |
|------|------|------|------|
| 标签（项目卡） | `11px` | `#71717a` | mono |
| 成就标签 | `10px` | `#C7FF00` | `font-medium` |
| 副标题（首页） | `11px md:text-sm` | `text-accent` | `font-semibold` |
| 底部版权 | `0.6rem` | `text-text-tertiary` | — |

---

## 六、颜色令牌

| 令牌 | 色值 | 用途 |
|------|------|------|
| 正文灰 | `#a1a1aa` | 所有正文描述 |
| 副标题灰 | `#d4d4d8` | 项目卡片副标题 |
| 辅助灰 | `#71717a` | 标签、占位文字 |
| 标题白 | `#FFFFFF` | 所有标题 |
| 强调绿 | `#C7FF00` | AboutMe编号、光标、成就标签 |
