import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 설정
const postsDir = path.join(path.dirname(__dirname), 'posts');
const publicImagesDir = path.join(path.dirname(__dirname), 'public');

// 이미지 확장자
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];

// 디렉토리가 없으면 생성
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// 재귀적으로 디렉토리 탐색하며 이미지 파일 복사
function copyImagesFromDir(dir, baseDir = postsDir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 디렉토리면 재귀 호출
      copyImagesFromDir(filePath, baseDir);
    } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
      // 이미지 파일이면 복사
      // 상대 경로 계산 (posts 디렉토리 기준)
      const relativePath = path.relative(baseDir, dir);
      const targetDir = path.join(publicImagesDir, relativePath);

      // 대상 디렉토리가 없으면 생성
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // 파일 복사
      const targetPath = path.join(targetDir, file);
      fs.copyFileSync(filePath, targetPath);
      console.log(`Copied: ${filePath} -> ${targetPath}`);
    }
  });
}

// 실행
console.log('Copying images from posts directory to public/images/posts...');
copyImagesFromDir(postsDir);
console.log('Done!');
