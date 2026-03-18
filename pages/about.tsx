import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-2xl">
        <h1 className="mb-6 text-3xl font-bold text-black dark:text-white">
          关于
        </h1>

        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            欢迎来到极简风格相册应用。这是一个基于 Next.js 构建的现代化图片展示平台，
            专注于提供简洁、优雅的浏览体验。
          </p>

          <h2 className="mt-6 text-xl font-semibold text-black dark:text-white">
            功能特点
          </h2>

          <ul className="list-inside list-disc space-y-2">
            <li>瀑布流布局展示图片</li>
            <li>支持夜间模式</li>
            <li>自动识别相册文件夹</li>
            <li>图片全屏查看</li>
            <li>响应式设计，适配各种设备</li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold text-black dark:text-white">
            如何使用
          </h2>

          <p>
            在 public/albums 目录下创建新的文件夹作为相册，将图片放入文件夹中即可。
            应用会自动识别新相册并显示在相册列表中。
          </p>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            版本 1.0.0
          </p>
        </div>
      </div>
    </Layout>
  );
}
