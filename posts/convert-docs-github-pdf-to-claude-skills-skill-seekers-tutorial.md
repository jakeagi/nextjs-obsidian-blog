---
title: '把网站、文档、GitHub、PDF 一键变成 Claude Skills！Skill Seekers 超详细教程'
date: '2026-02-27'
---

上一次我分享了[Agent Skills 教程](how-to-use-claude-skills-guide)——如何在 Claude Code 中使用 Skill，以及如何借助 Anthropic 官方提供的 skill-creator 创建自己的 Skill。不过在实际使用中，skill-creator 效果有时并不理想。

这次，我想分享一个更强大的工具 —— **Skill Seekers**。它不仅功能更丰富，而且效果更好。

---

## 什么是 Skill Seekers？

Skill Seekers 是一个开源工具，可以将文档网站、GitHub 仓库和 PDF 文件自动转换为 Claude 可用的 Skill，大幅提升 AI 对特定资料的理解能力。

---

## 核心功能亮点

### 🌐 文档网站抓取

自动抓取完整文档结构，而不是简单复制网页内容。

### 📄 PDF 支持

支持将 PDF 技术文档直接转换为 Skill。

### 🐙 GitHub 仓库分析

分析代码结构与 README，生成结构化知识。

### 🔄 多源统一抓取

可以整合网站 + 仓库 + PDF，多来源融合。

### 🤖 多 LLM 平台支持

不仅适配 Claude，架构上也支持多模型平台扩展。

---

## 安装 Skill Seekers

项目地址：
👉 [https://github.com/yusufkaraaslan/Skill_Seekers](https://github.com/yusufkaraaslan/Skill_Seekers)

官方文档提供了多种安装方式，我这里选择通过脚本方式安装。

### 1️⃣ 克隆项目

```bash
git clone https://github.com/yusufkaraaslan/Skill_Seekers.git
cd Skill_Seekers
./setup_mcp.sh
```

执行后会看到提示：

```
⚠ Warning: Python 3.10+ recommended for best compatibility
```

它推荐使用 Python 3.10 以上版本。

---

## Python 版本问题解决方案

我的本地默认 Python 版本低于 3.10，但机器上安装了多个版本，其中包含 Python 3.11。

因此我手动创建一个 3.11 的虚拟环境：

```bash
python3.11 -m venv venv311
source venv311/bin/activate
./setup_mcp.sh
```

看到 `Happy skill creating! 🚀`，说明安装成功。

⚠️ 注意：终端前面会出现 `(venv311)`，表示当前已经进入 Python 3.11 虚拟环境。

---

## 在 Claude Code 中创建 Skill

安装完成后，在 Skill_Seekers 项目目录下（确保已经进入 venv311 环境）执行：

```bash
claude
```

然后用自然语言告诉 Claude：

```
Generate a Automa skill from https://docs.extension.automa.site
```

这里我们以 Automa 官方文档为例进行演示。

如果看到提示：

```
⏺ ✅ Automa Skill Successfully Generated!
```

说明 Skill 创建成功。

---

## 在 Claude Code 中安装刚创建的 Skill

### 1️⃣ 创建 Skills 目录

```bash
mkdir -p ~/.claude/skills/
```

### 2️⃣ 解压生成的 Skill 文件

```bash
unzip output/automa.zip -d ~/.claude/skills/
```

（确保你在 Skill_Seekers 根目录下执行）

---

## 查看已安装的 Skills

现在重启 Claude Code，然后输入：

```bash
/skills
```

就可以看到当前加载的所有 Skills，Automa 也会出现在列表中。

---

## 总结：为什么推荐 Skill Seekers？

相比官方 skill-creator：

* ✅ 抓取更完整
* ✅ 支持 PDF
* ✅ 支持 GitHub
* ✅ 支持多源整合
* ✅ 自动冲突检测

如果你经常需要让 Claude 深度理解某个工具、框架或项目文档，Skill Seekers 会是一个非常高效的解决方案。