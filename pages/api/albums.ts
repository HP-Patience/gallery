import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const albumsDir = path.join(process.cwd(), 'public', 'albums');

    // 确保相册目录存在
    if (!fs.existsSync(albumsDir)) {
      fs.mkdirSync(albumsDir, { recursive: true });
      return res.status(200).json({ albums: [] });
    }

    // 获取所有相册（子目录）
    const albums = fs.readdirSync(albumsDir).filter(item => {
      const itemPath = path.join(albumsDir, item);
      return fs.statSync(itemPath).isDirectory();
    });

    // 获取每个相册的信息
    const albumData = albums.map(albumName => {
      const albumPath = path.join(albumsDir, albumName);
      const images = fs.readdirSync(albumPath)
        .filter(file => {
          const ext = path.extname(file).toLowerCase();
          return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
        })
        .map(file => `/albums/${albumName}/${file}`);

      // 获取相册封面图（第一张图片）
      const coverImage = images.length > 0 ? images[0] : null;

      return {
        name: albumName,
        imageCount: images.length,
        coverImage,
      };
    });

    res.status(200).json({ albums: albumData });
  } catch (error) {
    console.error('获取相册列表失败:', error);
    res.status(500).json({ error: '获取相册列表失败' });
  }
}
