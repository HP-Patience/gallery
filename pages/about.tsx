import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        {/* 标题 */}
        <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">
          关于 Celyn
        </h1>

        {/* 个人介绍卡片 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* 头像 */}
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="https://raw.githubusercontent.com/HP-Patience/HP-Patience.github.io/main/avatar_img/me.jpg"
                alt="Celyn"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 基本信息 */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-2 dark:text-white">Celyn</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                📍 上海, 中国
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                费曼学习法践行者<br />
                反思近期所学并反馈输出<br />
                将所学知识内化
              </p>
            </div>
          </div>
        </div>

        {/* 关于这个相册 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">📸 关于这个相册</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            这里记录着我生活中的点点滴滴——从日常随拍到旅行见闻，
            从学习笔记到灵感瞬间。每一张照片都是一个故事，
            每一个瞬间都值得被珍藏。
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            我们所经历的每个平凡日常，都是连续发生的奇迹。
          </p>
        </div>

        {/* 技术栈 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">🛠️ 技术栈</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 dark:text-white">前端框架</h3>
              <p className="text-gray-600 dark:text-gray-400">Next.js 14 + React 18</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 dark:text-white">样式方案</h3>
              <p className="text-gray-600 dark:text-gray-400">Tailwind CSS</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 dark:text-white">部署平台</h3>
              <p className="text-gray-600 dark:text-gray-400">Vercel</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 dark:text-white">博客框架</h3>
              <p className="text-gray-600 dark:text-gray-400">Hexo + Icarus</p>
            </div>
          </div>
        </div>

        {/* 联系方式 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">📬 联系方式</h2>
          <div className="space-y-3">
            <a
              href="https://github.com/HP-Patience"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-xl">💻</span>
              <span>GitHub: @HP-Patience</span>
            </a>
            <a
              href="mailto:1249140039@qq.com"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-xl">📧</span>
              <span>Email: 1249140039@qq.com</span>
            </a>
            <a
              href="https://hp-patience.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-xl">🌐</span>
              <span>博客: hp-patience.github.io</span>
            </a>
          </div>
        </div>

        {/* 页脚信息 */}
        <div className="mt-12 text-center text-gray-500 dark:text-gray-500 text-sm">
          <p>© 2024 Celyn. Made with ❤️ and Next.js</p>
        </div>
      </div>
    </Layout>
  );
}
