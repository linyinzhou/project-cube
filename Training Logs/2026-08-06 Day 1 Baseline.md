---
title: Day 1 基线与技能清单
date: 2026-08-06
tags:
  - cube/training
  - cube/assessment
  - cube/cfop
status: completed
session_type: baseline
method: simple-CFOP
primary_focus: F2L baseline
timer_session: CFOP-SPLIT
solves: 8
baseline_seconds: 58.04
target_seconds: 30
average_seconds: 58.04
best_single_seconds: 39.82
ao5_seconds: 56.49
cross_seconds: 8.26
f2l_seconds: 28.86
oll_seconds: 8.67
pll_seconds: 12.23
next_action: F2L pair recognition
---

# Day 1：基线与技能清单

关联计划：[[Plans/Week 01 - CFOP Foundation#Day 1：基线与技能清单（40 分钟）|第 1 周 Day 1]]

## csTimer 汇总

| 指标 | 结果 |
| --- | ---: |
| 有效还原 | 8 / 8 |
| 平均 | 58.04 s |
| best single | 39.82 s |
| current mo3 | 51.96 s |
| best mo3 | 51.46 s |
| ao5 | 56.49 s |
| +2 | 0 |
| DNF | 0 |

## 分段结果

本次 4-phase 按 Cross、F2L、OLL、PLL 记录。

| 序号 | 总时间 | Cross | F2L | OLL | PLL |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 1:20.21 | 5.93 | 46.23 | 12.05 | 15.98 |
| 2 | 54.63 | 5.17 | 34.63 | 6.03 | 8.79 |
| 3 | 56.03 | 7.63 | 25.23 | 8.52 | 14.63 |
| 4 | 1:04.12 | 11.02 | 26.07 | 14.22 | 12.78 |
| 5 | 53.42 | 8.97 | 18.67 | 11.55 | 14.23 |
| 6 | 1:01.15 | 12.57 | 37.61 | 6.66 | 4.30 |
| 7 | 39.82 | 8.27 | 14.84 | 5.42 | 11.27 |
| 8 | 54.91 | 6.50 | 27.63 | 4.93 | 15.84 |
| **平均** | **58.04** | **8.26** | **28.86** | **8.67** | **12.23** |

## 初步分析

> [!important] 首要短板：F2L
> F2L 平均 28.86 秒，约占总时间一半；单次范围为 14.84-46.23 秒，也是波动最大的阶段。最佳单次 39.82 秒中的 F2L 只有 14.84 秒，说明减少 F2L 寻块和配对停顿是当前最直接的提速方向。

- Cross 平均 8.26 秒，单次范围 5.17-12.57 秒；已有低于 6 秒的表现，但稳定性不足。
- OLL 平均 8.67 秒，单次范围 4.93-14.22 秒。
- PLL 平均 12.23 秒，是第二慢阶段，单次范围 4.30-15.98 秒；需要区分识别慢、公式不熟和 AUF 停顿。
- 本次只有 8 次还原，结论属于初步诊断；累计到至少 12 次后再确认训练权重。

## 当前公式基础

- 主要记得[魔方小站简版 CFOP](http://www.rubik.com.cn/simplecfop.htm)中的形状和对应公式。
- 当前更多依赖外观记忆，尚未把会用的 OLL/PLL 与标准 case 名称逐一对应。
- 暂不视为已经掌握完整 2-look OLL 或 2-look PLL。

后续盘点时将每个形状分为：

1. 看见形状能独立识别并完成。
2. 记得形状，但需要提示或查公式。
3. 尚未掌握。

## Day 1 结论

- 第一优先短板：F2L 寻块、配对和稳定性。
- 第二优先短板：PLL 识别与执行稳定性。
- 下一训练：[[Plans/Week 01 - CFOP Foundation#Day 2：直觉 F2L 配对（40 分钟）|Day 2 直觉 F2L 配对]]。
- 暂时不做：一次性背完整 OLL/PLL。

同步到：[[Assessments/Baseline Assessment|CFOP 基线测评]] · [[Dashboard|训练主页]]
