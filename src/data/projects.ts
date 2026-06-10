import type { Project } from '../types'

export const projectData: Project[] = [
  {
    id: 'project-3',
    title: '吃鲸AI',
    description:
      '爱奇艺内部孵化 AI 视频应用，交互设计负责人，主导从概念孵化到结项的全链路交互设计。',
    imagePath: 'https://picsum.photos/seed/project3/1200/800',
    techStack: ['生成式 AI', '交互设计', '体验架构', '商业复盘', '用户旅程', '组件化设计'],
    sourceUrl: 'https://github.com',
    detail: {
      pageTitle: '吃鲸AI | 爱奇艺生成式 AI 视频互动平台',
      mainTitle: '爱奇艺AI视频互动社区商业复盘',
      subtitle: '交互设计负责人 · 2025.10 — 2026.05',
      sections: [
        {
          heading: '引言：商业极限下的终局反思',
          body: '',
          html: `<style>.hl-p{color:#A0A0A0;font-size:14px;line-height:1.8;margin:0 0 1.5rem;font-weight:300;letter-spacing:0.01em}.hl-p b{color:#FFFFFF;font-weight:600}.hl-p:last-child{margin-bottom:0}</style>
<p class="hl-p">「吃鲸AI」是爱奇艺内部孵化的生成式 AI 原生互动社区。我主导了从概念到上线验证的全流程体验设计，跑通了<b>「消费分发 → 生产赋能 → 闭环沉淀」</b>的完整链路。</p>
<p class="hl-p">虽受限于技术成熟度与平台基因，项目未能实现商业模式的跑通，但这并非设计的止步——这段经历给我带来更多是关于商业、技术、平台限制和设计解法上的思考。</p>`,
        },
        {
          heading: '缘起：长视频平台的生态自救',
          body: '爱奇艺切入 AI 视频，本质上是一场<b>「生产端降本 & 流量端防御」</b>的生态自救。爱奇艺试图用生成式 AI 视频作为武器，精准破解长视频行业既有的三大商业天花板。',
          html: `<style>
@media(max-width:767px){.ba-row{flex-direction:column!important}.swot-grid{grid-template-columns:1fr!important}}
/* 三栏对照容器 */
.ba-row{display:flex;gap:16px;align-items:stretch;margin-bottom:28px}
.ba-row .ba-section{flex:1;margin-bottom:0}
/* 痛点-解法 对照组 */
.ba-section{margin-bottom:0;background:rgba(255,255,255,.01);border:1px solid #333333;border-radius:4px;padding:20px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}
.ba-section:hover{border-color:#3f3f46;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.4)}
.ba-section:last-child{margin-bottom:0}
.ba-header{color:#FFFFFF;font-size:14px;font-weight:600;margin-bottom:14px;padding-bottom:10px;display:flex;align-items:center;gap:10px;position:relative}
.ba-header::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.ba-header::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.ba-pair{display:flex;flex-direction:column;gap:10px;align-items:stretch}
.ba-pain{flex:0 0 auto;padding:0;background:none;border:none;border-radius:0;min-height:80px}
.ba-pain:hover{border-color:transparent}
.ba-solve{flex:0 0 auto;padding:0;background:none;border:none;border-radius:0;min-height:80px}
.ba-solve:hover{border-color:transparent}
.ba-label{display:inline-block;font-size:10px;padding:2px 8px;border-radius:3px;margin-right:6px;vertical-align:middle;font-family:monospace;letter-spacing:0.06em;font-weight:600}
.ba-pain .ba-label{background:rgba(255,255,255,.03);color:#A0A0A0;border:1px solid #333333}
.ba-solve .ba-label{background:rgba(199,255,0,.06);color:#C7FF00;border:1px solid rgba(199,255,0,.12)}
.ba-pain h5{display:inline;color:#FFFFFF;font-size:13px;font-weight:600;margin:0}
.ba-solve h5{display:inline;color:#C7FF00;font-size:13px;font-weight:600;margin:0}
.ba-pain p,.ba-solve p{color:#A0A0A0;font-size:13px;line-height:1.75;margin:8px 0 0;font-weight:300}
.ba-pain p b,.ba-solve p b{color:#FFFFFF;font-weight:600}
</style>

<div class="ba-row">
<div class="ba-section">
<div class="ba-header">生产端</div>
<div class="ba-pair">
<div class="ba-pain"><span class="ba-label">痛点</span><h5>重资产死循环</h5><p>传统影视制作周期长、投资高、容错率低。平台需承担高昂制作成本，且面临高昂的废片率与市场不确定性。</p></div>
<div class="ba-solve"><span class="ba-label">解法</span><h5>转嫁成本风险</h5><p>利用 AI <b>边际成本趋近于零</b>的特性，将高成本的影视制作转化为低成本的算力消耗，在保障质量的同时，彻底打破了传统创作的预算围墙。</p></div>
</div>
</div>
<div class="ba-section">
<div class="ba-header">变现端</div>
<div class="ba-pair">
<div class="ba-pain"><span class="ba-label">痛点</span><h5>线性 ROI 脆弱</h5><p>营收过度依赖单一的"广告+会员"订阅制，ARPU 值天花板明显，版权烧钱速度与平台收入增长严重脱节。</p></div>
<div class="ba-solve"><span class="ba-label">解法</span><h5>拓宽付费场景</h5><p>将影视IP从"被动观看的内容"转化为"随手可得的生产要素"。激发用户对影视IP的掌控欲，顺理成章地<b>引入高毛利的 AI 算力购买模式</b>，打破订阅制天花板。</p></div>
</div>
</div>
<div class="ba-section">
<div class="ba-header">流量端</div>
<div class="ba-pair">
<div class="ba-pain"><span class="ba-label">痛点</span><h5>用户注意力流失</h5><p>短视频平台利用极高分发效率吞噬娱乐时长。长视频固守传统单向喂养的"躺椅模式"，面临彻底失去年轻世代的危机。</p></div>
<div class="ba-solve"><span class="ba-label">解法</span><h5>长短互哺流量闭环</h5><p>打通<b>"看正片 → AI 一键低摩擦二创 → 产生新梗吸引新用户回流正片"</b>的合法正版生态闭环。短视频的高频流动不再蚕食注意力，反而成了长视频版权资产的长尾增值工具。</p></div>
</div>
</div>
</div>`,
        },
        {
          heading: 'SWOT 分析：核心挑战与破局方向',
          body: '',
          html: `<style>
@media(max-width:767px){.swot-grid{grid-template-columns:1fr!important}}
.swot-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px}
.swot-item{background:#1A1A1A;border:1px solid #333333;border-radius:4px;padding:22px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);position:relative;overflow:hidden}
.swot-item:hover{border-color:#3f3f46;background:#1A1A1A;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.4)}
.swot-item::after{content:attr(data-letter);position:absolute;top:-20px;right:-10px;font-size:100px;font-weight:900;color:rgba(255,255,255,.015);font-family:system-ui,-apple-system,sans-serif;line-height:1;pointer-events:none;z-index:0;letter-spacing:-0.02em}
.swot-item>*{position:relative;z-index:1}
.swot-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative}.swot-title::before{content:"";width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}.swot-title::after{content:"";position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.swot-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:300}
.swot-desc b{color:#FFFFFF;font-weight:600}
.tx-p{color:#A0A0A0;font-size:14px;line-height:1.8;margin:24px 0 0;font-weight:300}
.tx-p b{color:#FFFFFF;font-weight:600}
</style>
<p class="tx-p">这套「长视频孵化 IP → AI 二创 → 流量反哺正片」的商业闭环，逻辑上完全跑得通。但在产品落地前，设计团队通过 SWOT 模型，理清了宏观环境下的核心挑战与体验枷锁。</p>

<div class="swot-grid">
<div class="swot-item" data-letter="S"><h4 class="swot-title">优势</h4><p class="swot-desc"><b>正版合规壁垒</b>：背靠爱奇艺海量长视频资产，天然具备独立 AI 工具无法企及的全链路法务合规与素材基础。<br><br><b>爆款 IP 引力</b>：直连《莲花楼》《唐朝诡事录》等高热度独家剧集，自带庞大粉丝基本盘与天然的二创玩梗心智。</p></div>
<div class="swot-item" data-letter="O"><h4 class="swot-title">机会</h4><p class="swot-desc"><b>错位竞争</b>：放弃与即梦、可灵等专业视频工具的功能内卷，破局转向"低认知门槛的 AI 互动社区"。<br><br><b>角色升维</b>：通过界面重组，将影视版权从"只能被动观看的内容"，升维成用户随手可得的"生产要素"。</p></div>
<div class="swot-item" data-letter="W"><h4 class="swot-title">劣势</h4><p class="swot-desc"><b>消费心智冲突</b>：长视频的基因是"躺椅模式（Lean-back）"的被动喂养；而 AI 二创天然要求强主动的"靠前交互（Lean-forward）"。<br><br><b>容错率极低</b>：AI 生成的早期"废片率"和不确定性，极易打破长视频用户对内容连续性、精美度的固有预期。</p></div>
<div class="swot-item" data-letter="T"><h4 class="swot-title">威胁</h4><p class="swot-desc"><b>ROI 模式死穴</b>：单次视频渲染的 API 与算力成本极其高昂，传统长视频"广告+会员"的低 ARPU 模型根本无法覆盖。<br><br><b>赛道洗牌退潮</b>：专业工具已被头部软件垄断，而行业内类似的轻量化互动社区尝试已相继面临停服与清场。</p></div>
</div>`,
        },
        {
          heading: '定位重塑：消费型 AI 互动社区',
          body: '',
          html: `<style>
.mani-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px 0}
.mani-line{color:#A0A0A0;font-size:15px;line-height:2.4;font-weight:300;margin:0}
.mani-highlight{color:#C7FF00;font-size:24px;font-weight:700;line-height:1.6;margin:12px 0;letter-spacing:0.04em}
.mani-footnote{color:#A0A0A0;font-size:15px;line-height:2.4;font-weight:300;margin:0;white-space:nowrap}
@media(max-width:767px){.mani-highlight{font-size:19px}.mani-line,.mani-footnote{font-size:13px;white-space:normal}}
</style>
<div class="mani-wrap">
<p class="mani-line">不能做一个类似即梦或可灵的"专业视频生产力工具"</p>
<p class="mani-line">而必须做一个</p>
<p class="mani-highlight">"降低认知与操作门槛的消费型 AI 互动社区"</p>
<p class="mani-footnote">通过短视频流的轻量分发把复杂高门槛的 AI 生产环节转化为生态内的轻量级玩法</p>
</div>`,
        },
        {
          heading: '体验架构设计：AI创作的底层逻辑',
          body: '破局策略明确后，如何转化为用户可感的界面结构？设计团队梳理出了系统的交互分层，核心是通过<b>「以消带产」</b>盘活链路。',
          html: `<style>@media(max-width:767px){.arch-card{flex-direction:column!important;gap:12px!important}}.arch-card{transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.arch-card:hover{border-color:#3f3f46!important;background:#1A1A1A!important;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.4)}.arch-card.accent{background:rgba(199,255,0,.02)!important;border:1px solid rgba(199,255,0,.1)!important}.arch-card.accent:hover{background:rgba(199,255,0,.04)!important;border-color:rgba(199,255,0,.18)!important;transform:translateY(-2px);box-shadow:0 20px 40px rgba(199,255,0,0.08)}.arch-row{display:flex;gap:18px;align-items:stretch;margin:24px 0}.arch-row .arch-card{flex:1;width:auto!important;flex-direction:column!important;gap:16px!important}.arch-h4{color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:10px;display:flex;align-items:center;gap:8px;margin:0 0 12px;position:relative}.arch-h4::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}.arch-h4::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}.arch-h4.accent::after{background:#222226}@media(max-width:767px){.arch-row{flex-direction:column!important}.arch-row .arch-card{flex-direction:row!important}}</style>
<div class="arch-row">
<div class="arch-card" style="background:#1A1A1A;border:1px solid #333333;border-radius:4px;padding:24px;display:flex;gap:24px;align-items:flex-start">
<div><h4 class="arch-h4">01 生态输入层</h4>
<p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 6px">爱奇艺正片、IP 资产、版权素材库</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:300">整个产品的逻辑起点。底层直接对接爱奇艺独家影视正片，为用户提供版权合规的"种子源"，使用户能基于熟悉的剧集和演员进行二创，告别无中生有的冷启动摩擦力。</p></div>
</div>
<div class="arch-card" style="background:#1A1A1A;border:1px solid #333333;border-radius:4px;padding:24px;display:flex;gap:24px;align-items:flex-start">
<div><h4 class="arch-h4">02 核心逻辑层</h4>
<p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 6px">通用基础模型能力 + 自研场景化调优</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:300">系统的双引擎驱动架构。底层异构接入可灵 O3、Seedance 4.0 及火山引擎等行业领先能力，技术团队通过 Prompt 工程、模型微调与高精度工作流进行定制开发，将复杂模糊的用户意图转化为具体的业务场景算力输出。</p></div>
</div>
<div class="arch-card accent" style="border-radius:4px;padding:24px;display:flex;gap:24px;align-items:flex-start;position:relative">
<div><h4 class="arch-h4 accent">感知交互层</h4>
<p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 6px">降低冷启动门槛：从"一键同款"到"IP 互动切口"</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:300"><b style="color:#FFFFFF">交互设计负责人（UX Lead）的核心输出主阵地。</b>团队在此完全摒弃了传统的复杂提示词控制面板，改用极低摩擦力的模板化交互承接用户意图。通过联合产品与技术深度解构影视 IP 资产，将底层的硬核算力包装为用户感知轻量的低门槛互动玩法流。</p></div>
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
<tr><th class="lbl">阶段</th><th><span class="t">探索发现</span><span class="s">心智沉浸与共鸣寻找</span></th><th><span class="t">激发灵感</span><span class="s">意图萌芽与门槛评估</span></th><th class="core"><span class="t">获取资源</span><span class="s">独家资产调用 (核心)</span></th><th><span class="t">创作生产</span><span class="s">生产转化与社区反馈</span></th></tr>
</thead>
<tbody>
<tr><td class="lbl">用户需求</td><td>看完热播剧后，渴望快速找到同好圈层，寻找剧情共鸣与玩梗新鲜内容。</td><td>浏览二创内容时产生强烈表达欲，评估自己跟风创作的门槛与趣味性。</td><td>急需高清、合规的版权片段作为二创底座，保障二创产出的速度与质量。</td><td>拒绝专业工具的繁琐，希望以极低的学习与操作成本快速看到成品。</td></tr>
<tr><td class="lbl">核心卡点</td><td><span class="jm-kw">误当成传统播放器。</span>消费惯性过强，若进场缺乏明确的社区感知，看剧后用户即刻流失。</td><td><span class="jm-kw">不知道写啥（冷启动死穴）。</span>面对完全空白、无引导的自由创作环境，普通用户极易放弃。</td><td><span class="jm-kw">跨平台找素材链路断裂。</span>站外缺乏合规版权，用户自行录屏、切片流转的沉没成本极高。</td><td><span class="jm-kw">高工具门槛劝退普通观众。</span>复杂的视频轨道与模型参数极易打碎原本纯观众用户的创作热情。</td></tr>
<tr><td class="lbl grn">设计策略</td><td class="strat"><span class="st w">建立社区第一印象</span>分发侧套用双列瀑布流 Card。进场即拉满"能玩、能互动"的二创社区氛围。</td><td class="strat"><span class="st w">降低生产前置摩擦</span>提供海量爆款模板与直观教程。将高难度的发散思考转化为低阻力的"即拿即用"。</td><td class="strat"><span class="st w">消除跨平台流转割裂</span>一站式提供官方高清影视切片。无需出站，打通独家版权资产到创作上游的闭环。</td><td class="strat"><span class="st w">纯观众向二创者的低门槛转化</span>创新轻量、易上手的交互玩法。全方位降解生产认知成本，引导消费者无缝跨越。</td></tr>
</tbody>
</table>
<div class="jm-mobile">
<div class="jm-mobile-col">
<div class="jm-mobile-col-header">探索发现 · 心智沉浸与共鸣寻找</div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">用户需求</span><p class="jm-mobile-col-desc">看完热播剧后，渴望快速找到同好圈层，寻找剧情共鸣与玩梗新鲜内容。</p></div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">核心卡点</span><p class="jm-mobile-col-desc"><span class="jm-kw">误当成传统播放器。</span>消费惯性过强，若进场缺乏明确的社区感知，看剧后用户即刻流失。</p></div>
<div class="jm-mobile-col-item strat"><span class="jm-mobile-col-label">设计策略</span><p class="jm-mobile-col-desc">建立社区第一印象 — 分发侧套用双列瀑布流 Card。进场即拉满"能玩、能互动"的二创社区氛围。</p></div>
</div>
<div class="jm-mobile-col">
<div class="jm-mobile-col-header">激发灵感 · 意图萌芽与门槛评估</div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">用户需求</span><p class="jm-mobile-col-desc">浏览二创内容时产生强烈表达欲，评估自己跟风创作的门槛与趣味性。</p></div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">核心卡点</span><p class="jm-mobile-col-desc"><span class="jm-kw">不知道写啥（冷启动死穴）。</span>面对完全空白、无引导的自由创作环境，普通用户极易放弃。</p></div>
<div class="jm-mobile-col-item strat"><span class="jm-mobile-col-label">设计策略</span><p class="jm-mobile-col-desc">降低生产前置摩擦 — 提供海量爆款模板与直观教程。将高难度的发散思考转化为低阻力的"即拿即用"。</p></div>
</div>
<div class="jm-mobile-col">
<div class="jm-mobile-col-header">获取资源 · 独家资产调用</div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">用户需求</span><p class="jm-mobile-col-desc">急需高清、合规的版权片段作为二创底座，保障二创产出的速度与质量。</p></div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">核心卡点</span><p class="jm-mobile-col-desc"><span class="jm-kw">跨平台找素材链路断裂。</span>站外缺乏合规版权，用户自行录屏、切片流转的沉没成本极高。</p></div>
<div class="jm-mobile-col-item strat"><span class="jm-mobile-col-label">设计策略</span><p class="jm-mobile-col-desc">消除跨平台流转割裂 — 一站式提供官方高清影视切片。无需出站，打通独家版权资产到创作上游的闭环。</p></div>
</div>
<div class="jm-mobile-col">
<div class="jm-mobile-col-header">创作生产 · 生产转化与社区反馈</div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">用户需求</span><p class="jm-mobile-col-desc">拒绝专业工具的繁琐，希望以极低的学习与操作成本快速看到成品。</p></div>
<div class="jm-mobile-col-item"><span class="jm-mobile-col-label">核心卡点</span><p class="jm-mobile-col-desc"><span class="jm-kw">高工具门槛劝退普通观众。</span>复杂的视频轨道与模型参数极易打碎原本纯观众用户的创作热情。</p></div>
<div class="jm-mobile-col-item strat"><span class="jm-mobile-col-label">设计策略</span><p class="jm-mobile-col-desc">纯观众向二创者的低门槛转化 — 创新轻量、易上手的交互玩法。全方位降解生产认知成本，引导消费者无缝跨越。</p></div>
</div>
</div>`,
        },
        {
          heading: '全局视界：首页交互架构',
          body: '基于<b>「消费分发 → 生产赋能 → 闭环沉淀」</b>的增量模型，设计了首页交互架构，实现从内容消费到创作反哺的价值内循环。',
          html: `<style>
.ds-sub{font-size:18px;font-weight:700;color:#FFFFFF;margin:2rem 0 8px;letter-spacing:0.02em}
.ds-sub .num{font-family:monospace;font-size:15px;color:#C7FF00;margin-right:8px;font-weight:700}
.ds-p{color:#A0A0A0;font-size:13px;line-height:1.75;margin:0 0 20px;font-weight:300}
.arch-wrapper{width:100%;max-width:950px;margin:0 auto;display:flex;flex-direction:column;align-items:center}.arch-layer{margin-bottom:24px}.arch-layer-bar{display:flex;flex-direction:column;align-items:flex-start;margin-bottom:12px;padding-bottom:4px;gap:2px}.arch-layer-label{color:#FFFFFF;font-size:14px;font-weight:600;letter-spacing:0.02em;display:flex;align-items:center;gap:8px}.arch-layer-label::before{content:"";width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}.arch-layer-logic{font-size:13px;color:#A0A0A0;padding:0;font-weight:300}.arch-page-row{display:flex;gap:28px;justify-content:center}.arch-page-col{display:flex;flex-direction:column;align-items:flex-start;gap:6px;flex:0 1 auto}.arch-page-box{width:auto;display:inline-flex;box-sizing:border-box;height:auto;border-radius:8px;overflow:hidden;border:1px solid #222226;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.arch-page-col:hover .arch-page-box{border-color:#3f3f46;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.4)}.arch-page-tag{font-size:11px;color:#A0A0A0;letter-spacing:0.02em;text-align:center;width:100%}.arch-page-col.hl .arch-page-box{}.arch-page-col.hl .arch-page-tag{color:#A0A0A0}@media(max-width:767px){.arch-page-row{flex-direction:row!important;flex-wrap:nowrap;gap:12px}.arch-page-box{width:100%!important}.arch-page-box img{max-width:100%!important;width:100%!important}.arch-page-col{flex:1;min-width:0;overflow:hidden}}
</style>
<div class="arch-wrapper">
<div class="arch-layer"><div class="arch-layer-bar"><span class="arch-layer-label">消费分发层</span><span class="arch-layer-logic">流量精准触达，通过沉浸式体验缩短留存路径</span></div><div class="arch-page-row"><div class="arch-page-col hl"><div class="arch-page-box"><img src="/birdys-portfolio/images/首页流分发.jpeg" alt="首页流分发" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">智能分发</span></div><span style="display:flex;align-items:center;color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px">→</span><div class="arch-page-col"><div class="arch-page-box"><img src="/birdys-portfolio/images/播放器详情.png" alt="播放器详情" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">沉浸播放</span></div><span style="display:flex;align-items:center;color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px">→</span><div class="arch-page-col"><div class="arch-page-box"><img src="/birdys-portfolio/images/精选播放页.PNG" alt="精选内容页" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">品牌引导</span></div></div></div>
<div class="arch-layer"><div class="arch-layer-bar"><span class="arch-layer-label">生产赋能层</span><span class="arch-layer-logic">创作门槛治理，通过组件解耦提升创作效能</span></div><div class="arch-page-row"><div class="arch-page-col hl"><div class="arch-page-box"><img src="/birdys-portfolio/images/创作入口.png" alt="创作入口" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">创作引擎</span></div><span style="display:flex;align-items:center;color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px">→</span><div class="arch-page-col hl"><div class="arch-page-box"><img src="/birdys-portfolio/images/创作编辑器.png" alt="创作编辑器" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">碎片化改写</span></div><span style="display:flex;align-items:center;color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px">→</span><div class="arch-page-col"><div class="arch-page-box"><img src="/birdys-portfolio/images/素材检索库.png" alt="素材检索库" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">资源解耦</span></div></div></div>
<div class="arch-layer"><div class="arch-layer-bar"><span class="arch-layer-label">闭环沉淀层</span><span class="arch-layer-logic">内容资产内循环，促进用户身份跃迁</span></div><div class="arch-page-row"><div class="arch-page-col"><div class="arch-page-box"><img src="/birdys-portfolio/images/创作状态页.png" alt="创作状态页" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">社交互动</span></div><span style="display:flex;align-items:center;color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px">→</span><div class="arch-page-col hl"><div class="arch-page-box"><img src="/birdys-portfolio/images/作品发布页.png" alt="作品发布页" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">资产发布</span></div><span style="display:flex;align-items:center;color:#A0A0A0;font-size:16px;flex-shrink:0;padding:0 6px">→</span><div class="arch-page-col"><div class="arch-page-box"><img src="/birdys-portfolio/images/回流分发页.png" alt="回流分发流" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><span class="arch-page-tag">长尾复利</span></div></div></div>
</div>`,
        },
        {
          heading: '创作中控：素材库与逻辑配置',
          body: '将官方影视切片、本地相册及个人库整合为中心化素材库，通过统一交互范式简化素材选择流程。',
          html: `<style>
.ds-sub{font-size:18px;font-weight:700;color:#FFFFFF;margin:2rem 0 8px;letter-spacing:0.02em}
.ds-sub .num{font-family:monospace;font-size:15px;color:#C7FF00;margin-right:8px;font-weight:700}
.ds-p{color:#A0A0A0;font-size:13px;line-height:1.75;margin:0 0 20px;font-weight:300}
.flow-wrapper{width:100%;display:flex;flex-direction:column;align-items:center;gap:12px}.flow-wrapper section{padding:0}.flow-section-label{font-size:14px;color:#FFFFFF;font-weight:600;margin-bottom:14px;padding-left:11px;position:relative}.flow-section-label::before{content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:14px;background:#C7FF00;border-radius:1px}.flow-row{display:flex;align-items:center;justify-content:center;gap:28px}.flow-node{display:flex;flex-direction:column;align-items:center;gap:6px;flex:0 1 auto}.flow-screen-box{width:auto;display:inline-flex;box-sizing:border-box;height:auto;border-radius:8px;overflow:hidden;border:1px solid #222226;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.flow-node:hover .flow-screen-box{border-color:#3f3f46;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.4)}.flow-node-text{font-size:11px;color:#A0A0A0;letter-spacing:0.02em;text-align:center;width:100%}.flow-operator{font-size:16px;color:#A0A0A0;flex-shrink:0;display:flex;align-items:center;padding:0 4px}.flow-arrow-down{display:flex;flex-direction:column;align-items:center;justify-content:center;height:28px;position:relative}.flow-arrow-down::before{content:'';width:1px;height:100%;background:linear-gradient(to bottom,#333333,rgba(199,255,0,.2),#333333)}@media(max-width:767px){.flow-row{flex-wrap:nowrap!important;justify-content:center!important;gap:8px}.flow-operator{font-size:12px}.flow-screen-box{height:auto!important;width:100%!important}.flow-screen-box img{max-width:100%!important;width:100%!important}.flow-node{flex:1;min-width:0}}
.ds-list{margin:0 0 20px;list-style:none;padding:0}
.ds-list li{margin-bottom:12px;font-size:13px;line-height:1.75;color:#A0A0A0;font-weight:300}
.ds-list li b{color:#FFFFFF;font-weight:600}
</style>
<ul class="ds-list">
  <li><b>多维素材融合：</b>整合官方影视切片、相册素材与个人参考库，打破了素材获取的平台壁垒，将素材库转化为随手可得的生产要素。</li>
  <li><b>透明化多引用交互：</b>采用 @引用式的交互逻辑，支持用户在生产过程中显性调用多项视觉参考，通过「自然语言描述 + 明确素材引用」的方式，将 AI 渲染的「黑盒」过程转化为用户可控的「逻辑拼搭」过程。</li>
  <li><b>低认知门槛配置：</b>将复杂的剪辑工作流程解构为任务式的素材调用，大幅削弱了二创对专业剪辑技能的依赖。</li>
</ul>
<div class="flow-wrapper">
<section><div class="flow-section-label">阶段一 · 资产调用</div><div class="flow-row"><div class="flow-node"><div class="flow-screen-box"><img src="/birdys-portfolio/images/影视片段库.png" alt="影视片段库" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><div class="flow-node-text">多维素材整合</div></div><div class="flow-operator">+</div><div class="flow-node"><div class="flow-screen-box"><img src="/birdys-portfolio/images/本地相册.png" alt="本地相册" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><div class="flow-node-text">打破平台壁垒</div></div><div class="flow-operator">+</div><div class="flow-node"><div class="flow-screen-box"><img src="/birdys-portfolio/images/个人参考库.png" alt="个人参考库" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><div class="flow-node-text">中心化资源池</div></div></div></section>
<div style="display:flex;justify-content:center;padding:0"><span style="color:#A0A0A0;font-size:16px;line-height:1">↓</span></div>
<section><div class="flow-section-label">阶段二 · 逻辑配置</div><div class="flow-row"><div class="flow-node"><div class="flow-screen-box"><img src="/birdys-portfolio/images/未添加素材.png" alt="未添加素材" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><div class="flow-node-text">空载引导</div></div><div class="flow-operator">→</div><div class="flow-node"><div class="flow-screen-box"><img src="/birdys-portfolio/images/已添加素材.png" alt="已添加素材" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><div class="flow-node-text">"@引用"逻辑拼搭</div></div><div class="flow-operator">→</div><div class="flow-node"><div class="flow-screen-box"><img src="/birdys-portfolio/images/调用素材.png" alt="调用素材" style="max-width:160px;height:auto;display:block;border-radius:6px" /></div><div class="flow-node-text">多维资源检索</div></div></div></section>
</div>
`,
        },
        {
          heading: '交互降维：以趣味接龙重构创作门槛',
          body: '',
          html: `<style>
.mani-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px 0}
.mani-line{color:#A0A0A0;font-size:15px;line-height:2.4;font-weight:300;margin:0}
.mani-highlight{color:#C7FF00;font-size:24px;font-weight:700;line-height:1.6;margin:12px 0;letter-spacing:0.04em}
.mani-hl{color:#C7FF00;font-weight:700;font-size:24px}
@media(max-width:767px){.mani-line{font-size:13px}.mani-highlight{font-size:19px}.mani-hl{font-size:19px}}
</style>
<div class="mani-wrap">
<p class="mani-line">除了通用创作流程</p>
<p class="mani-line">我们通过「换台词」与「故事接龙」等影视相关趣味玩法降低了创作门槛</p>
<p class="mani-line">用户无需专业技能，即可在 AI 的辅助下通过「微调」完成二创</p>
<p class="mani-line">这种<span class="mani-hl">「渐进式」</span>的交互设计</p>
<p class="mani-highlight">将高门槛的内容生产变成了低成本的趣味体验</p>
</div>`,
        },
        {
          heading: '创意实验：换台词',
          body: '以热门影视 IP 的经典名场面为载体，通过低门槛的交互，让用户能够快速接入生产链路。无论是经典的对白解构，还是流行语的趣味梗植入，「换台词」打破了专业创作的围墙，让高光时刻不再高不可攀，真正实现了从内容消费到互动产出的高效转化。',
          html: `<style>
.qt-flow-wrapper{width:100%}.qt-section-label{font-size:14px;color:#FFFFFF;font-weight:600;margin-bottom:14px;padding-left:11px;position:relative}.qt-section-label::before{content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);width:3px;height:14px;background:#C7FF00;border-radius:1px}.qt-flow-row{display:flex;align-items:flex-start;justify-content:center;gap:12px}.qt-node{display:flex;flex-direction:column;align-items:center;gap:10px;flex:1}.qt-screen-box{width:100%;box-sizing:border-box;height:280px;background:#141416;border:1px solid #222226;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:12px;color:#A0A0A0;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.qt-node:hover .qt-screen-box{border-color:#3f3f46;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.4)}.qt-node-text{font-size:12px;color:#A0A0A0;text-align:center;line-height:1.5}.qt-node-text b{color:#FFFFFF;font-weight:600;display:block;margin-bottom:2px}.qt-operator{font-size:20px;color:#C7FF00;margin-top:130px;flex-shrink:0}@media(max-width:767px){.qt-flow-row{flex-wrap:wrap!important}.qt-operator{margin-top:0;transform:rotate(90deg)}.qt-screen-box{height:160px}}
</style>
<div class="qt-section-label">交互范式：渐进式"换台词"创作流</div><div class="qt-flow-row"><div class="qt-node"><div class="qt-screen-box">[原始名场面界面]</div><div class="qt-node-text"><b>即兴微调</b>点击台词直接编辑，降低创作心理门槛。</div></div><div class="qt-operator">➔</div><div class="qt-node"><div class="qt-screen-box">[场景化主题标签页]</div><div class="qt-node-text"><b>场景化启发</b>点击标签，快速接入创作方向。</div></div><div class="qt-operator">➔</div><div class="qt-node"><div class="qt-screen-box">[半浮层对话框]</div><div class="qt-node-text"><b>AI 对话式扩展</b>自然语言生成，多版本方案沉淀。</div></div><div class="qt-operator">➔</div><div class="qt-node"><div class="qt-screen-box">[新台词视频预览]</div><div class="qt-node-text"><b>创作资产沉淀</b>每一次尝试都可见、可复用。</div></div></div>`,
        },
        {
          heading: '5.4 故事接龙：叙事共创与渐进式创作',
          body: '推出「故事接龙」进阶玩法，通过「边看边写」交互机制将单点输出转化为链式共创，建立渐进式创作交互模式。',
          html: `<style>
.ds-sub{font-size:18px;font-weight:700;color:#FFFFFF;margin:2rem 0 8px;letter-spacing:0.02em}
.ds-sub .num{font-family:monospace;font-size:15px;color:#C7FF00;margin-right:8px;font-weight:700}
.ds-p{color:#A0A0A0;font-size:13px;line-height:1.75;margin:0 0 20px;font-weight:300}
.ds-img-placeholder{background:linear-gradient(135deg,#121212 0%,#121212 100%);border:1px solid #333333;border-radius:4px;padding:48px 20px;text-align:center;margin:16px 0 24px;font-size:11px;color:#A0A0A0;font-family:system-ui,-apple-system,sans-serif;letter-spacing:0.05em;position:relative;overflow:hidden}.ds-img-placeholder::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}.ds-img-placeholder::after{content:'🖼';display:block;font-size:24px;margin-bottom:12px;opacity:.3;filter:grayscale(1)}
.progressive-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:20px 0}
@media(max-width:767px){.progressive-steps{grid-template-columns:1fr!important}}
.progressive-steps .ps-card{background:#1A1A1A;border:1px solid #333333;border-radius:4px;padding:18px;text-align:center;transition:all 0.35s cubic-bezier(0.16,1,0.3,1)}.progressive-steps .ps-card:hover{border-color:#3f3f46;background:#1A1A1A;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.4)}
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
.sd-card{background:#1A1A1A;border:1px solid #333333;border-radius:4px;padding:24px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);position:relative;overflow:hidden}
.sd-card:hover{border-color:#3f3f46;background:#1A1A1A;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.4)}
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
    title: '爱奇艺明星陪看直播间',
    description:
      '爱奇艺「一起聊」明星陪看直播，交互设计负责人，重构影视听布局与商业闭环，通过创意送礼机制激活直播间互动收入。',
    imagePath: 'https://picsum.photos/seed/project2/1200/800',
    techStack: ['直播体验', '流量蓄水', '情感化设计', '商业变现'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    detail: {
      pageTitle: '爱奇艺明星陪看直播间',
      mainTitle: '影视听布局重构与商业闭环',
      subtitle: '交互设计负责人 · 2026.03 — 2026.05',
      sections: [
        // ═══ P1 项目概述 ═══
        {
          heading: '项目概述',
          body: '「一起聊」旨在打破传统观影的孤岛效应，将直播转化为"边聊边看"的沉浸式社交现场，以创新交互建立起粉丝与偶像的高强度情感纽带。\n\n在提升粉丝黏性与留存的同时，对送礼面板进行交互重构，通过创意送礼机制成功激活了直播间的互动收入，实现了流量价值的高效变现。',
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
.model-node-desc{font-size:13px;color:#a1a1aa;line-height:1.75;margin:0}
.val-dim-branch{display:flex;gap:0;margin-top:20px}
.val-dim-branch-body{flex:1;min-width:0}
.val-dim-cards{display:flex;gap:10px;align-items:stretch;flex-wrap:wrap}
.val-dim-card{flex:1;min-width:150px;padding:22px;background:#1A1A1A;border:1px solid #333333;border-radius:4px;display:flex;flex-direction:column;justify-content:flex-start;transition:all .35s cubic-bezier(0.16,1,0.3,1)}
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
.funnel-card{flex:1;background:#1A1A1A;border:1px solid #333333;border-radius:4px;padding:22px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);position:relative;display:flex;flex-direction:column}
.funnel-card:hover{border-color:#3f3f46;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.4)}
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
.tx-p{color:#A0A0A0;font-size:14px;line-height:1.8;margin:0 0 24px;font-weight:300}
.tx-p b{color:#FFFFFF;font-weight:600}
.entry-split{display:flex;gap:32px;align-items:stretch;margin:28px auto;max-width:900px}
.entry-left{flex:1.2;display:flex;gap:16px;align-items:stretch;min-width:0}
.entry-right{flex:0.8;display:flex;flex-direction:column;gap:16px;min-width:0}
.entry-img-box{flex:1;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #222226;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#A0A0A0;font-size:13px;position:relative;overflow:hidden;aspect-ratio:9/19.5;max-height:480px}
.entry-img-box::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.entry-img-label{position:absolute;bottom:12px;left:0;right:0;text-align:center;font-size:11px;color:#71717a;font-family:monospace;letter-spacing:0.06em;z-index:1}
.principle-card{background:#1A1A1A;border:1px solid #333333;border-radius:4px;padding:22px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);flex:1}
.principle-card:hover{border-color:#3f3f46;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.4)}
.principle-card-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative}
.principle-card-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.principle-card-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.principle-card-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:300;margin:0}
@media(max-width:767px){.entry-split{flex-direction:column!important;gap:24px!important}.entry-left{flex-direction:column!important}}</style>
<p class="tx-p">依托核心播放场景，通过<b>动态状态卡片</b>构建即时交互触点。无论是"预约提醒"还是"直播中进入"，设计始终保持<b>低干扰、高转化</b>的策略，在不打断用户观影流的前提下，引导高意向粉丝通过便捷入口快速切入陪看现场，完成从视频消费到直播互动的行为转化。</p>

<div class="entry-split">
<div class="entry-left">
<div class="entry-img-box">
<span class="entry-img-label">直播中状态</span>
</div>
<div class="entry-img-box">
<span class="entry-img-label">预约态</span>
</div>
</div>
<div class="entry-right">
<div class="principle-card">
<div class="principle-card-title">低干扰</div>
<p class="principle-card-desc">悬浮胶囊不遮挡播放核心区，仅在适当时机以呼吸动效提示，在不打断观影流的前提下完成轻量触达。</p>
</div>
<div class="principle-card">
<div class="principle-card-title">高转化</div>
<p class="principle-card-desc">状态信息实时更新，缩短用户从"看到"到"进入"的决策链路，一键切入陪看现场。</p>
</div>
<div class="principle-card">
<div class="principle-card-title">心智建设</div>
<p class="principle-card-desc">通过预约倒计时培养用户对"陪看时间"的预期和习惯，将剧集观众转化为直播间的存量用户。</p>
</div>
</div>
</div>`,
        },
        // ═══ P6 明星陪看聚合页 ═══
        {
          heading: '明星陪看聚合页：沉淀互动资产',
          body: '',
          html: `<style>
.tx-p{color:#A0A0A0;font-size:14px;line-height:1.8;margin:0 0 24px;font-weight:300}
.tx-p b{color:#FFFFFF;font-weight:600}
@media(max-width:767px){.agg-row{flex-direction:column!important;gap:24px!important}}
.agg-row{display:flex;gap:24px;align-items:flex-start;margin:28px auto;max-width:900px}
.agg-col{flex:1;display:flex;flex-direction:column;gap:16px;min-width:0;align-items:flex-start}
.agg-col-title{color:#FFFFFF;font-size:14px;font-weight:600;display:flex;align-items:center;gap:8px;margin:0}
.agg-col-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.agg-col-media{display:flex;flex-direction:column;align-items:stretch}
.agg-col-img{background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #222226;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#A0A0A0;font-size:13px;position:relative;overflow:hidden;aspect-ratio:9/19.5;height:380px}
.agg-col-img::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.agg-col-img-label{position:absolute;bottom:12px;left:0;right:0;text-align:center;font-size:11px;color:#71717a;font-family:monospace;letter-spacing:0.06em;z-index:1}
.agg-col-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:300;margin:0;width:100%}
.agg-col-desc b{color:#FFFFFF;font-weight:600}
</style>
<p class="tx-p">我们设计了「明星陪看」聚合阵地，旨在沉淀流量并延长内容价值周期：</p>

<div class="agg-row">

<div class="agg-col">
<div class="agg-col-title">直播 / 预约动态</div>
<div class="agg-col-media">
<div class="agg-col-img">
<span class="agg-col-img-label">聚合页首屏</span>
</div>
<p class="agg-col-desc">作为流量转化的实时枢纽，通过清晰的状态切换机制，建立用户对明星陪看的时间心智。</p>
</div>
</div>

<div class="agg-col">
<div class="agg-col-title">陪看榜单</div>
<div class="agg-col-media">
<div class="agg-col-img">
<span class="agg-col-img-label">陪看榜单</span>
</div>
<p class="agg-col-desc">引入社群竞技感，通过实时互动数据可视化，激发粉丝参与热度。</p>
</div>
</div>

<div class="agg-col">
<div class="agg-col-title">回看合集</div>
<div class="agg-col-media">
<div class="agg-col-img">
<span class="agg-col-img-label">回看合集</span>
</div>
<p class="agg-col-desc">不仅是内容的二次消费，更是将单次直播转化为长效互动资产，实现剧集与直播流量的跨周期复利，破解"看后即走"的留存困境。</p>
</div>
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
.entry-img-box{flex:1;background:linear-gradient(135deg,#141416 0%,#1A1A1A 100%);border:1px solid #222226;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#A0A0A0;font-size:13px;position:relative;overflow:hidden;aspect-ratio:9/19.5;max-height:480px}
.entry-img-box::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 30%,rgba(199,255,0,.03) 0%,transparent 70%);pointer-events:none}
.entry-img-label{position:absolute;bottom:12px;left:0;right:0;text-align:center;font-size:11px;color:#71717a;font-family:monospace;letter-spacing:0.06em;z-index:1}
.principle-card{background:#1A1A1A;border:1px solid #333333;border-radius:4px;padding:22px;transition:all 0.35s cubic-bezier(0.16,1,0.3,1);flex:1}
.principle-card:hover{border-color:#3f3f46;transform:translateY(-2px);box-shadow:0 20px 40px rgba(0,0,0,0.4)}
.principle-card-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:10px;display:flex;align-items:center;gap:8px;position:relative}
.principle-card-title::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.principle-card-title::after{content:'';position:absolute;bottom:0;left:0;width:80px;height:1px;background:#333333}
.principle-card-desc{color:#A0A0A0;font-size:13px;line-height:1.75;font-weight:300;margin:0}
.principle-card-desc b{color:#FFFFFF;font-weight:600}
.card-arrow{display:flex;align-items:center;justify-content:center;color:#555555;font-size:16px;font-weight:300;padding:4px 0}
@media(max-width:767px){.entry-split{flex-direction:column!important;gap:24px!important}.entry-left{flex-direction:column!important}}
</style>
<p class="tx-p">在明星陪看这一垂类场景中，直播间已不仅是内容的消费窗口，更是粉丝实时情感共鸣的社交场。然而，早期基于图文/语音的互动模式面临着显著的<b>体验断层</b>：互动载体与视频内容在视觉上是剥离的，且难以承载明星丰富的情绪表达，导致用户在阅读与观看之间频繁产生<b>心智割裂</b>，明星变为剧集视频的附属。</p>

<div class="entry-split">
<div class="entry-left">
<div class="entry-img-box">
<span class="entry-img-label">视觉剥离示意</span>
</div>
<div class="entry-img-box">
<span class="entry-img-label">沉浸式融合示意</span>
</div>
</div>
<div class="entry-right">
<div class="principle-card">
<div class="principle-card-title">体验断层</div>
<p class="principle-card-desc">早期互动区与视频播放区<b>物理分离</b>，用户在弹幕/聊天与观影之间频繁切换注意力，产生严重的<b>心智割裂</b>。<br><br>同时，纯图文/语音的互动载体<b>无法承载明星的丰富情绪</b>，削弱了"陪伴感"的核心价值，明星沦为视频的<b>"画外音"附属</b>。</p>
</div>
<div class="card-arrow">↓</div>
<div class="principle-card">
<div class="principle-card-title">沉浸式融合</div>
<p class="principle-card-desc">将互动层与视频层<b>深度融合</b>，通过画中画、表情回应气泡、实时情绪可视化等手段，让明星的陪伴从<b>"背景音"升维为"在场感"</b>。</p>
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
