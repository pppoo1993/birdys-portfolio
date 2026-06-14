# 项目卡片样机设计规范

> 最后更新：2026-06-14

---

## 一、通用规范

| 属性 | 值 | 说明 |
|------|-----|------|
| 设备边框 | `2px solid #27272a` | 默认态 |
| 设备边框 hover | `2px solid #3f3f46` | 活跃态 |
| 设备阴影 | `0 15px 40px rgba(0,0,0,0.85)` | 默认 |
| 设备阴影 hover | `0 20px 50px rgba(0,0,0,0.95)` | 活跃 |
| 圆角 | `rounded-[16-20px]` | 视设备类型 |
| 缩放 | `scale(0.88–0.94)` | 默认/活跃有差 |
| 内底色 | 暗色渐变 `#161aXX → #121215` | 带项目色相微偏 |
| 过渡 | `duration-500` | 所有hover |
| 移动端缩放 | `zoom: 0.72` | ≤767px |
| 3D透视 | `perspective: 600–1000px` | 视项目 |

---

## 二、吃鲸AI（project-3）

| 属性 | 值 |
|------|-----|
| 设备类型 | 双手机竖屏 |
| 前景尺寸 | `148×296px`，`rounded-[20px]` |
| 背景尺寸 | `148×296px`，`rounded-[20px]` |
| 3D旋转（前景） | `rotateX(35°) rotateZ(-10°) translateZ(50px) translateX(10px) translateY(15px) scale(0.9)` |
| 3D旋转（背景） | `rotateX(35°) rotateZ(-10°) translateZ(-15px) translateX(-35px) scale(0.9)` |
| 活跃态变换（前景） | `rotateX(28°) rotateZ(-8°) translateZ(70px) translateX(15px) translateY(20px) scale(0.92)` |
| 活跃态变换（背景） | `rotateX(33°) rotateZ(-13°) translateZ(-20px) translateX(-40px) scale(0.9)` |
| 俯冲角度 | 左倾 `rotateZ(-10°)`，向前倾斜 `rotateX(35°)` |
| 内底色 | `#161a1e`（蓝黑） |
| 活跃态变换 | `rotateX(28°) rotateZ(-8°) translateZ(70px) translateX(15px) translateY(20px) scale(0.92)` |
| 内部UI | 4宫格工具网格 + 青柠CTA |

---

## 三、明星陪看直播间（project-2）

| 属性 | 值 |
|------|-----|
| 设备类型 | 双手机竖屏 |
| 前景尺寸 | `148×296px`，`rounded-[20px]` |
| 背景尺寸 | `148×296px`，`rounded-[20px]` |
| 3D旋转（前景） | `rotateY(-5°) translateZ(40px) translateX(25px) scale(0.9)` |
| 3D旋转（背景） | `rotateY(-10°) translateZ(-10px) translateX(-30px) scale(0.9)` |
| 活跃态变换（前景） | `rotateY(-10°) translateZ(60px) translateX(30px) scale(0.92)` |
| 活跃态变换（背景） | `rotateY(-15°) translateZ(-15px) translateX(-35px) scale(0.9)` |
| 倾斜角度 | 正面微侧，轻度3D |
| 内底色 | `#17151a`（紫黑） |
| 内部UI | 聊天气泡 + 礼物面板 + 青柠CTA |

---

## 四、Pad端播放器（project-1）

| 属性 | 值 |
|------|-----|
| 设备类型 | 双平板横屏 |
| 前景尺寸 | `220×155px`，`rounded-[18px]` |
| 背景尺寸 | `210×148px`，`rounded-[16px]` |
| 宽高比 | ≈4:3（iPad 比例） |
| 3D旋转（前景） | `rotateY(6°) rotateX(3°) translateZ(35px) translateX(10px) scale(0.92)` |
| 3D旋转（背景） | `rotateY(10°) rotateX(6°) translateZ(-15px) translateX(-15px) scale(0.9)` |
| 活跃态变换（前景） | `rotateY(8°) rotateX(5°) translateZ(50px) translateX(15px) scale(0.94)` |
| 活跃态变换（背景） | `rotateY(12°) rotateX(8°) translateZ(-20px) translateX(-20px) scale(0.88)` |
| 倾斜角度 | 轻微倾斜，接近正面 |
| 内底色 | `#161a18`（绿黑） |
| 内部UI | 视频播放器 + 进度条 + 控件栏 |

---

## 五、内部UI设计

| 元素 | 颜色 | 字号 | 用途 |
|------|------|------|------|
| CTA按钮渐变 | `#C7FF00 → #88aa00` | `9px bold` | 统一青柠色 |
| CTA按钮阴影 | `rgba(204,255,0,0.15)` | — | 微光晕 |
| 按钮文字 | `#0a0a0c` | `9px` | 深色底反白 |
| UI卡片 | `rgba(255,255,255,0.04)` | — | 半透白底 |
| UI卡片边框 | `rgba(255,255,255,0.06)` | — | 微边框 |
| 占位文字 | `#71717a` / `#52525b` | `7-8px` | mono |
| 进度条 | `#C7FF00` | — | 青柠强调 |
