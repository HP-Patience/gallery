# N-Gallery 使用说明

> 基于 Next.js 的现代化相册应用

---

## 目录

- [一、项目概述](#一项目概述)
- [二、功能特点](#二功能特点)
- [三、技术栈](#三技术栈)
- [四、安装和运行](#四安装和运行)
- [五、使用方法](#五使用方法)
- [六、页面功能介绍](#六页面功能介绍)
- [七、图片查看器功能](#七图片查看器功能)
- [八、API 接口说明](#八api-接口说明)
- [九、项目结构详解](#九项目结构详解)
- [十、构建和部署](#十构建和部署)
- [十一、自定义配置](#十一自定义配置)
- [十二、常见问题解答](#十二常见问题解答)
- [十三、总结](#十三总结)

---

## 一、项目概述

N-Gallery 是一个基于 **Next.js 14** 构建的现代化相册应用，采用**极简风格设计**，具有**瀑布流布局**展示图片的功能。该应用专为个人照片管理和展示而设计，支持自动识别相册文件夹、响应式设计适配各种设备，以及暗色/亮色主题切换等功能。

应用的核心理念是 **"我们所经历的每个平凡日常，都是连续发生的奇迹"**，旨在为用户提供一个简洁、优雅的照片展示平台，记录生活中的每一个精彩瞬间。

**在线预览：** https://img.2am.top

---

## 二、功能特点

- 🎨 **极简风格设计：** 界面简洁优雅，专注于图片内容本身
- 🖼️ **瀑布流布局：** 采用 Masonry 瀑布流布局展示图片，视觉效果更佳
- 📱 **响应式设计：** 完美适配桌面端、平板和移动设备
- 📁 **自动相册识别：** 自动扫描 `public/albums` 目录下的文件夹作为相册
- 🎲 **随机排列：** 支持图片随机排序展示，增加浏览趣味性
- 🌓 **主题切换：** 支持暗色/亮色主题切换，跟随系统或手动设置
- 🔍 **图片查看器：** 全屏查看图片，支持键盘导航（左右箭头切换，ESC关闭）
- ⚡ **加载性能提示：** 首页显示图片加载时间和数量信息

---

## 三、技术栈

| 技术类别 | 具体技术 |
|---------|---------|
| 前端框架 | Next.js 14 + React 18 |
| 编程语言 | TypeScript |
| 样式方案 | Tailwind CSS 3.3 |
| 瀑布流组件 | react-masonry-css |
| 图标库 | Lucide React |
| 主题切换 | next-themes |
| 部署平台 | Vercel / EdgeOne CDN |

---

## 四、安装和运行

### 4.1 环境要求

- Node.js 16.x 或更高版本
- npm 或 yarn 包管理器
- Git（用于克隆仓库）

### 4.2 安装步骤

1. **克隆仓库到本地**

```bash
git clone https://github.com/forever218/N-Gallery.git
```

2. **进入项目目录并安装依赖**

```bash
cd gallery-app && npm install
```

3. **启动开发服务器**

```bash
npm run dev
```

打开浏览器访问 http://localhost:3000 即可查看应用。

### 4.3 可用脚本命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（默认端口 3000） |
| `npm run build` | 构建生产版本（包含 CDN 兼容性处理） |
| `npm start` | 启动生产服务器 |
| `npm run lint` | 运行代码检查 |

---

## 五、使用方法

### 5.1 添加相册和图片

N-Gallery 采用**文件系统驱动**的相册管理方式，操作非常简单：

1. 在 `public/albums` 目录下创建新的文件夹，**文件夹名称即为相册名称**
2. 将图片文件放入对应的相册文件夹中
3. 应用会**自动识别新相册**并显示在相册列表中，无需重启服务器

### 5.2 支持的图片格式

| 格式 | 扩展名 | 说明 |
|------|--------|------|
| JPEG | .jpg, .jpeg | 最常用的图片格式 |
| PNG | .png | 支持透明背景 |
| GIF | .gif | 支持动画 |
| WebP | .webp | 现代高效格式 |

### 5.3 目录结构示例

```
public/albums/
├── 旅行照片/
│   ├── 东京之旅.jpg
│   ├── 富士山.png
│   └── 街景.webp
├── 生活记录/
│   ├── 美食.jpg
│   └── 宠物.gif
└── 未归档/
    ├── screenshot1.jpg
    └── screenshot2.png
```

---

## 六、页面功能介绍

### 6.1 首页 (/)

首页以**瀑布流布局**展示所有相册中的图片（随机排序），是应用的主要入口。

**主要特性：**
- 显示所有相册的混合图片流
- 图片按随机顺序排列
- 页面顶部显示励志语录："我们所经历的每个平凡日常，都是连续发生的奇迹"
- 底部展示加载性能信息（图片数量和加载时间）
- 支持点击图片查看大图

### 6.2 相册列表页 (/albums)

以**网格形式**展示所有相册，每个相册卡片显示封面图、相册名称和图片数量。

**主要特性：**
- 网格布局展示所有相册（响应式：1-4列）
- 显示相册封面图（第一张图片）
- 显示相册名称和图片数量
- 悬停效果：图片缩放和阴影增强
- 点击可进入该相册的详情页

### 6.3 单个相册页 (/album/[id])

展示特定相册中的所有图片，同样采用瀑布流布局。

**主要特性：**
- 显示当前相册名称和图片总数
- 瀑布流布局展示该相册的所有图片
- 返回按钮可快速回到相册列表
- 支持图片随机排序

### 6.4 关于页 (/about)

个人信息展示页面，包含：

- 👤 头像和个人基本信息（姓名、所在地、简介）
- 📸 关于这个相册的文字介绍
- 🛠️ 技术栈展示（前端框架、样式方案、部署平台、博客框架）
- 📬 联系方式链接（GitHub、Email、博客）

---

## 七、图片查看器功能

点击任意图片后会弹出全屏图片查看器，提供沉浸式的图片浏览体验。

### 7.1 操作方式

| 操作 | 说明 |
|------|------|
| 左箭头 / ← 键 | 查看上一张图片 |
| 右箭头 / → 键 | 查看下一张图片 |
| ESC 键 / × 按钮 | 关闭查看器 |
| 点击背景区域 | 关闭查看器 |

### 7.2 界面元素

- 半透明黑色背景（90% 不透明度 + 模糊效果）
- 居中显示的图片（最大尺寸为视口的 90%）
- 右上角关闭按钮
- 左右两侧导航箭头
- 底部显示当前图片位置（如：3 / 15）

---

## 八、API 接口说明

应用提供以下 API 接口用于获取相册和图片数据：

### 8.1 获取所有相册列表

**接口地址：** `GET /api/albums`

**返回值示例：**
```json
{
  "albums": [
    {
      "name": "旅行照片",
      "imageCount": 10,
      "coverImage": "/albums/旅行照片/xxx.jpg"
    }
  ]
}
```

### 8.2 获取所有图片（随机排序）

**接口地址：** `GET /api/images`

**返回值示例：**
```json
{
  "images": [
    "/albums/旅行照片/1.jpg",
    "/albums/生活记录/2.png"
  ]
}
```

### 8.3 获取特定相册的图片

**接口地址：** `GET /api/album/[id]`

**参数说明：**
- `id`: 相册名称（URL 编码）

**返回值示例：**
```json
{
  "albumName": "旅行照片",
  "images": [
    "/albums/旅行照片/1.jpg",
    "/albums/旅行照片/2.png"
  ]
}
```

---

## 九、项目结构详解

```
gallery-app/
├── components/                    # React 组件
│   ├── Layout.tsx                 # 主布局组件（含导航栏、主题切换）
│   ├── MasonryGrid.tsx            # 瀑布流网格组件
│   └── ImageViewer.tsx            # 图片查看器组件（全屏预览）
├── pages/                         # Next.js 页面
│   ├── api/                       # API 路由
│   │   ├── albums.ts              # 获取所有相册接口
│   │   ├── images.ts              # 获取所有图片接口
│   │   └── album/[id].ts          # 获取特定相册图片接口
│   ├── _app.tsx                   # 应用入口（ThemeProvider 配置）
│   ├── _document.tsx              # HTML 文档结构配置
│   ├── index.tsx                  # 首页（所有图片瀑布流）
│   ├── albums.tsx                 # 相册列表页
│   ├── album/[id].tsx             # 单个相册详情页
│   └── about.tsx                  # 关于页面
├── public/                        # 静态资源
│   └── albums/                    # 相册文件夹（存放图片）
│       ├── 旅行照片/              # 示例相册
│       ├── 生活记录/              # 示例相册
│       └── 未归档/                # 默认相册
├── styles/                        # 样式文件
│   └── globals.css                # 全局样式（Tailwind 配置）
├── fix.js                         # 构建后处理脚本（CDN 兼容性）
├── next.config.js                 # Next.js 配置文件
├── tailwind.config.js             # Tailwind CSS 配置
├── package.json                   # 项目依赖和脚本
├── tsconfig.json                  # TypeScript 配置
└── README.md                      # 项目说明文件
```

### 核心组件说明

#### Layout.tsx - 主布局组件
- 包含顶部导航栏
- 实现暗色/亮色主题切换功能
- 显示站点标题和导航链接
- 首页显示图片加载性能信息

#### MasonryGrid.tsx - 瀑布流网格组件
- 使用 `react-masonry-css` 库实现响应式瀑布流
- 支持不同高度的图片卡片
- 点击图片触发查看器
- 图片随机排序和高度随机化

#### ImageViewer.tsx - 图片查看器组件
- 全屏模态框展示图片
- 支持键盘快捷键操作
- 左右箭头导航
- 显示当前图片位置指示器

---

## 十、构建和部署

### 10.1 构建生产版本

执行构建命令会自动完成以下步骤：

1. 运行 Next.js 构建命令生成静态文件
2. 执行 `fix.js` 脚本处理 CDN 兼容性问题
3. 复制带方括号的文件名（URL 编码版本）供 EdgeOne CDN 使用

```bash
npm run build
```

### 10.2 fix.js 脚本说明

由于部分 CDN（如腾讯云 EdgeOne）对 URL 中的方括号字符处理存在问题，`fix.js` 脚本会在构建后自动处理 `.next` 目录中的文件：

- ✅ 递归扫描 `.next` 目录中的所有文件
- ✅ 查找文件名中包含 `[` 或 `]` 的文件
- ✅ 将 `[` 替换为 `%5B`，`]` 替换为 `%5D`（URL 编码）
- ✅ 保留原文件并创建副本，确保兼容性

### 10.3 部署到 Vercel（推荐）

**一键部署步骤：**

1. 将代码推送到 GitHub 仓库
2. 访问 [vercel.com](https://vercel.com) 并导入项目
3. Vercel 会自动检测 Next.js 并配置构建设置
4. 点击 **Deploy** 按钮完成部署

**Vercel 会自动：**
- 安装项目依赖
- 运行构建命令
- 提供全球 CDN 加速
- 自动 HTTPS 证书
- 自动部署（git push 时）

### 10.4 部署到其他平台

也可以部署到以下平台：
- **Netlify:** 支持 Next.js，提供类似 Vercel 的体验
- **自己的服务器:** 使用 `npm run build && npm start` 启动生产服务
- **Docker:** 可以容器化部署

---

## 十一、自定义配置

### 11.1 修改站点标题

编辑 [`components/Layout.tsx`](components/Layout.tsx) 文件，找到第 49 行左右：

```tsx
<Link href="/" className="text-xl font-bold text-black dark:text-white">
  Celyn 的相册  {/* ← 修改这里 */}
</Link>
```

将文本替换为你想要的标题即可。

### 11.2 修改首页标语

编辑 [`pages/index.tsx`](pages/index.tsx) 文件，找到第 37 行左右：

```tsx
<p className="text-2xl font-light dark:text-white" style={{ fontFamily: 'Ma Shan Zheng, cursive' }}>
  我们所经历的每个平凡日常，都是连续发生的奇迹  {/* ← 修改这里 */}
</p>
```

将文本替换为你喜欢的标语或座右铭。

### 11.3 修改关于页面信息

编辑 [`pages/about.tsx`](pages/about.tsx) 文件，可以修改：

- **个人基本信息**（姓名、所在地、简介）
- **头像图片 URL**（第 19 行）
- **关于相册的描述文字**
- **联系方式链接**（GitHub、Email、博客）
- **外部链接**（如"返回博客"按钮的目标地址）

示例：
```tsx
// 修改头像
<img src="https://your-avatar-url.com/avatar.jpg" alt="Your Name" />

// 修改联系方式
<a href="https://github.com/your-username">GitHub: @your-username</a>
<a href="mailto:your@email.com">Email: your@email.com</a>
```

### 11.4 修改颜色主题

项目使用 **Tailwind CSS** 的暗色模式类名，可以通过修改全局样式或组件中的类名来自定义颜色方案。

**主要使用的颜色变量：**
- `dark:bg-gray-900` - 暗色模式背景
- `dark:text-white` - 暗色模式文字
- `dark:border-gray-800` - 暗色模式边框
- `dark:bg-gray-800` - 暗色模式卡片背景

如需扩展更多颜色，可在 [`tailwind.config.js`](tailwind.config.js) 中添加自定义颜色配置。

### 11.5 修改导航链接

在 [`components/Layout.tsx`](components/Layout.tsx) 中可以修改顶部导航栏的链接：

```tsx
// 修改"返回博客"链接
<a href="https://your-blog-url.com" target="_blank" rel="noopener noreferrer">
  ← 返回博客
</a>

// 添加或删除导航项
<Link href="/your-page">你的页面</Link>
```

---

## 十二、常见问题解答

### Q1: 添加图片后页面没有更新？

**A:** 如果在开发模式下，Next.js 应该会自动热重载。如果没有变化：
- 尝试刷新浏览器（`Ctrl+F5` 或 `Cmd+Shift+R` 强制刷新）
- 清除浏览器缓存
- 重启开发服务器（`Ctrl+C` 停止后重新运行 `npm run dev`）

在生产环境中，需要重新构建并部署。

---

### Q2: 支持哪些图片大小和分辨率？

**A:** 应用不限制图片大小，但建议：
- 单张图片不超过 **2MB** 以获得更好的加载性能
- 推荐分辨率：**1920x1080** 或更小
- 瀑布流布局会自动适应不同尺寸的图片
- 可以使用图片压缩工具（如 TinyPNG）优化图片大小

---

### Q3: 如何备份相册数据？

**A:** 所有图片都存储在 `public/albums` 目录中，备份非常简单：

**方法 1：直接备份文件夹**
```bash
# 复制整个 albums 文件夹到安全位置
cp -r public/albums /path/to/backup/location
```

**方法 2：使用 Git 版本控制**
```bash
git add public/albums/
git commit -m "Backup albums"
git push
```

**方法 3：同步到云存储**
- 可以使用 Google Drive、Dropbox、OneDrive 等云存储服务
- 设置 `public/albums` 文件夹的自动同步

---

### Q4: 可以使用中文命名相册吗？

**A:** **完全支持！** 应用会对中文相册名称进行 URL 编码处理，确保：
- 正常访问和显示
- 无乱码问题
- 兼容各种浏览器和服务器

示例：
- 相册名称：`我的旅行照片`
- URL 编码：`%E6%88%91%E7%9A%84%E6%97%85%E8%A1%8C%E7%85%A7%E7%89%87`
- 访问地址：`/album/%E6%88%91%E7%9A%84%E6%97%85%E8%A1%8C%E7%85%A7%E7%89%87`

---

### Q5: 如何添加更多页面或功能？

**A:** 在 Next.js 中添加新页面非常简单：

**添加页面：**
1. 在 `pages/` 目录下创建新的 `.tsx` 文件
2. 文件路径即为路由路径
3. 参考 [`pages/about.tsx`](pages/about.tsx) 的结构编写代码

示例：
```tsx
// pages/gallery.tsx → 访问路径: /gallery
import Layout from '../components/Layout';

export default function Gallery() {
  return (
    <Layout>
      <h1>我的画廊</h1>
      {/* 你的内容 */}
    </Layout>
  );
}
```

**添加 API 路由：**
1. 在 `pages/api/` 目录下创建 `.ts` 文件
2. 导出默认函数处理请求

示例：
```typescript
// pages/api/stats.ts → API 地址: /api/stats
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API 工作正常' });
}
```

---

### Q6: 如何修改瀑布流的列数？

**A:** 编辑 [`components/MasonryGrid.tsx`](components/MasonryGrid.tsx)，找到第 14-19 行：

```typescript
const breakpointColumnsObj = {
  default: 4,     // 大屏幕（≥1280px）：4列
  1280: 3,        // 中大屏幕：3列
  1024: 2,        // 平板：2列
  768: 1,         // 手机：1列
};
```

根据需要修改这些数值即可调整不同屏幕尺寸下的列数。

---

### Q7: 如何禁用图片随机排序？

**A:** 如果希望图片按固定顺序排列（如文件名排序），需要修改 API 接口：

**修改 `/api/images` 接口**（[`pages/api/images.ts`](pages/api/images.ts)）：

找到第 37 行，删除或注释掉随机排序代码：
```typescript
// 删除这行
const shuffledImages = allImages.sort(() => Math.random() - 0.5);

// 改为直接返回
res.status(200).json({ images: allImages });
```

同样地，修改 `/api/album/[id]` 接口（[`pages/api/album/[id].ts`](pages/api/album/[id].ts)）的第 31 行。

**注意：** 同时还需要修改 [`components/MasonryGrid.tsx`](components/MasonryGrid.tsx) 第 22-32 行的 `shuffledImages` 逻辑。

---

## 十三、总结

N-Gallery 是一个**轻量级、易用**的个人相册应用，通过简单的文件系统操作即可管理大量照片。其现代化的 UI 设计、流畅的用户体验以及完善的响应式支持，使其成为个人照片展示的理想选择。

### 核心优势

✅ **零配置使用** - 只需将图片放入文件夹即可  
✅ **自动响应式** - 无需担心移动端适配  
✅ **性能优秀** - Next.js SSR + 静态生成  
✅ **易于定制** - 代码清晰，易于理解和修改  
✅ **免费部署** - Vercel 免费额度足够个人使用  

### 适用场景

📸 个人生活照片记录  
🌍 旅行照片分享  
🎨 作品集展示  
📚 学习笔记配图  
💼 项目截图存档  

无论是记录生活点滴还是分享旅行见闻，N-Gallery 都能为您提供优雅的展示方式。

---

## 许可证

[MIT License](https://opensource.org/licenses/MIT)

---

## 相关链接

- **GitHub 仓库：** https://github.com/forever218/N-Gallery
- **在线演示：** https://img.2am.top
- **作者博客：** https://hp-patience.github.io
- **问题反馈：** [GitHub Issues](https://github.com/forever218/N-Gallery/issues)

---

*© 2024 Celyn. Made with ❤️ and Next.js*

*"我们所经历的每个平凡日常，都是连续发生的奇迹"*
