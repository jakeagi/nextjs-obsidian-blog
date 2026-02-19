---
title: 'Claude Skills 保姆级教程：从安装到自制，让你的 AI 越用越聪明'
date: '2026-02-18'
---

## 什么是 Skills？

2025 年 10 月，Anthropic 正式推出了 Claude Skills。
两个月后，“Agent Skills”被进一步抽象为开放标准，为新一代 AI Agent 构建一个更加规范化、可扩展的开发生态。

可以把 Skills 理解为通用 Agent 的“扩展包”。
当 Agent 加载不同的 Skills 后，就像安装了不同的专业模块——不仅掌握相关领域知识，还能熟练调用对应工具，并按照既定流程稳定完成某一类任务。

换句话说，Skills 不是简单的工具集合，而是一整套围绕“如何把事情做好”的能力封装。

---

## Skills 和 MCP 的区别

两者关注的重点并不相同。

**MCP（Model Context Protocol）** 是一种开放协议标准，核心在于规范 AI 如何以统一方式连接和调用外部资源，比如工具、数据库或服务接口。它解决的是“如何接入”的问题，但并不涉及具体任务的处理逻辑。

**Skills** 则更偏向“如何完成任务”。
它将执行步骤、工具使用方式以及必要的知识材料整合在一起，形成一个结构化的能力包。加载后，Agent 不仅能调用工具，还知道在什么情境下调用、按照什么流程推进，从而实现可复用、可复制的稳定输出。

---

## 在 Claude Code 中使用 Skills

以 **Brand-guidelines** 为例，Brand-guidelines Skill 内包含品牌设计规范、Logo 资源等内容。当 Agent 进行网站或海报设计时，会自动参考该 Skill 中的设计资源，确保输出结果符合企业品牌规范，实现统一的视觉风格。

1. 创建Skills目录
```shell
mkdir -p ~/.claude/skills/
```
2.从[[https://github.com/anthropics/skills/tree/main/skills/brand-guidelines]]下载SKILL.md文件，放入刚创建好的Skills目录。完成后，可以通过两种方式测试：

### 1️⃣ 让 Claude 自动调用

提出与 Skill 描述相匹配的问题，Claude 会自动调用该 Skill 进行回答。

### 2️⃣ 直接指定调用

在Claude Code 中使用命令：

```shell
/brand-guidelines
```

---

### Skill 的存放位置

Skill 的存放路径决定了它的生效范围：

| 类型       | 路径                                       | 适用范围      |
| -------- | ---------------------------------------- | --------- |
| Personal | `~/.claude/skills/<skill-name>/SKILL.md` | 适用于你的所有项目 |
| Project  | `.claude/skills/<skill-name>/SKILL.md`   | 仅当前项目可用   |
| Plugin   | `<plugin>/skills/<skill-name>/SKILL.md`  | 插件启用时生效   |

根据使用场景选择合适的位置，即可灵活管理 Skills。

---

## 怎么找到好用的 Skills？

找规模比较大的第三方 Skills 市场：[[https://skillsmp.com/zh]]

---

## 如何制作一个 Skill？

要创建自己的 Skill，可以借助 Anthropic 官方提供的 **skill-creator** ——一个专门用来“生成 Skill 的 Skill”。

### 1. 安装 skill-creator

在 Claude Code 中使用命令：

```shell
/plugin
```

搜索'skill-creator'，安装完成后，skill-creator 就可以在当前环境中使用。

### 2. 使用 skill-creator 创建新 Skill

安装成功后，你可以直接调用 **skill-creator**，根据需求自动生成新的 Skill 模板。

例如在Claude Code中输入：

> 创建 skill，将产品需求文档转为开发任务拆解列表。

Claude Code 会自动调用 skill-creator，帮你生成完整的 Skill 结构

本质上，Skill 适合封装“可复用的方法论”。
当某件事你反复在做，并且有相对稳定的步骤和风格时，就值得把它做成一个 Skill。