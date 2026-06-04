import type { Project } from '../types'

export const projectData: Project[] = [
  {
    id: 'project-3',
    title: '吃鲸AI',
    description:
      '爱奇艺内部孵化 AI 视频应用，交互设计负责人，主导从概念孵化到结项的全链路交互设计。',
    imagePath: 'https://picsum.photos/seed/project3/1200/800',
    techStack: ['AI Video', 'Interaction Design', 'UX Strategy', 'Figma', 'SWOT'],
    sourceUrl: 'https://github.com',
    detail: {
      pageTitle: '吃鲸AI · iQIYI AI Video',
      mainTitle: '爱奇艺AI视频互动社区商业复盘',
      subtitle: '交互设计负责人 · 2025.10 孵化 — 2026.05 结项',
      sections: [
        {
          heading: '引言：商业极限下的终局反思',
          body: '',
          html: `<style>.hl-p{color:#A0A0A0;font-size:14px;line-height:1.8;margin:0 0 1.5rem;font-weight:300;letter-spacing:0.01em}.hl-p b{color:#FFFFFF;font-weight:600}.hl-p:last-child{margin-bottom:0}</style>
<p class="hl-p">「吃鲸AI」是爱奇艺内部孵化的一款生成式 AI 视频消费与互动应用。作为该项目的<b>交互设计负责人</b>，我和项目组见证了它从概念孵化到结项终止的全过程。</p>
<p class="hl-p">必须坦诚的是，在当前飞速变幻的 AI 赛道中，「吃鲸AI」最终未能探索出属于它的<b>商业模式</b>。这并非是<b>体验设计上的失败</b>，而是一场受限于<b>技术成熟度</b>与<b>平台基因</b>的艰难实验。复盘一个已经失败的创新项目，给我带来更多是关于商业、技术、平台限制和设计解法上的思考。</p>`,
        },
        {
          heading: '缘起：长视频平台的生态自救',
          body: '爱奇艺切入 AI 视频，本质上是一场「生产端降本 & 流量端防御」的生态自救。爱奇艺试图用生成式 AI 视频作为武器，精准破解长视频行业既有的三大商业天花板。',
          html: `<style>
@media(max-width:767px){.ba-row{flex-direction:column!important}.swot-grid{grid-template-columns:1fr!important}}
/* 三栏对照容器 */
.ba-row{display:flex;gap:16px;align-items:stretch;margin-bottom:28px}
.ba-row .ba-section{flex:1;margin-bottom:0}
/* 痛点-解法 对照组 */
.ba-section{margin-bottom:0;background:rgba(255,255,255,.01);border:1px solid #333333;border-radius:4px;padding:20px;transition:border-color .3s ease}
.ba-section:hover{border-color:#333333}
.ba-section:last-child{margin-bottom:0}
.ba-header{color:#FFFFFF;font-size:14px;font-weight:600;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid #333333;display:flex;align-items:center;gap:10px}
.ba-header::before{content:'';width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
.ba-pair{display:flex;flex-direction:column;gap:10px;align-items:stretch}
.ba-pain{flex:1;padding:0;background:none;border:none;border-radius:0}
.ba-pain:hover{border-color:transparent}
.ba-solve{flex:1;padding:0;background:none;border:none;border-radius:0}
.ba-solve:hover{border-color:transparent}
.ba-label{display:inline-block;font-size:10px;padding:2px 8px;border-radius:3px;margin-right:6px;vertical-align:middle;font-family:monospace;letter-spacing:0.06em;font-weight:600}
.ba-pain .ba-label{background:rgba(255,255,255,.03);color:#A0A0A0;border:1px solid #333333}
.ba-solve .ba-label{background:rgba(199,255,0,.06);color:#9FB300;border:1px solid rgba(199,255,0,.12)}
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
.swot-item{background:#1A1A1A;border:1px solid #333333;border-radius:4px;padding:22px;transition:border-color .3s ease,background .3s ease;position:relative;overflow:hidden}
.swot-item:hover{border-color:#333333;background:#1A1A1A}
.swot-item::after{content:attr(data-letter);position:absolute;top:-20px;right:-10px;font-size:100px;font-weight:900;color:rgba(255,255,255,.015);font-family:system-ui,-apple-system,sans-serif;line-height:1;pointer-events:none;z-index:0;letter-spacing:-0.02em}
.swot-item>*{position:relative;z-index:1}
.swot-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-bottom:8px;border-bottom:1px solid #333333;display:flex;align-items:center;gap:8px}.swot-title::before{content:"";width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}
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
          heading: '破局策略：消费型 AI 互动社区',
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
          heading: '系统架构：产品概念与技术流转模型',
          body: '破局策略明确后，如何转化为用户可感的界面结构？设计团队梳理出了系统的交互分层，核心是通过「以消带产」盘活链路。',
          html: `<style>@media(max-width:767px){.arch-card{flex-direction:column!important;gap:12px!important}}.arch-card{transition:border-color .3s ease,background .3s ease,box-shadow .3s ease}.arch-card:hover{border-color:#333333!important;background:#1A1A1A!important;box-shadow:0 2px 12px rgba(0,0,0,.3)}.arch-card.accent{background:rgba(199,255,0,.02)!important;border:1px solid rgba(199,255,0,.1)!important}.arch-card.accent:hover{background:rgba(199,255,0,.04)!important;border-color:rgba(199,255,0,.18)!important;box-shadow:0 2px 12px rgba(199,255,0,.04)}.arch-row{display:flex;gap:18px;align-items:stretch;margin:24px 0}.arch-row .arch-card{flex:1;width:auto!important;flex-direction:column!important;gap:16px!important}@media(max-width:767px){.arch-row{flex-direction:column!important}.arch-row .arch-card{flex-direction:row!important}}</style>
<div class="arch-row">
<div class="arch-card" style="background:#1A1A1A;border:1px solid #333333;border-radius:4px;padding:24px;display:flex;gap:24px;align-items:flex-start">
<div><h4 style="color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:8px;border-bottom:1px solid #333333;display:flex;align-items:center;gap:8px;margin:0 0 12px"><span style="width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0;display:inline-block"></span>01 生态输入层</h4>
<p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 6px">爱奇艺正片、IP 资产、版权素材库</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:300">整个产品的逻辑起点。底层直接对接爱奇艺独家影视正片，为用户提供版权合规的"种子源"，使用户能基于熟悉的剧集和演员进行二创，告别无中生有的冷启动摩擦力。</p></div>
</div>
<div class="arch-card" style="background:#1A1A1A;border:1px solid #333333;border-radius:4px;padding:24px;display:flex;gap:24px;align-items:flex-start">
<div><h4 style="color:#FFFFFF;font-size:14px;font-weight:600;padding-bottom:8px;border-bottom:1px solid #333333;display:flex;align-items:center;gap:8px;margin:0 0 12px"><span style="width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0;display:inline-block"></span>02 核心逻辑层</h4>
<p style="color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 6px">通用基础模型能力 + 自研场景化调优</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:300">系统的双引擎驱动架构。底层异构接入可灵 O3、Seedance 4.0 及火山引擎等行业领先能力，技术团队通过 Prompt 工程、模型微调与高精度工作流进行定制开发，将复杂模糊的用户意图转化为具体的业务场景算力输出。</p></div>
</div>
<div class="arch-card accent" style="border-radius:4px;padding:24px;display:flex;gap:24px;align-items:flex-start;position:relative">
<div><h4 style="color:#C7FF00;font-size:14px;font-weight:600;padding-bottom:8px;border-bottom:2px solid #C7FF00;display:flex;align-items:center;gap:8px;margin:0 0 12px"><span style="width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0;display:inline-block"></span>03 感知交互层</h4>
<p style="color:#C7FF00;font-size:14px;font-weight:600;margin:0 0 8px">降低冷启动门槛：从"一键同款"到"IP 互动切口"</p><p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0;font-weight:300"><b style="color:#FFFFFF">交互设计负责人（UX Lead）的核心输出主阵地。</b>团队在此完全摒弃了传统的复杂提示词控制面板，改用极低摩擦力的模板化交互承接用户意图。通过联合产品与技术深度解构影视 IP 资产，将底层的硬核算力包装为用户感知轻量的低门槛互动玩法流。</p></div>
</div>
</div>
<p style="color:#A0A0A0;font-size:14px;line-height:1.8;margin-top:20px;font-weight:300">这种架构将 AI 能力作为底层引擎，通过消费场景自然引导用户进入创作，形成"看 → 玩 → 分享 → 再看"的闭环飞轮。</p>`,
        },
        {
          heading: '用户旅程：从看剧观众到AI创作者',
          body: '爱奇艺的用户从观众到创作者，中间隔着极高的行动门槛。为了拆解这个转化过程，团队通过用户体验地图，还原了用户真实行为与痛点：',
          html: `<style>
.jm-outer{display:flex;gap:16px;margin-top:12px}
.jm-lbl-col{width:80px;flex-shrink:0}
.jm-lbl-col .lhdr{height:56px;display:flex;align-items:center;padding:4px 8px;font-size:10px;color:#A0A0A0;font-weight:600;border-bottom:1px solid #333333;box-sizing:border-box}
.jm-lbl-col .lrow{display:flex;align-items:center;padding:14px 8px;font-size:10px;font-weight:600;color:#A0A0A0;border-bottom:1px solid #333333;height:90px;box-sizing:border-box}
.jm-lbl-col .lrow.grn{border-left:3px solid #C7FF00;color:#C7FF00;padding-left:5px}
.jm-lbl-col .lrow:last-child{border-bottom:none}
.jm-row{display:flex;gap:0 20px;flex:1}
.jm-row .col{display:flex;flex-direction:column;flex:1}
.jm-hdr{text-align:left;padding:10px 10px;height:56px;display:flex;flex-direction:column;justify-content:center;border-bottom:1px solid #333333;box-sizing:border-box}
.jm-hdr .t{color:#FFFFFF;font-size:14px;font-weight:600;display:block;margin-bottom:2px}.jm-hdr .s{color:#A0A0A0;font-size:10px}
.jm-hdr.core{border-bottom:2px solid #C7FF00!important}.jm-hdr.core .t,.jm-hdr.core .s{color:#C7FF00!important}
.jm-cell{padding:14px 10px;font-size:11px;color:#A0A0A0;line-height:1.6;border-bottom:1px solid #333333;height:90px;display:flex;flex-direction:column;justify-content:center;box-sizing:border-box}
.jm-cell:last-child{border-bottom:none}
.jm-cell .jm-kw{color:#FFFFFF;font-weight:500;display:block;margin-bottom:2px}
.jm-mb{display:block;font-size:10px;font-weight:600;margin-bottom:2px;color:#A0A0A0}
.jm-cell.strat .st{display:block;margin-bottom:2px;color:#C7FF00;font-weight:600;font-size:12px}
.jm-cell.strat .st.w{color:#FFFFFF!important}
@media(max-width:767px){.jm-outer{flex-direction:column!important;gap:16px!important;padding-left:14px;border-left:1px solid #333333}.jm-lbl-col{display:none!important}.jm-row{display:flex!important;flex-direction:column!important;gap:16px!important}.jm-row .col{display:flex!important;flex-direction:column!important;gap:4px!important}.jm-hdr{height:auto!important;text-align:left!important;position:relative;border-bottom:none}.jm-hdr::before{content:"";position:absolute;left:-19px;top:8px;width:8px;height:8px;border-radius:50%;background:#A0A0A0}.jm-hdr.core::before{background:#C7FF00!important}.jm-cell{height:auto!important;border-bottom:none}.jm-lbl-col .lrow{height:auto!important}}
</style>
<div class="jm-outer">
<div class="jm-lbl-col"><div class="lhdr">阶段</div><div class="lrow">用户真实<br>潜在需求</div><div class="lrow">全局核心<br>卡点</div><div class="lrow grn">核心设计<br>策略</div></div>
<div class="jm-row">
<div class="col"><div class="jm-hdr"><span class="t">01. 探索发现</span><span class="s">心智沉浸与共鸣寻找</span></div><div class="jm-cell">看完热播剧后，渴望快速找到同好圈层，寻找剧情共鸣与玩梗新鲜内容。</div><div class="jm-cell"><span class="jm-kw">误当成传统播放器。</span>消费惯性过强，若进场缺乏明确的社区感知，看剧后用户即刻流失。</div><div class="jm-cell strat"><span class="st w">建立社区第一印象</span>分发侧套用双列瀑布流 Card。进场即拉满"能玩、能互动"的二创社区氛围。</div></div>
<div class="col"><div class="jm-hdr"><span class="t">02. 激发灵感</span><span class="s">意图萌芽与门槛评估</span></div><div class="jm-cell">浏览二创内容时产生强烈表达欲，评估自己跟风创作的门槛与趣味性。</div><div class="jm-cell"><span class="jm-kw">不知道写啥（冷启动死穴）。</span>面对完全空白、无引导的自由创作环境，普通用户极易放弃。</div><div class="jm-cell strat"><span class="st w">降低生产前置摩擦</span>提供海量爆款模板与直观教程。将高难度的发散思考转化为低阻力的"即拿即用"。</div></div>
<div class="col"><div class="jm-hdr core"><span class="t">03. 获取资源</span><span class="s">独家资产调用 (核心)</span></div><div class="jm-cell">急需高清、合规的版权片段作为二创底座，保障二创产出的速度与质量。</div><div class="jm-cell"><span class="jm-kw">跨平台找素材链路断裂。</span>站外缺乏合规版权，用户自行录屏、切片流转的沉没成本极高。</div><div class="jm-cell strat" style="color:#C7FF00!important"><span class="st" style="color:#C7FF00!important">消除跨平台流转割裂</span>一站式提供官方高清影视切片。无需出站，打通独家版权资产到创作上游的闭环。</div></div>
<div class="col"><div class="jm-hdr"><span class="t">04. 创作生产</span><span class="s">生产转化与社区反馈</span></div><div class="jm-cell">拒绝专业工具的繁琐，希望以极低的学习与操作成本快速看到成品。</div><div class="jm-cell"><span class="jm-kw">高工具门槛劝退普通观众。</span>复杂的视频轨道与模型参数极易打碎原本纯观众用户的创作热情。</div><div class="jm-cell strat"><span class="st w">纯观众向二创者的低门槛转化</span>创新轻量、易上手的交互玩法。全方位降解生产认知成本，引导消费者无缝跨越。</div></div>
</div></div>`,
        },
        {
          heading: '5.1 全局视界：首页交互架构',
          body: '基于「消费分发 → 生产赋能 → 闭环沉淀」的增量模型，设计了首页交互架构，实现从内容消费到创作反哺的价值内循环。',
          html: `<style>
.ds-sub{font-size:18px;font-weight:700;color:#FFFFFF;margin:2rem 0 8px;letter-spacing:0.02em}
.ds-sub .num{font-family:monospace;font-size:15px;color:#C7FF00;margin-right:8px;font-weight:700}
.ds-p{color:#A0A0A0;font-size:13px;line-height:1.75;margin:0 0 20px;font-weight:300}
.arch-wrapper{width:100%;max-width:950px;margin:0 auto}.arch-layer{margin-bottom:24px}.arch-layer-bar{display:flex;align-items:center;margin-bottom:10px;border-bottom:1px solid #333333;padding-bottom:8px}.arch-layer-label{color:#FFFFFF;font-size:14px;font-weight:600;letter-spacing:0.02em;display:flex;align-items:center;gap:8px}.arch-layer-label::before{content:"";width:4px;height:16px;background:#C7FF00;border-radius:2px;flex-shrink:0}.arch-layer-logic{font-size:12px;color:#C7FF00;background:rgba(199,255,0,.02);border-left:2px solid #C7FF00;padding:6px 14px;border-radius:0 4px 4px 0;font-weight:500}.arch-page-row{display:flex;gap:12px}.arch-page-col{display:flex;flex-direction:column;align-items:flex-start;gap:6px;flex:1}.arch-page-box{width:100%;box-sizing:border-box;height:150px;background:#121212;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#A0A0A0;font-size:12px;border:1px solid #333333;transition:all .3s ease}.arch-page-col:hover .arch-page-box{border-color:#C7FF00;color:#fff;background:rgba(255,255,255,.01)}.arch-page-tag{font-size:11px;color:#A0A0A0;letter-spacing:0.02em;padding-left:2px}.arch-page-col.hl .arch-page-box{border:1px solid #C7FF00;background:rgba(199,255,0,.01);color:#fff;font-weight:500;box-shadow:inset 0 0 12px rgba(199,255,0,.03)}.arch-page-col.hl .arch-page-tag{color:#FFFFFF}@media(max-width:767px){.arch-page-row{flex-direction:column!important}.arch-page-box{height:110px}}
</style>
<div class="ds-sub"><span class="num">5.1</span> 全局视界</div>
<p class="ds-p">基于"消费分发 → 生产赋能 → 闭环沉淀"的增量模型，我们设计了首页交互架构，实现了从内容消费到创作反哺的价值内循环：</p>
<div class="arch-wrapper">
<div class="arch-layer"><div class="arch-layer-bar"><span class="arch-layer-label">01 / 消费分发层</span><span class="arch-layer-logic">核心策略：流量精准触达，通过沉浸式体验缩短留存路径</span></div><div class="arch-page-row"><div class="arch-page-col hl"><div class="arch-page-box">首页流分发</div><span class="arch-page-tag">智能分发</span></div><div class="arch-page-col"><div class="arch-page-box">播放器详情</div><span class="arch-page-tag">沉浸播放</span></div><div class="arch-page-col"><div class="arch-page-box">精选内容页</div><span class="arch-page-tag">品牌引导</span></div></div></div>
<div class="arch-layer"><div class="arch-layer-bar"><span class="arch-layer-label">02 / 生产赋能层</span><span class="arch-layer-logic">核心策略：创作门槛治理，通过组件解耦提升创作效能</span></div><div class="arch-page-row"><div class="arch-page-col hl"><div class="arch-page-box">创作入口</div><span class="arch-page-tag">创作引擎</span></div><div class="arch-page-col hl"><div class="arch-page-box">创作编辑器</div><span class="arch-page-tag">碎片化改写</span></div><div class="arch-page-col"><div class="arch-page-box">素材检索库</div><span class="arch-page-tag">资源解耦</span></div></div></div>
<div class="arch-layer"><div class="arch-layer-bar"><span class="arch-layer-label">03 / 闭环沉淀层</span><span class="arch-layer-logic">核心策略：内容资产内循环，促进用户身份跃迁</span></div><div class="arch-page-row"><div class="arch-page-col"><div class="arch-page-box">创作状态页</div><span class="arch-page-tag">社交互动</span></div><div class="arch-page-col hl"><div class="arch-page-box">作品发布页</div><span class="arch-page-tag">资产发布</span></div><div class="arch-page-col"><div class="arch-page-box">回流分发流</div><span class="arch-page-tag">长尾复利</span></div></div></div>
</div>`,
        },
        {
          heading: '5.2 创作中控：素材库与逻辑配置',
          body: '将官方影视切片、本地相册及个人库整合为中心化素材库，通过统一交互范式简化素材选择流程。',
          html: `<style>
.ds-sub{font-size:18px;font-weight:700;color:#FFFFFF;margin:2rem 0 8px;letter-spacing:0.02em}
.ds-sub .num{font-family:monospace;font-size:15px;color:#C7FF00;margin-right:8px;font-weight:700}
.ds-p{color:#A0A0A0;font-size:13px;line-height:1.75;margin:0 0 20px;font-weight:300}
.flow-wrapper{width:100%;display:flex;flex-direction:column;gap:28px}.flow-wrapper section{padding:0}.flow-section-label{font-size:13px;color:#C7FF00;font-weight:600;margin-bottom:14px;border-left:3px solid #C7FF00;padding-left:10px}.flow-row{display:flex;align-items:center;justify-content:space-between;gap:10px}.flow-node{display:flex;flex-direction:column;align-items:flex-start;gap:6px;flex:1}.flow-screen-box{width:100%;box-sizing:border-box;height:180px;background:#121212;border:1px solid #333333;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:12px;color:#A0A0A0;font-weight:400;transition:all .3s ease}.flow-node:hover .flow-screen-box{border-color:#C7FF00;color:#fff;background:rgba(255,255,255,.01)}.flow-node-text{font-size:11px;color:#A0A0A0;padding-left:2px;letter-spacing:0.02em}.flow-operator{font-family:monospace;font-size:12px;color:#C7FF00;background:rgba(199,255,0,.03);border:1px solid rgba(199,255,0,.1);width:24px;height:24px;border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-bottom:16px}.flow-arrow-down{display:flex;flex-direction:column;align-items:center;justify-content:center;height:28px;position:relative}.flow-arrow-down::before{content:'';width:1px;height:100%;background:linear-gradient(to bottom,#333333,rgba(199,255,0,.2),#333333)}@media(max-width:767px){.flow-row{flex-wrap:wrap!important;justify-content:center!important}.flow-operator{margin-bottom:0}.flow-screen-box{height:120px}}
.ds-list{margin:0 0 20px;list-style:none;padding:0}
.ds-list li{margin-bottom:12px;font-size:13px;line-height:1.75;color:#A0A0A0;font-weight:300}
.ds-list li b{color:#FFFFFF;font-weight:600}
</style>
<div class="ds-sub"><span class="num">5.2</span> 创作中控</div>
<p class="ds-p">为了简化创作前置流程，我们将官方影视切片、本地相册及个人库整合为中心化的「素材库」。通过统一的交互范式降低了素材来源的差异，将复杂的素材选择过程简化为三步闭环：</p>
<div class="flow-wrapper">
<section><div class="flow-section-label">阶段一 · 资产调用</div><div class="flow-row"><div class="flow-node"><div class="flow-screen-box">影视片段库</div><div class="flow-node-text">多维素材整合</div></div><div class="flow-operator">+</div><div class="flow-node"><div class="flow-screen-box">本地相册</div><div class="flow-node-text">打破平台壁垒</div></div><div class="flow-operator">+</div><div class="flow-node"><div class="flow-screen-box">个人参考库</div><div class="flow-node-text">中心化资源池</div></div></div></section>
<div class="flow-arrow-down"></div>
<section><div class="flow-section-label">阶段二 · 逻辑配置</div><div class="flow-row"><div class="flow-node"><div class="flow-screen-box">未添加素材</div><div class="flow-node-text">空载引导</div></div><div class="flow-operator">→</div><div class="flow-node"><div class="flow-screen-box">已添加素材</div><div class="flow-node-text">"@引用"逻辑拼搭</div></div><div class="flow-operator">→</div><div class="flow-node"><div class="flow-screen-box">调用素材</div><div class="flow-node-text">多维资源检索</div></div></div></section>
</div>
<ul class="ds-list">
  <li><b>多维素材融合：</b>整合官方影视切片、相册素材与个人参考库，打破了素材获取的平台壁垒，将素材库转化为随手可得的生产要素。</li>
  <li><b>透明化多引用交互：</b>采用 @引用式的交互逻辑，支持用户在生产过程中显性调用多项视觉参考，通过「自然语言描述 + 明确素材引用」的方式，将 AI 渲染的「黑盒」过程转化为用户可控的「逻辑拼搭」过程。</li>
  <li><b>低认知门槛配置：</b>将复杂的剪辑工作流程解构为任务式的素材调用，大幅削弱了二创对专业剪辑技能的依赖。</li>
</ul>`,
        },
        {
          heading: '5.3 创意实验：换台词',
          body: '以热门影视 IP 经典名场面为载体，通过低门槛的「换台词」交互，让用户快速接入生产链路，将内容消费转化为互动产出。',
          html: `<style>
.ds-sub{font-size:18px;font-weight:700;color:#FFFFFF;margin:2rem 0 8px;letter-spacing:0.02em}
.ds-sub .num{font-family:monospace;font-size:15px;color:#C7FF00;margin-right:8px;font-weight:700}
.ds-p{color:#A0A0A0;font-size:13px;line-height:1.75;margin:0 0 20px;font-weight:300}
.qt-flow-wrapper{width:100%}.qt-section-label{font-size:13px;color:#C7FF00;font-weight:600;margin-bottom:14px;border-left:3px solid #C7FF00;padding-left:10px}.qt-flow-row{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.qt-node{display:flex;flex-direction:column;align-items:center;gap:10px;flex:1}.qt-screen-box{width:100%;box-sizing:border-box;height:280px;background:#121212;border:1px solid #333333;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:12px;color:#A0A0A0;transition:all .3s ease}.qt-node:hover .qt-screen-box{border-color:#C7FF00;color:#fff;background:rgba(255,255,255,.01)}.qt-node-text{font-size:12px;color:#A0A0A0;text-align:center;line-height:1.5}.qt-node-text b{color:#FFFFFF;font-weight:600;display:block;margin-bottom:2px}.qt-operator{font-size:20px;color:#C7FF00;margin-top:130px;flex-shrink:0}@media(max-width:767px){.qt-flow-row{flex-wrap:wrap!important}.qt-operator{margin-top:0;transform:rotate(90deg)}.qt-screen-box{height:160px}}
</style>
<div class="ds-sub"><span class="num">5.3</span> 创意实验</div>
<p class="ds-p">除了通用创作流程，我们通过「换台词」等影视相关趣味玩法降低了创作门槛。用户无需专业技能，即可在 AI 的辅助下通过「微调」完成二创。</p>

<h5 style="color:#FFFFFF;font-size:13px;font-weight:600;margin:0 0 8px">🎬 换台词</h5>
<p style="color:#A0A0A0;font-size:13px;line-height:1.75;margin:0 0 20px;font-weight:300">以热门影视 IP 的经典名场面为载体，通过低门槛的交互，让用户能够快速接入生产链路。无论是经典的对白解构，还是流行语的趣味梗植入，「换台词」打破了专业创作的围墙，让高光时刻不再高不可攀，真正实现了从内容消费到互动产出的高效转化。</p>
<div class="qt-flow-wrapper">
<div class="qt-section-label">交互范式：渐进式"换台词"创作流</div><div class="qt-flow-row"><div class="qt-node"><div class="qt-screen-box">[原始名场面界面]</div><div class="qt-node-text"><b>即兴微调</b>点击台词直接编辑，降低创作心理门槛。</div></div><div class="qt-operator">➔</div><div class="qt-node"><div class="qt-screen-box">[场景化主题标签页]</div><div class="qt-node-text"><b>场景化启发</b>点击标签，快速接入创作方向。</div></div><div class="qt-operator">➔</div><div class="qt-node"><div class="qt-screen-box">[半浮层对话框]</div><div class="qt-node-text"><b>AI 对话式扩展</b>自然语言生成，多版本方案沉淀。</div></div><div class="qt-operator">➔</div><div class="qt-node"><div class="qt-screen-box">[新台词视频预览]</div><div class="qt-node-text"><b>创作资产沉淀</b>每一次尝试都可见、可复用。</div></div></div>
</div>`,
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
.progressive-steps .ps-card{background:#1A1A1A;border:1px solid #333333;border-radius:4px;padding:18px;text-align:center;transition:border-color .3s ease,background .3s ease,transform .2s ease}.progressive-steps .ps-card:hover{border-color:#333333;background:#1A1A1A;transform:translateY(-2px)}
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
.sd-card{background:#1A1A1A;border:1px solid #333333;border-radius:4px;padding:24px;transition:border-color .3s ease,background .3s ease,transform .2s ease;position:relative;overflow:hidden}
.sd-card:hover{border-color:#333333;background:#1A1A1A;transform:translateY(-2px)}
.sd-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#C7FF00,transparent);opacity:0;transition:opacity .3s ease}
.sd-card:hover::before{opacity:.6}
.sd-card-num{font-family:monospace;font-size:11px;color:#C7FF00;font-weight:600;display:block;margin-bottom:14px;letter-spacing:0.08em}
.sd-card-icon{font-size:20px;margin-bottom:12px;display:block}
.sd-card-title{color:#FFFFFF;font-size:14px;font-weight:600;margin:0 0 10px;padding-left:10px;border-left:3px solid #C7FF00;line-height:1.4}
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
<div class="sd-card"><span class="sd-card-num">资产一</span><span class="sd-card-icon">📦</span><h4 class="sd-card-title">标准化组件与协同体系</h4><p class="sd-card-desc">将核心交互（如创作页、播放器）标准化为组件库，封装为 <b>SDK 模块</b>，成功支撑了 AI 创作能力在爱奇艺主站的无缝嵌入。这套标准化方案实现了<b>创作能力与主站生态的解耦</b>，为 AI 能力的规模化接入提供了底层支撑。</p></div>
<div class="sd-card"><span class="sd-card-num">资产二</span><span class="sd-card-icon">⚡</span><h4 class="sd-card-title">AI 生产链路交互重构</h4><p class="sd-card-desc">针对 AI 生成耗时较长的痛点，设计了<b>"即时反馈 + 异步处理"</b>交互闭环。通过后台任务队列与主动通知策略，将用户的<b>线性等待转化为并行体验</b>，有效解决生成过程中的流程阻塞问题，极大提升创作流顺畅度。</p></div>
<div class="sd-card"><span class="sd-card-num">资产三</span><span class="sd-card-icon">🧩</span><h4 class="sd-card-title">创作资源模块化管理</h4><p class="sd-card-desc">将不同玩法的素材与底层逻辑解耦，搭建统一的<b>资源共享池</b>。资源模块化架构使得创作侧玩法迭代不再依赖复杂底层重构，显著提升产品在处理复杂创作场景时的<b>灵活性与响应效率</b>。</p></div>
</div>
<div class="sd-closing"><span class="sd-closing-label">结语</span><p>「吃鲸 AI」不仅是交互设计的实验场，更是<b>商业模型与算力成本博弈</b>的试金石。它警示我们：未来的 AI 设计，必须跳出体验的舒适区，将<b>技术 ROI 与平台基因</b>纳入设计的底层逻辑。</p></div>`,
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
