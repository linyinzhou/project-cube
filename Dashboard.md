---
title: 三阶速拧训练主页
tags:
  - cube/dashboard
  - cube/cfop
status: active
current_method: CFOP
method_status: under-evaluation
training_cadence: every-other-day
current_session: "Week 01 / Day 5 pending"
target_seconds: 30
target_date: 2027-02-05
---

# 三阶速拧训练主页

> [!goal] 半年目标
> 从当前平均 50+ 秒出发，在 2027-02-05 前冲击稳定 Sub-30。判断标准以连续训练数据和滚动平均为主，不以偶然单次成绩为准。

## 当前状态

- 当前水平：Day 1 平均 58.04 秒，ao5 56.49 秒，best 39.82 秒
- 当前阶段：CFOP 基础与基线测评
- 当前方法：CFOP（作为起点，不锁定）
- 当前进度：第 1 训练周期，Day 1-4 已完成，下一次执行 Day 5
- 训练节奏：隔天一练，原一周计划用约 14 天完成
- 调整方式：每次训练后根据日志决定继续、重复、降难度或进阶
- 本周主要短板：F2L 寻块、配对和稳定性
- 本周辅助训练：PLL 识别与执行稳定性
- 数据来源：[csTimer](https://www.cstimer.net/)
- 计时器开发：不在项目范围内

## 下一步

- [ ] 完成 [[Assessments/Baseline Assessment|基线测评]]
- [x] 完成 [[Training Logs/2026-08-06 Day 1 Baseline|Day 1 基线与技能清单]]
- [x] 完成 [[Training Logs/2026-08-08 Day 2 Intuitive F2L|Day 2 直觉 F2L 配对]]（18 / 20，接近达标）
- [x] 完成 [[Training Logs/2026-08-10 Day 3 Sune Recognition|Day 3 小鱼与反小鱼识别]]（F2L 5 / 5，公式 9 / 10）
- [x] 完成 [[Training Logs/2026-08-12 Day 4 Ua Ub Recognition|Day 4 Ua 与 Ub 识别]]（公式 10 / 10，完整慢拧识别 3 / 3）
- [ ] 完成 [[Plans/Week 01 - CFOP Foundation#Day 5：F2L 慢拧与少转体（40 分钟）|Day 5 F2L 慢拧与少转体]]
- [ ] 按隔日节奏执行 [[Plans/Week 01 - CFOP Foundation|第 1 训练周期计划]]
- [ ] 根据首周结果确定第一个四周训练块
- [ ] 第 4 周完成 [[Assessments/Method Evaluation|速拧方法评估]]
- [ ] 从 [[Templates/Training Session|训练记录模板]] 创建首次训练记录
- [ ] 周末从 [[Templates/Weekly Review|周复盘模板]] 创建首次周复盘

## 快速入口

- [[Cube Training Dashboard.base|训练 Dashboard]]
- [[Plans/Six-Month Sub-30 Plan|半年 Sub-30 计划]]
- [[Plans/Week 01 - CFOP Foundation|第 1 周逐日训练计划]]
- [[Assessments/Baseline Assessment|基线测评]]
- [[Assessments/Method Evaluation|CFOP / Roux / ZZ 方法评估]]
- [[Templates/Training Session|训练记录模板]]
- [[Templates/Weekly Review|周复盘模板]]

## 训练 Dashboard

> [!info]
> 下列视图会自动读取训练日志和计划的 properties。新增日志后无需手工维护表格。

### 训练记录

![[Cube Training Dashboard.base#训练记录]]

### 训练计划

![[Cube Training Dashboard.base#训练计划]]

### 测评

![[Cube Training Dashboard.base#测评]]

## 核心指标

> [!info] Day 2 动态调整
> 已完成 5 次完整慢拧，正确指出角棱 pair 18 / 20。Day 3 正常推进，但增加 5 分钟 F2L 跟踪衔接练习。

> [!success] Day 3 完成
> F2L 跟踪 5 / 5，小鱼与反小鱼均能在 3 秒内识别，公式执行 9 / 10。Day 4 正常推进，只保留一次简短 OLL 复习。

> [!success] Day 4 完整达标
> Ua、Ub 正确辨认，专项公式 10 / 10，3 次完整慢拧的 PLL 识别全部正确。下一次回到主要瓶颈 F2L。

| 指标 | 当前值 | 阶段目标 |
| --- | ---: | ---: |
| Day 1 平均（8 次） | 58.04 s | 先稳定 Sub-50 |
| ao5 | 56.49 s | 先稳定 Sub-50 |
| best single | 39.82 s | 仅作潜力参考 |
| ao100 | 待测 | < 30.00 s |
| 成功率（< 30 s） | 待测 | >= 80% |
| DNF / +2 比例 | 待测 | < 3% |
| Cross | 8.26 s | <= 4.0 s |
| F2L | 28.86 s | <= 17.0 s |
| OLL | 8.67 s | <= 4.0 s |
| PLL | 12.23 s | <= 3.0 s |
| 转换与停顿 | 待测 | <= 2.0 s |

> [!note]
> 分段数字是诊断参考，不要求每次严格相加等于 30 秒。完成基线后，应按个人短板调整训练权重。
