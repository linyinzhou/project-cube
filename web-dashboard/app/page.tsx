"use client";

import { useState } from "react";
import { InteractiveFormulaList } from "../src/components/InteractiveFormulaList";

const phases = [
  { name: "Cross", time: 8.26, target: 4, tone: "blue", note: "偶尔可进 6 秒，稳定性不足" },
  { name: "F2L", time: 28.86, target: 17, tone: "red", note: "首要瓶颈：寻块、配对与停顿" },
  { name: "OLL", time: 8.67, target: 4, tone: "yellow", note: "先建立形状识别" },
  { name: "PLL", time: 12.23, target: 3, tone: "green", note: "识别和执行需要稳定" },
] as const;

const solves = [
  { no: 1, total: "1:20.21", cross: "5.93", f2l: "46.23", oll: "12.05", pll: "15.98" },
  { no: 2, total: "54.63", cross: "5.17", f2l: "34.63", oll: "6.03", pll: "8.79" },
  { no: 3, total: "56.03", cross: "7.63", f2l: "25.23", oll: "8.52", pll: "14.63" },
  { no: 4, total: "1:04.12", cross: "11.02", f2l: "26.07", oll: "14.22", pll: "12.78" },
  { no: 5, total: "53.42", cross: "8.97", f2l: "18.67", oll: "11.55", pll: "14.23" },
  { no: 6, total: "1:01.15", cross: "12.57", f2l: "37.61", oll: "6.66", pll: "4.30" },
  { no: 7, total: "39.82", cross: "8.27", f2l: "14.84", oll: "5.42", pll: "11.27" },
  { no: 8, total: "54.91", cross: "6.50", f2l: "27.63", oll: "4.93", pll: "15.84" },
] as const;

const scrambles = [
  "B' U B2 R L' B' R L B' R2 F U2 D2 F' D2 B' D2 B U2 D2",
  "F2 U2 R' F2 L F2 L2 D2 B2 D2 B2 R B R' U' R U2 B L",
  "L2 U' L' U B2 U2 B L' F2 U2 B' R2 B' U2 L2 B' R2 B' D2 U",
  "D2 L U2 F2 R U2 L' D2 B2 L2 B R U' L' R' U' B' L2",
  "F' U' B2 D2 L B2 L2 R D2 R' D2 F L U L F2 L2 F2",
  "F' L' U' L' F' D2 R' F' D2 L2 F2 U2 L2 B' R2 F' R2 B2 L2",
] as const;

const plan = [
  { day: "Day 1", focus: "基线与技能清单", state: "完成" },
  { day: "Day 2", focus: "直觉 F2L 配对", state: "下一次" },
  { day: "Day 3", focus: "2-look OLL 入门", state: "未开始" },
  { day: "Day 4", focus: "2-look PLL 入门", state: "未开始" },
  { day: "Day 5", focus: "F2L 慢拧与少转体", state: "未开始" },
  { day: "Day 6", focus: "整合与周期测试", state: "未开始" },
  { day: "Day 7", focus: "恢复与周期复盘", state: "未开始" },
] as const;

const milestones = [
  { phase: "阶段 1", cycles: "周期 1-2", weeks: "第 1-4 周", focus: "CFOP 基础、方法体验、基线", goal: "稳定 Sub-50，定位主要瓶颈" },
  { phase: "阶段 2", cycles: "周期 3-4", weeks: "第 5-8 周", focus: "Cross 规划、基础 F2L case", goal: "ao50 接近或低于 45 秒" },
  { phase: "阶段 3", cycles: "周期 5-6", weeks: "第 9-12 周", focus: "F2L 连贯性、2-look LL 稳定性", goal: "ao50 接近 40 秒" },
  { phase: "阶段 4", cycles: "周期 7-8", weeks: "第 13-16 周", focus: "PLL 扩展、OLL 识别、转换", goal: "ao50 向 35 秒靠近" },
  { phase: "阶段 5", cycles: "周期 9-10", weeks: "第 17-20 周", focus: "完整还原转化、弱项专项", goal: "提高 Sub-35 和 Sub-30 成功率" },
  { phase: "阶段 6", cycles: "周期 11-13", weeks: "第 21-26 周", focus: "稳定性、模拟测试、精修", goal: "根据复测结果冲击 Sub-30" },
] as const;

