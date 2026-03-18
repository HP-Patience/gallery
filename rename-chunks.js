const fs = require('fs');
const path = require('path');

// 递归遍历文件夹
function renameFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      renameFiles(filePath);
    } else if (file.includes('[') || file.includes(']')) {
      // 将 [ 替换为 %5B，将 ] 替换为 %5D
      const newName = file.replace(/\[/g, '%5B').replace(/\]/g, '%5D');
      const newPath = path.join(dir, newName);
      fs.renameSync(filePath, newPath);
      console.log(`Renamed: ${file} -> ${newName}`);
    }
  });
}

// Next.js 默认构建产物在 .next 目录下
const buildDir = path.join(__dirname, '.next');
if (fs.existsSync(buildDir)) {
  renameFiles(buildDir);
}