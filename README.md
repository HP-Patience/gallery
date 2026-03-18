# 极简风格相册应用

这是一个基于 Next.js 构建的现代化相册应用，具有极简风格设计和瀑布流布局。

## 功能特点

- 🎨 极简风格设计，白底黑字（支持夜间模式）
- 📱 响应式设计，适配各种设备
- 🖼️ 瀑布流布局展示图片
- 🌓 支持夜间模式切换
- 📁 自动识别相册文件夹
- 🔍 图片全屏查看，支持键盘导航
- 🎲 随机排列图片

## 技术栈

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- next-themes（主题切换）
- react-masonry-css（瀑布流布局）
- lucide-react（图标）

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 使用方法

### 添加相册和图片

1. 在 `public/albums` 目录下创建新的文件夹作为相册
2. 将图片放入文件夹中
3. 应用会自动识别新相册并显示在相册列表中

### 支持的图片格式

- JPEG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif)
- WebP (.webp)

## 项目结构

```
gallery-app/
├── public/
│   └── albums/           # 相册文件夹
│       ├── album1/       # 相册1
│       │   ├── image1.jpg
│       │   └── image2.jpg
│       └── album2/       # 相册2
│           └── image1.png
├── components/           # React组件
│   ├── Layout.tsx        # 布局组件
│   ├── MasonryGrid.tsx   # 瀑布流网格组件
│   └── ImageViewer.tsx   # 图片查看器组件
├── pages/                # Next.js页面
│   ├── api/              # API路由
│   │   ├── albums.ts     # 获取所有相册
│   │   ├── images.ts     # 获取所有图片
│   │   └── album/[id].ts # 获取特定相册的图片
│   ├── _app.tsx          # 应用入口
│   ├── _document.tsx     # HTML文档结构
│   ├── index.tsx         # 主页
│   ├── albums.tsx        # 相册列表页
│   ├── album/[id].tsx    # 单个相册页
│   └── about.tsx         # 关于页面
├── styles/               # 样式文件
│   └── globals.css       # 全局样式
└── package.json          # 项目依赖
```

## 构建和部署

1. 构建生产版本：
```bash
npm run build
```

2. 启动生产服务器：
```bash
npm start
```

## 许可证

MIT
