import type { Project } from '../types'

export const projectData: Project[] = [
  {
    id: 'project-3',
    title: '吃鲸 AI',
    description:
      '吃鲸 AI 是爱奇艺孵化的 AI 视频互动社区。本项目旨在通过 AI 技术激活平台存量影视资产，构建从内容消费到生产共创的完整链路。',
    imagePath: 'https://picsum.photos/seed/project3/1200/800',
    techStack: ['AI 视频创作', '产品架构设计', '渐进式交互'],
    sourceUrl: 'https://github.com',
    detail: {
      pageTitle: '吃鲸 AI | AI视频消费与生成共创',
      mainTitle: '',
      subtitle: 'AI视频消费与生成共创',
      sections: [
        {
          heading: '项目概述',
          body: '吃鲸 AI 是爱奇艺孵化的 AI 视频互动社区。本项目旨在通过 AI 技术激活平台存量影视资产，构建从内容消费到生产共创的完整链路。',
          html: `<style>.role-text{color:#A0A0A0;font-size:13px;line-height:1.6;font-weight:300;margin:0;letter-spacing:0.02em}</style>
<p class="role-text">作为设计 Owner，我完整参与了从项目立项到产品上线的全流程设计。通过定义渐进式交互范式，解决了 AI 创作门槛高的核心瓶颈，跑通了<b style="color:#FFFFFF;font-weight:600">「消费—创作—沉淀」</b>的生态增长逻辑。</p>`,
        },
        {
          heading: '缘起：长视频平台的生态自救',
          body: '爱奇艺切入 AI 视频，本质上是一场<b>「生产端降本 & 流量端防御」</b>的生态自救。爱奇艺试图用生成式 AI 视频作为武器，精准破解长视频行业既有的三大商业天花板。',
                    html: `<style>
.ba-section{display:flex;flex-direction:column;gap:12px;margin:0 auto}
.ba-header-row{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.ba-header{color:#FFFFFF;font-size:13px;font-weight:600;display:flex;align-items:center;gap:6px}
.ba-header::before{content:"";width:4px;height:14px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.ba-row{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.ba-card{background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:20px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);position:relative;overflow:hidden}
.ba-card:hover{border-color:rgba(255,255,255,0.12);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.02)}
.ba-card .tag{display:inline-block;font-size:10px;padding:1px 6px;border-radius:2px;font-family:monospace;letter-spacing:.04em;font-weight:600;margin:0 6px 0 0;vertical-align:middle;background:rgba(255,255,255,.03);color:#A0A0A0;border:1px solid #333333}
.ba-card .ititle{color:#FFFFFF;font-size:14px;font-weight:600;margin:0;display:inline;vertical-align:middle}
.ba-arrow-row{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.ba-arrow-row span{text-align:center;color:#52525b;font-size:16px}
.ba-card .idesc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:8px 0 0}
.ba-card .idesc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.ba-row{grid-template-columns:1fr;gap:12px}}
</style>
<div class="ba-section">
<div class="ba-header-row"><div class="ba-header">生产端</div><div class="ba-header">变现端</div><div class="ba-header">流量端</div></div>
<div class="ba-row">
<div class="ba-card pain"><span class="tag">痛点</span><span class="ititle">重资产死循环</span><p class="idesc">传统影视制作周期长、投入高、容错率低。</p></div>
<div class="ba-card pain"><span class="tag">痛点</span><span class="ititle">线性 ROI 脆弱</span><p class="idesc">营收过度依赖"广告+会员"，ARPU 天花板低。</p></div>
<div class="ba-card pain"><span class="tag">痛点</span><span class="ititle">用户注意力流失</span><p class="idesc">长视频"被动喂养"模式无法满足年轻一代对高频互动的需求。</p></div>
</div>
<div class="ba-arrow-row"><span>↓</span><span>↓</span><span>↓</span></div>
<div class="ba-row">
<div class="ba-card solve"><span class="tag">解法</span><span class="ititle">转嫁成本风险</span><p class="idesc">利用 AI 边际成本趋于零的特性，打破传统制作的预算围墙。</p></div>
<div class="ba-card solve"><span class="tag">解法</span><span class="ititle">高毛利增值变现</span><p class="idesc">将 IP 资产转化为生产要素，引入高毛利 AI 增值购模式。</p></div>
<div class="ba-card solve"><span class="tag">解法</span><span class="ititle">全链路流量闭环</span><p class="idesc">打通<b>"看正片 → AI 二创 → 新梗回流"</b>链路，实现长视频版权的长尾增值。</p></div>
</div>
</div>`,
        },
        {
          heading: '挑战与破局：从 SWOT 模型看长视频的 AI 跨界',
          body: '在梳理三大业务痛点后，我们引入 SWOT 模型审视长视频平台跨界 AI 的核心博弈格局，以此校准破局方向。',
          html: `<style>
.quadrant-wrap{position:relative;width:100%;max-width:720px;margin:0 auto 32px}
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
.quad-cell .qdesc{color:#A0A0A0;font-size:12px;line-height:1.7;font-weight:300;margin:0}
.quad-cell .qdesc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.quadrant-inner{min-height:300px}.quad-cell{padding:12px}.quad-cell .qtitle{font-size:12px}.quad-cell .qdesc{font-size:11px}}
</style>
<div class="quadrant-wrap">
<div class="quadrant-grid">
<div class="quadrant-inner">
<div class="quadrant-center"></div>
<div class="quad-cell"><span class="qwatermark">S</span><p class="qlabel">核心资产</p><p class="qtitle">IP 资产版权护城河</p><p class="qdesc">依托长视频生态，构建了独立 AI 工具难以复制的内容合规底座与粉丝素材库。</p></div>
<div class="quad-cell"><span class="qwatermark">W</span><p class="qlabel">内在瓶颈</p><p class="qtitle">用户认知内耗</p><p class="qdesc">影视消费的"被动喂养"与 AI 创作的"主动交互"存在心智抵触；生成质量的不可控，打破了用户对长视频精美质感的心理共识。</p></div>
<div class="quad-cell"><span class="qwatermark">O</span><p class="qlabel">增量机遇</p><p class="qtitle">传播逻辑重构</p><p class="qdesc">改变长视频单向传播模式，通过 AI 赋能将影视 IP 转化为碎片化素材，实现从"单向观看"到"裂变式二次创作"的爆发性传播。</p></div>
<div class="quad-cell"><span class="qwatermark">T</span><p class="qlabel">战略威胁</p><p class="qtitle">工具侧降维挤压</p><p class="qdesc">头部专业工具已完成心智垄断，若强行竞争生成技术，极易被工具类产品降维击穿。</p></div>
</div>
</div>
</div>`,        },
        {
          heading: '定位重塑：消费型 AI 互动社区',
          body: '基于 SWOT 分析，我们发现若单纯复刻"专业AI视频创作工具"的模式，不仅无法解决巨额算力成本与 ARPU 的结构矛盾，更将陷入长视频用户对"被动娱乐"与"主动创作"之间的认知内耗。因此，我们确立了从"工具范式"转向"社区范式"的战略重构——不再通过技术硬拼获取用户，而是通过互动降低创作门槛。',
          html: `<style>
.pos-highlight{color:#C7FF00;font-size:16px;font-weight:700;line-height:1.6;margin:8px 0 32px;text-align:center}
.circle-row{display:flex;align-items:flex-start;justify-content:center;gap:0}
.circle-col{display:flex;flex-direction:column;align-items:center;flex:1;max-width:220px}
.circle-node{width:120px;height:120px;border-radius:50%;border:1px solid rgba(255,255,255,0.06);background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;text-align:center;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}
.circle-node:hover{border-color:rgba(255,255,255,0.12);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.02)}
.circle-node span{color:#FFFFFF;font-size:14px;font-weight:600;line-height:1.3;padding:10px}
.circle-op{display:flex;align-items:center;justify-content:center;width:36px;height:120px;flex-shrink:0;color:#52525b;font-size:18px}
.circle-sub{color:#FFFFFF;font-size:12px;font-weight:600;text-align:center;margin:12px 0 6px;width:100%}
.circle-desc{color:#A0A0A0;font-size:11px;line-height:1.6;font-weight:300;text-align:center;margin:0;width:100%}
@media(max-width:767px){.circle-row{flex-wrap:wrap;gap:8px}.circle-col{flex:1 1 40%;min-width:100px;max-width:none}.circle-op{width:24px;height:90px}.circle-node{width:90px;height:90px}.circle-node span{font-size:12px}}
</style>
<p class="pos-highlight">构建低门槛、轻操作的消费型 AI 互动社区</p>
<div class="circle-row">
<div class="circle-col"><div class="circle-node"><span>身份重构</span></div><p class="circle-sub">从"被动观看者"到"生态共创者"</p><p class="circle-desc">引导用户从单一的"内容观众"转型为"生态共创者"，通过参与创作实现社区归属。</p></div>
<div class="circle-op">→</div>
<div class="circle-col"><div class="circle-node"><span>体验降维</span></div><p class="circle-sub">从"重度生产力"到"消费级互动"</p><p class="circle-desc">将复杂模型交互隐藏于播放场景，让 AI 创作如同刷视频般自然、无感。</p></div>
<div class="circle-op">→</div>
<div class="circle-col"><div class="circle-node"><span>价值闭环</span></div><p class="circle-sub">从"单向播放"到"IP 增值循环"</p><p class="circle-desc">打通消费、创作与传播循环，使 AI 二创成为激活影视 IP 版权价值的增值引擎。</p></div>
</div>`,
        },
        {
          heading: '体验架构设计：AI创作的底层逻辑',
          body: '基于<b>「以消带产」</b>的核心策略，我们将产品架构解构为三层协同逻辑，旨在通过对第三方底层模型的场景化精调，在优化研发成本的同时，最大化保障影视 IP 的生成品质。',
          html: `<style>@media(max-width:767px){.arch-card{flex-direction:column!important;gap:12px!important}}.arch-card{transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.arch-card:hover{border-color:rgba(255,255,255,0.12)!important;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.02)}.arch-card.accent{background:rgba(199,255,0,.02)!important;border:1px solid rgba(199,255,0,.1)!important}.arch-card.accent:hover{background:rgba(199,255,0,.04)!important;border-color:rgba(199,255,0,.18)!important;transform:translateY(-2px);box-shadow:0 20px 40px rgba(199,255,0,0.08)}.arch-row{display:flex;gap:0;align-items:stretch;margin:24px 0}.arch-arrow{display:flex;align-items:center;color:#52525b;font-size:16px;flex-shrink:0;padding:0 8px}.arch-row .arch-card{flex:1;width:auto!important;flex-direction:column!important;gap:16px!important}.arch-h4{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;margin:0 0 12px;position:relative}.arch-h4::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}.arch-h4::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}.arch-h4.accent::after{background:#222226}@media(max-width:767px){.arch-row{flex-direction:column!important}.arch-row .arch-card{flex-direction:row!important}.arch-arrow{display:none!important}}</style>
<div class="arch-row">
<div class="arch-card" style="background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:24px;display:flex;gap:24px;align-items:flex-start">
<div><h4 class="arch-h4">生态输入层</h4>
<p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 6px">爱奇艺正片、IP 资产、版权素材库</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:300">对接爱奇艺独家正片与 IP 资产，提供版权合规的二创素材，消除用户的冷启动摩擦。</p></div>
</div>
<span class="arch-arrow">→</span>
<div class="arch-card" style="background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:24px;display:flex;gap:24px;align-items:flex-start">
<div><h4 class="arch-h4">核心逻辑层</h4>
<p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 6px">通用模型 + 自研场景化调优</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:300">接入行业领先模型，通过 Prompt 工程与工作流定制，将模糊的用户意图转化为精准的场景算力。</p></div>
</div>
<span class="arch-arrow">→</span>
<div class="arch-card" style="background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:24px;display:flex;gap:24px;align-items:flex-start">
<div><h4 class="arch-h4">感知交互层</h4>
<p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 6px">模板化交互，降低创作门槛</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:300"><b style="color:#FFFFFF">UX 设计核心阵地。</b>以模板化交互替代复杂控制面板，将底层算力包装为轻量玩法，让普通用户也能轻松参与创作。</p></div>
</div>
</div>
`,
        },
        {
          heading: '用户旅程：从看剧观众到AI创作者',
          body: '爱奇艺的用户从观众到创作者，中间隔着极高的行动门槛。为了拆解这个转化过程，团队通过用户体验地图，还原了用户真实行为与痛点：',
          html: `<style>
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
@media(max-width:767px){.jm-table{display:none!important}.jm-mobile{display:flex;flex-direction:column;gap:24px}.jm-mobile-col{border-left:1px solid #222226;padding-left:22px}.jm-mobile-col-header{font-size:14px;font-weight:600;color:#FFFFFF;margin-bottom:12px;position:relative}.jm-mobile-col-header::before{content:'';position:absolute;left:-29px;top:50%;transform:translateY(-50%);width:15px;height:15px;border-radius:50%;background:#121212;border:2px solid #71717a}.jm-mobile-col-item{margin-bottom:12px;padding:8px 0}.jm-mobile-col-item:last-child{margin-bottom:0}.jm-mobile-col-label{font-size:10px;color:#71717a;text-transform:uppercase;margin-bottom:4px;display:block}.jm-mobile-col-desc{font-size:12px;color:#A0A0A0;line-height:1.6}.jm-mobile-col-desc .jm-kw{color:#FFFFFF;font-weight:500;margin-bottom:2px}.jm-mobile-col-item.strat .jm-mobile-col-desc{color:rgba(199,255,0,0.75)}}
</style>
<table class="jm-table">
<thead>
<tr><th class="lbl">阶段</th><th><span class="t">探索发现</span><span class="s">寻找同好与共鸣</span></th><th><span class="t">激发灵感</span><span class="s">评估创作门槛</span></th><th class="core"><span class="t">获取资源</span><span class="s">获取版权素材 (核心)</span></th><th><span class="t">创作生产</span><span class="s">快速产出与分享</span></th></tr>
</thead>
<tbody>
<tr><td class="lbl">用户需求</td><td>看完热播剧后，渴望找到同好圈层，讨论剧情、分享玩梗内容。</td><td>浏览二创作品时产生表达欲，希望了解参与创作的门槛与方式。</td><td>需要高清合规的影视素材作为二创基础，保障产出质量与效率。</td><td>不想面对复杂工具，希望用最简单的方式快速完成创作。</td></tr>
<tr><td class="lbl">核心卡点</td><td><span class="jm-kw">误当成传统播放器</span>消费惯性过强，缺乏社区感知，用户看完即走、难以留存。</td><td><span class="jm-kw">不知道写什么</span>面对空白的自由创作环境，缺少引导和方向，普通用户极易放弃。</td><td><span class="jm-kw">素材获取链路断裂</span>站外缺乏合规版权，录屏、切片流转的沉没成本极高。</td><td><span class="jm-kw">工具门槛过高</span>复杂的视频编辑与参数设置，足以劝退毫无经验的普通观众。</td></tr>
<tr><td class="lbl grn">设计策略</td><td class="strat"><span class="st w">建立社区认知</span>以双列瀑布流承载二创内容，用户进场即感知"能玩、能互动"的社区氛围，而非传统播放器。</td><td class="strat"><span class="st w">模板化降低门槛</span>提供海量爆款模板与引导教程，将发散式创作转化为低阻力的"选择即创作"。</td><td class="strat"><span class="st w">站内素材闭环</span>一站式提供官方高清影视切片，打通独家版权资产到创作上游的完整链路。</td><td class="strat"><span class="st w">轻量交互转化</span>以台词改写、故事接龙等低门槛玩法，将普通观众自然转化为内容创作者。</td></tr>
</tbody>
</table>
<div class="jm-mobile">
<div class="jm-mobile-col">
<div class="jm-mobile-col-header">探索发现 · 寻找同好与共鸣</div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">用户需求</span><p class="jm-mobile-col-desc">看完热播剧后，渴望找到同好圈层，讨论剧情、分享玩梗内容。</p></div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">核心卡点</span><p class="jm-mobile-col-desc"><span class="jm-kw">误当成传统播放器</span>消费惯性过强，缺乏社区感知，用户看完即走、难以留存。</p></div>
<div class="jm-mobile-col-item strat"><span class="jm-mobile-col-label">设计策略</span><p class="jm-mobile-col-desc">建立社区认知 — 以双列瀑布流承载二创内容，用户进场即感知"能玩、能互动"的社区氛围。</p></div>
</div>
<div class="jm-mobile-col">
<div class="jm-mobile-col-header">激发灵感 · 评估创作门槛</div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">用户需求</span><p class="jm-mobile-col-desc">浏览二创作品时产生表达欲，希望了解参与创作的门槛与方式。</p></div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">核心卡点</span><p class="jm-mobile-col-desc"><span class="jm-kw">不知道写什么</span>面对空白的自由创作环境，缺少引导和方向，普通用户极易放弃。</p></div>
<div class="jm-mobile-col-item strat"><span class="jm-mobile-col-label">设计策略</span><p class="jm-mobile-col-desc">模板化降低门槛 — 提供海量爆款模板与引导教程，将发散式创作转化为低阻力的"选择即创作"。</p></div>
</div>
<div class="jm-mobile-col">
<div class="jm-mobile-col-header">获取资源 · 获取版权素材 (核心)</div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">用户需求</span><p class="jm-mobile-col-desc">需要高清合规的影视素材作为二创基础，保障产出质量与效率。</p></div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">核心卡点</span><p class="jm-mobile-col-desc"><span class="jm-kw">素材获取链路断裂</span>站外缺乏合规版权，录屏、切片流转的沉没成本极高。</p></div>
<div class="jm-mobile-col-item strat"><span class="jm-mobile-col-label">设计策略</span><p class="jm-mobile-col-desc">站内素材闭环 — 一站式提供官方高清影视切片，打通独家版权资产到创作上游的完整链路。</p></div>
</div>
<div class="jm-mobile-col">
<div class="jm-mobile-col-header">创作生产 · 快速产出与分享</div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">用户需求</span><p class="jm-mobile-col-desc">不想面对复杂工具，希望用最简单的方式快速完成创作。</p></div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">核心卡点</span><p class="jm-mobile-col-desc"><span class="jm-kw">工具门槛过高</span>复杂的视频编辑与参数设置，足以劝退毫无经验的普通观众。</p></div>
<div class="jm-mobile-col-item strat"><span class="jm-mobile-col-label">设计策略</span><p class="jm-mobile-col-desc">轻量交互转化 — 以台词改写、故事接龙等低门槛玩法，将普通观众自然转化为内容创作者。</p></div>
</div>
</div>`,
        },
        {
          heading: '产品框架：以消带产，影视素材赋能创作',
          body: '我们在消费场景的末端无缝衔接创作触发点，将用户的观看行为转化为生产动力，打通「以消带产」的转化链路。并通过多元素材库为创作减负，其中核心打造的"影视创意玩法"与"爱奇艺影视库"构成了产品的核心护城河。',
          html: `<style>
.arch-flow{display:flex;flex-direction:column;align-items:center;gap:30px}
.arch-flow-row{display:flex;align-items:center;justify-content:center;gap:20px;width:100%}
.arch-col{flex:1;min-width:0;background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:22px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}
.arch-col:hover{border-color:rgba(255,255,255,0.12)}
.arch-col-label{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 14px;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative}
.arch-col-label::before{content:"";width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.arch-col-label::after{content:"";position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.arch-col-items{display:flex;flex-direction:column;gap:8px}
.arch-item{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:4px;padding:10px 14px;font-size:13px;color:#D4D4D8;font-weight:400;text-align:center;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}
.arch-item:hover{border-color:rgba(255,255,255,0.12)}
.arch-item.hl{border-color:#C7FF00;color:#C7FF00;background:rgba(199,255,0,0.04)}
.arch-arrow{display:flex;flex-direction:column;align-items:center;width:40px;flex-shrink:0;justify-content:center}
.arch-arrow-line{width:100%;height:1px;background:#333333;position:relative}
.arch-arrow-line::after{content:'';position:absolute;right:0;top:-3px;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:6px solid #333333}
.arch-arrow.rev .arch-arrow-line::after{right:auto;left:0;border-left:none;border-right:6px solid #333333}
.arch-arrow-label{font-size:11px;color:#71717a;margin-top:6px;text-align:center}
.arch-footnote{margin-top:12px;font-size:13px;color:#A0A0A0;font-weight:400;display:flex;align-items:center;gap:8px}
.arch-footnote::before{content:'';width:6px;height:6px;background:#C7FF00;border-radius:50%;flex-shrink:0}
@media(max-width:767px){.arch-flow-row{flex-direction:column;gap:0}.arch-col{width:100%!important;max-width:100%!important;padding:16px}.arch-col-label{font-size:13px;margin-bottom:10px;padding-bottom:8px}.arch-col-label::after{width:60px}.arch-item{font-size:12px;padding:8px 12px}.arch-arrow{width:100%;padding:6px 0}.arch-arrow-line{display:none}.arch-arrow-line::after{display:none}.arch-arrow-label{font-size:13px;color:#C7FF00;margin-top:0}}
</style>
<div class="arch-flow">
<div class="arch-flow-row">
<div class="arch-col"><div class="arch-col-label">分发层</div><div class="arch-col-items"><div class="arch-item">首页瀑布流</div><div class="arch-item">精选播放器</div><div class="arch-item">模板</div></div></div>
<div class="arch-arrow"><div class="arch-arrow-line"></div><span class="arch-arrow-label">以消带产</span></div>
<div class="arch-col"><div class="arch-col-label">创作层</div><div class="arch-col-items"><div class="arch-item">通用视频生成</div><div class="arch-item hl">影视创意玩法</div><div class="arch-item">上传AI视频作品</div></div></div>
<div class="arch-arrow rev"><div class="arch-arrow-line"></div><span class="arch-arrow-label">赋能创作</span></div>
<div class="arch-col"><div class="arch-col-label">素材层</div><div class="arch-col-items"><div class="arch-item hl">爱奇艺影视库</div><div class="arch-item">手机相册</div><div class="arch-item">已有作品</div></div></div>
</div>
</div>`,
        },
        {
          heading: '分发层：互动社区心智建设',
          body: '首页以双列瀑布流承载AI创作内容，让用户进场即感知"能玩、能互动"的社区氛围。同时提供海量影视二创相关模板与引导教程，将发散式创作转化为低阻力的"选择即创作"。',
          html: `<style>
.dist-row{display:flex;gap:32px;align-items:flex-start;margin:28px auto;width:fit-content;max-width:100%}
.dist-col{display:flex;flex-direction:column;gap:12px;align-items:flex-start}
.dist-col-title{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative;margin:0}
.dist-col-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.dist-col-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.dist-col-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:0}
.dist-img-row{display:flex;gap:12px}
@media(max-width:767px){.dist-row{flex-direction:column!important}.dist-col{width:100%!important}}
.dist-placeholder{aspect-ratio:9/19.5;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #333333;border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;width:180px;flex-shrink:0}
.dist-placeholder::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.dist-placeholder span{color:#71717a;font-size:11px;font-family:monospace;letter-spacing:.06em;position:relative;z-index:1}
@media(max-width:767px){.dist-row{grid-template-columns:repeat(2,1fr);gap:12px}}
</style>
<div class="dist-row">
<div class="dist-col">
<div class="dist-col-title">内容分发</div>
<p class="dist-col-desc">在各分发场景下设置创作按钮，以便用户产生灵感后随时创作。</p>
<div class="dist-img-row">
<div class="dist-placeholder"><span>截图 1</span></div>
<div class="dist-placeholder"><span>截图 2</span></div>
<div class="dist-placeholder"><span>截图 3</span></div>
</div>
</div>
<div class="dist-col">
<div class="dist-col-title">底部创作按钮</div>
<p class="dist-col-desc">集中展示全部AI视频玩法。</p>
<div class="dist-img-row">
<div class="dist-placeholder"><span>截图 4</span></div>
</div>
</div>
</div>`,
        },
        {
          heading: '创作层：通用创作与影视创意玩法',
          body: '',
          html: `<style>
.cr-row{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:780px;margin:0 auto}
.cr-placeholder{aspect-ratio:9/19.5;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #333333;border-radius:6px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;width:180px;flex-shrink:0;margin:0 auto}
.cr-placeholder::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.cr-placeholder span{color:#71717a;font-size:11px;font-family:monospace;letter-spacing:.06em;position:relative;z-index:1}
@media(max-width:767px){.cr-row{grid-template-columns:repeat(2,1fr);gap:12px}}
</style>
<div class="cr-row">
<div class="cr-placeholder"><span>截图 1</span></div>
<div class="cr-placeholder"><span>截图 2</span></div>
<div class="cr-placeholder"><span>截图 3</span></div>
<div class="cr-placeholder"><span>截图 4</span></div>
</div>`,
        },
        {
          heading: '策略三：站内素材闭环 — 创作中控',
          body: '将官方影视切片、本地相册及个人库整合为中心化素材库，配合 @引用式配置逻辑，消除跨平台素材获取的流转割裂。',
          html: `<style>
.ds-list{margin:0 0 24px;list-style:none;padding:0}
.ds-list li{margin-bottom:12px;font-size:13px;line-height:1.75;color:#A0A0A0;font-weight:300}
.ds-list li b{color:#FFFFFF;font-weight:600}
.arch-wrapper{max-width:950px;display:inline-flex;flex-direction:column}.arch-layer{position:relative;padding:0 50px;margin-bottom:24px}.arch-layer::after{content:"";position:absolute;left:32px;top:0;width:1px;background:#222226;z-index:0}.arch-layer:not(:last-child)::after{height:calc(100% + 24px)}.arch-layer:last-child::after{height:100%}.arch-layer-bar{display:flex;flex-direction:column;align-items:flex-start;margin-bottom:12px;padding-bottom:4px;gap:2px;position:relative;z-index:1}.arch-layer-label{color:#FFFFFF;font-size:14px;font-weight:600;letter-spacing:0.02em;display:flex;align-items:center;gap:10px;position:relative}.arch-layer-label::before{content:"";width:15px;height:15px;border-radius:50%;background:#121212;border:2px solid #71717a;flex-shrink:0;position:absolute;left:-25px;top:50%;transform:translateY(-50%);z-index:2}.arch-page-row{display:flex;gap:28px;justify-content:flex-start}.arch-page-col{display:flex;flex-direction:column;align-items:flex-start;gap:6px;flex:1 1 0;min-width:0}.arch-page-box{width:auto;display:inline-flex;box-sizing:border-box;height:auto;border-radius:8px;overflow:hidden;border:1px solid #222226;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.arch-page-col:hover .arch-page-box{border-color:rgba(255,255,255,0.12);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.02)}.arch-page-tag{font-size:11px;color:#A0A0A0;letter-spacing:0.02em;text-align:center;width:100%}@media(max-width:767px){.arch-wrapper{width:100%!important;max-width:100%!important;padding:0}.arch-layer{padding:0 0 0 22px!important}.arch-layer::after{left:5px!important}.arch-layer-label::before{left:-25px!important}.arch-page-row{flex-direction:row!important;flex-wrap:nowrap;gap:4px}.arch-page-row>span{font-size:12px!important;padding:0 2px!important}.arch-page-box{width:100%!important}.arch-page-box img{max-width:100%!important;width:100%!important;max-width:none!important}.arch-page-col{flex:1;min-width:0;overflow:hidden}}
</style>
<ul class="ds-list">
  <li><b>多维素材融合：</b>整合官方影视切片、相册素材与个人参考库，打破了素材获取的平台壁垒，将素材库转化为随手可得的生产要素。</li>
  <li><b>透明化多引用交互：</b>采用 @引用式的交互逻辑，支持用户在生产过程中显性调用多项视觉参考，通过「自然语言描述 + 明确素材引用」的方式，将 AI 渲染的「黑盒」过程转化为用户可控的「逻辑拼搭」过程。</li>
  <li><b>低认知门槛配置：</b>将复杂的剪辑工作流程解构为任务式的素材调用，大幅削弱了二创对专业剪辑技能的依赖。</li>
</ul>
<div style="display:flex;justify-content:center;width:100%"><div class="arch-wrapper">
<div class="arch-layer"><div class="arch-layer-bar"><span class="arch-layer-label">资产调用</span></div><div class="arch-page-row"><div class="arch-page-col"><div class="arch-page-box"><img src="/birdys-portfolio/images/影视片段库.png" alt="影视片段库" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">多维素材整合</span></div><span style="display:flex;align-items:center;color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px">+</span><div class="arch-page-col"><div class="arch-page-box"><img src="/birdys-portfolio/images/本地相册.png" alt="本地相册" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">打破平台壁垒</span></div><span style="display:flex;align-items:center;color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px">+</span><div class="arch-page-col"><div class="arch-page-box"><img src="/birdys-portfolio/images/个人参考库.png" alt="个人参考库" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">中心化资源池</span></div></div></div>
<div class="arch-layer"><div class="arch-layer-bar"><span class="arch-layer-label">逻辑配置</span></div><div class="arch-page-row"><div class="arch-page-col"><div class="arch-page-box"><img src="/birdys-portfolio/images/未添加素材.png" alt="未添加素材" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">空载引导</span></div><span style="display:flex;align-items:center;color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px">→</span><div class="arch-page-col"><div class="arch-page-box"><img src="/birdys-portfolio/images/已添加素材.png" alt="已添加素材" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">"@引用"逻辑拼搭</span></div><span style="display:flex;align-items:center;color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px">→</span><div class="arch-page-col"><div class="arch-page-box"><img src="/birdys-portfolio/images/调用素材.png" alt="调用素材" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">多维资源检索</span></div></div></div>
</div></div>
`,
        },
        {
          heading: '策略四：轻量交互转化 — 换台词',
          body: '以热门影视 IP 的经典名场面为载体，用户只需点击台词即可改写，将专业创作降维为碎片化趣味互动。',
                    html: `<style>
	.qt-chart{max-width:900px;margin:0 auto}
	.qt-section-label{font-size:14px;color:#FFFFFF;font-weight:600;margin-bottom:14px;padding-left:11px;position:relative}.qt-section-label::before{content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:14px;background:#C7FF00;border-radius:1px}
	.qt-flow-row{display:flex;align-items:center;gap:28px;margin:0}
	.qt-node{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}
	.qt-screen-box{width:100%;aspect-ratio:9/19.5;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #222226;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:12px;color:#A0A0A0;position:relative;overflow:hidden;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.qt-screen-box::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,0.03) 0%,transparent 70%);pointer-events:none}.qt-node:hover .qt-screen-box{border-color:rgba(255,255,255,0.12);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.02)}
	.qt-node-text{font-size:12px;color:#A0A0A0;text-align:center;line-height:1.5}.qt-node-text b{color:#FFFFFF;font-weight:600;display:block;margin-bottom:2px}
	.qt-operator{color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px}
	@media(max-width:767px){.qt-chart{max-width:100%}.qt-flow-row{flex-wrap:wrap;justify-content:center;gap:12px}.qt-node{flex:1 1 40%;min-width:140px}.qt-operator{display:none}.qt-screen-box{max-width:180px;margin:0 auto}}
	</style>
	<div class="qt-chart">
	<div class="qt-section-label">交互范式：渐进式"换台词"创作流</div>
	<div class="qt-flow-row">
	<div class="qt-node"><div data-preview class="qt-screen-box"><img src="/birdys-portfolio/images/chijing/01-original-scene.jpeg" alt="原始名场面界面" style="width:100%;height:100%;object-fit:cover" /></div><div class="qt-node-text"><b>即兴微调</b>点击台词直接编辑，降低创作心理门槛。</div></div>
	<div class="qt-operator">→</div>
	<div class="qt-node"><div data-preview class="qt-screen-box"><img src="/birdys-portfolio/images/chijing/02-tags.jpeg" alt="场景化主题标签页" style="width:100%;height:100%;object-fit:cover" /></div><div class="qt-node-text"><b>场景化启发</b>点击标签，快速接入创作方向。</div></div>
	<div class="qt-operator">→</div>
	<div class="qt-node"><div data-preview class="qt-screen-box"><img src="/birdys-portfolio/images/chijing/03-dialog.jpeg" alt="半浮层对话框" style="width:100%;height:100%;object-fit:cover" /></div><div class="qt-node-text"><b>AI 对话式扩展</b>自然语言生成，多版本方案沉淀。</div></div>
	<div class="qt-operator">→</div>
	<div class="qt-node"><div data-preview class="qt-screen-box"><img src="/birdys-portfolio/images/chijing/04-preview.jpeg" alt="新台词视频预览" style="width:100%;height:100%;object-fit:cover" /></div><div class="qt-node-text"><b>创作资产沉淀</b>每一次尝试都可见、可复用。</div></div>
	</div>
	</div>`,
        },
        {
          heading: '策略四：轻量交互转化 — 故事接龙',
          body: '在"换台词"基础上进一步深化——推出「故事接龙」玩法，通过「边看边写」将单点输出转化为链式共创，让普通观众在参与中自然过渡为创作者。',
          html: `<style>
.ds-sub{font-size:18px;font-weight:700;color:#FFFFFF;margin:2rem 0 8px;letter-spacing:0.02em}
.ds-sub .num{font-family:monospace;font-size:15px;color:#C7FF00;margin-right:8px;font-weight:700}
.ds-p{color:#A0A0A0;font-size:13px;line-height:1.75;margin:0 0 20px;font-weight:300}
.ds-img-placeholder{background:linear-gradient(135deg,#121212 0%,#121212 100%);border:1px solid #333333;border-radius:4px;padding:48px 20px;text-align:center;margin:16px 0 24px;font-size:11px;color:#A0A0A0;font-family:system-ui,-apple-system,sans-serif;letter-spacing:0.05em;position:relative;overflow:hidden}.ds-img-placeholder::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}.ds-img-placeholder::after{content:'🖼';display:block;font-size:24px;margin-bottom:12px;opacity:.3;filter:grayscale(1)}
.progressive-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:20px 0}
@media(max-width:767px){.progressive-steps{grid-template-columns:1fr!important}}
.progressive-steps .ps-card{background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:18px;text-align:center;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.progressive-steps .ps-card:hover{border-color:rgba(255,255,255,0.12);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.02)}
.progressive-steps .ps-card .ps-num{font-family:monospace;font-size:10px;color:#C7FF00;display:block;margin-bottom:8px}
.progressive-steps .ps-card .ps-title{color:#FFFFFF;font-size:13px;font-weight:600;display:block;margin-bottom:4px}
.progressive-steps .ps-card .ps-desc{color:#A0A0A0;font-size:11px;line-height:1.6;font-weight:300}
</style>
<h5 style="color:#FFFFFF;font-size:13px;font-weight:600;margin:0 0 8px">📖 故事接龙</h5>
<p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0 0 8px;font-weight:300">为打破传统 UGC 内容发布即终点的「静态限制」，我们推出了「故事接龙」进阶玩法，通过将创作起点锚定在「结局之后」的空白叙事区，实现叙事的无限延伸。</p>
<p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0 0 20px;font-weight:300">在这里，用户既是剧情的消费者，通过浏览多条平行结局分支获取感官体验；也是剧情的重构者，可随时通过「改写节点」介入叙事。这种「边看边写」的交互机制，让每一段内容都成为叙事的动态节点，用户的碎片化灵感通过「接力式」共创汇聚成可持续生长的社区叙事资产，成功将单点输出转化为链式共创。</p>
<div class="ds-img-placeholder">示意图：故事接龙叙事分支界面</div>

<p class="ds-p" style="margin-top:24px">我们设计了一套「渐进式创作」交互模式，将 AI 能力自然嵌入用户的创作流中：</p>
<div class="progressive-steps">
  <div class="ps-card">
    <span class="ps-num">01 即兴微调</span>
    <span class="ps-title">点击即改</span>
    <span class="ps-desc">用最直观的方式留住用户转瞬即逝的灵感</span>
  </div>
  <div class="ps-card">
    <span class="ps-num">02 场景化启发</span>
    <span class="ps-title">预设趣味标签</span>
    <span class="ps-desc">当用户没灵感时，点击即可获得创作方向</span>
  </div>
  <div class="ps-card">
    <span class="ps-num">03 AI 对话式扩展</span>
    <span class="ps-title">自然语言驱动</span>
    <span class="ps-desc">半浮层交互将复杂生成逻辑转化为简单对话，自动沉淀多版本方案</span>
  </div>
</div>`,
        },
        {
          heading: '沉淀：当潮水退去，留下的交互资产',
          body: '',
          html: `<style>
.sd-intro{color:#A0A0A0;font-size:14px;line-height:1.8;margin:0 0 32px;font-weight:300}
.sd-intro b{color:#FFFFFF;font-weight:600}
.sd-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:32px}
.sd-card{background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:24px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);position:relative;overflow:hidden}
.sd-card:hover{border-color:rgba(255,255,255,0.12);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.02)}
.sd-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#C7FF00,transparent);opacity:0;transition:opacity .3s ease}
.sd-card:hover::before{opacity:.6}
.sd-card-num{position:absolute;top:24px;right:14px;font-family:monospace;font-size:10px;color:#C7FF00;font-weight:600;letter-spacing:0.06em;background:rgba(199,255,0,0.08);border:1px solid rgba(199,255,0,0.15);border-radius:3px;padding:3px 10px;z-index:1}
.sd-card-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:10px;display:flex;align-items:center;gap:8px;line-height:1.4;position:relative}.sd-card-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}.sd-card-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.sd-card-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:300;margin:0}
.sd-card-desc b{color:#FFFFFF;font-weight:600}
.sd-closing{margin-top:32px;background:linear-gradient(135deg,rgba(199,255,0,.02) 0%,rgba(199,255,0,.005) 100%);border:1px solid rgba(199,255,0,.08);border-left:3px solid #C7FF00;border-radius:4px;padding:24px 28px}
.sd-closing-label{font-family:monospace;font-size:11px;color:#C7FF00;letter-spacing:0.08em;margin-bottom:10px;display:block;font-weight:600}
.sd-closing p{color:#A0A0A0;font-size:14px;line-height:1.8;margin:0;font-weight:300}
.sd-closing p b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.sd-grid{grid-template-columns:1fr!important}.sd-closing{padding:20px}}
</style>
<p class="sd-intro">即使「吃鲸AI」的产品生命周期画上了句号，但交互团队在从 0 到 1 的摸索中，为爱奇艺体系乃至生成式 AI 交互领域沉淀下了不可抹去的<b>无形资产</b>：</p>
<div class="sd-grid">
<div class="sd-card"><span class="sd-card-num">资产一</span><h4 class="sd-card-title">标准化组件与协同体系</h4><p class="sd-card-desc">将核心交互（如创作页、播放器）标准化为组件库，封装为 <b>SDK 模块</b>，成功支撑了 AI 创作能力在爱奇艺主站的无缝嵌入。这套标准化方案实现了<b>创作能力与主站生态的解耦</b>，为 AI 能力的规模化接入提供了底层支撑。</p></div>
<div class="sd-card"><span class="sd-card-num">资产二</span><h4 class="sd-card-title">AI 生产链路交互重构</h4><p class="sd-card-desc">针对 AI 生成耗时较长的痛点，设计了<b>"即时反馈 + 异步处理"</b>交互闭环。通过后台任务队列与主动通知策略，将用户的<b>线性等待转化为并行体验</b>，有效解决生成过程中的流程阻塞问题，极大提升创作流顺畅度。</p></div>
<div class="sd-card"><span class="sd-card-num">资产三</span><h4 class="sd-card-title">创作资源模块化管理</h4><p class="sd-card-desc">将不同玩法的素材与底层逻辑解耦，搭建统一的<b>资源共享池</b>。资源模块化架构使得创作侧玩法迭代不再依赖复杂底层重构，显著提升产品在处理复杂创作场景时的<b>灵活性与响应效率</b>。</p></div>
</div>
<div class="sd-closing"><span class="sd-closing-label">结语</span><p>「吃鲸 AI」不仅是交互设计的实验场，更是<b>商业模型与算力成本博弈</b>的试金石。它警示我们：未来的 AI 设计，必须跳出体验的舒适区，将<b>技术 ROI 与平台基因</b>纳入设计的底层逻辑。</p></div>`,
        },
      ],
    },
  },

  {
    id: 'project-2',
    title: '明星陪看直播间',
    description:
      '明星陪看旨在重构影视观影的社交体验，通过将传统内容消费升级为"边看边聊"的沉浸式现场，建立起粉丝与偶像间的高频情感连接。',
    imagePath: 'https://picsum.photos/seed/project2/1200/800',
    techStack: ['沉浸式社交', '视听交互重构', '商业化设计驱动', '组件化设计策略'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    detail: {
      pageTitle: '明星陪看直播间 | 视听布局重构与商业增长',
      mainTitle: '',
      subtitle: '视听布局重构与商业增长',
      sections: [
        // ═══ P1 项目概述 ═══
        {
          heading: '项目概述',
          body: '明星陪看旨在重构影视观影的社交体验，通过将传统内容消费升级为"边看边聊"的沉浸式现场，建立起粉丝与偶像间的高频情感连接。',
          html: `<style>.role-text{color:#A0A0A0;font-size:13px;line-height:1.6;font-weight:300;margin:0;letter-spacing:0.02em}</style>
	<p class="role-text">作为设计 Owner，我主导了视听布局的深度重构。并通过对直播间互动路径的重塑与送礼面板的组件化改造，在确立沉浸式社交交互标准的同时，驱动<b style="color:#FFFFFF;font-weight:600">送礼营收数据突破业务历史峰值</b>。</p>`,
        },
        // ═══ P2 互动破局 ═══
        {
          heading: '互动破局：将单向观影升级为情感共鸣',
          body: '',
          html: `<style>
.hl-p{color:#A0A0A0;font-size:14px;line-height:1.8;margin:0 0 1.5rem;font-weight:300;letter-spacing:0.01em}
.hl-p b{color:#FFFFFF;font-weight:600}
.hl-p:last-child{margin-bottom:0}
.model-timeline{display:flex;flex-direction:column;position:relative;margin-top:8px}
.model-node{position:relative;padding-bottom:24px}
.model-node:last-child{padding-bottom:0}
.model-node-line{position:absolute;left:7px;top:16px;bottom:0;width:1px;background:#222226}
.model-node-dot{width:15px;height:15px;border-radius:50%;background:#121212;border:2px solid #71717a;flex-shrink:0;margin-top:3px;z-index:1}
.model-node-body{flex:1;min-width:0}
.model-node-title{font-size:14px;font-weight:600;color:#FFFFFF;display:block;margin-bottom:4px}
.model-node-desc{font-size:13px;color:#A0A0A0;line-height:1.75;margin:0}
.val-dim-branch{display:flex;gap:0;margin-top:20px}
.val-dim-branch-body{flex:1;min-width:0}
.val-dim-cards{display:flex;gap:10px;align-items:stretch;flex-wrap:wrap}
.val-dim-card{flex:1;min-width:150px;padding:22px;background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06);border-radius:6px;display:flex;flex-direction:column;justify-content:flex-start;transition:all .35s cubic-bezier(0.16,1,0.3,1)}
.val-dim-card:hover{border-color:#3f3f46;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,.4)}
.val-dim-card-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative}
.val-dim-card-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.val-dim-card-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.val-dim-card-desc{color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:300}
.val-dim-card-desc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.val-dim-cards{flex-direction:column!important;gap:8px}}
</style>
<p class="hl-p">长视频消费在存量博弈下呈现剧烈的<b>"潮汐效应"</b>——剧集热度随播放周期大幅波动，流量留存面临瓶颈。</p>

<div class="model-timeline">

    <div class="model-node">
        <div class="model-node-line"></div>
        <div style="display: flex; gap: 14px; align-items: flex-start;">
            <div class="model-node-dot"></div>
            <div class="model-node-body">
                <span class="model-node-title">现状诊断：孤岛式观影</span>
                <p class="model-node-desc">单向内容投喂，互动渠道有限，看后即走，缺乏社交沉淀与情感归属。</p>
            </div>
        </div>
    </div>

    <div class="model-node">
        <div class="model-node-line"></div>
        <div style="display: flex; gap: 14px; align-items: flex-start;">
            <div class="model-node-dot"></div>
            <div class="model-node-body">
                <span class="model-node-title">破局方向：社交化观影范式</span>
                <p class="model-node-desc">引入直播，以明星实时陪伴与粉丝社群互动构建<b>"边聊边看"</b>的沉浸式社交现场，实现从内容消费到情感共鸣的范式跃迁。</p>

                <div class="val-dim-branch">
                    <div class="val-dim-branch-body">
                        <div class="val-dim-cards">
                            <div class="val-dim-card">
                                <div class="val-dim-card-title">情感升温</div>
                                <p class="val-dim-card-desc">将被动观影转化为与明星同步的情感共鸣。通过视听协同建立不可替代的<b>"追剧仪式感"</b>，在共同观影的时空中激发粉丝的身份认同，提升用户对平台的深度归属。</p>
                            </div>
                            <div class="val-dim-card">
                                <div class="val-dim-card-title">流量深度留存</div>
                                <p class="val-dim-card-desc">利用粉丝效应将碎片化内容流量转化为直播间内高频互动的高价值社群用户。以实时陪伴与社群氛围打破<b>"看后即走"</b>的留存困境，拉长用户生命周期。</p>
                            </div>
                            <div class="val-dim-card">
                                <div class="val-dim-card-title">内容价值放大</div>
                                <p class="val-dim-card-desc">通过直播内容的二次加工与社交属性注入，将热播剧集转化为可跨周期复利的长尾互动资产。单次直播不再是昙花一现，而是持续驱动<b>剧集与直播流量双向反哺</b>的价值引擎。</p>
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
          heading: '目标拆解：从业务诉求到设计策略',
          body: '根据以上页面背景和破局分析，我们依托「流量蓄水 ➔ 沉浸式体验 ➔ 情感变现」的完整价值闭环，对「设计目标 ➔ 设计策略 ➔ 设计手段」进行推导，深度解构核心交互层的破局方案。',
          html: `<style>
.dt-table{width:100%;border-collapse:collapse;table-layout:fixed;min-width:600px}
.dt-table th,.dt-table td{padding:24px 16px;font-size:12px;color:#A0A0A0;line-height:1.6;border-bottom:1px solid #222226;vertical-align:top;font-weight:400;text-align:left;word-break:break-word}
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
            <th class="lbl">维度</th>
            <th>流量蓄水</th>
            <th>沉浸式体验</th>
            <th>情感变现</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="lbl" data-label="维度">目标</td>
            <td data-label="流量蓄水">阻断单向流失，实现长尾流量的有效触达与资产沉淀。</td>
            <td data-label="沉浸式体验">确立高并发干扰场景下的实时互动标准，保障观影沉浸感。</td>
            <td data-label="情感变现">消除付费防御，将商业行为转译为自然的社交情感宣泄。</td>
        </tr>
        <tr>
            <td class="lbl" data-label="维度">策略</td>
            <td data-label="流量蓄水">高频触达与结构化聚合心智构建。</td>
            <td data-label="沉浸式体验">智能视听降噪：动态调配渲染权重的自适应算法逻辑。</td>
            <td data-label="情感变现">即时反馈驱动：情感触发器与多模态反馈的深度绑定。</td>
        </tr>
        <tr class="hl">
            <td class="lbl" data-label="维度">手段</td>
            <td data-label="流量蓄水">播放页动态状态卡片、陪看中心聚合页。</td>
            <td data-label="沉浸式体验">重构连麦布局架构、规范多人互动栅格系统。</td>
            <td data-label="情感变现">重构送礼快捷面板、轻量化情感交互组件。</td>
        </tr>
    </tbody>
</table>
</div>
<div class="dt-mobile">
<div class="dt-mobile-col">
<div class="dt-mobile-col-header">流量蓄水</div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">目标</span><p class="dt-mobile-col-desc">阻断单向流失，实现长尾流量的有效触达与资产沉淀。</p></div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">策略</span><p class="dt-mobile-col-desc">高频触达与结构化聚合心智构建。</p></div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">手段</span><p class="dt-mobile-col-desc">播放页动态状态卡片、陪看中心聚合页。</p></div>
</div>
<div class="dt-mobile-col">
<div class="dt-mobile-col-header">沉浸式体验</div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">目标</span><p class="dt-mobile-col-desc">确立高并发干扰场景下的实时互动标准，保障观影沉浸感。</p></div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">策略</span><p class="dt-mobile-col-desc">智能视听降噪：动态调配渲染权重的自适应算法逻辑。</p></div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">手段</span><p class="dt-mobile-col-desc">重构连麦布局架构、规范多人互动栅格系统。</p></div>
</div>
<div class="dt-mobile-col">
<div class="dt-mobile-col-header">情感变现</div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">目标</span><p class="dt-mobile-col-desc">消除付费防御，将商业行为转译为自然的社交情感宣泄。</p></div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">策略</span><p class="dt-mobile-col-desc">即时反馈驱动：情感触发器与多模态反馈的深度绑定。</p></div>
<div class="dt-mobile-col-item"><span class="dt-mobile-col-label">手段</span><p class="dt-mobile-col-desc">重构送礼快捷面板、轻量化情感交互组件。</p></div>
</div>
</div>`,
        },
        // ═══ P4 流量蓄水 ═══
        {
          heading: '流量蓄水：触达入口及陪看聚合页构建',
          body: '',
          html: `<style>
.tx-p{color:#A0A0A0;font-size:14px;line-height:1.8;margin:0 0 24px;font-weight:300}
.tx-p b{color:#FFFFFF;font-weight:600}
/* 蓄水漏斗 */
.funnel-row{display:flex;gap:32px;align-items:stretch;margin:28px 0}
.funnel-card{flex:1;background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:22px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);position:relative;display:flex;flex-direction:column}
.funnel-card:hover{border-color:rgba(255,255,255,0.12);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.02)}
.funnel-card::after{content:attr(data-arrow);position:absolute;right:-24px;top:50%;transform:translateY(-50%);color:#555555;font-size:16px;font-weight:300;z-index:2}
.funnel-card:last-child::after{display:none}
.funnel-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative}
.funnel-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.funnel-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.funnel-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:300;margin:0;flex:1}
.funnel-desc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.funnel-row{flex-direction:column!important;gap:40px!important}.funnel-card::after{right:50%;top:calc(100% + 20px);bottom:auto;transform:translate(50%,-50%) rotate(90deg)}}
.image-placeholder{background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #222226;border-radius:4px;padding:48px 20px;text-align:center;margin:16px 0;font-size:11px;color:#A0A0A0;font-family:system-ui,-apple-system,sans-serif;letter-spacing:0.05em;position:relative;overflow:hidden}
.image-placeholder::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.image-placeholder::after{content:'🖼';display:block;font-size:24px;margin-bottom:12px;opacity:.3;filter:grayscale(1)}
</style>
<p class="tx-p">作为「一起聊」流量体系的核心阵地，我们构建了<b>「播放页轻量触达 + 聚合页深度留存」</b>的流量蓄水布局，有效解决剧集长尾期流量衰减的痛点。</p>

<div class="funnel-row">
<div class="funnel-card" data-arrow="→">
<div class="funnel-title">播放页触达</div>
<p class="funnel-desc">依托核心播放场景，通过<b>动态状态卡片</b>构建即时交互触点，在不打断观影流的前提下完成从视频消费到直播互动的行为转化。</p>
</div>
<div class="funnel-card" data-arrow="→">
<div class="funnel-title">聚合页留存</div>
<p class="funnel-desc">设计「明星陪看」聚合阵地，通过直播/预约动态、陪看榜单、回看合集三大模块，将单次直播转化为<b>长效互动资产</b>。</p>
</div>
<div class="funnel-card">
<div class="funnel-title">跨周期复利</div>
<p class="funnel-desc">打通剧集正片与直播间的流量内循环，实现<b>剧集热度反哺直播、直播内容反哺剧集</b>的双向增值，破解长尾期流量断崖。</p>
</div>
</div>`,
        },
        // ═══ P5 播放页入口 ═══
        {
          heading: '播放页入口：动态链路触达',
          body: '',
          html: `<style>
.entry-split{display:flex;gap:24px;align-items:flex-start;margin:28px 0}
.entry-left{flex:1;align-self:flex-start}
.entry-left img{width:100%;display:block;border-radius:6px}
.entry-right{width:250px;min-width:250px;max-width:250px;flex-shrink:0}
.entry-text-card{background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:20px;display:flex;flex-direction:column;gap:16px}
.entry-text-item{padding-bottom:16px;border-bottom:1px solid #222226}
.entry-text-item:last-child{padding-bottom:0;border-bottom:none}
.entry-text-label{color:#C7FF00;font-size:13px;font-weight:600;margin:0 0 4px}
.entry-text-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:0}
@media(max-width:767px){.entry-split{flex-direction:column!important}.entry-right{width:auto!important}}
</style>
<div class="entry-split">
<div class="entry-left"><img src="/birdys-portfolio/images/live-entry.png" alt="直播入口状态" /></div>
<div class="entry-right">
<div class="entry-text-card">
<div class="entry-text-item"><p class="entry-text-label">低干扰</p><p class="entry-text-desc">触达入口设置在选集下方，仅在临近直播/直播中时显示，在不打断观影流的前提下完成轻量触达。</p></div>
<div class="entry-text-item"><p class="entry-text-label">高转化</p><p class="entry-text-desc">入口实时展示直播状态，直播间内活动权益通过角标透传，辅助用户进行决策，一键切入陪看现场。</p></div>
<div class="entry-text-item"><p class="entry-text-label">心智建设</p><p class="entry-text-desc">通过直播预告培养用户一键预约本剧全部直播陪看的习惯，将剧集观众转化为直播间的存量用户。</p></div>
</div>
</div>
</div>`,
        },
        // ═══ P6 明星陪看聚合页 ═══
        {
          heading: '明星陪看聚合页：沉淀互动资产',
          body: '',
          html: `<style>
.agg-split{display:flex;gap:32px;align-items:flex-start;margin:28px 0}
.agg-left{flex:1;min-width:0}
.agg-left img{width:100%;height:auto;border-radius:6px}
.agg-right{flex:1;display:flex;flex-direction:column;gap:20px;min-width:0;padding-top:8px}
.agg-text-item{padding-bottom:16px;border-bottom:1px solid #222226}
.agg-text-item:last-child{padding-bottom:0;border-bottom:none}
.agg-text-label{color:#C7FF00;font-size:13px;font-weight:600;margin:0 0 4px}
.agg-text-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:400;margin:0}
.agg-text-desc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.agg-split{flex-direction:column!important}}
</style>
<div class="agg-split">
<div class="agg-left"><img src="/birdys-portfolio/images/agg-page.png" alt="聚合页" style="width:100%;border-radius:6px" /></div>
<div class="agg-right">
<div class="agg-text-item"><p class="agg-text-label">直播 / 预约动态</p><p class="agg-text-desc">作为流量转化的实时枢纽，通过清晰的预约、直播中、回看状态切换机制，建立用户对明星陪看的<b>时间心智</b>。</p></div>
<div class="agg-text-item"><p class="agg-text-label">陪看榜单</p><p class="agg-text-desc">引入<b>社群竞技感</b>，通过实时互动数据可视化——贡献榜、送礼榜、互动热力值——激发粉丝参与热度与集体荣誉感。</p></div>
<div class="agg-text-item"><p class="agg-text-label">回看合集</p><p class="agg-text-desc">将单次直播转化为<b>长效互动资产</b>，实现剧集与直播流量的跨周期复利，破解"看后即走"的留存困境。</p></div>
</div>
</div>`,
        },
        // ═══ P7 沉浸式体验 ═══
        {
          heading: '沉浸式体验：从"伴随式社交"到"沉浸式陪看"',
          body: '',
          html: `<style>
.tx-p{color:#A0A0A0;font-size:14px;line-height:1.8;margin:0 0 24px;font-weight:300}
.tx-p b{color:#FFFFFF;font-weight:600}
.entry-split{display:flex;gap:32px;align-items:stretch;margin:28px auto;max-width:900px}
.entry-left{flex:1.2;display:flex;gap:16px;align-items:stretch;min-width:0}
.entry-right{flex:0.8;display:flex;flex-direction:column;gap:16px;min-width:0}
.entry-img-box{flex:1;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #222226;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#A0A0A0;font-size:13px;position:relative;overflow:hidden;aspect-ratio:1/2.168}
.entry-img-box::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.entry-img-label{position:absolute;bottom:12px;left:0;right:0;text-align:center;font-size:11px;color:#71717a;font-family:monospace;letter-spacing:0.06em;z-index:1}
.p7-card{background:transparent;border:none;padding:0 0 0 30px;position:relative}
.p7-card::after{content:'';position:absolute;left:15px;top:0;bottom:0;width:1px;background:#222226;z-index:0}
.p7-card-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 6px;display:flex;align-items:center;gap:8px;position:relative}
.p7-card-title::before{content:'';width:15px;height:15px;border-radius:50%;background:#121212;border:2px solid #71717a;flex-shrink:0;position:absolute;left:-22px;top:50%;transform:translateY(-50%);z-index:2}
.p7-card-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:300;margin:0}
.p7-card-desc b{color:#FFFFFF;font-weight:600}
.card-arrow{display:none}
@media(max-width:767px){.p7-card{padding:0 0 0 22px}.p7-card::after{left:15px}.p7-card-title::before{left:-14px}}
</style>
<p class="tx-p">在明星陪看这一垂类场景中，直播间已不仅是内容的消费窗口，更是粉丝实时情感共鸣的社交场。然而，早期基于图文/语音的互动模式面临着显著的<b>体验断层</b>：互动载体与视频内容在视觉上是剥离的，且难以承载明星丰富的情绪表达，导致用户在阅读与观看之间频繁产生<b>心智割裂</b>，明星变为剧集视频的附属。</p>

<div class="entry-split">
<div class="entry-left">
<div data-preview class="entry-img-box">
<span class="entry-img-label">视觉剥离示意</span>
</div>
<div data-preview class="entry-img-box">
<span class="entry-img-label">沉浸式融合示意</span>
</div>
</div>
<div class="entry-right">
<div class="p7-card">
<div class="p7-card-title">体验断层</div>
<p class="p7-card-desc">早期互动区与视频播放区<b>物理分离</b>，用户在弹幕/聊天与观影之间频繁切换注意力，产生严重的<b>心智割裂</b>。<br><br>同时，纯图文/语音的互动载体<b>无法承载明星的丰富情绪</b>，削弱了"陪伴感"的核心价值，明星沦为视频的<b>"画外音"附属</b>。</p>
</div>
<div class="card-arrow">↓</div>
<div class="p7-card">
<div class="p7-card-title">沉浸式融合</div>
<p class="p7-card-desc">将互动层与视频层<b>深度融合</b>，通过画中画、表情回应气泡、实时情绪可视化等手段，让明星的陪伴从<b>"背景音"升维为"在场感"</b>。</p>
</div>
</div>
</div>`,
        },
        // ═══ P8 陪看布局重构1 ═══
        {
          heading: '陪看布局重构1：直播间页面结构分层治理',
          body: '直播陪看界面分层治理：通过合理布局，建立动态图层架构（明星画面 > 影视视频 > 弹幕/礼物 > 挂件），明确明星陪看画面为直播间的主体。',
        },
        // ═══ P9 陪看布局重构2 ═══
        {
          heading: '陪看布局重构2：场景化动态平衡',
          body: '交互避让机制：引入"动态避让算法"，确保互动内容在触发时能够智能规避核心视听区域，保障主体内容始终处于纯净状态。\n\n场景化信息治理：在回看场景中引入播控，并设计"4秒自动隐匿"的智能收纳逻辑，在用户无操作时，视觉焦点自动回归内容本身。在用户调节进度时展示进度缩略图并自动隐藏非必要的飘评与挂件，最大限度释放屏幕空间，聚焦用户的深度复盘心智。',
          html: `<style>
	.p9-row{display:flex;gap:32px;align-items:flex-start;margin:28px auto;width:fit-content;max-width:100%}
	.p9-col{display:flex;flex-direction:column;gap:12px;align-items:flex-start}
	.p9-col{width:372px;flex-shrink:0}.p9-col.wide{width:564px}
	.p9-col-title{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative;margin:0}
	.p9-col-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
	.p9-col-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
	.p9-col-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:300;margin:0}
	.p9-col-desc b{color:#FFFFFF;font-weight:600}
	.p9-img{background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #222226;border-radius:4px;aspect-ratio:1/2.168;width:180px;flex-shrink:0;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
	.p9-img::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,0.03) 0%,transparent 70%);pointer-events:none}
	.p9-img-label{font-size:11px;color:#71717a;font-family:monospace;letter-spacing:0.06em;z-index:1;position:relative}
	.p9-img-row{display:flex;gap:12px}.p9-img-row .p9-img{width:180px;flex-shrink:0}
	@media(max-width:767px){.p9-row{flex-direction:column!important}.p9-col,.p9-col.wide{width:100%!important}.p9-img{width:100%!important;max-width:180px}.p9-img-row .p9-img{width:100%!important;max-width:180px}}
	</style>
	<div class="p9-row">
	<div class="p9-col">
	<div class="p9-col-title">动态避让机制</div>
	<p class="p9-col-desc">互动内容触发时<b>智能规避</b>核心视听区域，直播中弹幕与礼物自动偏移，保障主体画面始终纯净。</p>
	<div class="p9-img-row">
	<div data-preview class="p9-img"><span class="p9-img-label">避让前状态</span></div>
	<div data-preview class="p9-img"><span class="p9-img-label">避让后状态</span></div>
	</div>
	</div>
	<div class="p9-col wide">
	<div class="p9-col-title">回看场景信息治理</div>
	<p class="p9-col-desc"><b>4秒自动隐匿</b>播控与飘评，进度调节时展示缩略图并隐藏非必要元素，释放屏幕空间聚焦复盘心智。</p>
	<div class="p9-img-row">
	<div data-preview class="p9-img"><span class="p9-img-label">回看播控界面</span></div>
	<div data-preview class="p9-img"><span class="p9-img-label">进度缩略图</span></div>
	<div data-preview class="p9-img"><span class="p9-img-label">自动隐匿后</span></div>
	</div>
	</div>
	</div>`,
        },
        // ═══ P10 情感变现 ═══
        {
          heading: '情感变现：构建分层式送礼玩法矩阵',
          body: '商业闭环不应是生硬的支付行为，而是情感互动的自然延伸。我们将送礼逻辑划分为"基础、创意、成就"三层架构，以满足不同场景下的用户情感释放需求，实现商业价值与互动氛围的同步跃升。',
          html: `<style>
.pyramid-wrap{display:flex;justify-content:center;margin:32px 0}
.pyramid{display:flex;flex-direction:column;width:400px;height:300px;clip-path:polygon(50% 0,100% 100%,0% 100%);overflow:hidden}
.pyramid-tier{display:flex;align-items:center;justify-content:center;text-align:center;flex:1;position:relative}
.pyramid-tier.top{flex:1.4;background:rgba(199,255,0,0.08);padding-top:48px}
.pyramid-tier.mid{background:rgba(199,255,0,0.05);border-top:1px solid rgba(199,255,0,0.15)}
.pyramid-tier.btm{background:rgba(199,255,0,0.03);border-top:1px solid rgba(199,255,0,0.15)}
.pyramid-tier-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0}
@media(max-width:767px){.pyramid{width:100%;max-width:340px;height:260px}}
</style>
<div class="pyramid-wrap"><div class="pyramid">
<div class="pyramid-tier top">
<span class="pyramid-tier-title">成就共鸣</span>
</div>
<div class="pyramid-tier mid">
<span class="pyramid-tier-title">创意体验</span>
</div>
<div class="pyramid-tier btm">
<span class="pyramid-tier-title">基础馈赠</span>
</div>
</div></div>`,
        },
        // ═══ P11 基础送礼链路 ═══
        {
          heading: '基础送礼链路：极简支付体验',
          body: '商业行为应是内容消费的顺滑延伸，我们通过资产集成与路径压缩，实现支付环节的"零感知"切换。',
          html: `<style>
.p11-row{display:flex;gap:32px;align-items:flex-start;margin:28px auto;width:fit-content;max-width:100%}
.p11-col{display:flex;flex-direction:column;gap:12px;align-items:flex-start}
.p11-col{width:372px;flex-shrink:0}
.p11-col-title{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative;margin:0}
.p11-col-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.p11-col-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.p11-col-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:300;margin:0}
.p11-col-desc b{color:#FFFFFF;font-weight:600}
.p11-img{background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #222226;border-radius:4px;aspect-ratio:1/2.168;width:180px;flex-shrink:0;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.p11-img::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,0.03) 0%,transparent 70%);pointer-events:none}
.p11-img-label{font-size:11px;color:#71717a;font-family:monospace;letter-spacing:0.06em;z-index:1;position:relative}
.p11-img-row{display:flex;gap:12px}.p11-img-row .p11-img{width:180px;flex-shrink:0}
@media(max-width:767px){.p11-row{flex-direction:column!important}.p11-col{width:100%!important}.p11-img{width:100%!important;max-width:180px}.p11-img-row .p11-img{width:100%!important;max-width:180px}}
</style>
<div class="p11-row">
<div class="p11-col">
<div class="p11-col-title">资产流通体系</div>
<p class="p11-col-desc">深度整合<b>奇点支付与VIP积分抵扣</b>，打通会员权益，为用户提供低门槛的参与路径。</p>
<div class="p11-img-row">
<div data-preview class="p11-img"><span class="p11-img-label">奇点支付入口</span></div>
<div data-preview class="p11-img"><span class="p11-img-label">会员抵扣页</span></div>
</div>
</div>
<div class="p11-col">
<div class="p11-col-title">送礼效率优化</div>
<p class="p11-col-desc">通过<b>入口重构与连击机制</b>，将复杂的支付决策转化为高频互动的"感官节奏"，实现从动作触发到情感回馈的秒级响应。</p>
<div class="p11-img-row">
<div data-preview class="p11-img"><span class="p11-img-label">快捷送礼示意图</span></div>
<div data-preview class="p11-img"><span class="p11-img-label">连击送礼示意图</span></div>
</div>
</div>
</div>`,
        },
        // ═══ P12 进阶创意送礼 ═══
        {
          heading: '进阶创意送礼：组件化赋能送礼玩法"生产线"',
          body: '送礼玩法游戏化，将付费动作转译为具有惊喜感的沉浸式社交体验。',
          html: `<style>
.p12-subtitle{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative;margin:24px 0 8px}
.p12-chart{max-width:660px;margin:0 auto}
.p12-subtitle::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.p12-subtitle::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.p12-subdesc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:300;margin:0 0 24px}
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
<div class="p12-subtitle">送礼玩法通用模板</div>
<p class="p12-subdesc">从"孤立功能"到"组件矩阵"，通过构建标准化的交互模组，实现多元化商业玩法的高效迭代。</p>
<div class="p12-flow">
<div class="p12-flow-item">
<div data-preview class="p12-flow-img"><span class="p12-flow-label">送礼入口占位图</span></div>
<div class="p12-flow-text"><strong>送礼入口</strong>智能排布，最大化露出</div>
</div>
<div class="p12-flow-arrow">→</div>
<div class="p12-flow-item">
<div data-preview class="p12-flow-img"><span class="p12-flow-label">承接浮层占位图</span></div>
<div class="p12-flow-text"><strong>承接浮层</strong>沉浸式情感激励</div>
</div>
<div class="p12-flow-arrow">→</div>
<div class="p12-flow-item">
<div data-preview class="p12-flow-img"><span class="p12-flow-label">反馈动效占位图</span></div>
<div class="p12-flow-text"><strong>反馈动效</strong>即时视觉回馈</div>
</div>
</div>
</div>`,
        },
        // ═══ P12.5 玩法矩阵落地 ═══
        {
          heading: '进阶创意送礼：组件化赋能送礼玩法"生产线"',
          body: '',
          html: `<style>
        .p12b-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:32px 0}
        .p12b-text{color:#A0A0A0;font-size:14px;line-height:1.8;font-weight:300;margin:0;max-width:600px}
        .p12b-text b{color:#FFFFFF;font-weight:600}
        @media(max-width:767px){.p12b-text{font-size:13px;line-height:1.8}}
        </style>
        <div class="p12b-wrap">
        <p class="p12b-text">标准化的交互模组支撑了<b>冠名送礼、定制礼物、梯度礼物、心动套组、盲盒礼物</b>…<br>多元玩法快速落地，极大提升上线效率。</p>
        </div>`,
        },
        // ═══ P13 终极玩法 ═══
        {
          heading: '终极玩法：明星爆灯的成就闭环',
          body: '在"尖叫之夜"等顶级活动中，我们以"明星爆灯"为核心，将单一付费动作重构为全场狂欢的集体成就事件，通过高密度交互引爆活动高潮，将明星影响力转化为粉丝社交能量的爆发点。',
          html: `<style>
	.p13-chart{max-width:660px;margin:0 auto}
	.p13-flow{display:flex;gap:28px;align-items:flex-start;margin:28px 0}
	.p13-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:10px;min-width:0}
	.p13-arrow{color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px;margin-top:170px}
	.p13-item-img{width:100%;aspect-ratio:1/2.168;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #222226;border-radius:4px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
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
	<div class="p13-subtitle">爆灯流程</div>
	<div class="p13-tag-row">
	<span class="p13-tag">点击头像</span><span class="p13-tag-arrow">→</span><span class="p13-tag">选中反馈</span><span class="p13-tag-arrow">→</span><span class="p13-tag">展示助力任务</span><span class="p13-tag-arrow">→</span><span class="p13-tag">送出礼物</span><span class="p13-tag-arrow">→</span><span class="p13-tag">尖叫值达成</span><span class="p13-tag-arrow">→</span><span class="p13-tag">触发爆灯特效</span>
	</div>
	</div>
	<div class="p13-chart">
	<div class="p13-flow">
	<div class="p13-item">
	<div data-preview class="p13-item-img"><span class="p13-item-img-label">为TA爆灯组件</span></div>
	<div class="p13-item-text"><strong>入口层</strong>通过高亮的<b>"为TA爆灯"</b>组件，明确引导用户产生指向性极强的交互目标。</div>
	</div>
	<div class="p13-arrow">→</div>
	<div class="p13-item">
	<div data-preview class="p13-item-img"><span class="p13-item-img-label">全屏爆灯特效</span></div>
	<div class="p13-item-text"><strong>浮层与反馈层</strong>引入<b>全屏级的视觉特效</b>承接反馈，通过高规格的视听呈现给予用户巨大的成就满足感。</div>
	</div>
	<div class="p13-arrow">→</div>
	<div class="p13-item">
	<div data-preview class="p13-item-img"><span class="p13-item-img-label">成就达成直播间</span></div>
	<div class="p13-item-text"><strong>成就达成</strong>将用户转化为直播间的<b>"高价值活跃资产"</b>，完成从付费行为到社交资产的闭环。</div>
	</div>
	</div>
	</div>`,
        },
      ],
    },
  },
  {
    
    
    id: 'project-1',
    title: 'Pad端播放器',
    description:
      'Pad 端播放页交互设计负责人，主导从"三分屏"到"二分屏"的架构重构，以沉浸消费为核心，显著提升长视频完播率与连播转化效率。',
    imagePath: 'https://picsum.photos/seed/project1/1200/800',
    techStack: ['Pad UX', '交互设计', '用户调研', '体验架构', '设计系统'],
    detail: {
      pageTitle: 'Pad端播放器',
      mainTitle: '',
      subtitle: '交互设计负责人 · Pad 端播放体验重构',
      sections: [
        {
          heading: 'Pad 端播放页',
          body: '本项目致力于爱奇艺 iPad 端播放体验的体系化重构。作为交互设计 Owner，我全链路主导了从痛点挖掘、策略推导到组件化落地的全过程。针对原"三分屏"布局导致的信息过载及适配断层，本项目跳出传统的流量分发思维，以"沉浸消费"为核心，将架构由"三分屏"精简至"二分屏"。通过重构大屏信息黄金比例，在解决系统适配断层的同时，显著提升了长视频的完播率与连播转化效率，实现了从"功能堆叠"到"体验留存"的范式转移。',
        },
        {
          heading: '重构背景：Pad 端的"沉浸式"增长困境',
          body: '在审视 Pad 端业务表现时，我们意识到原有的架构已无法承载高净值用户的观影需求。继续沿用手机端的流量策略不仅是功能的冗余，更是对用户体验的干扰，这导致了留存价值的持续流失。因此，针对 Pad 端的重构已势在必行。',
          html: `<style>
.pad2-row{display:flex;gap:16px;align-items:stretch;margin:24px 0}
.pad2-card{flex:1;background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06);display:flex;flex-direction:column;border-radius:6px;padding:22px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}
.pad2-card:hover{border-color:rgba(255,255,255,0.12);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.02)}
.pad2-header{color:#FFFFFF;font-size:14px;font-weight:600;margin-bottom:14px;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative}
.pad2-header::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.pad2-header::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.pad2-pair{display:flex;flex-direction:column;gap:12px}
.pad2-item{padding:0;min-height:50px}
.pad2-item h5{display:inline;color:#FFFFFF;font-size:13px;font-weight:600;margin:0}
.pad2-item.solve h5{color:#FFFFFF}
.pad2-item p{color:#A0A0A0;font-size:13px;line-height:1.6;margin:8px 0 0;font-weight:300}
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
<div class="pad2-item solve"><span class="pad2-label solve">痛点</span><h5>转化潜力被扼杀</h5><p>现有"三分屏"布局导致 Pad 端完播率与连播转化率长期滞后。手机的<b>"流量逻辑"</b>正在扼杀 Pad 端的"转化潜力"。</p></div>
</div>
</div>
<div class="pad2-card">
<div class="pad2-header">界面干扰与交互断层</div>
<div class="pad2-pair">
<div class="pad2-item"><span class="pad2-label pain">现状</span><h5>视觉干扰严重</h5><p>改版前的布局在长视频消费中造成<b>视觉干扰</b>，且在横竖屏切换中存在自适应适配问题，严重影响操作连贯性。</p></div>
<div class="pad2-item solve"><span class="pad2-label solve">对比</span><h5>与行业严重错位</h5><p>对比行业领先的 Pad 端沉浸式布局，我们现有的"三分屏"模式已与<b>用户心智形成严重错位</b>。</p></div>
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
.pad3-col{flex:0 1 380px;display:flex;flex-direction:column;gap:12px}
.pad3-col-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 8px;display:flex;align-items:center;gap:8px}
.pad3-col-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.pad3-bubble{background:#1A1A1A;border:1px solid #333333;border-radius:8px;padding:14px 16px;position:relative;align-self:center}
.pad3-bubble.pad::after{content:'';position:absolute;top:50%;left:-6px;width:10px;height:10px;background:#1A1A1A;border-left:1px solid rgba(199,255,0,0.25);border-bottom:1px solid rgba(199,255,0,0.25);transform:translateY(-50%) rotate(45deg)}
.pad3-bubble.phone::after{content:'';position:absolute;top:50%;left:-6px;width:10px;height:10px;background:#1A1A1A;border-left:1px solid rgba(255,255,255,0.15);border-bottom:1px solid rgba(255,255,255,0.15);transform:translateY(-50%) rotate(45deg)}
.pad3-bubble.pad{background:rgba(199,255,0,0.06);border-color:rgba(199,255,0,0.25)}
.pad3-bubble.phone{background:rgba(255,255,255,0.03);border-color:rgba(255,255,255,0.12)}
.pad3-bubble-text{color:#A0A0A0;font-size:13px;line-height:1.7;font-weight:300}
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
<p style="color:#d4d4d8;font-size:15px;margin:24px 0 0;text-align:center;font-weight:500;line-height:1.8">用户在不同终端下存在明确的心智差异。<br>手机端追求信息的即时反馈，而 Pad 端用户则寻求观影的深度留存与纯净体验。<br>此差异揭示了传统"一刀切"设计的本质局限。</p>`,
        },
        {
          heading: '双端差异策略：手机做"互动"，Pad 做"降噪"',
          body: '在不同的硬件终端下，用户对"内容消费"的定义完全不同。基于此，我们将这些感性诉求提炼为严谨的"双端心智差异模型"。',
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
.pad5-card{background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:22px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);position:relative;overflow:hidden}
.pad5-card:hover{border-color:rgba(255,255,255,0.12);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.02)}
.pad5-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#C7FF00,transparent);opacity:0;transition:opacity .3s ease}
.pad5-card:hover::before{opacity:.6}
.pad5-num{font-family:monospace;font-size:10px;color:#C7FF00;margin-bottom:8px;display:block;font-weight:600}
.pad5-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative}
.pad5-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.pad5-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.pad5-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:300}
.pad5-desc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.pad5-grid{grid-template-columns:1fr!important}}
</style>
<div class="pad5-grid">
<div class="pad5-card"><h4 class="pad5-title">核心消费场景</h4><p class="pad5-desc"><b>构建纯净观影阵地：</b>保障播放画面的视觉纯净，确立 Pad 端作为长视频内容完整消费的核心阵地。</p></div>
<div class="pad5-card"><h4 class="pad5-title">深层内容生态</h4><p class="pad5-desc"><b>推动体验升维：</b>将琐碎互动升级为深度关联信息聚合（演职员专访、原著解读），实现从"孤立观影"向"内容价值探索"的跃迁。</p></div>
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
.pad6-right{flex:1;display:flex;flex-direction:column;gap:12px}
.pad6-card{background:rgba(22,22,24,0.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:20px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}
.pad6-card:hover{border-color:rgba(255,255,255,0.12);transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.02)}
.pad6-card-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative}
.pad6-card-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.pad6-card-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.pad6-card-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:300}
.pad6-card-desc b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.pad6-split{flex-direction:column!important}.pad6-mockup{width:100%;max-width:240px;margin:0 auto}}
</style>
<div class="pad6-split">
<div class="pad6-left">
<div data-preview class="pad6-mockup"><img src="/birdys-portfolio/images/pad-player.png" alt="Pad 播放页截图" style="width:100%;height:100%;object-fit:cover" /></div>
</div>
<div class="pad6-right">
<div class="pad6-card"><h4 class="pad6-card-title">视觉重心失衡</h4><p class="pad6-card-desc">右侧推荐流占据过大权重，导致<b>播放主体被边缘化</b>，破坏了 Pad 端应有的沉浸心智。</p></div>
<div class="pad6-card"><h4 class="pad6-card-title">交互路径冗余</h4><p class="pad6-card-desc">播放器下方功能平铺，造成严重的<b>视觉噪音与认知过载</b>。</p></div>
<div class="pad6-card"><h4 class="pad6-card-title">商业触达错位</h4><p class="pad6-card-desc">生硬的权益植入不仅未提升转化，反而因<b>干扰体验推高了用户跳出率</b>。</p></div>
</div>
</div>`,
        },
      ],
    },
  },

];
