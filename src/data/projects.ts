import type { Project } from '../types'

export const projectData: Project[] = [
  {
    id: 'project-3',
    title: '吃鲸AI',
    description:
      '爱奇艺孵化的 AI 视频互动社区。用「以消带产」策略打通从观看到创作的链路，通过台词改写、故事接龙等轻量玩法激活影视 IP 资产。以「把 AI 生成的不可控，校准为可控的体验」为核心设计方法论。',
    imagePath: 'https://picsum.photos/seed/project3/1200/800',
    techStack: ['0→1 设计 Owner', 'AI 交互设计', '玩法矩阵'],
    sourceUrl: 'https://github.com',
    detail: {
      pageTitle: '吃鲸AI | 从消费到共创',
      mainTitle: '',
      subtitle: '从消费到共创',
      sections: [
        {
          heading: '目录',
          body: '',
          html: `<style>
.toc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;width:100%;max-width:1080px;margin:0 auto}
.toc-col{display:flex;flex-direction:column}
.toc-num{font-size:42px;font-weight:500;color:rgba(255,255,255,0.5);margin-bottom:8px;letter-spacing:-1px;font-family:var(--font-mono,monospace)}
.toc-card{background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;display:flex;flex-direction:column;justify-content:space-between;height:240px;box-sizing:border-box;cursor:pointer;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.toc-card:hover{border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}
.toc-card-title{font-size:15px;font-weight:500;color:#C7FF00;line-height:1.4;margin-bottom:20px}
.toc-card-pages{display:flex;flex-direction:column;gap:8px}
.toc-card-pages.sm{gap:6px}
.toc-page-row{display:flex;justify-content:space-between;align-items:baseline;font-size:13px;padding:3px 8px;margin:0 -8px;border-radius:4px;transition:all 0.2s ease;cursor:pointer}
.toc-page-row:hover{background:rgba(255,255,255,0.04)}
.toc-card-pages.sm .toc-page-row{font-size:12px}
.toc-page-name{color:#A0A0A0;font-weight:400}
.toc-page-num{color:#71717a;font-family:monospace;flex-shrink:0;margin-left:12px}
.toc-card-tag{font-size:11px;color:#52525b;font-family:monospace;margin-top:8px}
@media(max-width:767px){.toc-grid{grid-template-columns:1fr 1fr;gap:16px}.toc-num{font-size:32px}.toc-card{height:230px;padding:18px}.toc-card-title{font-size:13px}}
</style>
<div class="toc-grid">
<div class="toc-col"><span class="toc-num">01</span><div class="toc-card" data-goto="1"><div><p class="toc-card-title">项目背景</p><div class="toc-card-pages"><div class="toc-page-row" data-goto="1"><span class="toc-page-name">缘起</span><span class="toc-page-num">P02</span></div><div class="toc-page-row" data-goto="2"><span class="toc-page-name">挑战与破局</span><span class="toc-page-num">P03</span></div><div class="toc-page-row" data-goto="3"><span class="toc-page-name">定位重塑</span><span class="toc-page-num">P04</span></div><div class="toc-page-row" data-goto="4"><span class="toc-page-name">设计目标</span><span class="toc-page-num">P05</span></div></div></div><span class="toc-card-tag">/ Context</span></div></div>
<div class="toc-col"><span class="toc-num">02</span><div class="toc-card" data-goto="5"><div><p class="toc-card-title">架构与策略</p><div class="toc-card-pages"><div class="toc-page-row" data-goto="5"><span class="toc-page-name">用户旅程</span><span class="toc-page-num">P06</span></div><div class="toc-page-row" data-goto="6"><span class="toc-page-name">产品框架</span><span class="toc-page-num">P07</span></div><div class="toc-page-row" data-goto="7"><span class="toc-page-name">底层逻辑</span><span class="toc-page-num">P08</span></div></div></div><span class="toc-card-tag">/ Architecture</span></div></div>
<div class="toc-col"><span class="toc-num">03</span><div class="toc-card" data-goto="8"><div><p class="toc-card-title">交互呈现</p><div class="toc-card-pages"><div class="toc-page-row" data-goto="8"><span class="toc-page-name">以消带产</span><span class="toc-page-num">P09–10</span></div><div class="toc-page-row" data-goto="10"><span class="toc-page-name">创作中枢</span><span class="toc-page-num">P11–12</span></div><div class="toc-page-row" data-goto="12"><span class="toc-page-name">台词改写</span><span class="toc-page-num">P13</span></div><div class="toc-page-row" data-goto="13"><span class="toc-page-name">故事接龙</span><span class="toc-page-num">P14–16</span></div></div></div><span class="toc-card-tag">/ Interaction</span></div></div>
<div class="toc-col"><span class="toc-num">04</span><div class="toc-card" data-goto="16"><div><p class="toc-card-title">沉淀与思考</p><div class="toc-card-pages"><div class="toc-page-row" data-goto="16"><span class="toc-page-name">尾声</span><span class="toc-page-num">P17</span></div><div class="toc-page-row" data-goto="17"><span class="toc-page-name">价值复盘</span><span class="toc-page-num">P18</span></div><div class="toc-page-row" data-goto="18"><span class="toc-page-name">未竟的事业</span><span class="toc-page-num">P19</span></div></div></div><span class="toc-card-tag">/ Reflection</span></div></div>
</div>`,
        },
        {
          heading: '缘起：从业务瓶颈到设计机会',
          body: '2025 年中，我以设计 owner 身份着手吃鲸AI前期探索。我的第一个问题不是「做什么功能」，而是<b>「爱奇艺为什么要做这件事」</b>—不理解业务动机，设计无从锚定。\n\n经过梳理我发现了长视频行业在生产端、变现端、流量端存在三个结构性瓶颈。它们看似是业务问题，但每一个都指向了设计机会—<b>AI 不只是降本，更是重构用户关系的杠杆</b>。\n\n基于此，我将每个瓶颈拆解为「痛点 → 解法」，作为后续所有设计决策的起点。',
                    html: `<style>
.ba-section{display:flex;flex-direction:column;gap:16px;margin:0 auto;max-width:1080px}
.ba-header-row{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding-bottom:12px}
.ba-header{color:#FFFFFF;font-size:14px;font-weight:600;display:flex;align-items:center;gap:8px;padding-bottom:10px;position:relative}
.ba-header::after{display:none}
.ba-header::before{content:"";width:4px;height:14px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.ba-row{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:100%}
.ba-card{background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:20px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);position:relative;overflow:hidden}
.ba-card:hover{border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}
.ba-card .tag{display:inline-block;font-size:10px;padding:1px 6px;border-radius:2px;font-family:monospace;letter-spacing:.04em;font-weight:600;margin:0 6px 0 0;vertical-align:middle;background:rgba(199,255,0,0.1);color:#C7FF00;border:1px solid rgba(199,255,0,0.2)}
.ba-card .ititle{color:#FFFFFF;font-size:14px;font-weight:600;margin:0;display:inline;vertical-align:middle}
.ba-arrow-row{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.ba-arrow-row span{text-align:center;color:#52525b;font-size:16px}
.ba-card .idesc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:8px 0 0}
.ba-card .idesc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.ba-row{grid-template-columns:1fr;gap:16px}.ba-header-row{display:none}.ba-arrow-row{display:none}.ba-desktop{display:none}.ba-mobile{display:flex;flex-direction:column;gap:20px}}@media(min-width:768px){.ba-mobile{display:none}}
.ba-mobile-group{display:flex;flex-direction:column;gap:16px}
.ba-mobile-label{color:#FFFFFF;font-size:13px;font-weight:600;display:flex;align-items:center;gap:6px;padding-bottom:8px}
.ba-mobile-label::before{content:"";width:4px;height:14px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.ba-mobile-arrow{display:none}
</style>
<div class="ba-section">
<div class="ba-desktop">
<div class="ba-header-row"><div class="ba-header">生产端</div><div class="ba-header">变现端</div><div class="ba-header">流量端</div></div>
<div class="ba-row">
<div class="ba-card pain"><span class="tag">痛点</span><span class="ititle">重资产死循环</span><p class="idesc">传统影视制作周期长、投入高、容错率低。</p></div>
<div class="ba-card pain"><span class="tag">痛点</span><span class="ititle">变现方式单一</span><p class="idesc">营收过度依赖「广告+会员」，ARPU 天花板低。</p></div>
<div class="ba-card pain"><span class="tag">痛点</span><span class="ititle">用户注意力流失</span><p class="idesc">长视频「被动喂养」模式无法满足年轻一代对高频互动的需求。</p></div>
</div>
<div class="ba-arrow-row"><span>↓</span><span>↓</span><span>↓</span></div>
<div class="ba-row">
<div class="ba-card solve"><span class="tag">解法</span><span class="ititle">转嫁成本风险</span><p class="idesc">利用 AI 边际成本趋于零的特性，打破传统制作的预算围墙。</p></div>
<div class="ba-card solve"><span class="tag">解法</span><span class="ititle">高毛利增值变现</span><p class="idesc">将 IP 资产转化为生产要素，引入高毛利 AI 增值购模式。</p></div>
<div class="ba-card solve"><span class="tag">解法</span><span class="ititle">全链路流量闭环</span><p class="idesc">打通<b>「看正片 → AI 二创 → 新梗回流」</b>链路，实现长视频版权的长尾增值。</p></div>
</div>
</div>
<div class="ba-mobile">
<div class="ba-mobile-group"><div class="ba-mobile-label">生产端</div><div class="ba-card pain"><span class="tag">痛点</span><span class="ititle">重资产死循环</span><p class="idesc">传统影视制作周期长、投入高、容错率低。</p></div><div class="ba-mobile-arrow">↓</div><div class="ba-card solve"><span class="tag">解法</span><span class="ititle">转嫁成本风险</span><p class="idesc">利用 AI 边际成本趋于零的特性，打破传统制作的预算围墙。</p></div></div>
<div class="ba-mobile-group"><div class="ba-mobile-label">变现端</div><div class="ba-card pain"><span class="tag">痛点</span><span class="ititle">变现方式单一</span><p class="idesc">营收过度依赖「广告+会员」，ARPU 天花板低。</p></div><div class="ba-mobile-arrow">↓</div><div class="ba-card solve"><span class="tag">解法</span><span class="ititle">高毛利增值变现</span><p class="idesc">将 IP 资产转化为生产要素，引入高毛利 AI 增值购模式。</p></div></div>
<div class="ba-mobile-group"><div class="ba-mobile-label">流量端</div><div class="ba-card pain"><span class="tag">痛点</span><span class="ititle">用户注意力流失</span><p class="idesc">长视频「被动喂养」模式无法满足年轻一代对高频互动的需求。</p></div><div class="ba-mobile-arrow">↓</div><div class="ba-card solve"><span class="tag">解法</span><span class="ititle">全链路流量闭环</span><p class="idesc">打通<b>「看正片 → AI 二创 → 新梗回流」</b>链路，实现长视频版权的长尾增值。</p></div></div>
</div>
</div>`,
        },
        {
          heading: '挑战与破局：找到不可复制的锚点',
          body: '厘清三个瓶颈后，我需要更系统地去判断：爱奇艺跨界 AI 的真正优势是什么，风险又在哪里。\n\n我利用 <b>SWOT</b> 完成了这轮结构化思考。结论是：<b>爱奇艺的核心优势不在技术，而在 IP 版权</b>——这是我们不可被复制的东西，也是设计应该死死咬住的锚点。',
          html: `<style>
.quadrant-wrap{position:relative;width:100%;max-width:720px;margin:12px auto 32px}
.quad-cell .qwatermark{position:absolute;top:6px;right:8px;font-size:80px;font-weight:900;color:rgba(255,255,255,.025);font-family:system-ui,-apple-system,sans-serif;line-height:1;pointer-events:none;z-index:0;letter-spacing:-0.02em}
.quadrant-grid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}
.quadrant-inner{grid-column:1/3;grid-row:1/3;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;position:relative;min-height:360px}
.quadrant-inner::before,.quadrant-inner::after{content:"";position:absolute;background:#C7FF00;opacity:.25;z-index:0}
.quadrant-inner::before{left:0;right:0;top:50%;height:1px;transform:translateY(-0.5px)}
.quadrant-inner::after{top:0;bottom:0;left:50%;width:1px;transform:translateX(-0.5px)}
.quadrant-center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:8px;height:8px;border-radius:50%;background:#C7FF00;z-index:2;opacity:.6}
.quad-cell{position:relative;z-index:1;padding:20px;display:flex;flex-direction:column;justify-content:flex-start;transition:all .3s ease}
.quad-cell:hover{background:rgba(199,255,0,.02)}
.quad-cell .qlabel{color:#C7FF00;font-size:11px;font-weight:600;letter-spacing:.04em;margin-bottom:8px}
.quad-cell .qtitle{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 6px}
.quad-cell .qdesc{color:#A0A0A0;font-size:12px;line-height:1.7;font-weight:400;margin:0}
.quad-cell .qdesc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.quadrant-inner{min-height:300px}.quad-cell{padding:12px}.quad-cell .qtitle{font-size:12px}.quad-cell .qdesc{font-size:11px}}
</style>
<div class="quadrant-wrap">
<div class="quadrant-grid">
<div class="quadrant-inner">
<div class="quadrant-center"></div>
<div class="quad-cell" style="background:rgba(199,255,0,0.04)"><span class="qwatermark">S</span><p class="qlabel">核心资产</p><p class="qtitle">IP 版权资产</p><p class="qdesc">依托长视频生态，构建了独立 AI 工具难以复制的正版影视资产。</p></div>
<div class="quad-cell"><span class="qwatermark">W</span><p class="qlabel">内在瓶颈</p><p class="qtitle">用户认知内耗</p><p class="qdesc">影视消费的「被动喂养」与 AI 创作的「主动交互」存在心智抵触；生成质量的不可控，打破了用户对长视频精美质感的心理共识。</p></div>
<div class="quad-cell"><span class="qwatermark">O</span><p class="qlabel">增量机遇</p><p class="qtitle">传播逻辑重构</p><p class="qdesc">改变长视频单向传播模式，通过 AI 赋能将影视 IP 转化为碎片化素材，实现从「单向观看」到「裂变式二次创作」的爆发性传播。</p></div>
<div class="quad-cell"><span class="qwatermark">T</span><p class="qlabel">战略威胁</p><p class="qtitle">工具侧降维挤压</p><p class="qdesc">头部专业工具已完成心智垄断，若强行竞争生成技术，极易被工具类产品降维击穿。</p></div>
</div>
</div>
</div>`,        },
        {
          heading: '定位重塑：消费型 AI 互动社区',
          body: 'SWOT 分析后，我们面临产品定位的关键抉择：<b>是否要做一个「专业 AI 创作工具」</b>。\n\n专业工具路线看似合理—市场成熟、认知清晰。但两个致命问题让我们否掉了它：爱奇艺单一的营收模式无法覆盖 AI 视频的巨额算力成本；技术上难以企及深耕多年的视频大模型厂商。\n\n因此我们选择了另一条路：做「消费型 AI 互动社区」，以轻量玩法和 IP 资产优势，打造普通观众也能参与的二创生态。',
          html: `<style>
.decision-compare{display:flex;align-items:center;justify-content:center;gap:24px;margin:32px 0;flex-wrap:wrap}
.decision-opt{display:flex;flex-direction:column;align-items:center;gap:8px;padding:24px 32px;border-radius:6px;min-width:260px;position:relative;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08)}
.decision-opt.reject{opacity:0.5}
.decision-opt.reject:hover{opacity:0.8;border-color:rgba(255,255,255,0.15);transform:translateY(-2px)}
.decision-opt.reject::before{content:'✕';position:absolute;top:14px;right:14px;font-size:16px;color:#ff4444;font-weight:700}
.decision-opt.pick{border:1px solid rgba(199,255,0,0.15);background:rgba(199,255,0,0.03)}
.decision-opt.pick:hover{border-color:rgba(199,255,0,0.25);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5)}
.decision-opt.pick::after{content:'✓';position:absolute;top:14px;right:14px;font-size:18px;color:#C7FF00;font-weight:700}
.decision-opt-label{font-size:16px;font-weight:600;margin:0}
.decision-opt.reject .decision-opt-label{color:#a1a1aa;text-decoration:line-through}
.decision-opt.pick .decision-opt-label{color:#C7FF00}
.decision-opt-desc{font-size:13px;color:#a0a0a0;text-align:center;line-height:1.5;margin:0}
.decision-opt.pick .decision-opt-desc{color:#d4d4d8}
.decision-arrow{color:#52525b;font-size:24px;font-weight:700;animation:decision-pulse 2s infinite}
.decision-compare:hover .decision-arrow{color:#C7FF00;transform:translateX(4px);animation:none}
@keyframes decision-pulse{0%,100%{opacity:0.4}50%{opacity:1}}
@media(max-width:767px){.decision-compare{gap:16px}.decision-opt{min-width:150px;padding:20px 24px}.decision-opt-label{font-size:15px}.decision-arrow{font-size:18px;transform:rotate(90deg)}.decision-compare:hover .decision-arrow{transform:rotate(90deg) translateY(4px)}}
</style>
<div class="decision-compare">
<div class="decision-opt reject">
<p class="decision-opt-label">专业 AI 创作工具</p>
<p class="decision-opt-desc">算力成本不可持续 · 技术壁垒无法突破</p>
</div>
<div class="decision-arrow">→</div>
<div class="decision-opt pick">
<p class="decision-opt-label">消费型 AI 互动社区</p>
<p class="decision-opt-desc">轻量级低门槛 · 基于IP资产优势</p>
</div>
</div>`,
        },
        {
          heading: '设计目标：基于设计要素进行推导',
          body: '确定产品方向后，我基于<b> IDEO 设计思维的三要素框架</b>对吃鲸AI的设计目标进行推导。',
          html: `<style>
.goal-row{display:flex;justify-content:center;align-items:flex-start;gap:clamp(32px,3.2vw,48px);max-width:860px;margin:28px auto}
.goal-col{flex:1;display:flex;flex-direction:column;align-items:center;min-width:0}
.goal-map-dv{color:#C7FF00;font-size:11px;font-weight:600;letter-spacing:0.04em}
.goal-map-q{color:#71717a;font-size:12px;margin-top:2px;font-weight:600}
.goal-map-down{color:#52525b;font-size:16px;margin:8px 0}
.circle-node{width:110px;height:110px;border-radius:50%;border:1px solid rgba(255,255,255,0.08);background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:center;text-align:center;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}
.circle-node:hover{border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5)}
.circle-node span{color:#FFFFFF;font-size:14px;font-weight:600;line-height:1.3;padding:10px}
.circle-sub{color:#FFFFFF;font-size:12px;font-weight:600;text-align:center;margin:14px 0 6px;width:100%;white-space:nowrap}
.circle-desc{color:#A0A0A0;font-size:11px;line-height:1.6;font-weight:400;text-align:center;margin:0;width:100%;white-space:nowrap}
@media(max-width:767px){.goal-row{flex-direction:column;gap:24px}.goal-col{width:100%}.circle-node{width:90px;height:90px}.circle-node span{font-size:12px}}
</style>
<div class="goal-row">
<div class="goal-col">
<span class="goal-map-dv">Desirability</span><span class="goal-map-q">为谁设计</span><span class="goal-map-down">↓</span>
<div class="circle-node"><span>身份重构</span></div>
<p class="circle-sub">从「被动观看者」到「生态共创者」</p><p class="circle-desc">引导观众转型为共创者，实现社区归属。</p>
</div>
<div class="goal-col">
<span class="goal-map-dv">Feasibility</span><span class="goal-map-q">怎样落地</span><span class="goal-map-down">↓</span>
<div class="circle-node"><span>体验降维</span></div>
<p class="circle-sub">从「重度生产力」到「消费级互动」</p><p class="circle-desc">隐藏模型复杂度，让创作像刷视频一样自然。</p>
</div>
<div class="goal-col">
<span class="goal-map-dv">Viability</span><span class="goal-map-q">如何持续</span><span class="goal-map-down">↓</span>
<div class="circle-node"><span>价值闭环</span></div>
<p class="circle-sub">从「单向播放」到「IP增值循环」</p><p class="circle-desc">打通消费-创作-传播循环，激活IP增值。</p>
</div>
</div>`,
        },
        {
          heading: '用户旅程：从看剧观众到AI创作者',
          body: '三条设计目标明确后，我需要验证这些方向是否真的切中了用户痛点。我们用<b>旅程地图</b>还原了从<b>「看剧观众」到「AI 创作者」</b>的完整转化链路。',
          html: `<style>
.jm-insight{background:rgba(199,255,0,0.04);border-left:3px solid #C7FF00;padding:14px 18px;border-radius:0 6px 6px 0;margin-top:20px;max-width:1080px;margin-left:auto;margin-right:auto}
.jm-insight p{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:0}
.jm-insight b{color:#C7FF00;font-weight:600}
.jm-table{width:100%;border-collapse:collapse;margin-top:12px;table-layout:fixed}
.jm-table th,.jm-table td{padding:24px 16px;font-size:12px;color:#A0A0A0;line-height:1.6;border-bottom:1px solid #222226;vertical-align:top;font-weight:400;text-align:left;word-break:break-word}
.jm-table th{padding:24px 16px;vertical-align:middle}
.jm-table .lbl{padding:24px 16px 24px 24px}
.jm-table th .t{color:#FFFFFF;font-size:14px;font-weight:600;display:block;margin-bottom:2px}
.jm-table th .s{color:#A0A0A0;font-size:10px;font-weight:400}
.jm-table th.core .t,.jm-table th.core .s{color:#FFFFFF!important}
.jm-table .lbl{width:90px;font-size:11px;font-weight:600;color:#A0A0A0;vertical-align:middle;text-align:left}
.jm-table .lbl.grn{background:rgba(199,255,0,0.06)}
.jm-table .jm-kw{color:#FFFFFF;font-weight:500;display:block;margin-bottom:2px}
.jm-table .strat{background:rgba(199,255,0,0.06)}
.jm-table .strat .st{display:block;margin-bottom:2px;color:rgba(199,255,0,0.75);font-weight:600;font-size:12px}
.jm-table .strat .st.w{color:#FFFFFF!important}
.jm-table tr:last-child td{border-bottom:none}
.jm-mobile{display:none}
@media(max-width:767px){.jm-table{display:none!important}.jm-mobile{display:flex;flex-direction:column;gap:24px}.jm-mobile-col{border-left:1px solid #222226;padding-left:22px}.jm-mobile-col-header{font-size:14px;font-weight:600;color:#FFFFFF;margin-bottom:12px;position:relative}.jm-mobile-col-header::before{content:'';position:absolute;left:-29px;top:50%;transform:translateY(-50%);width:15px;height:15px;border-radius:50%;background:#121212;border:2px solid #71717a}.jm-mobile-col-item{margin-bottom:12px;padding:14px;background:rgba(30,30,34,0.6);border:1px solid rgba(255,255,255,0.06);border-radius:8px}.jm-mobile-col-item:last-child{margin-bottom:0}.jm-mobile-col-label{font-size:10px;color:#71717a;text-transform:uppercase;margin-bottom:4px;display:block}.jm-mobile-col-desc{font-size:12px;color:#A0A0A0;line-height:1.6}.jm-mobile-col-desc .jm-kw{color:#FFFFFF;font-weight:500;margin-bottom:2px}.jm-mobile-col-item.strat{background:rgba(199,255,0,0.03);border:1px solid rgba(199,255,0,0.1)}.jm-mobile-col-item.strat .jm-mobile-col-desc{color:#C7FF00}}
</style>
<table class="jm-table">
<thead>
<tr><th class="lbl">阶段</th><th><span class="t">探索发现</span><span class="s">寻找同好与共鸣</span></th><th><span class="t">激发灵感</span><span class="s">评估创作门槛</span></th><th><span class="t">获取资源</span><span class="s">获取版权素材</span></th><th><span class="t">创作生产</span><span class="s">快速产出与分享</span></th></tr>
</thead>
<tbody>
<tr><td class="lbl">用户需求</td><td>看完热播剧，想找同好讨论剧情、玩梗。</td><td>看二创作品产生表达欲，想了解创作门槛。</td><td>需要高清合规素材作为二创基础。</td><td>不想用复杂工具，想快速完成创作。</td></tr>
<tr><td class="lbl">核心卡点</td><td><span class="jm-kw">误当成传统播放器</span>消费惯性过强，看完即走。</td><td><span class="jm-kw">不知道写什么</span>空白画布，缺少引导。</td><td><span class="jm-kw">素材获取链路断裂</span>缺乏正版渠道，版权风险高。</td><td><span class="jm-kw">工具门槛过高</span>复杂编辑参数，劝退普通观众。</td></tr>
<tr><td class="lbl grn">设计策略</td><td class="strat"><span class="st w">建立社区认知</span>营造能看、能玩的社区氛围。</td><td class="strat"><span class="st w">模板化降低门槛</span>爆款模板 + 引导教程。</td><td class="strat"><span class="st w">站内素材闭环</span>提供官方高清影视切片。</td><td class="strat"><span class="st w">轻量交互转化</span>低门槛交互创意玩法。</td></tr>
</tbody>
</table>
<div class="jm-mobile">
<div class="jm-mobile-col">
<div class="jm-mobile-col-header">探索发现 · 寻找同好与共鸣</div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">用户需求</span><p class="jm-mobile-col-desc">看完热播剧，想找同好讨论剧情、玩梗。</p></div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">核心卡点</span><p class="jm-mobile-col-desc"><span class="jm-kw">误当成传统播放器</span>消费惯性过强，看完即走。</p></div>
<div class="jm-mobile-col-item strat"><span class="jm-mobile-col-label">设计策略</span><p class="jm-mobile-col-desc">建立社区认知 — 双列瀑布流营造社区氛围。</p></div>
</div>
<div class="jm-mobile-col">
<div class="jm-mobile-col-header">激发灵感 · 评估创作门槛</div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">用户需求</span><p class="jm-mobile-col-desc">看二创作品产生表达欲，想了解创作门槛。</p></div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">核心卡点</span><p class="jm-mobile-col-desc"><span class="jm-kw">不知道写什么</span>空白画布，缺少引导。</p></div>
<div class="jm-mobile-col-item strat"><span class="jm-mobile-col-label">设计策略</span><p class="jm-mobile-col-desc">模板化降低门槛 — 爆款模板 + 引导教程。</p></div>
</div>
<div class="jm-mobile-col">
<div class="jm-mobile-col-header">获取资源 · 获取版权素材</div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">用户需求</span><p class="jm-mobile-col-desc">需要高清合规素材作为二创基础。</p></div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">核心卡点</span><p class="jm-mobile-col-desc"><span class="jm-kw">素材获取链路断裂</span>缺乏正版渠道，版权风险高。</p></div>
<div class="jm-mobile-col-item strat"><span class="jm-mobile-col-label">设计策略</span><p class="jm-mobile-col-desc">站内素材闭环 — 官方高清影视切片。</p></div>
</div>
<div class="jm-mobile-col">
<div class="jm-mobile-col-header">创作生产 · 快速产出与分享</div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">用户需求</span><p class="jm-mobile-col-desc">不想用复杂工具，想快速完成创作。</p></div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">核心卡点</span><p class="jm-mobile-col-desc"><span class="jm-kw">工具门槛过高</span>复杂编辑参数，劝退普通观众。</p></div>
<div class="jm-mobile-col-item strat"><span class="jm-mobile-col-label">设计策略</span><p class="jm-mobile-col-desc">轻量交互转化 — 低门槛影视创意玩法。</p></div>
</div>
<div class="jm-insight"><p>走完整条链路后，我用 Fogg 行为模型（B=MAT）重新审视：行为发生需要 Motivation、Ability、Trigger 三者同时触发。链路中用户不缺 Motivation 和 Trigger——真正断裂的是 Ability，而素材获取正是 Ability 的关键瓶颈。\n\n由此我做出关键判断：<b>素材库不能只做功能模块，必须升级为产品护城河</b>。这个判断也直接催生了后续「影视创意玩法」的设计方向。</p></div>`,
        },
        {
          heading: '产品框架：以消带产，从消费到创作',
          body: '基于旅程洞察，我们将产品框架收敛为<b>「以消带产」</b>的核心策略：在用户消费内容的高光时刻嵌入创作入口，<b>将观看冲动直接转化为创作动力</b>。\n\n框架左侧承载内容分发与消费闭环，右侧通过多层素材库降低创作门槛。其中<b>「影视创意玩法」</b>和<b>「爱奇艺影视库」</b>是两根核心支柱—前者降低创作的心理门槛，后者解决素材的获取障碍，二者共同构成了产品不可替代的<b>体验壁垒</b>。',
          html: `<style>
.arch-flow{display:flex;flex-direction:column;align-items:center;gap:30px;max-width:1080px;margin:0 auto}
.arch-flow-row{display:flex;align-items:center;justify-content:center;gap:20px;width:100%;max-width:1080px;margin:0 auto}
.arch-col{flex:1;min-width:0;background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:22px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}
.arch-col:hover{border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}
.arch-col-label{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative;margin:0 0 14px}
.arch-col-label::before{content:"";width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.arch-col-label::after{content:"";position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.arch-col-items{display:flex;flex-direction:column;gap:8px}
.arch-item{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:10px 14px;font-size:13px;color:#A0A0A0;font-weight:400;text-align:center;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}
.arch-item:hover{border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}
.arch-item.hl{border-color:rgba(199,255,0,0.2);color:#C7FF00;background:rgba(199,255,0,0.06)}
.arch-arrow{display:flex;flex-direction:column;align-items:center;width:40px;flex-shrink:0;justify-content:center}
.arch-arrow-line{width:100%;height:1px;background:#C7FF00;position:relative}
.arch-arrow-line::after{content:'';position:absolute;right:0;top:-3px;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:6px solid #C7FF00}
.arch-arrow.rev .arch-arrow-line::after{right:auto;left:0;border-left:none;border-right:6px solid #C7FF00}
.arch-arrow-label{font-size:11px;color:#C7FF00;margin-top:6px;text-align:center}.arch-arrow-sym{display:none}
.arch-footnote{margin-top:12px;font-size:13px;color:#A0A0A0;font-weight:400;display:flex;align-items:center;gap:8px}
.arch-footnote::before{content:'';width:6px;height:6px;background:#C7FF00;border-radius:50%;flex-shrink:0}
@media(max-width:767px){.arch-flow-row{flex-direction:column;gap:20px}.arch-col{width:100%!important;max-width:100%!important;padding:16px}.arch-col-label{font-size:13px;margin-bottom:10px;padding-bottom:8px}.arch-item{font-size:12px;padding:8px 12px}.arch-arrow{text-align:center;width:100%;padding:6px 0;white-space:nowrap}.arch-arrow-line{display:none}.arch-arrow-line::after{display:none}.arch-arrow-sym{display:inline;color:#C7FF00;font-size:16px;margin-right:6px}.arch-arrow-label{font-size:11px;color:#C7FF00}}
</style>
<div class="arch-flow">
<div class="arch-flow-row">
<div class="arch-col"><div class="arch-col-label">分发页</div><div class="arch-col-items"><div class="arch-item">首页瀑布流</div><div class="arch-item">沉浸流播放器</div><div class="arch-item">模板/教程</div></div></div>
<div class="arch-arrow"><div class="arch-arrow-line"></div><span class="arch-arrow-sym">↓</span><span class="arch-arrow-label">以消带产</span></div>
<div class="arch-col"><div class="arch-col-label">创作页</div><div class="arch-col-items"><div class="arch-item">通用视频生成</div><div class="arch-item hl">影视创意玩法</div><div class="arch-item">上传AI视频作品</div></div></div>
<div class="arch-arrow rev"><div class="arch-arrow-line"></div><span class="arch-arrow-sym">↑</span><span class="arch-arrow-label">赋能创作</span></div>
<div class="arch-col"><div class="arch-col-label">素材库</div><div class="arch-col-items"><div class="arch-item hl">影视片段</div><div class="arch-item">本地图片/视频</div><div class="arch-item">已创作视频</div></div></div>
</div>
</div>`,
        },
        {
          heading: '底层逻辑：三层协同的创作引擎',
          body: '业务闭环确定了，但技术底座仍是难题：AI 生成依赖强大的基础模型，而爱奇艺不能自研（算力成本高，技术迭代无法追不上头部厂商）。\n\n因此借助外部厂商模型成为必然，但也意味着要承受外部模型不可控的风险。我的解法是「分层隔离」：',
          html: `<style>@media(max-width:767px){.arch-card{flex-direction:column!important;gap:16px!important}}.arch-card{transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.arch-card:hover{border-color:rgba(255,255,255,0.15)!important;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}.arch-card.accent{background:rgba(199,255,0,.02)!important;border:1px solid rgba(199,255,0,.1)!important}.arch-card.accent:hover{background:rgba(199,255,0,.04)!important;border-color:rgba(199,255,0,.18)!important;transform:translateY(-2px);box-shadow:0 20px 40px rgba(199,255,0,0.08)}.arch-row{display:flex;gap:0;align-items:stretch;margin:24px auto;max-width:1080px}.arch-arrow{display:flex;align-items:center;color:#52525b;font-size:16px;flex-shrink:0;padding:0 8px}.arch-row .arch-card{flex:1;width:auto!important;flex-direction:column!important;gap:16px!important}.arch-h4{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;margin:0 0 12px;position:relative}.arch-h4::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}.arch-h4::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}.arch-h4.accent::after{background:#222226}@media(max-width:767px){.arch-row{flex-direction:column!important;gap:16px}.arch-row .arch-card{flex-direction:row!important}.arch-row .arch-arrow{display:none!important}}</style>
<div class="arch-row">
<div class="arch-card" style="background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:24px;display:flex;gap:24px;align-items:flex-start">
<div><h4 class="arch-h4">底层：生态输入层</h4>
<p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 6px">IP 资产 + 版权素材库</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:400">独家正片与 IP 资产，提供版权合规素材。</p></div>
</div>
<span class="arch-arrow">→</span>
<div class="arch-card" style="background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:24px;display:flex;gap:24px;align-items:flex-start">
<div><h4 class="arch-h4">中层：核心逻辑层</h4>
<p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 6px">通用模型 + 场景化调优</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:400">接入可灵、Seedance外部模型，内部AI团队针对具体需求场景精准调优。</p></div>
</div>
<span class="arch-arrow">→</span>
<div class="arch-card" style="background:rgba(199,255,0,0.03);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(199,255,0,0.12);border-radius:6px;padding:24px;display:flex;gap:24px;align-items:flex-start">
<div><h4 class="arch-h4">顶层：感知交互层</h4>
<p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 6px">模板化交互，降低门槛</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:400"><b style="color:#C7FF00">设计的核心阵地，由UX完全掌控交互逻辑。</b></p></div>
</div>
</div>
`,
        },
        {
          heading: '以消带产：分层触点的落地',
          body: '框架落定后，第一个要解决的是分发场景：如何把用户的观看冲动，低成本转化为创作行为。\n\n根据 Hook Model，外部 Trigger 可以替代用户的内部决策负担。针对用户不同时刻的心理，我们设计了三个分层的触发点：\n\n① <b>首页瀑布流（弱触发·建认知）</b>— 用双列 Feed 流让用户感知「这里能玩 AI」\n② <b>播放页（强刺激·捕冲动）</b> — 观看冲动最强的时刻，同款入口即时出现\n③ <b>模板 Tab（深加工·导行动）</b>— 把模糊意向转化为具体拍摄动作\n\n三个触点层层递进，配合全局「+」浮层兜底，让「看到 → 想要 → 开始」无缝衔接。',
          html: `<style>
.dist-row{display:flex;gap:60px;align-items:flex-start;margin:14px auto;width:fit-content;max-width:100%}
.dist-col{display:flex;flex-direction:column;gap:16px;align-items:flex-start}@media(min-width:768px){.dist-col{align-items:flex-start}}
.dist-col-title{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative;margin:0}
.dist-col-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.dist-col-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.dist-col-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:0}
.dist-img-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}@media(min-width:768px){.dist-img-row{display:flex;justify-content:center}}
@media(max-width:767px){.dist-row{flex-direction:column!important;gap:24px}.dist-col{width:100%!important;flex:none}}
.dist-placeholder{aspect-ratio:9/19.5;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #333333;border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;width:100%;max-width:180px;margin:0 auto}
.dist-placeholder::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.dist-img-wrap{display:flex;flex-direction:column;align-items:center}
.dist-img-label{font-size:11px;color:#A0A0A0;text-align:center;margin-top:6px}
@media(max-width:767px){.dist-row{grid-template-columns:repeat(2,1fr);gap:16px}}
</style>
<div class="dist-row">
<div class="dist-col">
<div class="dist-col-title">内容分发核心触点</div>
<p class="dist-col-desc">在各分发场景下设置创作按钮，以便用户产生灵感后即可创作。</p>
<div class="dist-img-row">
<div class="dist-img-wrap"><div data-preview class="dist-placeholder"><img src="/birdys-portfolio/images/chijing-home.png" alt="首页" style="width:100%;height:auto;display:block" /></div><span class="dist-img-label">首页</span></div>
<div class="dist-img-wrap"><div data-preview class="dist-placeholder"><img src="/birdys-portfolio/images/chijing-player.png" alt="播放页" style="width:100%;height:auto;display:block" /></div><span class="dist-img-label">播放页</span></div>
<div class="dist-img-wrap"><div data-preview class="dist-placeholder"><img src="/birdys-portfolio/images/chijing-template.png" alt="模板 Tab" style="width:100%;height:auto;display:block" /></div><span class="dist-img-label">模板 Tab</span></div>
</div>
</div>
<div class="dist-col">
<div class="dist-col-title">全局「+」浮层</div>
<p class="dist-col-desc">展示全部AI视频玩法。</p>
<div class="dist-img-row">
<div class="dist-img-wrap"><div data-preview class="dist-placeholder"><img src="/birdys-portfolio/images/chijing-float.png" alt="+浮层" style="width:100%;height:auto;display:block" /></div><span class="dist-img-label">「+」浮层</span></div>
</div>
</div>
</div>
`,
        },
        {
          heading: '以消带产：三个核心玩法的提炼',
          body: '通用视频生成是平台基础能力，但解决不了普通用户的困境—面对空白画布，大多数人不知道从何下手。\n\n我回到一个更根本的问题：影视片段由哪些用户可操控的维度构成？从影视学角度看，核心维度包括剧情、画风、台词、镜头节奏、音效配乐等。但并非都适合普通用户操控——音效、剪辑需要专业知识，而台词、画风、剧情是大众有天然认知、AI 又能干预、且已被市场验证的三个维度。\n\n基于此，我们聚焦这三个维度，提炼出三个核心玩法—<b>画风转换</b>（操控视觉）、<b>台词改写</b>（操控对白）、<b>故事接龙</b>（操控叙事）。用户不需要从零构思，只需选择一个预设方向即可开始。',
          html: `<style>
.cr-row{display:flex;gap:60px;align-items:flex-start;margin:14px auto;width:fit-content;max-width:100%}
.cr-col{display:flex;flex-direction:column;gap:16px;align-items:flex-start}
.cr-col-title{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative;margin:0}
.cr-col-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.cr-col-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.cr-col-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:0}
.cr-img-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}@media(min-width:768px){.cr-img-row{display:flex;justify-content:center}}
.cr-placeholder{aspect-ratio:9/19.5;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #333333;border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;width:100%;max-width:180px;overflow:hidden}
.cr-img-wrap{display:flex;flex-direction:column;align-items:center}
.cr-img-label{font-size:11px;color:#A0A0A0;text-align:center;margin-top:6px}
.cr-placeholder span{color:#71717a;font-size:11px;font-family:monospace;letter-spacing:.06em;position:relative;z-index:1}
@media(max-width:767px){.cr-row{flex-direction:column!important}.cr-col{width:100%!important}}
</style>
<div class="cr-row">
<div class="cr-col">
<div class="cr-col-title">通用视频生成</div>
<p class="cr-col-desc">支持多模态输入自由创作。</p>
<div class="cr-img-row">
<div class="cr-img-wrap"><div data-preview class="cr-placeholder"><img src="/birdys-portfolio/images/chijing-create-video.png" alt="创作视频" style="width:100%;height:auto;display:block" /></div><span class="cr-img-label">通用创作入口</span></div>
</div>
</div>
<div class="cr-col">
<div class="cr-col-title">影视创意玩法</div>
<p class="cr-col-desc">选择影视素材后，即可针对该视频进行定向维度的创作。</p>
<div class="cr-img-row">
<div class="cr-img-wrap"><div data-preview class="cr-placeholder"><img src="/birdys-portfolio/images/chijing-lines-rewrite.png" alt="台词改写" style="width:100%;height:auto;display:block" /></div><span class="cr-img-label">台词改写</span></div>
<div class="cr-img-wrap"><div data-preview class="cr-placeholder"><img src="/birdys-portfolio/images/chijing-story-chain.png" alt="故事接龙" style="width:100%;height:auto;display:block" /></div><span class="cr-img-label">故事接龙</span></div>
<div class="cr-img-wrap"><div data-preview class="cr-placeholder"><img src="/birdys-portfolio/images/chijing-style-transfer.png" alt="画风转换" style="width:100%;height:auto;display:block" /></div><span class="cr-img-label">画风转换</span></div>
</div>
</div>
</div>`,
        },
        {
          heading: '创作中枢：影视片段库搭建',
          body: '深入具体玩法前，需要先解决素材获取这一基础问题。我的决策是：不追求素材数量，而是用三类来源覆盖全部创作场景—<b>官方影视片段</b>（版权素材）、<b>本地图片/视频</b>（自由创作）、<b>已创作视频</b>（二次迭代）。\n\n同时，我们把它封装成<b>通用模组</b>，在通用视频、影视创意玩法等环节均可调用，并针对每个玩法精细化影视片段的运营。随着影视片段内容的持续扩充，库的形态也随之调整—从基础的盖楼式结构，演进为左导航结构，并逐步加入<b>筛选、搜索</b>能力，提升选片效率。',
          html: `<style>
.m-split{display:flex;gap:48px;align-items:flex-start;margin:0;width:fit-content;max-width:100%}
.m-col{display:flex;flex-direction:column;gap:16px;align-items:flex-start}
.m-col-title{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative;margin:0}
.m-col-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.m-col-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.m-img-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}@media(min-width:768px){.m-img-row{display:flex;justify-content:center}}
.m-placeholder{aspect-ratio:9/19.5;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #333333;border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;width:100%;max-width:150px;overflow:hidden}
.m-placeholder::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.m-placeholder span{color:#71717a;font-size:11px;font-family:monospace;letter-spacing:.06em;position:relative;z-index:1}
@media(max-width:767px){.m-split{flex-direction:column!important}.m-col{width:100%!important}}
</style>
<div style="width:fit-content;margin:0 auto">
<img src="/birdys-portfolio/images/material-hub.png" alt="素材库" style="width:640px;border-radius:6px;display:block;margin-bottom:24px" />
<div class="m-split">
<div class="m-col">
<div class="m-col-title">影视片段库形态演变预想</div>
<p class="cr-col-desc">随着影视片段内容的扩充，我们规划了不同形态，并增加相应功能。</p>
<div class="m-img-row">
<div class="cr-img-wrap"><div data-preview class="m-placeholder"><img src="/birdys-portfolio/images/mat-early.png" alt="初期" style="width:100%;height:auto;display:block" /></div><span class="cr-img-label">初期</span></div>
<div class="cr-img-wrap"><div data-preview class="m-placeholder"><img src="/birdys-portfolio/images/mat-mid.png" alt="中期" style="width:100%;height:auto;display:block" /></div><span class="cr-img-label">中期</span></div>
<div class="cr-img-wrap"><div data-preview class="m-placeholder"><img src="/birdys-portfolio/images/mat-late.png" alt="后期" style="width:100%;height:auto;display:block" /></div><span class="cr-img-label">后期</span></div>
</div>
</div>
<div class="m-col">
<div class="m-col-title">支持多选场景</div>
<p class="cr-col-desc">通用视频创作时支持多选素材。</p>
<div class="m-img-row">
<div class="cr-img-wrap"><div data-preview class="m-placeholder"><img src="/birdys-portfolio/images/mat-multi-unselected.png" alt="多选未选择" style="width:100%;height:auto;display:block" /></div><span class="cr-img-label">多选-未选择</span></div>
<div class="cr-img-wrap"><div data-preview class="m-placeholder"><img src="/birdys-portfolio/images/mat-multi-selected.png" alt="多选已选择" style="width:100%;height:auto;display:block" /></div><span class="cr-img-label">多选-已选择</span></div>
</div>
</div>
</div>
</div>`,
        },
        {
          heading: '创作中枢：参考添加调用',
          body: '在通用视频创作中，用户可引用参考图来控制生成方向。这里的基础机制是：参考被「添加」后进入参考池，被「调用」后则以标签形式嵌入输入框内。但调用真正的难点在于理清「用户在什么心智状态下需要它」。我以场景化思考切入，模拟用户自然输入剧情时的心流，按构想成熟度把用户分成三种状态：\n\nA. <b>构想已建立</b>—开始输入前一次性添加好所有参考\nB. <b>构想部分建立</b>—先加一部分，边输入边补充\nC. <b>构想未建立</b>—边写边即时添加\n\n三种状态的共同要求是：调用入口要足够灵活，既不要求用户预先想清楚，也不打破用户当前的心流。因此我把「调用」设计成三类入口：\n\n① <b>点击已添加的参考缩略图</b>—视觉浏览流\n② <b>输入 @ 唤起浮层点选</b>—键盘输入心流\n③ <b>点击已调用的参考标签唤起浮层替换</b>—修改替换流\n\n其中前两者是首次调用的互补入口，覆盖点击交互与键盘两种输入状态；后者兜底「调错想换」的场景。这样，无论用户处于哪种构想状态，都能在输入流中随时调用参考，而无需离开创作上下文。',
          html: `<style>
.lr-label{font-size:12px;color:#A0A0A0;text-align:center}
</style>
<div class="lr-row">
<div class="lr-item"><div data-preview class="lr-placeholder"><img src="/birdys-portfolio/images/ref-none.png" alt="未添加参考" /></div><span class="lr-label">未添加参考</span></div>
<div class="lr-item"><div data-preview class="lr-placeholder"><img src="/birdys-portfolio/images/ref-unused.png" alt="未调用参考" /></div><span class="lr-label">未调用参考</span></div>
<div class="lr-item"><div data-preview class="lr-placeholder"><img src="/birdys-portfolio/images/ref-used.png" alt="已调用参考" /></div><span class="lr-label">已调用参考</span></div>
<div class="lr-item"><div data-preview class="lr-placeholder"><img src="/birdys-portfolio/images/ref-overlay.png" alt="已添加参考浮层" /></div><span class="lr-label">已添加参考浮层</span></div>
</div>`,
        },
        {
          heading: '台词改写：门槛递降，预期可见',
          body: '改写经典影视台词，是短视频里长盛不衰的二创玩法—市面案例众多，却几乎都靠创作者「手搓」，从头改写的高门槛让普通用户望而却步。\n\n不同状态的用户需要不同层级的引导。<b>Scaffolding 渐进释放理论</b>指出：入门阶段需要高引导，熟练后逐步归还自主权。据此我设计了三种入口，引导强度从高到低逐级递减：\n\n① <b>底部主题标签</b>— 完全没想法，一键生成（高引导）\n② <b>AI 写台词浮层</b>— 有方向缺灵感，输入主题由 AI 生成（中引导）\n③ <b>逐句点击改写</b>— 已有想法，所见即所得（低引导）\n\n但「怎么改」只是第一步，改完之后还有一道坎—<b>预期管理</b>。改写后不会即时生成视频（解析需要时间），漫长的等待与不确定感极易劝退用户。为此我借鉴音乐播放器的歌词时间轴，解析影视片段台词，让<b>视频画面与台词时间轴联动预览</b>—改写时实时看到每句台词对应的画面，在生成前就校准「抽卡预期」，把不可控的等待变成可控的确认。',
          html: `<style>
.lr-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;max-width:min(900px,100%);margin:0 auto}
.lr-item{display:flex;flex-direction:column;align-items:center;gap:8px}
.lr-placeholder{aspect-ratio:9/19.5;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #333333;border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;width:100%;max-width:180px;overflow:hidden}
.lr-placeholder::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.lr-placeholder img{width:100%;height:100%;object-fit:contain}
.lr-placeholder video{width:100%;height:100%;object-fit:contain}
.lr-video-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);cursor:pointer;transition:all 0.3s ease}
.lr-video-overlay:hover{background:rgba(0,0,0,0.15)}
.lr-play-circle{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;transition:all 0.3s ease}
.lr-video-overlay:hover .lr-play-circle{background:rgba(255,255,255,0.35);transform:scale(1.08)}
.lr-play-circle img{width:22px!important;height:22px!important;opacity:0.6;transition:all 0.3s ease}
.lr-video-overlay:hover .lr-play-circle img{opacity:0.9}
.lr-label{font-size:12px;color:#A0A0A0;text-align:center}
@media(max-width:767px){.lr-row{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}}
</style>
<div class="lr-row">
<div class="lr-item"><div data-preview class="lr-placeholder"><img src="/birdys-portfolio/images/lines-original.png" alt="原始台词" /></div><span class="lr-label">原始台词</span></div>
<div class="lr-item"><div data-preview class="lr-placeholder"><img src="/birdys-portfolio/images/lines-manual.png" alt="手动编辑" /></div><span class="lr-label">手动编辑</span></div>
<div class="lr-item"><div data-preview class="lr-placeholder"><img src="/birdys-portfolio/images/lines-ai.png" alt="AI写台词" /></div><span class="lr-label">AI写台词</span></div>
<div class="lr-item"><div data-preview class="lr-placeholder"><video muted playsInline poster="/birdys-portfolio/images/lines-preview.png"><source src="/birdys-portfolio/videos/lines-demo.mov" type="video/quicktime" /></video><div class="lr-video-overlay"><span class="lr-play-circle"><img src="/birdys-portfolio/images/play-btn.png" alt="播放" /></span></div></div><span class="lr-label">台词生成过程</span></div>
</div>`,
        },
        {
          heading: '故事接龙：AI视频链式共创',
          body: '台词改写解决的是「一个人怎么创作」，故事接龙则要解决「一群人怎么共创」—两者的区别不在玩法复杂度，而在参与互动感的深化。\n\n而互动的持续，恰恰是传统 UGC 的软肋—「发布即终点」让内容发出后便静态沉淀，没有持续参与的理由。我从影视 IP 的天然优势找到突破口：热播剧的大结局本身就是用户情绪的高点，也是创作欲最强的时刻。把接龙起点锚定在大结局处—依托已有世界观降低冷启动门槛，让用户从「追完剧」自然过渡到「改写结局」，每个灵感接续前文、不断延展。\n\n这样一来，接龙不再是一堆孤立的二创，而是被串联成一部不断生长的<b>「AI 短剧」</b>。剧有情节、有进展，参与者和围观者会像追剧一样持续回来，形成持续消费的动力。',
          html: `<div style="text-align:center"><div data-preview style="display:inline-block"><img src="/birdys-portfolio/images/story-chain.png" alt="故事接龙" style="width:100%;max-width:800px;border-radius:8px;border:1px solid #27272a;display:block" /></div><p style="color:#A0A0A0;font-size:12px;margin-top:8px">故事接龙逻辑示意</p></div>`,
        },
        {
          heading: '故事接龙：起点页方案探索',
          body: '接龙的核心交互在于起点页—它要在一屏之内完成<b>世界观透传</b>、<b>创作引导</b>和<b>生态图谱展示</b>。没有成熟行业参考，我在信息密度和可理解性之间做了不同取舍，尝试了三个方向：\n\n① <b>评论盖楼式</b>—理解门槛低，单对剧情分支与多元走向的容量有限\n② <b>平行宇宙式</b>—多线并行、每条故事线独立完整，但概念抽象、理解门槛高\n③ <b>地图探索式</b>—空间化地图直观呈现非线性叙事、探索感强，但信息密度过高、用户易迷失',
          html: `<style>
.sk-wrapper{display:flex;gap:40px;justify-content:center;max-width:100%;flex-wrap:wrap}
.sk-group{flex-shrink:0}
.sk-item{width:150px;flex-shrink:0}
.sk-placeholder{width:100%;max-width:150px;aspect-ratio:9/19.5;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #333333;border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
@media(max-width:767px){.sk-wrapper{flex-direction:column;align-items:center;gap:24px}.sk-group{flex:none;width:100%}.sk-row{gap:3%}.sk-item{width:auto;flex:1 1 0;min-width:0}.sk-placeholder{width:100%}}
.sk-group-title{color:#FFFFFF;font-size:14px;font-weight:600;margin-bottom:12px;display:flex;align-items:center;gap:8px}
.sk-group-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.sk-group-desc{color:#A0A0A0;font-size:13px;line-height:1.6;margin:0 0 12px;font-weight:400}
.sk-row{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}@media(min-width:768px){.sk-row{display:flex;justify-content:center}}
.sk-item{display:flex;flex-direction:column;align-items:center;gap:8px}
.sk-label{font-size:12px;color:#A0A0A0;text-align:center}

.sk-placeholder img{width:100%;height:100%;object-fit:contain}
.sk-placeholder::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.sk-placeholder span{color:#71717a;font-size:11px;font-family:monospace;letter-spacing:.06em;position:relative;z-index:1}
@media(max-width:767px){.sk-row{gap:10px}}
</style>
<div class="sk-wrapper">
<div class="sk-group"><div class="sk-group-title">评论该楼式</div><div class="sk-row"><div class="sk-item"><div data-preview class="sk-placeholder"><img src="/birdys-portfolio/images/sk-start-a.png" alt="起点页A" style="width:100%;height:auto;display:block" /></div><span class="sk-label">起点页A</span></div></div></div>
<div class="sk-group"><div class="sk-group-title">平行宇宙式</div><div class="sk-row"><div class="sk-item"><div data-preview class="sk-placeholder"><img src="/birdys-portfolio/images/sk-start-b.png" alt="起点页B" style="width:100%;height:auto;display:block" /></div><span class="sk-label">起点页B</span></div><div class="sk-item"><div data-preview class="sk-placeholder"><img src="/birdys-portfolio/images/sk-start-b-map.png" alt="起点页B-展开地图" style="width:100%;height:auto;display:block" /></div><span class="sk-label">接龙宇宙</span></div></div></div>
<div class="sk-group"><div class="sk-group-title">地图探索式</div><div class="sk-row"><div class="sk-item"><div data-preview class="sk-placeholder"><img src="/birdys-portfolio/images/sk-start-c.png" alt="起点页C" style="width:100%;height:auto;display:block" /></div><span class="sk-label">起点页C</span></div><div class="sk-item"><div data-preview class="sk-placeholder"><img src="/birdys-portfolio/images/sk-start-c-map.png" alt="起点页C-展开地图" style="width:100%;height:auto;display:block" /></div><span class="sk-label">接龙地图</span></div></div></div>
</div>`,
        },
        {
          heading: '故事接龙：起点页减法收敛',
          body: '多轮探索后，核心矛盾浮出水面：故事接龙承载的主线、支线信息量太大，若全部堆在首屏，用户一打开便迷失其中。\n\n最终方案是「减法」—首屏只保留主线故事，支线收纳进接龙播放器的选集列表，让用户第一眼只面对一件事。由此收敛出两条清晰的路径：\n\n① <b>想直接创作</b>—进入起点页，点「去接龙」，看完大结局再点「开始接龙」即可创作\n② <b>想先探索</b>—进入起点页，选择一条故事线，进入播放器顺着主线慢慢探索\n\n支线的展开交给后续交互自然发生。把复杂度拆开、后置，不让它第一秒就吓退用户。',
          html: `<style>
.lr-video-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.3);cursor:pointer;transition:all 0.3s ease}
.lr-video-overlay:hover{background:rgba(0,0,0,0.15)}
.lr-play-circle{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;transition:all 0.3s ease}
.lr-video-overlay:hover .lr-play-circle{background:rgba(255,255,255,0.35);transform:scale(1.08)}
.lr-play-circle img{width:22px!important;height:22px!important;opacity:0.6;transition:all 0.3s ease}
.lr-video-overlay:hover .lr-play-circle img{opacity:0.9}
.lr-label{font-size:12px;color:#A0A0A0;text-align:center}
</style>
<div class="lr-row">
<div class="lr-item"><div data-preview class="lr-placeholder"><img src="/birdys-portfolio/images/sk-final-start.png" alt="起点页" /></div><span class="lr-label">起点页</span></div>
<div class="lr-item"><div data-preview class="lr-placeholder"><img src="/birdys-portfolio/images/sk-final-ending.png" alt="大结局预览" /></div><span class="lr-label">大结局预览</span></div>
<div class="lr-item"><div data-preview class="lr-placeholder"><img src="/birdys-portfolio/images/sk-final-create.png" alt="接龙创作页" /></div><span class="lr-label">接龙创作页</span></div>
<div class="lr-item"><div data-preview class="lr-placeholder"><video muted playsInline poster="/birdys-portfolio/images/sk-final-player.png"><source src="/birdys-portfolio/videos/story-demo.mov" type="video/quicktime" /></video><div class="lr-video-overlay"><span class="lr-play-circle"><img src="/birdys-portfolio/images/play-btn.png" alt="播放" /></span></div></div><span class="lr-label">接龙播放器</span></div>
</div>`,
        },
        {
          heading: '尾声：上线与资产留存',
          body: '2026 年 4 月，吃鲸AI 在爱奇艺世界大会正式发布，不久后因战略调整关停—这是一次战略选择，而非设计的失败。\n\n产品画上句号，但核心交互资产并未消失：创作页、播放器等<b>关键模块</b>已标准化封装为 SDK，<b>嵌入爱奇艺主站</b>，持续服务于 AI 创作能力的分发与落地。好的设计思考，应该比产品活得更久。',
          html: `<div style="display:flex;gap:60px;justify-content:center;align-items:flex-start;max-width:900px;margin:0 auto"><div style="text-align:center"><p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 12px;display:flex;align-items:center;gap:8px"><span style="width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0;display:inline-block"></span>吃鲸AI 正式发布</p><img src="/birdys-portfolio/images/ending.jpg" alt="发布" style="height:360px;width:auto;border-radius:8px;display:block;object-fit:contain" /></div><div style="text-align:center"><p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 12px;display:flex;align-items:center;gap:8px"><span style="width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0;display:inline-block"></span>吃鲸AI嵌入爱奇艺主站</p><img src="/birdys-portfolio/images/ending2.png" alt="嵌入" style="height:360px;width:auto;border-radius:8px;display:block;object-fit:contain" /></div></div>`,
        },
        {
          heading: '价值复盘：给不可控的 AI，一个可控的锚',
          body: '',
          html: `<p style="color:#FFFFFF;font-size:18px;line-height:1.6;text-align:center;margin:0 0 36px;font-weight:500">回看吃鲸AI，设计的价值，正在于<span style="color:#C7FF00;font-weight:600">把 AI 生成技术的不可控，逐层校准为可控的体验</span>。</p>
<style>
.sd-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:0 auto;max-width:1080px}
.sd-card{background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:24px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);position:relative;overflow:hidden}
.sd-card:hover{border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}
.sd-card-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:10px;display:flex;align-items:center;gap:8px;line-height:1.4;position:relative}.sd-card-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}.sd-card-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.sd-card-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:0}
.sd-card-desc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.sd-grid{grid-template-columns:1fr!important}}
</style>
<div class="sd-grid">
<div class="sd-card"><h4 class="sd-card-title">校准画面主体</h4><p class="sd-card-desc">用户不知道画面里该放什么，就用<b>官方素材库</b>锚定，把空白变成确定的起点。</p></div>
<div class="sd-card"><h4 class="sd-card-title">校准影视元素</h4><p class="sd-card-desc">影视的构成要素太多，就拆解为<b>画风、台词、剧情</b>三类固定玩法，把复杂收敛成可理解的维度。</p></div>
<div class="sd-card"><h4 class="sd-card-title">校准创作灵感</h4><p class="sd-card-desc">面对空白无从下笔，就用<b>渐进启发式引导</b>注入灵感，把门槛降到能启动。</p></div>
</div>`,
        },
        {
          heading: '未竟的事业：后续规划设想',
          body: '项目因战略调整关停，但设计思考没有停止。下面这三个方向，是曾经规划、却没能落地验证的设想—也是「校准」这条思路的自然延伸。\n\n① <b>结构化输出</b>—把 AI 加工后的故事，拆解为角色、画面、台词、音乐，让用户在确定的维度上校准与编辑，而不是面对一段不可控的文本\n② <b>IP 聚合</b>—以 IP 而非功能为维度组织内容，用户是冲 IP 来的，入口就该顺着 IP 来\n③ <b>商业闭环</b>—用积分与订阅，把算力消耗变成可回收的收入，让商业模型与算力成本从对立走向平衡',
          html: `<style>
.sk-wrapper{display:flex;gap:40px;justify-content:center;max-width:100%;flex-wrap:wrap;align-items:flex-start}
.sk-group{flex-shrink:0;display:flex;flex-direction:column;align-items:flex-start}
.sk-group-title{color:#FFFFFF;font-size:14px;font-weight:600;margin-bottom:14px;display:flex;align-items:center;gap:8px}
.sk-group-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.sk-row{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}@media(min-width:768px){.sk-row{display:flex;justify-content:flex-start}}
.sk-item{display:flex;flex-direction:column;align-items:center;gap:8px}
.sk-placeholder{width:100%;max-width:150px;aspect-ratio:9/19.5;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #333333;border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.sk-placeholder::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.sk-placeholder img{width:100%;height:100%;object-fit:contain}
.sk-label{font-size:12px;color:#A0A0A0;text-align:center}
@media(max-width:767px){.sk-wrapper{flex-direction:column;align-items:center;gap:24px}.sk-group{flex:none;width:100%}.sk-row{gap:3%}.sk-item{width:auto;flex:1 1 0;min-width:0}.sk-placeholder{width:100%}}
</style>
<div class="sk-wrapper">
<div class="sk-group"><div class="sk-group-title">结构化输出</div><div class="sk-row"><div class="sk-item"><div data-preview class="sk-placeholder"><img src="/birdys-portfolio/images/uf-create-video.png" alt="创作视频页" /></div><span class="sk-label">创作视频页</span></div><div class="sk-item"><div data-preview class="sk-placeholder"><img src="/birdys-portfolio/images/uf-structured-output.png" alt="结构化输出" /></div><span class="sk-label">结构化输出</span></div></div></div>
<div class="sk-group"><div class="sk-group-title">IP 聚合</div><div class="sk-row"><div class="sk-item"><div data-preview class="sk-placeholder"><img src="/birdys-portfolio/images/uf-ip-aggregation.png" alt="IP 聚合页" /></div><span class="sk-label">IP 聚合页</span></div></div></div>
<div class="sk-group"><div class="sk-group-title">商业闭环</div><div class="sk-row"><div class="sk-item"><div data-preview class="sk-placeholder"><img src="/birdys-portfolio/images/uf-checkin-points.png" alt="签到积分" /></div><span class="sk-label">签到积分</span></div><div class="sk-item"><div data-preview class="sk-placeholder"><img src="/birdys-portfolio/images/uf-membership.png" alt="会员订阅" /></div><span class="sk-label">会员订阅</span></div></div></div>
</div>`,
        },
        {
          heading: 'Thanks',
          body: '',
          html: `<style>
.nav-card{text-decoration:none;display:block;background:#141416;border:1px solid #27272a;border-radius:8px;padding:24px;color:#f4f4f5;transition:all 0.3s ease;position:relative;overflow:hidden}
.nav-card:hover{transform:translateY(-4px);border-color:#C7FF00!important;box-shadow:0 15px 40px rgba(0,0,0,0.5)!important}
.nav-card:hover h3{color:#C7FF00!important}
.nav-card .arrow{font-size:16px;color:#C7FF00;opacity:0;transition:opacity 0.3s}
.nav-card:hover .arrow{opacity:1}
@media(max-width:1024px){.closing-left h1{font-size:100px!important}.closing-right{min-width:200px!important;padding-left:16px!important}}
@media(max-width:767px){.closing-wrap{flex-direction:column!important;align-items:flex-start!important}.closing-left{padding-right:0!important;margin-bottom:32px}.closing-left h1{font-size:64px!important}.closing-right{flex:none!important;max-width:100%!important;width:100%!important;padding-left:0!important;border-left:none!important}}
</style>
<div class="closing-wrap" style="display:flex;width:100%;margin:0 auto;align-items:center;padding:0 24px;box-sizing:border-box">
<div class="closing-left" style="flex:2;display:flex;justify-content:flex-start;align-items:center;min-width:0"><h1 style="font-size:150px;font-weight:800;color:#3a3a40;margin:0;line-height:1;letter-spacing:-6px">THANKS</h1></div>
<div class="closing-right" style="flex:1;min-width:260px;max-width:340px;display:flex;flex-direction:column;gap:16px;padding-left:24px;border-left:1px solid #1c1c1f">
<div style="display:flex;align-items:center;gap:8px;color:#C7FF00;font-size:13px;font-weight:500"><span style="width:6px;height:6px;background:#C7FF00;border-radius:50%;box-shadow:0 0 10px rgba(204,255,0,0.5)"></span>继续浏览</div>
<a class="nav-card" href="#" data-cursor-hover><div style="display:flex;justify-content:space-between;align-items:flex-start"><div><h3 style="margin:0;font-size:16px;font-weight:600;color:#FFFFFF">明星陪看直播间</h3><p style="margin:8px 0 0;font-size:13px;color:#A0A0A0;line-height:1.6">视听布局重构与商业增长</p></div><span class="arrow" >→</span></div></a>
<a class="nav-card" href="#" data-cursor-hover><div style="display:flex;justify-content:space-between;align-items:flex-start"><div><h3 style="margin:0;font-size:16px;font-weight:600;color:#FFFFFF">爱奇艺 Pad 端</h3><p style="margin:8px 0 0;font-size:13px;color:#A0A0A0;line-height:1.6">大屏沉浸式体验重构</p></div><span class="arrow" >→</span></div></a>
</div></div>`,
        },
      ],
    },
  },

  {
    id: 'project-2',
    title: '明星陪看直播间',
    description:
      '明星陪看把影视观影重构为「边看边聊」的社交现场，以明星实时陪伴与粉丝互动建立情感连接。送礼玩法优化后，直播项目营收创上线以来历史新高，与「弹幕」「卡牌」并列为爱奇艺互动体验设计的三大营收版图。',
    imagePath: 'https://picsum.photos/seed/project2/1200/800',
    techStack: ['营收历史新高', '直播社交', '送礼玩法矩阵', '陪看体验设计'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    detail: {
      pageTitle: '明星陪看直播间 | 视听布局重构与商业增长',
      mainTitle: '',
      subtitle: '视听布局重构与商业增长',
      sections: [
        // ═══ P1 项目概述 ═══
        {
          heading: '目录',
          body: '',
          html: `<style>
.toc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;width:100%;max-width:1080px;margin:0 auto}
.toc-col{display:flex;flex-direction:column}
.toc-num{font-size:42px;font-weight:500;color:rgba(255,255,255,0.5);margin-bottom:8px;letter-spacing:-1px;font-family:var(--font-mono,monospace)}
.toc-card{background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;display:flex;flex-direction:column;justify-content:space-between;height:240px;box-sizing:border-box;cursor:pointer;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.toc-card:hover{border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}
.toc-card-title{font-size:15px;font-weight:500;color:#C7FF00;line-height:1.4;margin-bottom:20px}
.toc-card-pages{display:flex;flex-direction:column;gap:8px}
.toc-page-row{display:flex;justify-content:space-between;align-items:baseline;font-size:13px}
.toc-page-name{color:#A0A0A0;font-weight:400}
.toc-page-num{color:#71717a;font-family:monospace;flex-shrink:0;margin-left:12px}
.toc-card-tag{font-size:11px;color:#52525b;font-family:monospace;margin-top:8px}
@media(max-width:767px){.toc-grid{grid-template-columns:1fr 1fr;gap:16px}.toc-num{font-size:32px}.toc-card{height:230px;padding:18px}.toc-card-title{font-size:13px}}
</style>
<div class="toc-grid">
<div class="toc-col"><span class="toc-num">01</span><div class="toc-card" data-goto="1"><div><p class="toc-card-title">背景与策略</p><div class="toc-card-pages"><div class="toc-page-row" data-goto="1"><span class="toc-page-name">互动破局</span><span class="toc-page-num">P02</span></div><div class="toc-page-row" data-goto="2"><span class="toc-page-name">目标拆解</span><span class="toc-page-num">P03</span></div></div></div><span class="toc-card-tag">/ Context</span></div></div>
<div class="toc-col"><span class="toc-num">02</span><div class="toc-card" data-goto="3"><div><p class="toc-card-title">流量与入口</p><div class="toc-card-pages"><div class="toc-page-row" data-goto="3"><span class="toc-page-name">流量蓄水</span><span class="toc-page-num">P04</span></div><div class="toc-page-row" data-goto="4"><span class="toc-page-name">播放页入口</span><span class="toc-page-num">P05</span></div><div class="toc-page-row" data-goto="5"><span class="toc-page-name">明星陪看聚合页</span><span class="toc-page-num">P06</span></div></div></div><span class="toc-card-tag">/ Traffic</span></div></div>
<div class="toc-col"><span class="toc-num">03</span><div class="toc-card" data-goto="6"><div><p class="toc-card-title">体验设计</p><div class="toc-card-pages"><div class="toc-page-row" data-goto="6"><span class="toc-page-name">直播间布局</span><span class="toc-page-num">P07</span></div><div class="toc-page-row" data-goto="7"><span class="toc-page-name">直播间状态</span><span class="toc-page-num">P08</span></div></div></div><span class="toc-card-tag">/ Experience</span></div></div>
<div class="toc-col"><span class="toc-num">04</span><div class="toc-card" data-goto="8"><div><p class="toc-card-title">商业化</p><div class="toc-card-pages"><div class="toc-page-row" data-goto="8"><span class="toc-page-name">情感变现</span><span class="toc-page-num">P09</span></div><div class="toc-page-row" data-goto="9"><span class="toc-page-name">基础送礼链路</span><span class="toc-page-num">P10</span></div><div class="toc-page-row" data-goto="10"><span class="toc-page-name">进阶送礼</span><span class="toc-page-num">P11</span></div><div class="toc-page-row" data-goto="11"><span class="toc-page-name">终极爆灯</span><span class="toc-page-num">P12</span></div></div></div><span class="toc-card-tag">/ Revenue</span></div></div>
</div>`,
        },
        {
          heading: '互动破局：由业务目标到设计价值',
          body: '明星陪看直播间是一个既有的业务，我接手时的业务目标很明确：<b>改版、升级互动体验、促进商家变现</b>。\n\n对一个已上线跑的业务做体验升级，我的第一个问题是<b>「它到底缺什么」</b>。回到业务现场我发现：原有的陪看是「文字/语音」形态—明星通过文字、语音弹幕和观众交流，陪伴缺真实感、情感连接弱，既不利于留存，也撑不起付费。',
          html: `<style>
.hl-p{color:#A0A0A0;font-size:13px;line-height:1.75;margin:0 0 1.5rem;font-weight:400}
.hl-p b{color:#FFFFFF;font-weight:600}
.hl-p:last-child{margin-bottom:0}
.model-timeline{display:flex;flex-direction:column;position:relative;margin-top:8px;max-width:100%}
.model-node{position:relative;padding-bottom:24px}
.model-node:last-child{padding-bottom:0}
.model-node-line{position:absolute;left:7px;top:16px;bottom:0;width:1px;background:#222226}
.model-node-dot{width:15px;height:15px;border-radius:50%;background:#121212;border:2px solid #71717a;flex-shrink:0;margin-top:3px;z-index:1}
.model-node-body{flex:1;min-width:0}
.model-node-title{font-size:14px;font-weight:600;color:#FFFFFF;display:block;margin-bottom:4px}
.model-node-desc{font-size:14px;color:#A0A0A0;line-height:1.75;margin:0;font-weight:500}
.model-node-desc b{color:#FFFFFF;font-weight:600}
.val-dim-branch{display:flex;gap:0;margin-top:20px}
.val-dim-branch-body{flex:1;min-width:0}
.val-dim-cards{display:flex;gap:10px;align-items:stretch;flex-wrap:wrap;max-width:1080px;margin:0 auto}
.val-dim-card{flex:1;min-width:150px;padding:22px;background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:6px;display:flex;flex-direction:column;justify-content:flex-start;transition:all .35s cubic-bezier(0.16,1,0.3,1)}
.val-dim-card:hover{border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}
.val-dim-card-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative}
.val-dim-card-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.val-dim-card-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.val-dim-card-desc{color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:400}
.val-dim-card-desc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.val-dim-cards{flex-direction:column!important;gap:8px}}
</style>

<div class="model-timeline">

    <div class="model-node">
        <div class="model-node-line"></div>
        <div style="display: flex; gap: 14px; align-items: flex-start;">
            <div class="model-node-dot"></div>
            <div class="model-node-body">
                <span class="model-node-title">现状诊断：文字/语音陪看，存在情感断层</span>
                <p class="model-node-desc">文字、语音弹幕是唯一的交流方式，看得见文字、听得到声音，却感受不到「他此刻在陪伴我」。</p>
            </div>
        </div>
    </div>

    <div class="model-node">
        <div class="model-node-line"></div>
        <div style="display: flex; gap: 14px; align-items: flex-start;">
            <div class="model-node-dot"></div>
            <div class="model-node-body">
                <span class="model-node-title">破局方向：实时视频陪看，实现情感连接</span>
                <p class="model-node-desc">引入实时视频，让明星真正出镜，把「形式陪伴」升级成「同频陪伴」，为商业变现打下基础。由此带来三个设计价值：</p>

                <div class="val-dim-branch">
                    <div class="val-dim-branch-body">
                        <div class="val-dim-cards">
                            <div class="val-dim-card">
                                <div class="val-dim-card-title">情感升温</div>
                                <p class="val-dim-card-desc">明星同屏后，观看变成与偶像同步的情感共鸣，用视听协同建立「追剧仪式感」，激发<b>身份认同与平台归属</b>。</p>
                            </div>
                            <div class="val-dim-card">
                                <div class="val-dim-card-title">流量深度留存</div>
                                <p class="val-dim-card-desc">用粉丝效应把碎片流量黏合为<b>高频互动社群</b>，以实时陪伴打破「看后即走」困境，拉长用户生命周期。</p>
                            </div>
                            <div class="val-dim-card">
                                <div class="val-dim-card-title">内容价值放大</div>
                                <p class="val-dim-card-desc">把热播剧集转化为可跨周期复利的长尾资产，让单次直播持续驱动<b>「剧集与直播双向反哺」</b>，为变现持续创造空间。</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</div>`,
        },
        // ═══ P3 目标拆解 ═══
        {
          heading: '目标拆解：由业务环节到落地手段',
          body: '为了把设计价值落成可执行的设计，我顺着业务环节拆解出了设计目标和手段。',
          html: `<style>
.dt-table{width:100%;border-collapse:collapse;table-layout:fixed;min-width:600px}
.dt-table th,.dt-table td{padding:24px 16px;font-size:12px;color:#A0A0A0;line-height:1.6;border-bottom:1px solid #222226;vertical-align:middle;font-weight:400;text-align:left;word-break:break-word}
.dt-table th{font-size:14px;font-weight:600;color:#FFFFFF;vertical-align:middle;padding:24px 16px}
.dt-table .lbl{width:120px;font-size:11px;font-weight:600;color:#A0A0A0;vertical-align:middle;text-align:left;text-transform:uppercase;padding:24px 16px 24px 24px}
.dt-table tr.hl td{background:rgba(199,255,0,0.06)}
.dt-table tbody td{height:80px}
.dt-table tr:last-child td{border-bottom:none}
.dt-mobile{display:none}
@media(max-width:767px){.dt-table{display:none!important}.dt-mobile{display:flex;flex-direction:column;gap:24px}.dt-mobile-col{border-left:1px solid #222226;padding-left:22px}.dt-mobile-col-header{font-size:14px;font-weight:600;color:#FFFFFF;margin-bottom:12px;position:relative}.dt-mobile-col-header::before{content:'';position:absolute;left:-29px;top:50%;transform:translateY(-50%);width:15px;height:15px;border-radius:50%;background:#121212;border:2px solid #71717a}.dt-mobile-col-item{margin-bottom:12px}.dt-mobile-col-item:last-child{margin-bottom:0}.dt-mobile-col-label{font-size:10px;color:#71717a;text-transform:uppercase;margin-bottom:4px;display:block}.dt-mobile-col-desc{font-size:12px;color:#A0A0A0;line-height:1.6}}
</style>
<div style="overflow-x: auto;">
<table class="dt-table">
    <thead>
        <tr>
            <th class="lbl">环节</th>
            <th>流量蓄水</th>
            <th>沉浸式体验</th>
            <th>情感变现</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="lbl" data-label="环节">目标</td>
            <td data-label="流量蓄水">把观影流量转化为陪看参与，并沉淀为长效资产。</td>
            <td data-label="沉浸式体验">在复杂信息场景中保障观影沉浸感。</td>
            <td data-label="情感变现">让付费成为情感表达，即时变现与长尾增收。</td>
        </tr>
        <tr class="hl">
            <td class="lbl" data-label="环节">手段</td>
            <td data-label="流量蓄水">构建播放页动态入口、陪看聚合页。</td>
            <td data-label="沉浸式体验">重构陪看直播布局、页面内容进行信息分层、按场景显隐。</td>
            <td data-label="情感变现">重构送礼面板、增加送礼玩法；直播/回看会员化。</td>
        </tr>
    </tbody>
</table>
</div>
<div class="dt-mobile">
<div class="dt-mobile-col">
<div class="dt-mobile-col-header">流量蓄水</div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">目标</span><p class="dt-mobile-col-desc">把观影流量转化为陪看参与，沉淀为长效资产。</p></div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">手段</span><p class="dt-mobile-col-desc">播放页动态入口、陪看聚合页。</p></div>
</div>
<div class="dt-mobile-col">
<div class="dt-mobile-col-header">沉浸式体验</div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">目标</span><p class="dt-mobile-col-desc">在复杂信息场景中保障观影沉浸感。</p></div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">手段</span><p class="dt-mobile-col-desc">信息分层、按场景显隐；重构连麦布局、规范互动栅格。</p></div>
</div>
<div class="dt-mobile-col">
<div class="dt-mobile-col-header">情感变现</div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">目标</span><p class="dt-mobile-col-desc">让付费成为情感表达，即时变现与长尾增收。</p></div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">手段</span><p class="dt-mobile-col-desc">即时反馈；重构送礼面板、直播/回看会员化。</p></div>
</div>
</div>`,
        },
        // ═══ P4 流量蓄水 ═══
        {
          heading: '流量蓄水：流量流转链路构建',
          body: '流量蓄水的核心矛盾在于：看剧的流量是瞬时的，看完就走，不会自动沉淀。所以我把蓄水分成三步，形成「触达 → 留存 → 反哺」的循环：\n\n① <b>流量触达</b>—在播放页把「看剧」触达成「陪看」，解决「进来」\n② <b>资产留存</b>—在聚合页把「一次性的围观」沉淀成「可回访的资产」，解决「留下」\n③ <b>流量反哺</b>—打通剧集与直播的双向循环，让沉淀的资产反哺新流量，破解长尾期流量断崖',
          html: `<div style="text-align:center"><div data-preview style="display:inline-block"><img src="/birdys-portfolio/images/live-flow.png" alt="明星陪看流量流转图" style="width:100%;max-width:800px;border-radius:8px;border:1px solid #27272a;display:block" /></div><p style="color:#A0A0A0;font-size:12px;margin-top:8px">明星陪看流量流转图</p></div>`,
        },
        // ═══ P5 播放页入口 ═══
        {
          heading: '播放页入口：低干扰的高效触达',
          body: '明星陪看直播间入口设置在播放页—这里是流量最集中的地方，用户正沉浸在剧里，对「和明星一起看」的意愿最高，转化也最自然。\n\n但播放页本身还承担着全屏观影、评论互动、数据分发等更核心的任务，陪看只是其一。所以入口必须克制，守住一条原则：<b>高效触达而不干扰</b>—既把直播送到看剧的人面前，又不打断观影心流。',
          html: `<style>
.entry-phone-grid{display:flex;justify-content:space-between;gap:20px;margin:0 auto;max-width:800px}
.entry-phone{background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #333333;border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;height:340px;margin:0 auto}
.entry-phone::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.entry-phone span{color:#71717a;font-size:11px;font-family:monospace;letter-spacing:.06em;position:relative;z-index:1}
.entry-phone.plain{background:none;border:none;border-radius:0}
.entry-phone.plain::before{display:none}
.entry-card{flex:1;background:rgba(30,30,34,0.7);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:20px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.entry-card:hover{border-color:rgba(255,255,255,0.15)!important;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}
@media(max-width:767px){.entry-phone-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}}
</style>
<div style="max-width:800px;margin:0 auto">
<div style="display:flex;gap:16px;margin-bottom:24px">
<div class="entry-card"><p style="color:#C7FF00;font-size:13px;font-weight:600;margin:0 0 4px">低干扰</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:0">入口置于选集下方，随直播状态动态显隐，不打断观影流。</p></div>
<div class="entry-card"><p style="color:#C7FF00;font-size:13px;font-weight:600;margin:0 0 4px">高转化</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:0">开播时透出试试状态和角标，辅助决策，一键切入陪看。</p></div>
<div class="entry-card"><p style="color:#C7FF00;font-size:13px;font-weight:600;margin:0 0 4px">心智建设</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:0">培养预约习惯，并引导一键预约，将剧集观众转化为直播间存量用户。</p></div>
</div>
<p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 12px;display:flex;align-items:center;gap:8px"><span style="width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0;display:inline-block"></span>播放页触达入口</p>
<div class="entry-phone-grid">
<div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div data-preview class="entry-phone"><img src="/birdys-portfolio/images/live-no-entry.png" alt="无直播入口" style="width:100%;height:auto;display:block" /></div><span style="font-size:11px;color:#A0A0A0">无直播时</span></div>
<div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div data-preview class="entry-phone plain"><img src="/birdys-portfolio/images/live-has-entry.png" alt="有直播入口" style="width:100%;height:auto;display:block" /></div><span style="font-size:11px;color:#A0A0A0">有直播时</span></div>
<div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div data-preview class="entry-phone plain"><img src="/birdys-portfolio/images/live-entry-status.png" alt="直播入口状态" style="width:100%;height:auto;display:block" /></div><span style="font-size:11px;color:#A0A0A0">入口状态</span></div>
<div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div data-preview class="entry-phone"><img src="/birdys-portfolio/images/live-booking.png" alt="一键预约弹窗" style="width:100%;height:auto;display:block" /></div><span style="font-size:11px;color:#A0A0A0">一键预约</span></div>
</div>
</div>`,
        },
        {
          heading: '明星陪看聚合页：从即时流量到平台资产',
          body: '聚合页是连接粉丝、促成互动、沉淀社交与内容资产的中枢。为了让用户产生持续的价值认同并不断「回访」，我们引入 <b>Fogg 行为模型</b>（B=MAT）作为指导框架。\n\n我们通过三大模块设计，确保了产生行为所需的触发（Trigger）、动机（Motivation）和能力（Ability）三要素同时满足，让一次性的「围观」转化为长期的「回访」与资产沉淀。',
          html: `<style>
.ap-split{display:flex;gap:20px;align-items:stretch;max-width:680px;margin:0 auto}
.ap-left{flex:0 0 280px;position:relative}
.ap-phone{width:180px;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #333333;border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;margin:0 auto}
.ap-phone::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.ap-right{flex:1;display:flex;flex-direction:column;gap:24px;max-width:380px}
.ap-module{border-left:2px solid #333333;padding-left:20px;flex:1}
.ap-module-title{color:#C7FF00;font-size:13px;font-weight:600;margin:0 0 6px}
.ap-module-desc{color:#A0A0A0;font-size:12px;line-height:1.75;font-weight:400;margin:0}
.ap-module-desc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.ap-split{flex-direction:column!important}.ap-left{flex:none;width:100%}}
</style>
<div style="display:flex;justify-content:center;width:100%"><div class="ap-split">
<div class="ap-left">
<div style="position:absolute;left:-90px;top:30px;z-index:10;display:flex;flex-direction:column;gap:8px">
<div style="background:rgba(30,30,34,0.8);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.08);padding:4px 10px;border-radius:6px;font-size:11px;color:#A0A0A0;white-space:nowrap">我的页→</div>
<div style="background:rgba(30,30,34,0.8);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.08);padding:4px 10px;border-radius:6px;font-size:11px;color:#A0A0A0;white-space:nowrap">搜索结果页→</div>
</div>
<div class="ap-phone"><img src="/birdys-portfolio/images/agg-page.png" alt="聚合页" style="width:100%;height:auto;display:block" /></div>
</div>
<div class="ap-right">
<div class="ap-module"><p class="ap-module-title">触发 (Trigger)：直播/预约动态</p><p class="ap-module-desc"><b>时间预期管理</b> — 通过「正在直播、预约中」时间轴与临近提醒机制，在关键时间节点给予用户精准的外部触发，建立用户对「明星陪看」的长期时间预期，保障直播触达率与回访率。</p></div>
<div class="ap-module"><p class="ap-module-title">动机 (Motivation)：陪看榜单</p><p class="ap-module-desc"><b>社群竞技场</b> — 通过 IP 月榜、总榜等榜单数据，利用粉丝的荣誉感与从众心理，极大激发粉丝的竞争动机，从而促成高频互动与打榜行为。</p></div>
<div class="ap-module"><p class="ap-module-title">能力 (Ability)：回看合集</p><p class="ap-module-desc"><b>长效资产沉淀</b> — 将实时的直播内容转化为可复用的版权衍生内容，以 IP 维度聚合回看合集。这不仅打破了「看完即走」的流量留存困境，更通过降低查找成本、提高查找效率，显著提升了用户消费历史内容与持续回访的能力。</p></div>
</div>
</div></div>`,
        },
        // ═══ P6 明星陪看聚合页 ═══
        // ═══ P8 陪看布局重构1 ═══
        {
          heading: '直播间布局：基于认知负荷的分层管理',
          body: '增加了陪看画面后的直播间同时挤着影视画面、明星陪看、弹幕互动和商业挂件，多源信息极易互相干扰。从<b>认知负荷理论</b>来看，过载的视觉噪音会降低界面的“信噪比”，无形中增加用户的外在认知负荷。\n\n我的解法是通过<b>「分层管理」</b>—将信息解耦为三层：\n\n① <b>底层（内容层）</b> — 影视视频、明星画面，构筑核心视觉焦点\n② <b>中层（互动层）</b> — 弹幕、礼物，承载社群氛围\n③ <b>顶层（控件层）</b> — 页面导航与全局控件。\n\n在此基础上，引入两个机制：1. 顶部控件在无操作时自动精简；2. 弹幕与礼物根据明星画面动态避让。在<b>保护观看心流</b>的前提下，让明星始终稳居 C 位，把注意力始终留在内容本身。',
          html: `<style>
.im-row{display:flex;gap:24px;justify-content:center;align-items:flex-start;max-width:1080px;margin:24px auto 0}
.im-item{display:flex;flex-direction:column;align-items:center;gap:10px;flex-shrink:0}
.im-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 12px;display:flex;align-items:center;gap:8px;align-self:flex-start}.im-title::before{content:"";width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.im-placeholder{background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #333333;border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;height:390px;width:auto}
.im-placeholder::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
@media(max-width:767px){.im-row{flex-wrap:wrap;gap:12px}}
</style>
<div class="im-row">
<div class="im-item"><p class="im-title">分层管理</p><img src="/birdys-portfolio/images/im-layers.png" alt="页面分层示意" style="width:511px;height:390px;display:block;border-radius:6px" /><p style="color:#A0A0A0;font-size:12px;margin:0">页面分层示意</p></div>
<div class="im-item"><p class="im-title">控件精简</p><div data-preview class="im-placeholder"><img src="/birdys-portfolio/images/im-player.png" alt="顶部控件4s后自动精简播控" style="height:100%;width:auto;display:block" /></div><p style="color:#A0A0A0;font-size:12px;margin:0">顶部控件自动精简</p></div>
<div class="im-item"><p class="im-title">动态避让</p><div data-preview class="im-placeholder"><img src="/birdys-portfolio/images/im-avoid.png" alt="弹幕/礼物动态动态避让明星高度" style="height:100%;width:auto;display:block" /></div><p style="color:#A0A0A0;font-size:12px;margin:0">弹幕/礼物避让明星画面</p></div>
</div>`,
        },
        {
          heading: '直播间状态：情景感知与任务聚焦',
          body: '顺承分层逻辑，直播间不止“直播中”一种状态。为了避免一刀切的界面打碎用户的沉浸感，我引入了<b>情境感知的设计思路</b>，按场景增加三种状态：\n\n① <b>鉴权态</b> — 会员鉴权区分身份，付费用户顺畅进入、非付费用户引导开通，精准匹配不同用户的任务闭环\n② <b>预约态</b> — 把对明星的期待，转化为明确的一键预约与回访提醒，通过外部触发建立长期的心理预期\n③ <b>回看态</b> — 引入播控，并设计「播控动态显隐机制」：无操作时底部播控隐藏，展示互动控件；拖动进度时展示画面缩略图、自动收起飘评和挂件\n\n这些设计都指向同一件事：让用户聚焦于当前任务，而不是被过多的信息干扰。',
          html: `<style>
.sr-row{display:flex;gap:60px;align-items:flex-start;margin:14px auto;width:fit-content;max-width:100%}
.sr-col{display:flex;flex-direction:column;gap:0;align-items:flex-start}
.sr-col-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 12px;display:flex;align-items:center;gap:8px}
.sr-col-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.sr-img-row{display:flex;gap:16px}
.sr-placeholder{background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #333333;border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;width:180px;flex-shrink:0}
.sr-placeholder::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
@media(max-width:767px){.sr-row{flex-direction:column!important}}
</style>
<div class="sr-row">
<div class="sr-col"><div class="sr-col-title">鉴权态</div><div class="sr-img-row"><div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div data-preview class="sr-placeholder"><img src="/birdys-portfolio/images/sr-auth.png" alt="鉴权态" style="width:100%;display:block" /></div><span style="font-size:11px;color:#A0A0A0">鉴权态</span></div></div></div>
<div class="sr-col"><div class="sr-col-title">预约态</div><div class="sr-img-row"><div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div data-preview class="sr-placeholder"><img src="/birdys-portfolio/images/sr-book.png" alt="预约态" style="width:100%;display:block" /></div><span style="font-size:11px;color:#A0A0A0">直播预告</span></div></div></div>
<div class="sr-col"><div class="sr-col-title">回看态</div><div class="sr-img-row"><div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div data-preview class="sr-placeholder"><img src="/birdys-portfolio/images/sr-ctrl-on.png" alt="有播控" style="width:100%;display:block" /></div><span style="font-size:11px;color:#A0A0A0">有播控</span></div><div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div data-preview class="sr-placeholder"><img src="/birdys-portfolio/images/sr-ctrl-off.png" alt="无播控" style="width:100%;display:block" /></div><span style="font-size:11px;color:#A0A0A0">无播控</span></div><div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div data-preview class="sr-placeholder"><img src="/birdys-portfolio/images/sr-seek.png" alt="调节进度" style="width:100%;display:block" /></div><span style="font-size:11px;color:#A0A0A0">调节进度</span></div></div></div>
</div>`,
        },
        // ═══ P9 陪看布局重构2 ═══
        {
          heading: '情感变现：送礼金分层金字塔设计',
          body: '变现的核心难点在于：付费不能破坏互动氛围，反而要成为情感表达的延伸。根据<b>「自决理论」</b>，用户的付费本质上是为了满足胜任、自主和归属三种心理需求。据此，我将送礼体系拆解为「基础、创意、成就」三层分层金字塔.\n\n这套分层最终推动<b>直播项目营收创上线以来历史新高</b>，也让「直播」与「弹幕」「卡牌」并列为爱奇艺互动体验设计的三大营收版图。',
          html: `<style>
.pyramid-wrap{text-align:center;margin:24px 0}
.pyramid-img{width:100%;max-width:800px;border-radius:8px;border:1px solid #27272a;display:block;margin:0 auto}
.pyramid-caption{color:#A0A0A0;font-size:12px;margin-top:8px}
</style>
<div class="pyramid-wrap">
<div data-preview style="display:inline-block"><img class="pyramid-img" src="/birdys-portfolio/images/送礼金字塔.png" alt="送礼金字塔" /></div>
<p class="pyramid-caption">送礼分层金字塔</p>
</div>`,
        },
        // ═══ P11 基础送礼链路 ═══
        {
          heading: '基础送礼链路：权益打通与极简支付体验',
          body: '在送礼支付环节，我们引入了会员积分体系，旨在为会员开通流量入口，同时在直播间内彰显会员权益。用户可自由选择纯奇点支付（爱奇艺站内货币体系），或使用部分会员积分进行抵扣。\n\n在支付架构设计上，我们通过打通会员中心与站内奇点收银台，在保障体验丝滑的同时，最大化复用现有能力、降低开发成本。',
          html: `<style>
.p11-row{display:flex;gap:60px;align-items:flex-start;margin:14px auto;width:fit-content;max-width:100%}
.p11-col{display:flex;flex-direction:column;gap:16px;align-items:flex-start}
.p11-col-title{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative;margin:0}
.p11-col-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.p11-col-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.p11-col-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:0}
.p11-col-desc b{color:#FFFFFF;font-weight:600}
.p11-img-row{display:flex;gap:16px;width:496px}
.p11-placeholder{background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #333333;border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;width:240px;flex-shrink:0}
.p11-placeholder::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,0.03) 0%,transparent 70%);pointer-events:none}
.p11-placeholder span{color:#71717a;font-size:11px;font-family:monospace;letter-spacing:0.06em;position:relative;z-index:1}
.p11-img-wrap{display:flex;flex-direction:column;align-items:center}
.p11-img-label{font-size:11px;color:#A0A0A0;text-align:center;margin-top:6px}
.p11-diagram{width:480px;height:auto;display:block}
@media(max-width:767px){.p11-row{flex-direction:column!important;gap:32px}.p11-col{width:100%!important}.p11-col-desc{max-width:100%!important}.p11-placeholder{width:100%;max-width:240px}.p11-img-row{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;width:100%}.p11-diagram{width:100%;max-width:480px}}
</style>
<div class="p11-row">
<div class="p11-col">
<div class="p11-img-row">
<div class="p11-img-wrap"><div data-preview class="p11-placeholder"><img src="/birdys-portfolio/images/payment-method.png" alt="两种支付方式" style="width:100%;height:auto;display:block" /></div><span class="p11-img-label">两种支付方式</span></div>
<div class="p11-img-wrap"><div data-preview class="p11-placeholder"><img src="/birdys-portfolio/images/points-deduct.png" alt="已开启积分抵扣" style="width:100%;height:auto;display:block" /></div><span class="p11-img-label">已开启积分抵扣</span></div>
</div>
</div>
<div class="p11-col">
<div class="p11-img-wrap"><img class="p11-diagram" src="/birdys-portfolio/images/whiteboard_exported_image.png" alt="支付流程示意" /><span class="p11-img-label">支付流程示意</span></div>
</div>
</div>`,
        },
        // ═══ P12 进阶创意送礼 ═══
        {
          heading: '进阶创意送礼：组件化架构与玩法「生产线」',
          body: '如果送礼只是「选礼物 → 付款」”，那它永远只是支付。我把<b>送礼游戏化</b>，并用组件化思维将送礼玩法拆解为「玩法标签 → 活动入口 → 活动浮层」三层组件。通过<b>快速组装玩法的「生产线」</b>，将单一的「花钱」转译成「一起玩」的丰富创意玩法。\n\n① <b>玩法标签</b> — 礼物图标右上角展示玩法名称，提供轻量感知\n② <b>活动入口</b> — 点击送礼标签，弹出活动入口，入口上展示玩法简介,供用户了解玩法参与门槛\n③ <b>活动浮层</b> — 进入活动浮层，展示玩法规则、排行榜、奖励等核心信息',
          html: `<style>
.p12-subtitle{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative;margin:24px 0 8px}
.p12-chart{max-width:660px;margin:0 auto}
.p12-subtitle::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.p12-subtitle::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.p12-subdesc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:0 0 24px}
.p12-flow{display:flex;gap:28px;align-items:flex-start;margin:0}
.p12-flow-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0}
.p12-flow-img{width:100%;aspect-ratio:1/2.168;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #222226;border-radius:4px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.p12-flow-img::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,0.03) 0%,transparent 70%);pointer-events:none}
.p12-flow-label{font-size:11px;color:#71717a;font-family:monospace;letter-spacing:0.06em;z-index:1;position:relative}
.p12-flow-title{display:none}
.p12-flow-desc{display:none}
.p12-flow-text{font-size:12px;color:#A0A0A0;text-align:center;line-height:1.5;width:100%}
.p12-flow-text strong{color:#FFFFFF;font-weight:600;display:block;margin-bottom:2px}
.p12-flow-text b{color:#FFFFFF;font-weight:600}
.p12-flow-arrow{display:flex;align-items:center;color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px;margin-top:170px}
@media(max-width:767px){.p12-chart{max-width:100%}.p12-flow-arrow{transform:rotate(90deg);margin-top:0}}
</style>
<div class="p12-chart">
<div class="p12-flow">
<div class="p12-flow-item">
<div data-preview class="p12-flow-img"><img src="/birdys-portfolio/images/gift-tag.png" alt="玩法标签" style="width:100%;height:auto;display:block" /></div><span style="font-size:11px;color:#A0A0A0;text-align:center">玩法标签</span>
</div>
<div class="p12-flow-arrow">→</div>
<div class="p12-flow-item">
<div data-preview class="p12-flow-img"><img src="/birdys-portfolio/images/gift-entry.png" alt="活动入口" style="width:100%;height:auto;display:block" /></div><span style="font-size:11px;color:#A0A0A0;text-align:center">活动入口</span>
</div>
<div class="p12-flow-arrow">→</div>
<div class="p12-flow-item">
<div data-preview class="p12-flow-img"><img src="/birdys-portfolio/images/gift-overlay.png" alt="活动浮层" style="width:100%;height:auto;display:block" /></div><span style="font-size:11px;color:#A0A0A0;text-align:center">活动浮层</span>
</div>
</div>
</div>`,
        },
        // ═══ P13 终极玩法 ═══
        {
          heading: '终极玩法：明星爆灯的成就闭环',
          body: '在「尖叫之夜」这类顶级活动里，单点付费撑不起氛围。我用「明星爆灯」把个人付费重构为全场共同推进的集体成就——粉丝的每次打赏都实时汇聚成全场进度。这背后是<b>社会认同</b>的心理机制：当用户看到「所有人都在为偶像冲」，个体的付费就从「花钱」变成了「一起参与」，明星影响力由此引爆为粉丝的社交能量。',
          html: `<style>
	.p13-chart{max-width:660px;margin:0 auto}
	.p13-flow{display:flex;gap:28px;align-items:flex-start;margin:28px 0}
	.p13-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:10px;min-width:0}
	.p13-arrow{color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px;margin-top:170px}
	.p13-item-img{width:100%;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #222226;border-radius:4px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
	.p13-item-img::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,0.03) 0%,transparent 70%);pointer-events:none}
	.p13-item-img-label{font-size:11px;color:#71717a;font-family:monospace;letter-spacing:0.06em;z-index:1;position:relative}
	.p13-item-text{font-size:12px;color:#A0A0A0;text-align:center;line-height:1.5;width:100%}
	.p13-item-text strong{color:#FFFFFF;font-weight:600;display:block;margin-bottom:2px}
	.p13-item-text b{color:#FFFFFF;font-weight:600}
	.p13-subtitle{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative;margin:24px 0 8px}
	.p13-subtitle::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
	.p13-subtitle::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
	.p13-chart-wide{max-width:780px;margin:0 auto}
	.p13-tag-row{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:nowrap;overflow-x:auto}
	.p13-tag{display:inline-flex;align-items:center;padding:6px 16px;font-size:13px;font-weight:500;color:#FFFFFF;background:rgba(199,255,0,0.06);border:1px solid rgba(199,255,0,0.15);border-radius:20px;white-space:nowrap;transition:all 0.3s ease}
	.p13-tag:hover{background:rgba(199,255,0,0.10);border-color:rgba(199,255,0,0.25);transform:translateY(-1px)}
	.p13-tag-arrow{color:#71717a;font-size:14px;flex-shrink:0}
	@media(max-width:767px){.p13-chart,.p13-chart-wide{max-width:100%}.p13-tag-row{flex-wrap:wrap;gap:6px}.p13-tag{padding:4px 12px;font-size:12px}.p13-tag-arrow{font-size:12px}.p13-arrow{transform:rotate(90deg);margin-top:0}}
	</style>
	<div class="p13-chart-wide">
		<div class="p13-tag-row">
	<span class="p13-tag">点击头像</span><span class="p13-tag-arrow">→</span><span class="p13-tag">选中反馈</span><span class="p13-tag-arrow">→</span><span class="p13-tag">展示助力任务</span><span class="p13-tag-arrow">→</span><span class="p13-tag">送出礼物</span><span class="p13-tag-arrow">→</span><span class="p13-tag">尖叫值达成</span><span class="p13-tag-arrow">→</span><span class="p13-tag">触发爆灯特效</span>
	</div>
	</div>
	<div class="p13-chart">
	<div class="p13-flow">
	<div class="p13-item">
	<div data-preview class="p13-item-img"><img src="/birdys-portfolio/images/gift-panel-none.png" alt="送礼面板-未选明星" style="width:100%;height:auto;display:block" /></div>
	</div>
	<div class="p13-item">
	<div data-preview class="p13-item-img"><img src="/birdys-portfolio/images/gift-panel-selected.png" alt="送礼面板-已选明星" style="width:100%;height:auto;display:block" /></div>
	</div>
	<div class="p13-item">
	<div data-preview class="p13-item-img"><img src="/birdys-portfolio/images/burst-effect.png" alt="爆灯特效" style="width:100%;height:auto;display:block" /></div>
	</div>
	<div class="p13-item">
	<div data-preview class="p13-item-img"><img src="/birdys-portfolio/images/burst-progress.png" alt="爆灯进度" style="width:100%;height:auto;display:block" /></div>
	</div>
	</div>
	</div>`,
        },
        {
          heading: 'Thanks',
          body: '',
          html: `<style>
.nav-card{text-decoration:none;display:block;background:#141416;border:1px solid #27272a;border-radius:8px;padding:24px;color:#f4f4f5;transition:all 0.3s ease;position:relative;overflow:hidden}
.nav-card:hover{transform:translateY(-4px);border-color:#C7FF00!important;box-shadow:0 15px 40px rgba(0,0,0,0.5)!important}
.nav-card:hover h3{color:#C7FF00!important}
.nav-card .arrow{font-size:16px;color:#C7FF00;opacity:0;transition:opacity 0.3s}
.nav-card:hover .arrow{opacity:1}
@media(max-width:1024px){.closing-left h1{font-size:100px!important}.closing-right{min-width:200px!important;padding-left:16px!important}}
@media(max-width:767px){.closing-wrap{flex-direction:column!important;align-items:flex-start!important}.closing-left{padding-right:0!important;margin-bottom:32px}.closing-left h1{font-size:64px!important}.closing-right{flex:none!important;max-width:100%!important;width:100%!important;padding-left:0!important;border-left:none!important}}
</style>
<div class="closing-wrap" style="display:flex;width:100%;margin:0 auto;align-items:center;padding:0 24px;box-sizing:border-box">
<div class="closing-left" style="flex:2;display:flex;justify-content:flex-start;align-items:center;min-width:0"><h1 style="font-size:150px;font-weight:800;color:#3a3a40;margin:0;line-height:1;letter-spacing:-6px">THANKS</h1></div>
<div class="closing-right" style="flex:1;min-width:260px;max-width:340px;display:flex;flex-direction:column;gap:16px;padding-left:24px;border-left:1px solid #1c1c1f">
<div style="display:flex;align-items:center;gap:8px;color:#C7FF00;font-size:13px;font-weight:500"><span style="width:6px;height:6px;background:#C7FF00;border-radius:50%;box-shadow:0 0 10px rgba(204,255,0,0.5)"></span>继续浏览</div>
<a class="nav-card" href="#" data-cursor-hover><div style="display:flex;justify-content:space-between;align-items:flex-start"><div><h3 style="margin:0;font-size:16px;font-weight:600;color:#FFFFFF">吃鲸AI</h3><p style="margin:8px 0 0;font-size:13px;color:#A0A0A0;line-height:1.6">AI视频消费与生成共创</p></div><span class="arrow">→</span></div></a>
<a class="nav-card" href="#" data-cursor-hover><div style="display:flex;justify-content:space-between;align-items:flex-start"><div><h3 style="margin:0;font-size:16px;font-weight:600;color:#FFFFFF">爱奇艺 Pad 端</h3><p style="margin:8px 0 0;font-size:13px;color:#A0A0A0;line-height:1.6">大屏沉浸式体验重构</p></div><span class="arrow">→</span></div></a>
</div></div>`,
        },
      ],
    },
  },
  {
    
    
    id: 'project-1',
    title: 'Pad端播放器',
    description:
      'Pad 端播放页交互设计负责人，主导从「三分屏」到「二分屏」的架构重构，以沉浸消费为核心，显著提升长视频完播率与连播转化效率。',
    imagePath: 'https://picsum.photos/seed/project1/1200/800',
    techStack: ['体验重构', 'Pad 端适配', '沉浸式交互'],
    detail: {
      pageTitle: 'Pad端播放器',
      mainTitle: '',
      subtitle: '交互设计负责人 · Pad 端播放体验重构',
      sections: [
        {
          heading: '目录',
          body: '',
          html: `<style>
.toc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;width:100%;max-width:1080px;margin:0 auto}
.toc-col{display:flex;flex-direction:column}
.toc-num{font-size:42px;font-weight:500;color:rgba(255,255,255,0.5);margin-bottom:8px;letter-spacing:-1px;font-family:var(--font-mono,monospace)}
.toc-card{background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:24px;display:flex;flex-direction:column;justify-content:space-between;height:240px;box-sizing:border-box;cursor:pointer;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.toc-card:hover{border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}
.toc-card-title{font-size:15px;font-weight:500;color:#C7FF00;line-height:1.4;margin-bottom:20px}
.toc-card-pages{display:flex;flex-direction:column;gap:8px}
.toc-page-row{display:flex;justify-content:space-between;align-items:baseline;font-size:13px}
.toc-page-name{color:#A0A0A0;font-weight:400}
.toc-page-num{color:#71717a;font-family:monospace;flex-shrink:0;margin-left:12px}
.toc-card-tag{font-size:11px;color:#52525b;font-family:monospace;margin-top:8px}
@media(max-width:767px){.toc-grid{grid-template-columns:1fr 1fr;gap:16px}.toc-num{font-size:32px}.toc-card{height:230px;padding:18px}.toc-card-title{font-size:13px}}
</style>
<div class="toc-grid">
<div class="toc-col"><span class="toc-num">01</span><div class="toc-card" data-goto="1"><div><p class="toc-card-title">背景与定位</p><div class="toc-card-pages"><div class="toc-page-row" data-goto="1"><span class="toc-page-name">重构背景</span><span class="toc-page-num">P02</span></div><div class="toc-page-row" data-goto="2"><span class="toc-page-name">Pad 端重定位</span><span class="toc-page-num">P03</span></div></div></div><span class="toc-card-tag">/ Context</span></div></div>
<div class="toc-col"><span class="toc-num">02</span><div class="toc-card" data-goto="3"><div><p class="toc-card-title">体验重构</p><div class="toc-card-pages"><div class="toc-page-row" data-goto="3"><span class="toc-page-name">待补充</span><span class="toc-page-num">P04</span></div></div></div><span class="toc-card-tag">/ Experience</span></div></div>
<div class="toc-col"><span class="toc-num">03</span><div class="toc-card" data-goto="4"><div><p class="toc-card-title">设计落地</p><div class="toc-card-pages"><div class="toc-page-row" data-goto="4"><span class="toc-page-name">待补充</span><span class="toc-page-num">P05</span></div></div></div><span class="toc-card-tag">/ Execution</span></div></div>
<div class="toc-col"><span class="toc-num">04</span><div class="toc-card" data-goto="5"><div><p class="toc-card-title">沉淀</p><div class="toc-card-pages"><div class="toc-page-row" data-goto="5"><span class="toc-page-name">待补充</span><span class="toc-page-num">P06</span></div></div></div><span class="toc-card-tag">/ Summary</span></div></div>
</div>`,
        },
        {
          heading: '重构背景：Pad 端的「沉浸式」增长困境',
          body: '在审视 Pad 端业务表现时，我们意识到原有的架构已无法承载高净值用户的观影需求。继续沿用手机端的流量策略不仅是功能的冗余，更是对用户体验的干扰，这导致了留存价值的持续流失。因此，针对 Pad 端的重构已势在必行。',
          html: `<style>
.pad2-row{display:flex;gap:16px;align-items:stretch;margin:24px 0}
.pad2-card{flex:1;background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);display:flex;flex-direction:column;border-radius:6px;padding:22px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}
.pad2-card:hover{border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}
.pad2-header{color:#FFFFFF;font-size:14px;font-weight:600;margin-bottom:14px;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative}
.pad2-header::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.pad2-header::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.pad2-pair{display:flex;flex-direction:column;gap:16px}
.pad2-item{padding:0;min-height:50px}
.pad2-item h5{display:inline;color:#FFFFFF;font-size:13px;font-weight:600;margin:0}
.pad2-item.solve h5{color:#FFFFFF}
.pad2-item p{color:#A0A0A0;font-size:13px;line-height:1.6;margin:8px 0 0;font-weight:400}
.pad2-item p b{color:#FFFFFF;font-weight:600}
.pad2-label{display:inline-block;font-size:10px;padding:2px 8px;border-radius:3px;margin-right:6px;font-family:monospace;font-weight:600}
.pad2-label.pain{background:rgba(199,255,0,0.08);color:#C7FF00;border:1px solid rgba(199,255,0,0.2)}
.pad2-label.solve{background:rgba(199,255,0,0.08);color:#C7FF00;border:1px solid rgba(199,255,0,0.2)}
.pad2-arrow{color:#C7FF00;font-weight:600;letter-spacing:0.05em}@media(max-width:767px){.pad2-row{flex-direction:column!important}}
</style>
<div class="pad2-row">
<div class="pad2-card">
<div class="pad2-header">业务数据鸿沟</div>
<div class="pad2-pair">
<div class="pad2-item"><span class="pad2-label pain">现状</span><h5>用户价值被低估</h5><p>Pad 端虽用户量占比小于手机，但用户画像显示其多为<b>家庭高净值人群</b>，ARPU 值与会员付费倾向显著高于手机端。</p></div>
<div class="pad2-item solve"><span class="pad2-label solve">痛点</span><h5>转化潜力被扼杀</h5><p>现有「三分屏」布局导致 Pad 端完播率与连播转化率长期滞后。手机的<b>「流量逻辑」</b>正在扼杀 Pad 端的「转化潜力」。</p></div>
</div>
</div>
<div class="pad2-card">
<div class="pad2-header">界面干扰与交互断层</div>
<div class="pad2-pair">
<div class="pad2-item"><span class="pad2-label pain">现状</span><h5>视觉干扰严重</h5><p>改版前的布局在长视频消费中造成<b>视觉干扰</b>，且在横竖屏切换中存在自适应适配问题，严重影响操作连贯性。</p></div>
<div class="pad2-item solve"><span class="pad2-label solve">对比</span><h5>与行业严重错位</h5><p>对比行业领先的 Pad 端沉浸式布局，我们现有的「三分屏」模式已与<b>用户心智形成严重错位</b>。</p></div>
</div>
</div>
<div class="pad2-card">
<div class="pad2-header">战略转型路径</div>
<div class="pad2-pair">
<div class="pad2-item"><span class="pad2-label pain">目标</span><h5>高净值消费基地</h5><p>重新明确目标，将 Pad 端定位为平台的<b>"高净值内容消费基地"</b>。</p></div>
<div class="pad2-item solve"><span class="pad2-label solve">行动</span><h5>体验留存替代流量分发</h5><p>从<span class="pad2-arrow">流量分发 → 体验留存</span>，通过重构布局将商业路径嵌入沉浸场景，以品质留存换取付费转化。</p></div>
</div>
</div>
</div>`,
        },
        {
          heading: '用户调研：不同终端的心智差异',
          body: '我们通过 30+ 场深度访谈，在真实场景中观察 Pad/手机双端用户的行为轨迹，从而揭开了界面背后的心理差异。',
          html: `<style>
.pad3-row{display:flex;gap:48px;align-items:stretch;justify-content:center;margin:24px 0}
.pad3-col{flex:0 1 380px;display:flex;flex-direction:column;gap:16px}
.pad3-col-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 8px;display:flex;align-items:center;gap:8px}
.pad3-col-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.pad3-bubble{background:#1A1A1A;border:1px solid #333333;border-radius:8px;padding:14px 16px;position:relative;align-self:center}
.pad3-bubble.pad::after{content:'';position:absolute;top:50%;left:-6px;width:10px;height:10px;background:#1A1A1A;border-left:1px solid rgba(199,255,0,0.25);border-bottom:1px solid rgba(199,255,0,0.25);transform:translateY(-50%) rotate(45deg)}
.pad3-bubble.phone::after{content:'';position:absolute;top:50%;left:-6px;width:10px;height:10px;background:#1A1A1A;border-left:1px solid rgba(255,255,255,0.15);border-bottom:1px solid rgba(255,255,255,0.15);transform:translateY(-50%) rotate(45deg)}
.pad3-bubble.pad{background:rgba(199,255,0,0.06);border-color:rgba(199,255,0,0.25)}
.pad3-bubble.phone{background:rgba(255,255,255,0.03);border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}
.pad3-bubble-text{color:#A0A0A0;font-size:13px;line-height:1.7;font-weight:400}
.pad3-bubble-text b{color:#FFFFFF;font-weight:600}
.pad3-quote{display:flex;gap:10px;align-items:center;margin-bottom:10px}
.pad3-avatar{width:48px;height:48px;border-radius:50%;flex-shrink:0;overflow:hidden;border:1.5px solid #333;align-self:center;display:flex;align-items:center;justify-content:center;background:#1a1a1e}
@media(max-width:767px){.pad3-row{flex-direction:column!important}}
</style>
<div class="pad3-row">
<div class="pad3-col">
<div class="pad3-col-title">Pad 用户</div>
<div class="pad3-quote"><div class="pad3-avatar"><img src="/birdys-portfolio/images/avatars/pad-user-1.jpg" alt="" style="width:100%;height:100%;object-cover" /></div><div class="pad3-bubble pad"><p class="pad3-bubble-text">Pad 对我来说是<b>"私人电影院"</b>，我不希望在观影时被打断。</p></div></div>
<div class="pad3-quote"><div class="pad3-avatar"><img src="/birdys-portfolio/images/avatars/pad-user-2.jpg" alt="" style="width:100%;height:100%;object-cover" /></div><div class="pad3-bubble pad"><p class="pad3-bubble-text">右侧栏太多推荐和密集的标签，让我觉得<b>内容不够沉浸</b>。</p></div></div>
<div class="pad3-quote"><div class="pad3-avatar"><img src="/birdys-portfolio/images/avatars/pad-user-3.jpg" alt="" style="width:100%;height:100%;object-cover" /></div><div class="pad3-bubble pad"><p class="pad3-bubble-text">我希望 Pad 端有<b>更纯粹的观影体验</b>，像在电影院一样专注。</p></div></div>
</div>
<div class="pad3-col">
<div class="pad3-col-title">手机用户</div>
<div class="pad3-quote"><div class="pad3-avatar"><img src="/birdys-portfolio/images/avatars/phone-user-1.jpg" alt="" style="width:100%;height:100%;object-cover" /></div><div class="pad3-bubble phone"><p class="pad3-bubble-text">手机是在<b>通勤路上</b>用的，操作越快越好。</p></div></div>
<div class="pad3-quote"><div class="pad3-avatar"><img src="/birdys-portfolio/images/avatars/phone-user-2.jpg" alt="" style="width:100%;height:100%;object-cover" /></div><div class="pad3-bubble phone"><p class="pad3-bubble-text">我习惯<b>一边看一边刷评论</b>，是种陪伴感。</p></div></div>
<div class="pad3-quote"><div class="pad3-avatar"><img src="/birdys-portfolio/images/avatars/phone-user-3.jpg" alt="" style="width:100%;height:100%;object-cover" /></div><div class="pad3-bubble phone"><p class="pad3-bubble-text"><b>弹幕和互动</b>让看视频更有趣，一个人看太无聊了。</p></div></div>
</div>
</div>
<p style="color:#d4d4d8;font-size:15px;margin:24px 0 0;text-align:center;font-weight:500;line-height:1.8">用户在不同终端下存在明确的心智差异。<br>手机端追求信息的即时反馈，而 Pad 端用户则寻求观影的深度留存与纯净体验。<br>此差异揭示了传统「一刀切」设计的本质局限。</p>`,
        },
        {
          heading: '双端差异策略：手机做「互动」，Pad 做「降噪」',
          body: '在不同的硬件终端下，用户对「内容消费」的定义完全不同。基于此，我们将这些感性诉求提炼为严谨的「双端心智差异模型」。',
          html: `<style>
.pad4-chart{position:relative;width:100%;max-width:520px;height:340px;border-left:1px solid #3f3f46;border-bottom:1px solid #3f3f46;margin:40px auto 20px;background-image:linear-gradient(rgba(63,63,70,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(63,63,70,0.15) 1px,transparent 1px);background-size:50px 50px}
.pad4-yl{position:absolute;left:8px;top:0px;font-size:13px;font-weight:500;color:#a0a0a0;white-space:nowrap}
.pad4-xl{position:absolute;bottom:-28px;right:0;font-size:13px;font-weight:500;color:#a0a0a0}
.pad4-cross-v{position:absolute;left:50%;top:0;bottom:0;width:0;border-left:1px dashed rgba(63,63,70,0.4)}
.pad4-cross-h{position:absolute;left:0;right:0;top:50%;height:0;border-top:1px dashed rgba(63,63,70,0.4)}
.pad4-box{width:190px;background:#141416;padding:16px 20px;border-radius:10px;position:absolute;box-shadow:0 4px 24px rgba(0,0,0,0.5)}
.pad4-box.phone{border:1px solid rgba(255,255,255,0.2);top:50px;left:30px}
.pad4-box.pad{border:1px solid #C7FF00;bottom:50px;right:30px;box-shadow:0 4px 24px rgba(199,255,0,0.08),0 4px 24px rgba(0,0,0,0.5)}
.pad4-box h3{margin:0 0 8px 0;font-size:15px;font-weight:600}
.pad4-box.phone h3{color:#FFFFFF}
.pad4-box.pad h3{color:#C7FF00}
.pad4-box p{font-size:12px;margin:0;color:#A0A0A0;line-height:1.6;white-space:nowrap}

@media(max-width:767px){.pad4-chart{height:360px}.pad4-box{width:140px;padding:12px}.pad4-box p{white-space:normal}}
</style>
<div class="pad4-chart">
<div class="pad4-cross-v"></div>
<div class="pad4-cross-h"></div>
<div class="pad4-yl">互动效率</div>
<div class="pad4-xl">沉浸体验</div>
<div class="pad4-box phone"><h3>Phone</h3><p>• 碎片化使用场景<br>• 机制驱动：高频触达<br>• 核心：社交与即时搜索</p></div>
<div class="pad4-box pad"><h3>Pad</h3><p>• 沉浸式观影场景<br>• 视觉降噪：克制干扰<br>• 核心：品质与深层留存</p></div>

</div>
`,
        },
        {
          heading: 'Pad 端重定位：以沉浸为体，以商业为用',
          body: '基于终端行为分析，我们将 Pad 端播放页的价值重新锚定为三大战略支点，以此校准信息优先级。',
          html: `<style>
.pad5-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:24px 0}
.pad5-card{background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:22px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);position:relative;overflow:hidden}
.pad5-card:hover{border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}
.pad5-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#C7FF00,transparent);opacity:0;transition:opacity .3s ease}
.pad5-card:hover::before{opacity:.6}
.pad5-num{font-family:monospace;font-size:10px;color:#C7FF00;margin-bottom:8px;display:block;font-weight:600}
.pad5-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative}
.pad5-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.pad5-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.pad5-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400}
.pad5-desc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.pad5-grid{grid-template-columns:1fr!important}}
</style>
<div class="pad5-grid">
<div class="pad5-card"><h4 class="pad5-title">核心消费场景</h4><p class="pad5-desc"><b>构建纯净观影阵地：</b>保障播放画面的视觉纯净，确立 Pad 端作为长视频内容完整消费的核心阵地。</p></div>
<div class="pad5-card"><h4 class="pad5-title">深层内容生态</h4><p class="pad5-desc"><b>推动体验升维：</b>将琐碎互动升级为深度关联信息聚合（演职员专访、原著解读），实现从「孤立观影」向「内容价值探索」的跃迁。</p></div>
<div class="pad5-card"><h4 class="pad5-title">商业转化枢纽</h4><p class="pad5-desc"><b>变干扰为服务：</b>构建克制且顺滑的转化链路，在保障沉浸体验的前提下，实现商业闭环的自然嵌入。</p></div>
</div>
<p style="color:#71717a;font-size:13px;margin:20px 0 0;text-align:right;font-weight:400">接下来，我们将基于这三大支点，展开具体的架构重构与交互设计。</p>`,
        },
        {
          heading: '架构诊断：三分屏模式的体验错配',
          body: '',
          html: `<style>
.pad6-split{display:flex;gap:24px;align-items:stretch;margin:24px 0}
.pad6-left{flex-shrink:0;display:flex}
.pad6-mockup{height:100%;aspect-ratio:4/3;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #222226;border-radius:4px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.pad6-mockup::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,0.03) 0%,transparent 70%);pointer-events:none}
.pad6-mockup-label{font-size:11px;color:#71717a;font-family:monospace;letter-spacing:0.06em;z-index:1;position:relative}
.pad6-right{flex:1;display:flex;flex-direction:column;gap:16px}
.pad6-card{background:rgba(30,30,34,0.7);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:20px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}
.pad6-card:hover{border-color:rgba(255,255,255,0.15);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03)}
.pad6-card-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative}
.pad6-card-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.pad6-card-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.pad6-card-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400}
.pad6-card-desc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.pad6-split{flex-direction:column!important}.pad6-mockup{width:100%;max-width:240px;margin:0 auto}}
</style>
<div class="pad6-split">
<div class="pad6-left">
<div data-preview class="pad6-mockup"><img src="/birdys-portfolio/images/pad-player.png" alt="Pad 播放页截图" style="width:100%;height:auto;display:block" /></div>
</div>
<div class="pad6-right">
<div class="pad6-card"><h4 class="pad6-card-title">视觉重心失衡</h4><p class="pad6-card-desc">右侧推荐流占据过大权重，导致<b>播放主体被边缘化</b>，破坏了 Pad 端应有的沉浸心智。</p></div>
<div class="pad6-card"><h4 class="pad6-card-title">交互路径冗余</h4><p class="pad6-card-desc">播放器下方功能平铺，造成严重的<b>视觉噪音与认知过载</b>。</p></div>
<div class="pad6-card"><h4 class="pad6-card-title">商业触达错位</h4><p class="pad6-card-desc">生硬的权益植入不仅未提升转化，反而因<b>干扰体验推高了用户跳出率</b>。</p></div>
</div>
</div>`,
        },
        {
          heading: 'Thanks',
          body: '',
          html: `<style>
.nav-card{text-decoration:none;display:block;background:#141416;border:1px solid #27272a;border-radius:8px;padding:24px;color:#f4f4f5;transition:all 0.3s ease;position:relative;overflow:hidden}
.nav-card:hover{transform:translateY(-4px);border-color:#C7FF00!important;box-shadow:0 15px 40px rgba(0,0,0,0.5)!important}
.nav-card:hover h3{color:#C7FF00!important}
.nav-card .arrow{font-size:16px;color:#C7FF00;opacity:0;transition:opacity 0.3s}
.nav-card:hover .arrow{opacity:1}
@media(max-width:1024px){.closing-left h1{font-size:100px!important}.closing-right{min-width:200px!important;padding-left:16px!important}}@media(max-width:767px){.closing-wrap{flex-direction:column!important;align-items:flex-start!important}.closing-left{padding-right:0!important;margin-bottom:32px}.closing-left h1{font-size:64px!important}.closing-right{flex:none!important;max-width:100%!important;width:100%!important;padding-left:0!important;border-left:none!important}}
</style>
<div class="closing-wrap" style="display:flex;width:100%;margin:0 auto;align-items:center;padding:0 24px;box-sizing:border-box">
<div class="closing-left" style="flex:2;display:flex;justify-content:flex-start;align-items:center;min-width:0"><h1 style="font-size:150px;font-weight:800;color:#3a3a40;margin:0;line-height:1;letter-spacing:-6px">THANKS</h1></div>
<div class="closing-right" style="flex:1;min-width:260px;max-width:340px;display:flex;flex-direction:column;gap:16px;padding-left:24px;border-left:1px solid #1c1c1f">
<div style="display:flex;align-items:center;gap:8px;color:#C7FF00;font-size:13px;font-weight:500"><span style="width:6px;height:6px;background:#C7FF00;border-radius:50%;box-shadow:0 0 10px rgba(204,255,0,0.5)"></span>继续浏览</div>
<a class="nav-card" href="#" data-cursor-hover><div style="display:flex;justify-content:space-between;align-items:flex-start"><div><h3 style="margin:0;font-size:16px;font-weight:600;color:#FFFFFF">吃鲸AI</h3><p style="margin:8px 0 0;font-size:13px;color:#A0A0A0;line-height:1.6">AI视频消费与生成共创</p></div><span class="arrow">→</span></div></a>
<a class="nav-card" href="#" data-cursor-hover><div style="display:flex;justify-content:space-between;align-items:flex-start"><div><h3 style="margin:0;font-size:16px;font-weight:600;color:#FFFFFF">明星陪看直播间</h3><p style="margin:8px 0 0;font-size:13px;color:#A0A0A0;line-height:1.6">视听布局重构与商业增长</p></div><span class="arrow">→</span></div></a>
</div></div>`,
        },
      ],
    },
  },
];
