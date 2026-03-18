import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const albumsDir = path.join(process.cwd(), 'public', 'albums');

    // 确保相册目录存在
    if (!fs.existsSync(albumsDir)) {
      fs.mkdirSync(albumsDir, { recursive: true });
      return res.status(200).json({ images: [] });
    }

    // 获取所有相册（子目录）
    const albums = fs.readdirSync(albumsDir).filter(item => {
      const itemPath = path.join(albumsDir, item);
      return fs.statSync(itemPath).isDirectory();
    });

    // 收集所有图片
    const allImages: string[] = [];

    albums.forEach(albumName => {
      const albumPath = path.join(albumsDir, albumName);
      const images = fs.readdirSync(albumPath)
        .filter(file => {
          const ext = path.extname(file).toLowerCase();
          return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
        })
        .map(file => `/albums/${albumName}/${file}`);

      allImages.push(...images);
    });

    // 随机排序图片
    const shuffledImages = allImages.sort(() => Math.random() - 0.5);

    res.status(200).json({ images: shuffledImages });
  } catch (error) {
    console.error('获取图片列表失败:', error);
    res.status(500).json({ error: '获取图片列表失败' });
  }
}
