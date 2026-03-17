---
title: '零基础部署 OpenClaw：本地模型 + MiniMax + Telegram 完整指南'
date: '2026-03-17'
---

## 一、安装 OpenClaw

首先安装 OpenClaw。官方提供了一键安装脚本，在终端中运行以下命令即可。

**macOS / Linux**

```bash
curl -fsSL https://openclaw.bot/install.sh | bash
```

---

# 二、使用 Ollama 运行本地模型

OpenClaw 支持通过 **Ollama** 调用本地大模型。

## 1 安装 Ollama

如果你的电脑还没有安装 Ollama，可以运行：

**macOS / Linux**

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

---

## 2 下载并运行 Qwen3.5 模型

在小模型中，Qwen3.5的 Agent 能力非常不错。

运行命令：

```bash
ollama run qwen3.5:4b
```

如果你的配置更高，可以选择更大参数的模型，例如：

- 14B
    
- 32B
    

模型越大，效果通常越好。

模型下载完成后，启动 OpenClaw：

```bash
ollama launch openclaw
```

然后选择模型

```
qwen3.5:4b
```

完成后，就可以在终端直接与 OpenClaw 对话。

---

## 3 使用 Web UI

除了终端，也可以使用 Web 页面进行交互。

打开浏览器访问：

```
http://localhost:18789/#token=ollama
```

即可通过浏览器与 OpenClaw 对话。

---

# 三、在 OpenClaw 中接入在线模型（MiniMax）

本地模型虽然省钱，但也有局限：

- 推理能力有限
    
- 速度取决于本地硬件
    

所以你也可以接入 **在线大模型**。

比如MiniMax 的 coding-plan，订阅制比 API 调用更便宜。

---

## 1 进入配置

在终端运行：

```bash
openclaw configure
```

按照提示选择：

```
Where will the Gateway run? → 选择 Local (this machine)
Select sections to configure → 选择 Model
Model/auth provider → 选择 MiniMax
MiniMax auth method → 选择MiniMax OAuth
MiniMax endpoint → 选择 CN
```

---

## 2 登录授权

完成选择后，系统会自动打开浏览器登录页。

登录 **MiniMax 账号并授权**。

---

## 3 确认模型

OAuth 登录完成后，进入模型选择。

系统会默认勾选：

minimax-portal/MiniMax-M2.1 
minimax-portal/MiniMax-M2.5，
并将 **MiniMax-M2.5** 设为默认模型，

直接按 **回车确认**即可。

---

## 4 测试模型

运行：

```bash
openclaw tui
```

如果可以正常对话，说明配置成功。

---

# 四、接入 Telegram

OpenClaw 支持接入多个聊天渠道，例如：

* Telegram
* Discord
* 飞书

这样你就可以在熟悉的聊天工具中直接和 AI 对话。

这里以 **Telegram** 为例。

---

# 五、创建 Telegram 机器人

首先需要创建一个 Bot。

1. 打开 Telegram
2. 搜索 **@BotFather**
3. 发送命令：

```
/newbot
```

然后按照提示：

1. 给机器人起名字
2. 设置 username（必须以 `bot` 结尾）

创建完成后，BotFather 会返回一段信息，其中包含：

```
Bot Token
```

**把这个 Token 记录下来，后面会用到。**

---

# 六、在 OpenClaw 中配置 Telegram

在终端运行：

```bash
openclaw configure --section channels
```

然后按步骤选择：

```
Where will the Gateway run? → Local (this machine)
Channels → Configure/link

Select a channel → Telegram (Bot API)

Enter Telegram bot token → 粘贴刚才获得的 Token 回车

Select a channel → Finished

Configure DM access policies now? (default: pairing)  → Yes

Telegram DM policy → Pairing (recommended)
```

如果看到：

```
Configure complete.
```

说明配置完成。

---

# 七、启动 OpenClaw Gateway

在终端中运行：

```bash
openclaw gateway
```

启动 OpenClaw 网关。

⚠️ 注意：

终端需要**走代理**，否则 Telegram 消息不会响应。

如果你已经配置好代理，可以直接跳到下一步。

---

# 八、macOS / Linux 终端开启代理

在 Linux 或 macOS 中做法基本一样，通过设置 **proxy 环境变量**实现代理。

如果使用 **bash**

```bash
vi ~/.bashrc
```

如果使用 **zsh**

```bash
vi ~/.zshrc
```

加入以下内容：

```bash
# proxy
export http_proxy=http://127.0.0.1:端口号
export https_proxy=http://127.0.0.1:端口号
export all_proxy=socks5://127.0.0.1:端口号
```

其中：

```
端口号 = 你的代理端口
```

保存后执行：

```bash
source ~/.bashrc
```

或

```bash
source ~/.zshrc
```

---

## 验证代理是否生效

运行：

```bash
curl ipinfo.io
```

如果代理生效：

* 显示的 IP 会变成代理出口 IP
* 不再是本地网络 IP

---

# 九、Telegram 配对

最后回到 Telegram，与刚创建的机器人对话。

发送：

```
/start
```

机器人会回复一个 **配对码**。

然后在终端运行：

```bash
openclaw pairing approve telegram 配对码
```

配对成功后，就可以在 Telegram 中直接和 OpenClaw 对话了。

---

# 写在最后

至此，你已经完成：

* OpenClaw 安装
* 本地模型部署（Ollama + Qwen）
* 在线模型接入（MiniMax）
* Telegram 机器人接入

现在，你就拥有了一个**可以在 Telegram 上随时对话的 AI Agent**。

后面我也会分享更多OpenClaw玩法。