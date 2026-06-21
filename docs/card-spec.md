# 首页项目卡片规范

---

## 一、外层容器

| 属性 | normal | hover (active) | dimmed |
|------|--------|-------|--------|
| 背景 | `rgba(22,22,24,0.75)` | `rgba(26,26,28,0.85)` | — |
| 毛玻璃 | `backdrop-filter: blur(16px)` | 同 | — |
| 边框 | `#1f1f23` | `#27272a` | — |
| 圆角 | `rounded-lg` (8px) | 同 | — |
| 阴影 | `0 20px 40px rgba(0,0,0,0.4)` | `0 30px 60px rgba(0,0,0,0.6)` | — |
| 内高光 | `inset 0 1px 0 rgba(255,255,255,0.03)` | `inset 0 1px 0 rgba(255,255,255,0.04)` | — |
| 位移 | `translateY(0)` | `translateY(-4px)` | — |
| 透明度 | `1` | `1` | `0.4` |
| 模糊 | `none` | `none` | `blur(0.5px)` |
| 入场动画 | scale 1.08→1, blur 6px→0, rotate 1.5°→0, y 30→0 | — | — |

---

## 二、左侧文字区

| 元素 | 字号 | 颜色 | 字重 |
|------|------|------|------|
| App图标 | — | `#52525b` | mono |
| 标题 | 24/32px | `#FFFFFF` | `font-semibold`(600) |
| 副标题 | 16/18px | `#d4d4d8` | `font-normal`(400) |
| 分割线 | 40px × 1px | `#333333` | — |
| 描述 | 13px | `#A0A0A0` | `font-light`(300) |
| CTA按钮 | 13px | `#a1a1aa` → hover `#FFFFFF` | `font-medium`(500) |
| 标签 | 12px | `#8a8a8a` → hover `#a1a1aa` | `font-light`(300) |
| 标签分隔符 | — | `#52525b` | — |
| 成就标签 | 10px | `#C7FF00` | `font-medium`(500) |

---

## 三、交互逻辑

| 状态 | 触发 | 行为 |
|------|------|------|
| normal | — | 静态，半透明玻璃态 |
| dimmed | 另一卡 active | opacity 0.4 + blur 0.5px |
| active | 滚动到视口中心 / 鼠标 hover | 上浮+边框亮+背景提亮 |
| click | 点击任意位置 | 打开项目详情弹窗 |

---

## 四、问题发现

1. **无 click 态反馈**：点击卡片的瞬间无视觉响应（无按下态/ripple），建议加 `active:scale-[0.98]`
2. **玻璃效果在暗色背景上不明显**：`blur(16px)` + 75% 透明度在 `#0d0d0d` 底色上几乎看不出，可降低透明度至 60% 或加深 blur
3. **dimmed 和其他卡反差过大**：opacity 0.4 + blur 0.5px 太弱，其他卡几乎消失，建议 0.55 + blur 0.3px
4. **阴影色值单一**：始终全黑阴影，可考虑 hover 时加微弱项目色 glow
