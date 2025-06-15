import fs from 'fs';
import path from 'path';

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

// Files to copy
const filesToCopy = [
  { src: 'vercel.json', dest: 'dist/vercel.json' },
  { src: 'public/_redirects', dest: 'dist/_redirects' },
  { src: 'public/404.html', dest: 'dist/404.html' },
  { src: 'static.json', dest: 'dist/static.json' }
];

// Copy each file
filesToCopy.forEach(file => {
  try {
    if (fs.existsSync(file.src)) {
      fs.copyFileSync(file.src, file.dest);
      console.log(`✅ Copied ${file.src} to ${file.dest}`);
    } else {
      console.warn(`⚠️ Source file ${file.src} does not exist, skipping`);
    }
  } catch (error) {
    console.error(`❌ Error copying ${file.src}: ${error.message}`);
  }
});

console.log('✨ SPA routing files copied successfully'); 