export default function Home() {
  const [activeView, setActiveView] = useState<"today" | "cycle" | "long">("today");

  return (
    <main>
      <header className="topbar">
        <div className="brand-mark" aria-hidden="true"><span /><span /><span /></div>
        <div>
          <p className="eyebrow">3×3 SPEEDCUBING</p>
          <h1>速拧训练 Dashboard</h1>
        </div>
        <div className="top-status">
          <span className="status-dot" />
          <span>第 1 周期 · Day 2 待训练</span>
        </div>
      </header>

      <div className="shell">
        <section className="overview" aria-labelledby="overview-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OVERVIEW</p>
              <h2 id="overview-title">从 58.04 秒到稳定 Sub-30</h2>
            </div>
            <p className="updated">更新于 2026-08-06</p>
          </div>

          <div className="metric-grid">
            <article className="metric primary">
              <p>当前平均</p><strong>58.04<span>s</span></strong><small>Day 1 · 8 次有效还原</small>
            </article>
            <article className="metric">
              <p>ao5</p><strong>56.49<span>s</span></strong><small>当前基线</small>
            </article>
            <article className="metric best">
              <p>最佳单次</p><strong>39.82<span>s</span></strong><small>F2L 仅 14.84 秒</small>
            </article>
            <article className="metric target">
              <p>半年目标</p><strong>&lt;30<span>s</span></strong><small>目标日 2027-02-05</small>
            </article>
          </div>

          <div className="goal-track" aria-label="当前平均 58.04 秒，目标 30 秒">
            <div className="track-labels"><span>当前 58.04s</span><span>阶段目标 50s</span><span>目标 30s</span></div>
            <div className="track"><span className="current-marker" /><span className="stage-marker" /></div>
            <p>当前先稳定进入 Sub-50，不追逐偶然的快单次。</p>
          </div>
        </section>

        <nav className="view-switcher" aria-label="训练计划时间范围">
          <button className={activeView === "today" ? "active" : ""} onClick={() => setActiveView("today")} aria-pressed={activeView === "today"}>今日训练</button>
          <button className={activeView === "cycle" ? "active" : ""} onClick={() => setActiveView("cycle")} aria-pressed={activeView === "cycle"}>7日周期</button>
          <button className={activeView === "long" ? "active" : ""} onClick={() => setActiveView("long")} aria-pressed={activeView === "long"}>半年计划</button>
        </nav>

        {activeView === "today" && <><section className="split-section" aria-labelledby="split-title">
          <div className="section-heading">
            <div><p className="eyebrow">PHASE ANALYSIS</p><h2 id="split-title">分段诊断</h2></div>
            <span className="priority-tag">本周期重点 · F2L</span>
          </div>
          <div className="phase-composition" aria-label="分段时间占比">
            <span className="cross" style={{ width: "14.2%" }}>Cross</span>
            <span className="f2l" style={{ width: "49.7%" }}>F2L</span>
            <span className="oll" style={{ width: "14.9%" }}>OLL</span>
            <span className="pll" style={{ width: "21.2%" }}>PLL</span>
          </div>
          <div className="phase-list">
            {phases.map((phase) => (
              <article className={`phase-row ${phase.tone}`} key={phase.name}>
                <div className="phase-name"><span className="phase-swatch" /><strong>{phase.name}</strong></div>
                <div><span className="phase-time">{phase.time.toFixed(2)}s</span><small>目标 ≤ {phase.target.toFixed(1)}s</small></div>
                <div className="phase-gap">+{(phase.time - phase.target).toFixed(2)}s</div>
                <p>{phase.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="next-session" aria-labelledby="next-title">
          <div className="next-copy">
            <p className="eyebrow">NEXT SESSION · 40 MIN</p>
            <h2 id="next-title">Day 2 · 直觉 F2L 配对</h2>
            <p className="session-intro">今天不追求速度。每次转动前先找到角块和棱块，确认它们是一组，再开始配对。</p>
            <ol className="session-steps">
              <li><span>05</span><div><strong>Cross 热身</strong><p>只做 Cross，不计时。</p></div></li>
              <li><span>25</span><div><strong>F2L 专项</strong><p>使用 6 个打乱；先指出一个 pair，再慢速完成全部 F2L。</p></div></li>
              <li><span>10</span><div><strong>完整慢拧</strong><p>完成 5 次，每个 pair 开始前都先看清角块和棱块。</p></div></li>
            </ol>
            <div className="success-rule"><strong>完成标准</strong><span>至少 20 次在转动前正确指出一个角棱 pair。</span></div>
          </div>
          <div className="scramble-panel">
            <div className="panel-heading"><h3>Day 2 打乱</h3><span>6 scrambles</span></div>
            <InteractiveFormulaList items={scrambles} />
          </div>
        </section></>}

        {activeView === "cycle" && <section className="cycle-view" aria-labelledby="plan-title">
          <div className="cycle-summary">
            <div><strong>14</strong><span>自然日</span></div>
            <div><strong>7</strong><span>训练日</span></div>
            <div><strong>≈4h</strong><span>周期训练量</span></div>
            <div><strong>1 / 7</strong><span>当前完成</span></div>
          </div>
          <div className="plan-section">
            <div className="section-heading"><div><p className="eyebrow">TRAINING CYCLE</p><h2 id="plan-title">第 1 训练周期</h2></div><span className="cycle-count">1 / 7</span></div>
            <p className="muted">隔天一练，约 14 个自然日完成。不补课，未完成任务顺延。</p>
            <div className="plan-list">
              {plan.map((item, index) => (
                <div className={`plan-row state-${index}`} key={item.day}>
                  <span className="plan-index">{index + 1}</span><strong>{item.day}</strong><p>{item.focus}</p><span className="plan-state">{item.state}</span>
                </div>
              ))}
            </div>
          </div>
        </section>}

        {activeView === "today" && <section className="results-section" aria-labelledby="results-title">
            <div className="section-heading"><div><p className="eyebrow">DAY 1 RESULTS</p><h2 id="results-title">基线明细</h2></div><span className="record-count">8 / 8 有效</span></div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>#</th><th>总时</th><th>Cross</th><th>F2L</th><th>OLL</th><th>PLL</th></tr></thead>
                <tbody>{solves.map((solve) => <tr className={solve.no === 7 ? "fastest" : ""} key={solve.no}><td>{solve.no}</td><td>{solve.total}</td><td>{solve.cross}</td><td>{solve.f2l}</td><td>{solve.oll}</td><td>{solve.pll}</td></tr>)}</tbody>
                <tfoot><tr><td>平均</td><td>58.04</td><td>8.26</td><td>28.86</td><td>8.67</td><td>12.23</td></tr></tfoot>
              </table>
            </div>
        </section>}

        {activeView === "long" && <section className="long-view" aria-labelledby="long-title">
          <div className="section-heading">
            <div><p className="eyebrow">SIX-MONTH ROADMAP</p><h2 id="long-title">半年 Sub-30 路线</h2></div>
            <span className="long-date">2026-08-05 → 2027-02-05</span>
          </div>
          <div className="long-summary">
            <div><strong>26</strong><span>自然周</span></div>
            <div><strong>13</strong><span>训练周期</span></div>
            <div><strong>每 2 周期</strong><span>阶段复测</span></div>
            <div><strong>&lt;30s</strong><span>挑战目标</span></div>
          </div>
          <div className="roadmap">
            {milestones.map((item, index) => (
              <article className={index === 0 ? "milestone current" : "milestone"} key={item.phase}>
                <div className="milestone-index">{index + 1}</div>
                <div><strong>{item.phase}</strong><span>{item.cycles} · {item.weeks}</span></div>
                <p>{item.focus}</p>
                <div className="milestone-goal">{item.goal}</div>
              </article>
            ))}
          </div>
          <div className="long-bottom">
            <article>
              <p className="eyebrow">METHOD STRATEGY</p>
              <h3>CFOP 是起点，不是限制</h3>
              <p>前 4 周先解决训练方法和基础问题，第 4 周再比较 CFOP、Roux、ZZ；只有替代方法明显更适合时才切换。</p>
            </article>
            <article>
              <p className="eyebrow">FINAL STANDARD</p>
              <h3>稳定 Sub-30 的定义</h3>
              <ul><li>ao100 &lt; 30.00 秒</li><li>最近 100 次至少 80 次低于 30 秒</li><li>DNF 与 +2 合计低于 3%</li></ul>
            </article>
          </div>
        </section>}
      </div>

      <footer><span>Cube Training · CFOP 起步，不锁定方法</span><span>成绩来源：csTimer</span></footer>
    </main>
  );
}
